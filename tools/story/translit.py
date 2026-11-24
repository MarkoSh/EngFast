"""American English -> IPA (eng_to_ipa) -> approximate Russian letters, like the transcriptions of the site («кэптэн»).
tr(word or phrase) -> 'ˈkæptən · кэптэн'"""
import re
import eng_to_ipa

RULES = [('tʃ', 'ч'), ('ʧ', 'ч'), ('dʒ', 'дж'), ('ʤ', 'дж'), ('aɪ', 'ай'), ('aʊ', 'ау'), ('eɪ', 'эй'), ('ɔɪ', 'ой'), ('oʊ', 'оу'), ('ɛr', 'эр'), ('ɑr', 'ар'), ('ɔr', 'ор'),
         ('ʊr', 'ур'), ('ɜr', 'ёр'), ('ɝ', 'ёр'), ('ɚ', 'эр'), ('iː', 'и'), ('uː', 'у'), ('ɑː', 'а'), ('ɔː', 'о'), ('ʃ', 'ш'), ('ʒ', 'ж'), ('θ', 'с'),
         ('ð', 'з'), ('ŋ', 'нг'), ('ə', 'э'), ('ʌ', 'а'), ('æ', 'э'), ('ɛ', 'э'), ('ɪ', 'и'), ('ɑ', 'а'), ('ɔ', 'о'), ('ʊ', 'у'), ('ɡ', 'г'), ('g', 'г'),
         ('j', 'й'), ('w', 'у'), ('h', 'х'), ('r', 'р'), ('l', 'л'), ('m', 'м'), ('n', 'н'), ('p', 'п'), ('b', 'б'), ('t', 'т'), ('d', 'д'), ('k', 'к'),
         ('f', 'ф'), ('v', 'в'), ('s', 'с'), ('z', 'з'), ('i', 'и'), ('u', 'у'), ('e', 'э'), ('o', 'о'), ('a', 'а'), ('ɾ', 'д'), ('ː', '')]

def ipa(text):
    out = eng_to_ipa.convert(text.lower().replace('’', "'"))
    return out if '*' not in out else ''

def cyr(i):
    i = re.sub('[ˈˌ]', '', i); out = ''; k = 0
    while k < len(i):
        for a, b in RULES:
            if i.startswith(a, k):
                out += b; k += len(a); break
        else:
            out += i[k]; k += 1
    out = re.sub('йу', 'ю', out); out = re.sub('йэ', 'е', out); out = re.sub('йа', 'я', out); out = re.sub('йо', 'ё', out)
    return out

def tr(text, hand=None):
    i = ipa(text)
    return ' · '.join(x for x in (i, hand or (cyr(i) if i else '')) if x)

if __name__ == '__main__':
    import sys
    for w in sys.argv[1:]:
        print(w, '->', tr(w))
