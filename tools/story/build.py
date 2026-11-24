"""Story trainer for EngFast, step 2: clean.json + lexicon.tsv + events.tsv -> ../../story-data.js (same format as ThaiFast, see
ThaiFast/tools/story/build.py: lex = [[english, transcription]], ev = [{th: english phrase, rom, lit, why, sp}], p = [{ru, ru3}]).
Run: ~/.venv/bin/uv run --quiet --no-project --with eng-to-ipa --with nltk --with pymorphy3 --with pymorphy3-dicts-ru python -W ignore tools/story/build.py"""
import collections, json, os, re, sys
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
import pymorphy3
from translit import tr

WORD = re.compile(r"[A-Za-zА-Яа-яЁё]+(?:[-’'][A-Za-zА-Яа-яЁё]+)*")
morph = pymorphy3.MorphAnalyzer()
def keys(w):
    p = morph.parse(w.lower())[0]
    return [f'{p.normal_form}/{p.tag.POS}', p.normal_form]

LEX, LEXID = [], {}
def lex_id(en, hand=None):
    if (en, hand) not in LEXID:
        LEXID[en, hand] = len(LEX); LEX.append([en, tr(en, hand)])
    return LEXID[en, hand]

look = {}
for line in open(os.path.join(HERE, 'lexicon.tsv'), encoding='utf8'):
    if line.startswith('#') or not line.strip():
        continue
    f = (line.rstrip('\n').split('\t') + ['', '', ''])[:3]
    for l in [x.strip() for x in f[1].split(',') if x.strip()]:
        look.setdefault(l, (f[0].strip(), f[2].strip() or None))

clean = json.load(open(os.path.join(HERE, 'clean.json'), encoding='utf8'))
events = []
for line in open(os.path.join(HERE, 'events.tsv'), encoding='utf8'):
    if line.startswith('#') or not line.strip():
        continue
    events.append(dict(zip(['para', 'ru', 'th', 'lit', 'why'], line.rstrip('\n').split('\t'))))
WHY = {
    'GEN': 'В английском «чьё» ставят перед предметом и добавляют ’s: не «возраст корабля», а «корабля возраст» — the ship’s age.',
    'NOUNADJ': 'Английское существительное может быть определением: сначала «какой» (nanobot), потом главное слово (colony) — наоборот, чем в русском «колония наноботов».',
    'REL': 'Причастный оборот в английском стоит после существительного и становится придаточным: nanobots that have multiplied.',
    'AUX': 'В вопросе нужен вспомогательный глагол do, а порядок такой: вопросительное слово + do + кто + глагол: What do we know?',
    'INV': 'В вопросе глагол (is, will) выходит вперёд перед подлежащим: what is the problem, what will you do.',
}
EV = []

def spans(text, ins, evs):
    taken = []
    free = lambda a, b: all(b <= s or a >= e for s, e, _, _ in taken)
    for ev in evs:
        i = text.find(ev['ru'])
        if i < 0 or not free(i, i + len(ev['ru'])):
            print('  event span not found:', ev['ru']); continue
        EV.append({'th': ev['th'], 'rom': tr(ev['th']), 'lit': [ev['lit'], ''], 'why': [WHY[ev['why']], ''], 'sp': ev['ru']})
        taken.append((i, i + len(ev['ru']), 2, len(EV) - 1))
    pos = 0
    for surface, en, cyr in ins:
        i = text.find(surface, pos)
        if i < 0:
            print('  insert not found:', surface); continue
        pos = i + len(surface)
        if free(i, pos):
            taken.append((i, pos, 1, lex_id(en, cyr)))
    return sorted(taken)

stats = collections.Counter(); missing = collections.Counter()
SKIP = {'быть', 'иметь', 'стать', 'мочь', 'хотеть', 'уметь'}
def safe(w):
    """mode 3: only verbs are swapped alone (English nouns would need an article)"""
    p = morph.parse(w.lower())[0]
    return p.tag.POS in ('VERB', 'INFN') and p.normal_form not in SKIP

def segments(text, ins, evs, mode):
    out, pos = [], 0
    def plain(a, b):
        if b > a:
            if out and isinstance(out[-1], str): out[-1] += text[a:b]
            else: out.append(text[a:b])
    claimed = spans(text, ins, evs if mode == 'e' else [])
    for m in WORD.finditer(text):
        a, b = m.span()
        c = next((x for x in claimed if x[0] <= a < x[1]), None)
        if c:
            if a == c[0]:
                plain(pos, a); out.append([text[c[0]:c[1]], c[3], c[2]]); pos = c[1]
                if mode == 'a': stats['words'] += 1; stats['lex'] += 1
            continue
        if mode == 'a': stats['words'] += 1
        hit = next((look[k] for k in keys(m[0]) if k in look), None)
        if hit and (mode == 'a' or safe(m[0])):
            plain(pos, a); out.append([m[0], lex_id(*hit), 0]); pos = b
            if mode == 'a': stats['lex'] += 1
        elif mode == 'a':
            missing[keys(m[0])[-1]] += 1
    plain(pos, len(text))
    return out

paras = []
for i, p in enumerate(clean['paras']):
    evs = [e for e in events if e['para'] == str(i)]
    paras.append({'ru': segments(p['ru'], p['ins_ru'], evs, 'a'), 'ru3': segments(p['ru'], p['ins_ru'], evs, 'e')})
print('words', stats['words'], 'replaceable', stats['lex'], f"{stats['lex'] / stats['words']:.0%}")
print('top missing:', ', '.join(f'{k}{v if v > 1 else ""}' for k, v in missing.most_common(40)))
open(os.path.join(ROOT, 'story-data.js'), 'w', encoding='utf8').write('// written by tools/story/build.py\nconst STORY_DATA = ' + json.dumps({'lex': LEX, 'ev': EV, 'p': paras}, ensure_ascii=False, separators=(',', ':')) + ';\n')
print('lex', len(LEX), 'events', len(EV))
