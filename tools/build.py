"""Build EngFast/index.html from ThaiFast/index.html: same design and engine, English (US) content for Russian speakers.
Content lives in tools/data.js. Usage: python3 tools/build.py, then regenerate audio (see gen_audio.py)."""
import os, re
HERE = os.path.dirname(os.path.abspath(__file__)) + '/'
SRC = os.path.join(HERE, '../../ThaiFast/index.html')
DST = os.path.join(HERE, '../index.html')
s = open(SRC, encoding='utf8').read()

def rep(a, b, n=1):
    global s
    c = s.count(a)
    assert c == n, f'expected {n}, found {c}: {a[:90]!r}'
    s = s.replace(a, b)

def func(name, new):
    """replace a top-level `function name(...) {...}` (ends at the first line that is exactly '}')"""
    global s
    i = s.index(f'function {name}(')
    j = s.index('\n}\n', i) + 3
    s = s[:i] + new.strip('\n') + '\n' + s[j:]

def between(a, b, new, keep_b=True):
    """replace text from marker a up to marker b"""
    global s
    i = s.index(a); j = s.index(b, i)
    s = s[:i] + new + (s[j:] if keep_b else s[j + len(b):])

# ---------- head ----------
rep('<title>ThaiFast — тайский с нуля</title>', '<title>EngFast — американский английский</title>')
rep('content="Тайский язык с нуля: звуки, тоны, алфавит, цифры, нужные фразы и быстрые тренажёры."', 'content="Американский английский для русскоговорящих: звуки, интонация, живые фразы, этикет, чаевые и быстрые тренажёры."')
s = re.sub(r'<link href="https://fonts.googleapis.com/css2\?[^"]+" rel="stylesheet">',
           '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Caveat:wght@500;600&family=Playpen+Sans:wght@400&family=Dancing+Script:wght@600&display=swap" rel="stylesheet">', s, count=1)
rep("fontFamily: { sans: ['Inter', 'Noto Sans Thai', 'system-ui', 'sans-serif'], thai: ['Noto Sans Thai', 'sans-serif'], loop: ['Noto Sans Thai Looped', 'Noto Sans Thai', 'sans-serif'] },",
    "fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], thai: ['Inter', 'system-ui', 'sans-serif'], loop: ['Caveat', 'cursive'] },")

# ---------- nav: no He/She, no RU/EN ----------
i = s.index('    <div class="flex items-center gap-2">\n      <div class="flex rounded-lg border border-white/10 p-0.5 text-xs font-semibold" role="group" aria-label="Gender">')
j = s.index('  </nav>', i)
s = s[:i] + s[j:]
s = s.replace('ThaiFast', 'EngFast')

# ---------- hero / sections html ----------
rep('<dt class="text-2xl font-bold text-white">44</dt>', '<dt class="text-2xl font-bold text-white">26</dt>')
rep('<p class="mt-2 font-thai text-3xl text-white">ไม้ใหม่ไม่ไหม้ไหม</p>', '<p class="mt-2 text-3xl text-white">She sells seashells by the seashore.</p>')
rep('<p class="mt-1 font-mono text-accent">mái mài mâi mâi mǎi</p>', '<p class="mt-1 font-mono text-accent">ʃi selz ˈsiːʃelz baɪ ðə ˈsiːʃɔːr</p>')
rep('<button data-say="ไม้ใหม่ไม่ไหม้ไหม"', '<button data-say="She sells seashells by the seashore."')
rep('''    </div>
  </section>

  <!-- 03 ALPHABET -->''', '''      <div class="reveal mt-12">
        <h3 class="text-xl font-bold text-white" data-i18n="stressTitle"></h3>
        <p class="mt-2 text-sm text-zinc-400 max-w-2xl" data-i18n="stressSub"></p>
        <div id="stressGrid" class="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3"></div>
      </div>
    </div>
  </section>

  <!-- 03 ALPHABET -->''')
rep('<div id="numGrid" class="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3"></div>', '<div id="numGrid" class="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3"></div>')
rep('<div id="tOpts" class="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-3"></div>', '<div id="tOpts" class="mt-6 mx-auto max-w-md grid grid-cols-2 gap-3"></div>')
rep('<p class="font-thai text-5xl md:text-7xl font-bold text-white">โชคดี<span class="text-accent" data-particle></span></p>', '<p class="text-5xl md:text-7xl font-bold text-white">Have a good one!</p>')
rep('<p class="mt-4 font-mono text-accent">chôhk-dii</p>', '<button data-say="Have a good one!" class="mt-4 inline-flex items-center gap-2 font-mono text-accent hover:text-white transition"><i data-lucide="volume-2" class="w-4 h-4"></i>hæv ə ˈɡʊd wʌn</button>')
rep('<html lang="ru" class="scroll-smooth">', '<html lang="ru" class="scroll-smooth">')

# ---------- data ----------
between('/* ================= UI TEXT ================= */', '/* ================= STATE ================= */', open(HERE + 'data.js', encoding='utf8').read() + '\n')

# ---------- state & speech ----------
rep("let lang = store.get('tf-lang', 'ru');\nlet gender = store.get('tf-gender', 'm');", "const lang = 'ru';\nconst gender = 'f'; // narrator voice; the 'm' voice is used for other speakers")
rep("function loadVoices() { thVoice = speechSynthesis.getVoices().find(v => /^th/i.test(v.lang)) || null }", "function loadVoices() { thVoice = speechSynthesis.getVoices().find(v => /^en-US/i.test(v.lang)) || speechSynthesis.getVoices().find(v => /^en/i.test(v.lang)) || null }")
rep("u.lang = 'th-TH'; u.rate = .75;", "u.lang = 'en-US'; u.rate = .9;")
rep("// voice: 'm' | 'f' overrides the He/She switch (lines spoken by Thais); onEnd fires when playback finishes.", "// voice: 'm' | 'f' picks the speaker (default: narrator); onEnd fires when playback finishes.")
rep("  $$('[data-particle]').forEach(el => el.textContent = pt().th);\n", "")

func('renderTones', r'''
function renderTones() {
  $('#tonesGrid').innerHTML = TONES.map(x => `
    <button data-say="${x.th}" class="flex flex-col text-left rounded-2xl border border-white/10 bg-ink-950 p-4 hover:border-accent/50 transition">
      ${curve(x.path)}
      <div class="mt-3 flex items-baseline justify-between"><span class="font-semibold text-white">${x.ru.n}</span><span class="font-mono text-accent">${x.mark}</span></div>
      <p class="mt-1 text-xs text-zinc-500 leading-relaxed min-h-[32px]">${x.ru.d}</p>
      <div class="mt-3 pt-3 border-t border-white/5"><span class="text-lg text-white">${x.th}</span></div>
      <p class="text-xs text-zinc-500">${x.ru.w}</p>
    </button>`).join('');
  const syl = w => w.replace(/[A-Z]+/g, m => `<b class="text-accent">${m}</b>`);
  $('#stressGrid').innerHTML = STRESS.map(([n, ns, v, vs, rn, rv]) => `<div class="rounded-2xl border border-white/10 bg-ink-950 p-4 grid grid-cols-2 gap-3">
    ${[[n, ns, rn], [v, vs, rv]].map(([w, sy, ru]) => `<button data-say="${w}" class="text-left rounded-xl p-2 -m-1 hover:bg-white/5 transition"><span class="block font-mono text-lg text-white">${syl(sy)}</span><span class="block text-xs text-zinc-500">${w} — ${ru}</span></button>`).join('')}
  </div>`).join('');
}''')

func('renderAlphabet', r'''
function renderAlphabet() {
  $('#classTabs').innerHTML = [['all', 'clsAll'], ['v', 'clsV'], ['c', 'clsC'], ['s', 'clsS']].map(([k, key]) =>
    `<button data-cls="${k}" class="${chip(cls === k)}">${k !== 'all' ? `<span class="w-2 h-2 rounded-full ${CLS_COLOR[k]}"></span>` : ''}${t(key)}</button>`).join('');
  $('#consGrid').innerHTML = LETTERS.map((c, i) => {
    const dim = cls !== 'all' && c.cls !== cls ? 'opacity-20' : '';
    return `<button data-cons="${i}" class="relative aspect-square rounded-xl border ${i === selCons ? 'border-accent bg-accent/10' : 'border-white/10 bg-ink-900 hover:border-white/30'} transition grid place-items-center ${dim}">
      <span class="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full ${CLS_COLOR[c.cls]}"></span>
      <span class="text-2xl md:text-3xl font-semibold text-white leading-none">${c.ch}<span class="font-normal text-zinc-500">${c.ch.toLowerCase()}</span></span>
      <span class="absolute bottom-1 inset-x-0 text-center font-mono text-[10px] text-zinc-500">${c.nameRu}</span>
    </button>`;
  }).join('');
  const c = LETTERS[selCons];
  $('#consDetail').innerHTML = `<div class="fade-up">
    <div class="flex items-start justify-between">
      <span class="text-7xl font-semibold text-white leading-none">${c.ch}<span class="font-normal text-zinc-500">${c.ch.toLowerCase()}</span></span>${playBtn(c.say, 'w-12 h-12')}
    </div>
    <dl class="mt-6 space-y-3 text-sm">
      <div class="flex justify-between gap-4"><dt class="text-zinc-500">${t('letterName')}</dt><dd class="text-right text-white"><b class="font-mono text-accent">[${c.name}]</b> · ${c.nameRu}</dd></div>
      <div class="flex justify-between gap-4"><dt class="shrink-0 text-zinc-500">${t('letterSound')}</dt><dd class="text-right text-white">${c.sound}</dd></div>
    </dl>
    <button data-say="${c.word}" class="mt-5 w-full flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-ink-950 p-4 text-left hover:border-accent/40 transition">
      <span><span class="block text-xs text-zinc-500">${t('letterEx')}</span><span class="text-2xl text-white">${c.word}</span> <span class="font-mono text-sm text-accent">[${c.wordIpa}]</span><span class="block text-sm text-zinc-400">${c.wordRu}</span></span>
      <i data-lucide="volume-2" class="w-5 h-5 shrink-0 text-zinc-500"></i>
    </button>
    <p class="mt-5 flex items-start gap-2 text-xs text-zinc-400"><span class="mt-1 w-2 h-2 shrink-0 rounded-full ${CLS_COLOR[c.cls]}"></span>${t('cls' + c.cls.toUpperCase() + 'd')}</p>
  </div>`;
  $('#vowelGrid').innerHTML = VOWELS.map(([w, ipa, ru]) => `
    <button data-say="${w}" class="rounded-xl border border-white/10 bg-ink-900 p-3 text-left hover:border-accent/50 transition">
      <span class="text-2xl text-white">${w}</span>
      <span class="block font-mono text-sm text-accent">[${ipa}]</span>
      <span class="block text-xs text-zinc-500">${ru}</span>
    </button>`).join('');
}''')
rep("  const c = CONS[selCons]; speak(c.ch + ' ' + c.word);", "  speak(LETTERS[selCons].say);")

func('renderPoster', r'''
function renderPoster() {
  $$('[data-pfont]').forEach(b => b.className = `px-3 py-1.5 rounded-md transition ${b.dataset.pfont === pfont ? 'bg-white text-ink-950' : 'text-zinc-400 hover:text-white'}`);
  const f = pfont === 'loop' ? 'font-sans font-semibold' : 'font-loop';
  const head = (n, key, note = '') => `<div class="mt-8 first:mt-0 flex flex-wrap items-baseline gap-x-3 gap-y-1"><span class="font-mono text-2xl font-bold text-accent">${n}</span><span class="text-sm font-semibold text-white">${t(key)}</span>${note ? `<span class="text-xs text-zinc-500">${t(note)}</span>` : ''}</div>`;
  const cell = (say, glyph, sub, size = 'text-3xl md:text-4xl') => `<button data-say="${say}" class="group rounded-xl border border-white/5 bg-ink-950 hover:border-accent/50 hover:-translate-y-0.5 transition pt-1 pb-2 px-1 text-center"><span class="flex h-16 md:h-[72px] items-center justify-center ${f} ${size} leading-none text-white group-hover:text-accent transition [&_u]:decoration-accent [&_u]:decoration-2 [&_u]:underline-offset-4">${glyph}</span><span class="block text-[11px] leading-tight text-zinc-500 truncate">${sub}</span></button>`;
  $('#poster').innerHTML =
    head(LETTERS.length, 'pLetters') +
    `<div class="mt-3 grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-[repeat(13,minmax(0,1fr))] gap-1.5">${LETTERS.map(c => cell(c.say, c.ch + c.ch.toLowerCase(), c.word)).join('')}</div>` +
    head(DIGRAPHS.length, 'pDigraphs', 'pDigNote') +
    `<div class="mt-3 grid grid-cols-4 sm:grid-cols-8 gap-1.5">${DIGRAPHS.map(([l, w, ipa]) => cell(w, l, `${w} [${ipa}]`)).join('')}</div>` +
    head(SILENT.length, 'pSilent', 'pSilentNote') +
    `<div class="mt-3 grid grid-cols-4 sm:grid-cols-8 gap-1.5">${SILENT.map(([w, html]) => cell(w, html, w, 'text-2xl md:text-3xl')).join('')}</div>`;
}''')

func('renderNum', r'''
function renderNum() {
  const inp = $('#numIn');
  const n = Math.max(0, Math.min(99999, parseInt(inp.value, 10) || 0));
  const r = engNum(n);
  $('#numOut').innerHTML = `<div class="fade-up">
    <div class="flex items-center gap-4"><span class="font-mono text-4xl font-bold text-white">${n.toLocaleString('en-US')}</span><span class="ml-auto">${playBtn(r.parts.join('|'), 'w-12 h-12')}</span></div>
    <p class="mt-4 text-3xl md:text-4xl text-white break-words">${r.th}</p>
    <p class="mt-2 text-zinc-500">${r.cyr}</p></div>`;
  $('#numGrid').innerHTML = NUM.map(x => `<button data-say="${x.th}" class="rounded-2xl border border-white/10 bg-ink-900 p-4 text-left hover:border-accent/40 transition">
    <span class="font-mono text-xl font-bold text-white">${x.ru}</span>
    <p class="mt-2 text-xl text-white">${x.th}</p><p class="font-mono text-sm text-accent">[${x.lat}]</p>
    <p class="text-xs text-zinc-500">${x.cyr}</p></button>`).join('');
}''')
rep("speak(thaiNum(+$('#numIn').value).parts.join('|'), $('#numOut [data-say]'))", "speak(engNum(+$('#numIn').value).parts.join('|'), $('#numOut [data-say]'))")
rep("[20, 40, 50, 60, 80, 120, 150, 250, 350, 499, 1200, 3500][Math.random() * 12 | 0]", "[5, 12, 15, 19, 30, 45, 50, 99, 120, 250, 1200, 3500][Math.random() * 12 | 0]")

func('renderBody', r'''
function renderBody() {
  $('#bodyGrid').innerHTML = BODY.map(x => wordTile(x, x.noPain ? '' :
    `<button data-say="${painPhrase(x)}" class="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400 hover:border-accent hover:text-accent transition"><i data-lucide="activity" class="w-3 h-3"></i>${t('hurts')} · ${painPhrase(x)}</button>`)).join('');
}''')

func('renderVerbs', r'''
function renderVerbs() {
  $('#modalOpts').innerHTML = MODALS.map(m => `<button data-modal="${m.k}" class="${chip(modal === m.k)}">${t('m_' + m.k)} · ${m.th}</button>`).join('');
  const v = VERB[verbI], m = MODALS.find(x => x.k === modal), th = `${m.th} ${v.th}.`;
  $('#sentOut').innerHTML = `<div class="fade-up flex items-start justify-between gap-4">
    <div>
      <p class="text-3xl md:text-4xl text-white"><span class="text-accent">${m.th}</span> ${v.th}.</p>
      <p class="mt-2 font-mono text-accent">[${m.lat} ${v.lat}]</p>
      <p class="text-zinc-500">${m.cyr} ${v.cyr}</p>
      <p class="mt-3 text-lg font-semibold text-white">${m.ru(v)}</p>
    </div>${playBtn(th, 'w-12 h-12')}</div>`;
  $('#verbGrid').innerHTML = VERB.map((x, i) => `<button data-verb="${i}" class="text-left rounded-2xl border ${i === verbI ? 'border-accent bg-accent/10' : 'border-white/10 bg-ink-900 hover:border-white/30'} p-4 transition">
    <span class="text-2xl text-white">${x.th}</span>
    <p class="mt-1 font-mono text-sm text-accent">[${x.lat}]</p>
    <p class="text-xs text-zinc-500">${x.cyr}</p>
    <p class="mt-2 text-sm font-medium text-white">${x.ru}</p></button>`).join('');
}''')

rep("[v.th, v.lat, v.ru, v.en, v.xth].some(f => f.toLowerCase().includes(qv))", "[v.th, v.ru, v.xth, v.forms].some(f => (f || '').toLowerCase().includes(qv))")
rep('''<span class="block font-mono text-xs text-accent">${v.lat}</span>${lang === 'ru' ? `<span class="block text-xs text-zinc-500">${v.cyr}</span>` : ''}</button></td>''',
    '''<span class="block font-mono text-xs text-accent">[${v.lat}]</span><span class="block text-xs text-zinc-500">${v.cyr}</span>${v.forms ? `<span class="mt-1 block text-[11px] text-zinc-400">${v.forms}</span>` : ''}</button></td>''')

func('renderCls', r'''
function renderCls() {
  $('#orderItems').innerHTML = ORDER.map((x, i) => `<button data-ord="${i}" class="${chip(i === ordI)}">${x.ru}</button>`).join('');
  $('#orderNums').innerHTML = ORDER_N.map(([n]) => `<button data-ordn="${n}" class="${chip(n === ordN)} font-mono">× ${n}</button>`).join('');
  const it = ORDER[ordI], o = orderPhrase(it, ordN), c = CLS.find(x => x.th === it.cls), cont = ordN === 1 ? c.th : c.pl;
  $('#orderOut').innerHTML = `<div class="fade-up flex items-start justify-between gap-4"><div>
    <p class="text-3xl md:text-4xl text-white">${o.th.replace(` ${cont} of `, ` <span class="text-accent">${cont}</span> of `)}</p>
    <p class="mt-2 text-zinc-500">${o.cyr}</p>
    <p class="mt-3 text-lg font-semibold text-white">Можно: ${it.ru} × ${ordN}</p>
    <p class="mt-1 text-sm text-zinc-400">Ёмкость: <span class="text-white">${cont}</span> — ${c.ru}</p>
  </div>${playBtn(o.th, 'w-12 h-12')}</div>`;
  $('#clsGrid').innerHTML = CLS.map(x => wordTile(x, `<p class="mt-1 text-xs text-zinc-500">мн. ч.: ${x.pl}</p>`)).join('');
}''')

func('renderEtq', r'''
function renderEtq() {
  const y = POLITE_YES[gender];
  $('#addrGrid').innerHTML = ADDR.map(x => `<div class="rounded-2xl border border-white/10 bg-ink-900 p-5 hover:border-accent/40 transition">
    <div class="flex items-start justify-between gap-2"><span class="text-2xl font-semibold text-white">${x.th}</span>${playBtn(x.th, 'w-9 h-9')}</div>
    <p class="font-mono text-sm text-accent">[${x.lat}]</p><p class="text-xs text-zinc-500">${x.cyr}</p>
    <p class="mt-2 text-sm text-zinc-300 leading-relaxed">${x.ru}</p>
    <button data-say="${x.call}" class="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-left text-xs text-zinc-400 hover:border-accent hover:text-accent transition"><i data-lucide="megaphone" class="w-3 h-3 shrink-0"></i>${x.call}</button>
  </div>`).join('');
  $('#politeYes').innerHTML = `<h3 class="font-semibold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-accent"></i>${t('politeTitle')}</h3>
    <div class="mt-4 flex items-center gap-4"><span class="text-5xl font-semibold text-white">${y.th}</span>${playBtn(y.say, 'w-12 h-12')}</div>
    <p class="mt-2 font-mono text-accent">[${y.lat}]</p><p class="text-sm text-zinc-500">${y.cyr}</p>
    <p class="mt-3 text-sm text-zinc-300 leading-relaxed">${t('politeM')}</p>
    <div class="mt-4 space-y-2 text-sm">${POLITE_PAIRS.map(([bad, good]) => `<div class="flex flex-wrap items-center gap-2"><span class="text-rose-300/80 line-through">${bad}</span><i data-lucide="arrow-right" class="w-3.5 h-3.5 text-zinc-500"></i><button data-say="${good}" class="text-emerald-300 hover:text-white transition">${good}</button></div>`).join('')}</div>`;
  $('#waiList').innerHTML = `<h3 class="font-semibold text-white flex items-center gap-2"><i data-lucide="message-circle" class="w-4 h-4 text-accent"></i>${t('waiTitle')}</h3>
    <ul class="mt-4 space-y-3">${WAI.map(([ic, ru, ex]) => `<li class="flex items-start gap-3"><span class="grid place-items-center w-8 h-8 shrink-0 rounded-lg bg-white/5 text-accent"><i data-lucide="${ic}" class="w-4 h-4"></i></span><span class="pt-1 text-sm text-zinc-300 leading-relaxed">${ru} <button data-say="${ex}" class="ml-1 inline-flex items-center gap-1 text-accent hover:text-white transition"><i data-lucide="volume-2" class="w-3.5 h-3.5"></i>${ex}</button></span></li>`).join('')}</ul>`;
  $('#dontList').innerHTML = `<h3 class="font-semibold text-rose-200 flex items-center gap-2"><i data-lucide="shield-alert" class="w-4 h-4"></i>${t('dontTitle')}</h3>
    <ul class="mt-4 grid md:grid-cols-2 gap-3">${DONTS.map(([ic, ru]) => `<li class="flex items-start gap-3"><span class="grid place-items-center w-8 h-8 shrink-0 rounded-lg bg-white/5 text-rose-300"><i data-lucide="${ic}" class="w-4 h-4"></i></span><span class="pt-1 text-sm text-zinc-300 leading-relaxed">${ru}</span></li>`).join('')}</ul>`;
  $('#smileGrid').innerHTML = SMILE.map(phraseCard).join('');
}''')

rep('<button data-say="${x.th}" class="fade-up group text-left rounded-2xl', '<button data-say="${x.say || x.th}" class="fade-up group text-left rounded-2xl')
rep('px-3 py-4 text-center font-thai text-2xl md:text-3xl font-semibold group-hover', 'px-2 py-4 text-center text-base md:text-xl font-bold tracking-wide group-hover')
rep('pl-7 pr-3 py-4 text-center font-thai text-2xl font-bold group-hover', 'pl-7 pr-3 py-4 text-center text-base md:text-xl font-bold group-hover')

# dialogs: your replies use the voice opposite to the speaker
rep("const dlgYouV = () => undefined;\nconst dlgYouSay = o => o.th + pt().th;", "const dlgYouV = () => SCENES[dlg.s].steps[0].them.v === 'f' ? 'm' : 'f';\nconst dlgYouSay = o => o.th;")
rep("// your replies: He/She voice with the polite particle", "// your replies: the voice opposite to the speaker")
rep('<button data-say="${b.th + p.th}" class="text-left max-w-[88%]', '<button data-say="${b.th}" data-voice="${dlgYouV()}" class="text-left max-w-[88%]')

# trainers
rep("  alpha: CONS.filter(c => !c.old).map(c => ({ th: c.ch, lat: c.name, ru: `${c.word} — ${c.ru}`, en: `${c.word} — ${c.en}`, say: c.ch + ' ' + c.word, np: 1 })),",
    "  alpha: LETTERS.map(c => ({ th: c.ch + c.ch.toLowerCase(), lat: c.name, cyr: c.nameRu, ru: `${c.word} — ${c.wordRu}`, say: c.say, np: 1 })),")
func('tNext', r'''
function tNext(play) {
  tn.cur = tn.next ?? (Math.random() * INT_DRILL.length | 0);
  tn.next = Math.random() * INT_DRILL.length | 0;
  preload(INT_DRILL[tn.cur].th); preload(INT_DRILL[tn.next].th);
  tn.lock = false;
  $('#tReveal').textContent = '';
  tRender();
  if (play) speak(INT_DRILL[tn.cur].th, $('#tPlay'));
}''')
func('tRender', r'''
function tRender() {
  $('#tOpts').innerHTML = INT_OPTS.map((ti, i) => `<button data-t="${i}" class="tone-btn rounded-xl border border-white/10 bg-ink-900 p-3 hover:border-white/30 transition">${curve(TONES[ti].path)}<p class="mt-2 text-sm font-semibold text-white">${i ? 'Вопрос ↗' : 'Утверждение ↘'}</p></button>`).join('');
  $('#tScore').textContent = tn.score; $('#tTotal').textContent = tn.total;
}''')
between("$('#tPlay').onclick", "\n/* trace */", r'''$('#tPlay').onclick = e => speak(INT_DRILL[tn.cur].th, e.currentTarget);
$('#tHint').onclick = () => { $('#tReveal').textContent = INT_DRILL[tn.cur].th };
$('#tOpts').addEventListener('click', e => {
  const b = e.target.closest('[data-t]');
  if (!b || tn.lock) return;
  tn.lock = true; tn.total++;
  const x = INT_DRILL[tn.cur], ok = +b.dataset.t === x.k;
  if (ok) tn.score++;
  $$('[data-t]').forEach(el => {
    if (+el.dataset.t === x.k) el.className += ' !border-emerald-400 !bg-emerald-400/10 pop';
    else if (el === b) el.className += ' !border-rose-400 !bg-rose-400/10 shake';
  });
  $('#tReveal').innerHTML = `<span class="fade-up inline-block font-sans text-white">${x.th}</span>`;
  $('#tScore').textContent = tn.score; $('#tTotal').textContent = tn.total;
  setTimeout(() => tNext(true), 1800);
});
''')
rep("if (name === 'tones') speak(TONES[tn.cur].th, $('#tPlay'));", "if (name === 'tones') speak(INT_DRILL[tn.cur].th, $('#tPlay'));")

# trace
between('const TR_SETS = {', 'const TR_W = 340;', r'''const TR_SETS = {
  up: () => LETTERS.map(c => ({ g: c.ch, say: c.say, lat: c.name, ru: `${c.nameRu} — ${c.word}, ${c.wordRu}` })),
  low: () => LETTERS.map(c => ({ g: c.ch.toLowerCase(), say: c.say, lat: c.name, ru: `${c.nameRu} — ${c.word}, ${c.wordRu}` })),
  dig: () => NUM.slice(0, 10).map(x => ({ g: x.ru, say: x.th, lat: x.lat, ru: `${x.th} · ${x.cyr}` }))
};
''')
rep("const tr = { set: 'cons', size: 'm',", "const tr = { set: 'up', size: 'm',")
rep("const TR_STYLES = { loop: ['Noto Sans Thai Looped', 500], school: ['Mali', 500], hand: ['Sriracha', 400], cursive: ['Charm', 700] };",
    "const TR_STYLES = { print: ['Inter', 500], school: ['Playpen Sans', 400], hand: ['Caveat', 600], cursive: ['Dancing Script', 600] };")
rep("// template styles: printed with loops + three handwriting fonts", "// template styles: print + three handwriting fonts (school print, casual hand, cursive)")
rep("tr.style = 'loop'; tr.slant = 0;", "tr.style = 'print'; tr.slant = 0;")
rep('class="leading-none">กขค</span>', 'class="leading-none">Abc</span>')
rep("document.fonts.load(trFontCss(100), 'กอ๑')", "document.fonts.load(trFontCss(100), 'Aa1')")
rep("""document.fonts?.load('500 100px "Noto Sans Thai Looped"', 'กอ๑')""", """document.fonts?.load("500 100px 'Inter'", 'Aa1')""")

rep('<span class="font-loop leading-none ${{ l: \'text-lg\'', '<span class="font-semibold leading-none ${{ l: \'text-lg\'')
rep("xs: 'text-[7px]' }[k]}\">ก</span>", "xs: 'text-[7px]' }[k]}\">A</span>")

# speech recognition
rep("const normTh = s => s.replace(/[\\s.,!?ๆ]/g, '').replace(/ครับ|ค่ะ|คะ|นะ/g, '');", "const normTh = s => s.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]/g, '');")
rep("console.assert(simil('สวัสดีครับ', 'สวัสดี') === 1 && simil('ขอบคุณ', 'สวัสดี') < .5, 'simil');", "console.assert(simil('Hi!', 'hi') === 1 && simil('thank you', 'hello') < .5, 'simil');")
rep("r.lang = 'th-TH';", "r.lang = 'en-US';")

# polite pairs data (used by renderEtq)
rep("const POLITE_YES =", "const POLITE_PAIRS = [['Give me a coffee.', 'Can I get a coffee, please?'], ['I want the check.', 'Could we get the check, please?'], ['Repeat.', 'Sorry, could you say that again?']];\nconst POLITE_YES =")

rep("const SITE = 'thai';", "const SITE = 'eng';")

# leftovers check
for bad in ['CONS', 'thaiNum', 'thaiDigits', 'VOWELS32', 'TONEMARKS', 'VSAY', 'PRONOUN', 'INI[', 'FIN[', 'ไ', 'ก', 'ครับ']:
    if bad in s:
        print('LEFTOVER', bad, [m.start() for m in re.finditer(re.escape(bad), s)][:5])
open(DST, 'w', encoding='utf8').write(s)
print('written', DST, len(s))
