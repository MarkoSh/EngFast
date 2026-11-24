"""Story trainer for EngFast, step 1: read STORIES from tools/data.js and split every paragraph into the clean Russian text
(the English inserts `phrase (transcription, meaning)` replaced by their meaning) + the hand-made inserts.
Writes tools/story/clean.json."""
import json, os, re, subprocess
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(os.path.dirname(HERE))
src = open(os.path.join(ROOT, 'tools', 'data.js'), encoding='utf8').read()
a = src.index('const STORIES'); b = src.index('\n];', a) + 3
out = subprocess.run(['node', '-e', src[a:b] + ';console.log(JSON.stringify(STORIES[0]))'], capture_output=True, text=True, check=True).stdout
story = json.loads(out)
INS = re.compile(r"([A-Za-z][A-Za-z’'\-]*(?: [A-Za-z’'\-]+)*[.!?]?) \(([^,()]+), ([^()]+)\)")
paras = []
for (ru,) in [p[:1] for p in story['paras']]:
    ins = []
    def rep(m):
        ins.append([m[3], m[1].rstrip('!?.'), m[2]]); return m[3]
    paras.append({'ru': INS.sub(rep, ru), 'ins_ru': ins})
json.dump({'meta': {k: story[k] for k in ('id', 'year', 'author', 'title')}, 'paras': paras}, open(os.path.join(HERE, 'clean.json'), 'w', encoding='utf8'), ensure_ascii=False, indent=1)
print(len(paras), 'paragraphs;', sum(len(p['ins_ru']) for p in paras), 'inserts; leftover latin:', sum(bool(re.search(r'[A-Za-z]{3}', p['ru'])) for p in paras))
for p in paras:
    for m in re.finditer(r'[A-Za-z]{3,}', p['ru']): print('  leftover:', p['ru'][max(0, m.start() - 30):m.end() + 30]); break
