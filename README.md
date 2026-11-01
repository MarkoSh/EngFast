# EngFast

Американский английский для русскоязычных, на движке ThaiFast. https://eng.dateonymous.com/
Общая схема семейства, офлайн и выкладка — в [README ThaiFast](https://github.com/MarkoSh/ThaiFast#readme).

`index.html` **генерируется** — не правьте его руками, правки пропадут при следующей сборке.

```
tools/data.js       весь контент: тексты интерфейса (T), фразы, слова, идиомы и т. д.
tools/build.py      ThaiFast/index.html + data.js + точечные патчи → index.html, затем offline.py
tools/texts.js      все английские строки для озвучки (f — Ava, рассказчик; m — Andrew)
tools/gen_audio.py  озвучка через edge-tts в audio/<m|f>/<fnv1a>.mp3
```

Порядок: правка `tools/data.js` (или движка в ThaiFast) → `python3 tools/build.py` → при новых фразах
`node tools/texts.js > /tmp/t.json && python3 tools/gen_audio.py /tmp/t.json` → коммит.

Частота идиом — Google Books Ngram (en-US, 2015–2019, на миллион слов), источник указан на странице.
