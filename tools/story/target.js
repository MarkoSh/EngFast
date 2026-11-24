/*@@ST-T*/
/* the target language of the swaps (English): the Latin letter that sounds closest to a Russian letter, what is spoken when it is
   tapped, and its balloon (this block replaces the Thai one of ThaiFast, see tools/build.py) */
const ST_RU = { а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'h', э: 'e' };
function stLetterFor(ch, i, word, key) {
  const m = ST_RU[ch.toLowerCase()];
  return m && (ch === ch.toLowerCase() ? m : m.toUpperCase());
}
const ST_FONT = '';
const stLetterSay = tc => { const c = LETTERS.find(x => x.ch === tc.toUpperCase()); return c ? c.say : tc };
function stLetterTip(el, ru, row) {
  const c = LETTERS.find(x => x.ch === el.dataset.ch.toUpperCase());
  return `<p class="text-4xl text-white leading-none">${c.ch}${c.ch.toLowerCase()} <span class="text-lg text-zinc-300">${c.word}</span></p>
    <p class="mt-1 font-mono text-accent">[${c.name}]</p><p class="text-xs text-zinc-400">${c.nameRu}</p>
    ${row('stTipSound', stEsc(c.sound))}${row('stTipExample', `${c.word} <span class="font-mono text-accent">[${c.wordIpa}]</span> — ${c.wordRu}`)}${row('stTipRep', `«${stEsc(el.dataset.o)}» → ${stEsc(el.dataset.ch)}`)}`;
}
/*@@ST-T-END*/
