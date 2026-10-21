// Prints every English string the page can speak, as JSON {m: [...], f: [...]}.
// 'f' = narrator (Ava), 'm' = second speaker (Andrew). Usage: node tools/texts.js > texts.json
const src = require('fs').readFileSync(__dirname + '/../index.html', 'utf8');
const js = src.slice(src.indexOf('/* ================= UI TEXT'), src.indexOf('/* ================= STATE'));
const out = new Function(js + `
  const res = { m: new Set(), f: new Set() };
  const f = x => res.f.add(x);
  PH.forEach(x => f(x.th)); SOUNDS.forEach(x => f(x.th)); TONES.forEach(x => f(x.th)); INT_DRILL.forEach(x => f(x.th));
  f('She sells seashells by the seashore.'); f('Have a good one!');
  STRESS.forEach(([n, , v]) => { f(n); f(v) });
  LETTERS.forEach(c => { f(c.say); f(c.word) }); VOWELS.forEach(v => f(v[0]));
  DIGRAPHS.forEach(d => f(d[1])); SILENT.forEach(w => f(w[0]));
  NUM.forEach(x => f(x.th));
  for (let n = 0; n < 100000; n++) engNum(n).parts.forEach(f);
  BODY.forEach(x => { f(x.th); if (!x.noPain) f(painPhrase(x)) });
  VERB.forEach(v => { f(v.th); MODALS.forEach(m => f(m.th + ' ' + v.th + '.')) });
  TOPV.forEach(x => { f(x.th); f(x.xth) });
  ANS.forEach(x => res[x.v].add(x.th));
  SCENES.forEach(sc => { const you = sc.steps[0].them.v === 'f' ? 'm' : 'f'; sc.steps.forEach(st => { res[st.them.v].add(st.them.th); st.you.forEach(o => res[you].add(o.th)) }) });
  ADDR.forEach(x => { f(x.th); f(x.call) }); f(POLITE_YES.f.say); POLITE_PAIRS.forEach(p => f(p[1])); WAI.forEach(w => f(w[2])); SMILE.forEach(x => f(x.th));
  QWORDS.concat(QPARTS).forEach(x => { f(x.th); f(x.xth) });
  CLS.forEach(x => f(x.th)); ORDER.forEach(it => ORDER_N.forEach(([n]) => f(orderPhrase(it, n).th)));
  FOOD.forEach(g => g.items.forEach(x => f(x.th))); SIGNS.forEach(x => f(x.say || x.th));
  return { m: [...res.m], f: [...res.f] };
`)();
console.log(JSON.stringify(out));
