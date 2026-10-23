/* ================= UI TEXT ================= */
const T = {
  ru: {
    navSounds: 'Звуки', navTones: 'Интонация', navAlpha: 'Алфавит', navPhrases: 'Фразы', navWords: 'Слова', navTrain: 'Тренажёры', navTop: 'Топ-глаголы', navDialogs: 'Диалоги', navEtq: 'Этикет', navGram: 'Грамматика',
    twTitle: 'Скороговорки', twSub: 'Американцы зовут их tongue twisters — «заплетатели языка». Сначала медленно, потом быстрее: лучший тренажёр для th, r, w и американского t.',
    twPlay: 'Слушать', twSlow: 'Медленно', twFast: 'Быстро',
    lnTitle: 'Как учить быстрее', lnSub: 'Короткая выжимка: что подтверждают исследования памяти и обучения, что работает у полиглотов и во что верить не стоит. Метка на карточке показывает, насколько метод проверен.',
    lnProof: 'Доказано', lnData: 'Есть данные', lnPoly: 'Опыт полиглотов', lnMyth: 'Миф',
    lnSrc: 'Исследования: <a class="underline hover:text-white" href="https://doi.org/10.1037/0033-2909.132.3.354" target="_blank" rel="noopener">Cepeda et al., 2006</a> · <a class="underline hover:text-white" href="https://doi.org/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener">Roediger &amp; Karpicke, 2006</a> · <a class="underline hover:text-white" href="https://doi.org/10.3138/cmlr.63.1.59" target="_blank" rel="noopener">Nation, 2006</a> · <a class="underline hover:text-white" href="https://doi.org/10.1121/1.1894649" target="_blank" rel="noopener">Logan, Lively &amp; Pisoni, 1991</a> · <a class="underline hover:text-white" href="https://doi.org/10.1111/j.1467-9280.2008.02127.x" target="_blank" rel="noopener">Kornell &amp; Bjork, 2008</a> · <a class="underline hover:text-white" href="https://doi.org/10.1111/j.1467-9280.2007.01885.x" target="_blank" rel="noopener">Dumay &amp; Gaskell, 2007</a> · <a class="underline hover:text-white" href="https://doi.org/10.1037/h0076156" target="_blank" rel="noopener">Atkinson &amp; Raugh, 1975</a> · <a class="underline hover:text-white" href="https://doi.org/10.1111/j.1539-6053.2009.01038.x" target="_blank" rel="noopener">Pashler et al., 2008</a>',
    moreTitle: 'Другие курсы', moreSub: 'Тот же формат и те же тренажёры — другой язык.',
    gramTitle: 'Как строить предложения', gramSub: 'В английском порядок слов жёсткий, а вопросы и отрицания строятся словами-помощниками do, did, will. Выберите тип предложения и посмотрите, как переставляются блоки.',
    gramType: 'Тип предложения', gramBase: 'Пример', gramRules: 'Главные правила',
    badge: '15 минут до первого разговора',
    heroTitle: 'Американский английский. Без лишнего.',
    heroSub: 'Звуки, которых нет в русском, живые фразы для кафе, такси, отеля и магазина, этикет и чаевые. Слушайте, повторяйте, закрепляйте в тренажёрах.',
    ctaStart: 'Начать со звуков', ctaTrain: 'К тренажёрам',
    statLetters: 'букв', statPhrases: 'фраз', statWords: 'слов',
    heroCard: 'Фраза дня',
    soundsTitle: 'Звуки, которых нет в русском',
    soundsSub: 'Именно по ним русский акцент слышен сразу. Рядом со словом — международная транскрипция (IPA) и подсказка, как поставить язык и губы. Нажмите, чтобы услышать.',
    lengthNote: 'Не оглушайте звонкие согласные в конце слова: bed ≠ bet, bag ≠ back, eyes ≠ ice. По-русски «код» звучит как «кот», а в английском это разные слова.',
    tonesTitle: 'Интонация и ударение',
    tonesSub: 'В английском смысл несёт мелодия фразы. Одни и те же слова с понижением голоса — утверждение, с повышением — вопрос. Нажмите на карточку, чтобы услышать.',
    twister: 'Скороговорка', twisterTr: '«Она продаёт ракушки на берегу моря» — тренирует s и sh.',
    stressTitle: 'Ударение меняет слово', stressSub: 'Существительное — ударение на первом слоге, глагол — на втором. Пишется одинаково, звучит по-разному.',
    listen: 'Слушать',
    posterTitle: 'Весь алфавит одним взглядом',
    posterSub: 'Так алфавит висит в каждом американском классе: заглавная, строчная и слово-подсказка. Ниже — буквосочетания, которые читаются одним звуком, и немые буквы. Нажмите на любую карточку, чтобы услышать.',
    fontLoop: 'Печатный', fontPrint: 'Рукописный',
    pLetters: 'букв', pDigraphs: 'буквосочетаний', pDigNote: 'Две-три буквы — один звук.', pSilent: 'немых букв', pSilentNote: 'Пишется, но не читается — подчёркнута.',
    alphaTitle: '26 букв',
    alphaSub: 'Название буквы и её звук в словах — разные вещи: буква A называется «эй», а в cat читается как широкое «э». Нажмите на букву — услышите её и пример.',
    clsAll: 'Все', clsV: 'Гласные', clsC: 'Согласные', clsS: 'Бывают и теми и другими',
    clsVd: 'Гласная буква: у каждой несколько чтений — короткое (cat) и «алфавитное», как называется (cake).',
    clsCd: 'Согласная: обычно читается одним звуком.',
    clsSd: 'Y и W бывают согласными (yes, we) и частью гласного звука (my, new).',
    letterName: 'Название', letterSound: 'Как читается', letterEx: 'Пример',
    vowelsTitle: 'Одна буква — разные звуки',
    vowelsSub: 'Гласные буквы читаются по-разному. Короткий звук — в закрытом слоге (cat), «алфавитный» — когда в конце стоит немая e (cake). Нажмите, чтобы услышать.',
    phrasesTitle: 'Нужные фразы по ситуациям',
    phrasesSub: 'Американцы говорят просто и дружелюбно. Главный секрет вежливости — не please в конце, а мягкое начало: Can I get…, Could you…',
    cat_greet: 'Приветствие', cat_polite: 'Вежливость', cat_bye: 'Прощание', cat_food: 'Кафе и ресторан', cat_travel: 'Поездки',
    cat_hotel: 'Отель', cat_meet: 'Знакомство', cat_time: 'Время', cat_help: 'Полиция и SOS', cat_survive: 'Выживание',
    billTitle: 'Счёт, пожалуйста', billSub: 'Попросить счёт, разделить его, заплатить за всех — и не забыть про чаевые.',
    wordsTitle: 'Базовый словарь',
    wordsSub: 'Слова, из которых собираются фразы. Глаголы в английском почти не меняются: после I, you, we, they форма всегда одна.',
    vNum: 'Числа', vBody: 'Тело', vVerb: 'Глаголы', vQues: 'Вопросы', vCls: 'Сколько', vFood: 'Еда',
    numBuilder: 'Скажите любое число', numRandom: 'Случайная цена',
    numNote: 'Не путайте -teen и -ty: thirTEEN (13) — ударение в конце, THIRty (30) — в начале. Цены читают парами: $4.99 — «four ninety-nine». В американских числах нет and: two hundred fifty.',
    bodyNote: '«Болит» — My … hurts: My head hurts — болит голова. Или I have a headache / a stomachache / a sore throat. Нажмите «Болит», чтобы услышать.',
    hurts: 'Болит',
    sentBuilder: 'Соберите предложение', verbNote: 'Глагол не меняется: I eat, I don’t eat, I’ll eat. Будущее — will, в речи почти всегда сокращают: I will → I’ll. Отрицание — don’t.',
    m_none: 'Я делаю', m_want: 'Я хочу', m_not: 'Я не', m_will: 'Я буду', m_can: 'Я могу',
    quesNote: 'Вопрос строится через вспомогательный глагол в начале: You like coffee → Do you like coffee? Вопросительное слово ставят в самое начало: Where do you live?',
    qpTitle: 'Как начать вопрос',
    orderBuilder: 'Закажите что угодно',
    clsNote: 'Многое нельзя посчитать «штуками»: не two waters, а two bottles of water — ёмкость + of + продукт. В кафе часто говорят и проще: two coffees — это тоже нормально.',
    foodNote: 'Воду со льдом приносят бесплатно, газировку часто доливают бесплатно — free refill. Про стейк спросят прожарку: rare, medium или well-done. Порции большие — недоеденное забирают с собой, это нормально.',
    ansTitle: 'Что вам ответят', ansSub: 'Спросить — половина дела. Вот что вы услышите от официантов, кассиров и водителей. Озвучено голосом того, кто обычно это говорит.',
    ansNote: 'Американцы говорят быстро и «склеивают» слова: What can I get you звучит как «уоткэнайгечу». Не пугайтесь — к этому привыкают на слух, здесь и потренируйтесь.',
    ansTrain: 'Тренироваться на слух', ans_food: 'Кафе', ans_shop: 'Магазин', ans_taxi: 'Такси и Uber', ans_people: 'Люди',
    voiceF: 'говорит женщина', voiceM: 'говорит мужчина',
    dlgTitle: 'Диалоги по ролям', dlgSub: 'Американец говорит — вы выбираете ответ. Пять реальных сцен: кофейня, ресторан, Uber, магазин и отель.',
    dlgShowTr: 'Перевод', dlgRestart: 'Сначала', dlgDone: 'Сцена пройдена!', dlgNext: 'Следующая сцена', dlgStep: 'Шаг', dlgYou: 'Ваш ответ',
    etqTitle: 'Этикет: как звучать дружелюбно', etqSub: 'Прямота, привычная по-русски, по-английски звучит грубо. Пара смягчающих слов и улыбка решают больше, чем грамматика.',
    addrTitle: 'Как обращаться к людям', addrCall: 'Пример',
    politeTitle: 'Смягчайте просьбы',
    politeM: 'Прямые команды — Give me…, I want… — по-английски звучат грубо, даже если по-русски это нормально. Начинайте с Can I…, Could you…, Would you mind… и добавляйте please. Так звучит вежливый взрослый.',
    politeF: 'Прямые команды — Give me…, I want… — по-английски звучат грубо, даже если по-русски это нормально. Начинайте с Can I…, Could you…, Would you mind… и добавляйте please. Так звучит вежливый взрослый.',
    waiTitle: 'Small talk — короткая вежливая болтовня', dontTitle: 'Чего не делать', smileTitle: 'Фразы, от которых американцы улыбаются',
    signsTitle: 'Вывески и ценники', signsSub: 'Чтение начинается с улицы: выход, туалет, «не работает», скидка, налог на ценнике. Нажмите на табличку — услышите, как её читают.',
    sg_sign: 'Вывески и знаки', sg_tag: 'Магазин и ценники',
    wordsNav: '',
    trainTitle: 'Тренажёры', trainSub: 'Выберите набор и тренируйтесь пару минут.',
    tabCards: 'Карточки', tabQuiz: 'Викторина', tabTones: 'Интонация', tabTrace: 'Обведи', tabListen: 'На слух', tabSpeak: 'Скажи',
    pool_phrases: 'Фразы', pool_answers: 'Ответы', pool_food: 'Еда', pool_signs: 'Вывески', pool_alpha: 'Алфавит', pool_num: 'Числа', pool_body: 'Тело', pool_verb: 'Глаголы',
    known: 'Выучено', restart: 'Заново', tapFlip: 'Нажмите, чтобы перевернуть',
    again: 'Ещё раз', iKnow: 'Знаю', fcDone: 'Все карточки выучены!',
    score: 'Верно', streak: 'Серия', quizQ: 'Что это значит?',
    hint: 'Подсказка', toneQ: 'Послушайте: это утверждение или вопрос?',
    listenQ: 'Послушайте, что вам говорят, и выберите смысл',
    spHint: 'Скажите фразу вслух: запишите себя и сравните с диктором.', spListen: 'Диктор', spRec: 'Записать', spStop: 'Стоп', spMine: 'Моя запись', spCheck: 'Проверить',
    spListening: 'Говорите…', spHeard: 'Распознано', spR0: 'Пока не похоже — послушайте диктора и попробуйте ещё', spR1: 'Близко! Ещё разок', spR2: 'Отлично, вас поймут!',
    spNote: '«Проверить» — браузер распознаёт вашу речь и сравнивает с фразой. При первом запуске он попросит доступ к микрофону.',
    spNoSR: 'Этот браузер не умеет распознавать речь — запись и сравнение на слух работают. Проверка есть в Chrome, Edge и Safari.',
    spMicErr: 'Нет доступа к микрофону — разрешите его в настройках сайта.', spSrErr: 'Распознавание не сработало: ', spNothing: 'Ничего не расслышал — говорите громче и ближе к микрофону.',
    trSet_up: 'Заглавные', trSet_low: 'Строчные', trSet_dig: 'Цифры',
    trStyle_print: 'Печатный', trStyle_school: 'Школьный', trStyle_hand: 'Рукописный', trStyle_cursive: 'Курсив', trSlant: 'Наклон',
    trSize_l: 'Крупно', trSize_m: 'Средне', trSize_s: 'Мелко', trSize_xs: 'Письмо',
    trSizeHint_l: 'Наглядно, чтобы рассмотреть форму', trSizeHint_m: 'Удобно обводить', trSizeHint_s: 'Мелкие буквы — для стилуса', trSizeHint_xs: 'Размер обычного почерка — стилусом на планшете',
    trHide: 'Без подсказки', trProp: 'Пропись', trCheck: 'Оценить',
    trHintProp: 'Пропись: обведите образец в первой клетке и повторите букву в каждой. Оценка — когда заполнены все {total}.', trPropLeft: 'Заполнено {n} из {total} — допишите букву в остальных клетках',
    trHint: 'Обведите по серым линиям — пальцем, мышкой или стилусом, затем «Оценить».', trHintHidden: 'Напишите по памяти, затем «Оценить» — шаблон появится.',
    trEmpty: 'Сначала обведите символ', trCover: 'Обведено', trPrec: 'Точность',
    trR0: 'Ещё разок', trR1: 'Неплохо', trR2: 'Хорошо', trR3: 'Отлично!',
    trLegend: 'Зелёный — попали, красный — пропустили, оранжевый — мимо линий.',
    trTip: 'Американские дети сначала пишут печатными буквами, а курсиву (cursive) учатся во 2–3 классе. Буквы ведут сверху вниз, круглые — против часовой стрелки.',
    tvTitle: 'самых частых глаголов', tvSub: 'Отобраны по частоте в живой американской речи: субтитрах фильмов, соцсетях и форумах. Под глаголом — неправильные формы, если они есть. Нажмите на слово или пример, чтобы услышать.',
    tvVerb: 'Глагол', tvMeaning: 'Значение', tvExample: 'Как говорят', tvFreq: 'Частота', tvSearch: 'Поиск: go, есть, buy…', tvMore: 'Показать все', tvLess: 'Свернуть',
    tvSource: 'Частота — употреблений на миллион слов по всем формам глагола (go, goes, went, gone, going), данные <a class="underline hover:text-white" href="https://github.com/rspeer/wordfreq" target="_blank" rel="noopener">wordfreq</a>: субтитры фильмов, Reddit, Twitter, книги и Википедия. Слова-омонимы (like, show, order, play) частично завышены.',
    outro: 'Так американцы прощаются в магазине, в кафе и с водителем. Вернитесь завтра и пройдите тренажёры ещё раз — повторение решает всё.',
    footer: 'Озвучка — нейроголоса Ava и Andrew, американский английский',
    noVoice: 'В браузере не найден английский голос.'
  }
};

/* ================= PHRASES ================= */
// th = English text, lat = IPA (US), cyr = reading in Russian letters, ru = meaning, tip = [ru], bill = shown in the bill block
const CATS = [
  ['greet', 'hand'], ['polite', 'heart-handshake'], ['bye', 'door-open'], ['food', 'utensils'], ['travel', 'car-taxi-front'],
  ['hotel', 'bed-double'], ['meet', 'users'], ['time', 'clock'], ['help', 'siren'], ['survive', 'life-buoy']
];
const PH = [
  { c: 'greet', th: 'Hi!', lat: 'haɪ', cyr: 'хай', ru: 'Привет!', tip: ['Самое обычное приветствие — с кем угодно, от кассира до начальника.'] },
  { c: 'greet', th: 'Hey, how’s it going?', lat: 'heɪ, haʊz ɪt ˈɡoʊɪŋ', cyr: 'хэй, хаузыт гоуин?', ru: 'Привет, как дела?', tip: ['Это приветствие, а не вопрос. Ответ: Good, you? — подробности не нужны.'] },
  { c: 'greet', th: 'Good, thanks! How about you?', lat: 'ɡʊd, θæŋks! haʊ əˈbaʊt juː', cyr: 'гуд, сэнкс! хау эбаут ю?', ru: 'Хорошо, спасибо! А у вас?', tip: ['th в thanks — кончик языка между зубами и выдох. Не «с» и не «ф».'] },
  { c: 'greet', th: 'Nice to meet you.', lat: 'naɪs tə ˈmiːt juː', cyr: 'найс ту мит ю', ru: 'Приятно познакомиться', tip: ['При следующей встрече говорят уже Nice to see you.'] },
  { c: 'greet', th: 'What’s up?', lat: 'wʌts ʌp', cyr: 'уотс ап?', ru: 'Как жизнь? Что нового?', tip: ['С друзьями. Ответ: Not much, you?'] },
  { c: 'greet', th: 'Good morning!', lat: 'ɡʊd ˈmɔːrnɪŋ', cyr: 'гуд морнин!', ru: 'Доброе утро!' },
  { c: 'polite', th: 'Thank you so much!', lat: 'ˈθæŋk juː soʊ mʌtʃ', cyr: 'сэнк ю соу мач!', ru: 'Большое спасибо!' },
  { c: 'polite', th: 'I appreciate it.', lat: 'aɪ əˈpriːʃieɪt ɪt', cyr: 'ай эпришиэйт ит', ru: 'Я очень ценю', tip: ['Тёплое «спасибо» за помощь — американцы говорят его постоянно.'] },
  { c: 'polite', th: 'Could you help me, please?', lat: 'kʊd jə help mi pliːz', cyr: 'куд ю хэлп ми, плиз?', ru: 'Не могли бы вы помочь?', tip: ['Could you… — самый вежливый способ попросить.'] },
  { c: 'polite', th: 'Excuse me.', lat: 'ɪkˈskjuːz mi', cyr: 'икскьюз ми', ru: 'Извините (обратиться, пройти)', tip: ['Чтобы привлечь внимание или пройти. Если виноваты — Sorry.'] },
  { c: 'polite', th: 'Sorry!', lat: 'ˈsɑːri', cyr: 'сари!', ru: 'Простите!', tip: ['Задели кого-то в толпе — Sorry! Американцы говорят это рефлекторно.'] },
  { c: 'polite', th: 'No worries.', lat: 'noʊ ˈwɝːiz', cyr: 'ноу уóриз', ru: 'Ничего страшного' },
  { c: 'polite', th: 'You’re welcome.', lat: 'jʊr ˈwelkəm', cyr: 'юр уэлкам', ru: 'Пожалуйста (в ответ на спасибо)', tip: ['В жизни чаще слышно No problem или Sure.'] },
  { c: 'bye', th: 'Bye!', lat: 'baɪ', cyr: 'бай!', ru: 'Пока!' },
  { c: 'bye', th: 'See you later!', lat: 'ˈsiː jə ˈleɪɾɚ', cyr: 'си ю лэйдэр!', ru: 'Увидимся!', tip: ['Говорят, даже если встречаться не собираются, — это просто «пока». t в later звучит почти как «д».'] },
  { c: 'bye', th: 'See you tomorrow!', lat: 'ˈsiː jə təˈmɑːroʊ', cyr: 'си ю тумароу!', ru: 'До завтра!' },
  { c: 'bye', th: 'See you tonight!', lat: 'ˈsiː jə təˈnaɪt', cyr: 'си ю тунайт!', ru: 'До вечера!', tip: ['Про сегодняшний вечер — tonight, а не this evening: так проще и живее.'] },
  { c: 'bye', th: 'Have a good night!', lat: 'hæv ə ˈɡʊd naɪt', cyr: 'хэв э гуд найт!', ru: 'Хорошего вечера!', tip: ['Американцы прощаются так уже с вечера: в магазине, на работе. Have a good evening звучит официальнее.'] },
  { c: 'bye', th: 'Good night!', lat: 'ɡʊd ˈnaɪt', cyr: 'гуд найт!', ru: 'Доброй ночи! / Спокойной ночи!', tip: ['Только на прощание, не как приветствие. Близким — Night! или Sleep tight!'] },
  { c: 'bye', th: 'Have a good one!', lat: 'hæv ə ˈɡʊd wʌn', cyr: 'хэв э гуд уан!', ru: 'Всего хорошего!', tip: ['Универсальное прощание с продавцом, официантом, водителем.'] },
  { c: 'bye', th: 'Have a nice day!', lat: 'hæv ə naɪs deɪ', cyr: 'хэв э найс дэй!', ru: 'Хорошего дня!' },
  { c: 'bye', th: 'Take care!', lat: 'teɪk ker', cyr: 'тэйк кэр!', ru: 'Береги себя! / Всего доброго' },
  { c: 'bye', th: 'Maybe next time!', lat: 'ˈmeɪbi nekst taɪm', cyr: 'мэйби нэкст тайм!', ru: 'Может, в следующий раз', tip: ['Мягкий отказ от приглашения или покупки.'] },
  { c: 'bye', th: 'Talk to you soon!', lat: 'tɔːk tə jə suːn', cyr: 'ток ту ю сун!', ru: 'Ещё спишемся / созвонимся!' },
  { c: 'food', th: 'A table for two, please.', lat: 'ə ˈteɪbəl fɚ tuː, pliːz', cyr: 'э тэйбл фор ту, плиз', ru: 'Столик на двоих, пожалуйста', tip: ['В ресторанах ждут у входа, пока не посадят: Please wait to be seated.'] },
  { c: 'food', th: 'Can I see the menu?', lat: 'kən aɪ ˈsiː ðə ˈmenjuː', cyr: 'кэн ай си зэ мэнью?', ru: 'Можно меню?', tip: ['th в the — звонкий межзубный звук: кончик языка между зубами, голос включён.'] },
  { c: 'food', th: 'Can I get a coffee?', lat: 'kən aɪ ˈɡet ə ˈkɑːfi', cyr: 'кэн ай гет э кафи?', ru: 'Можно кофе?', tip: ['Can I get… — так заказывают американцы. Give me… звучит грубо.'] },
  { c: 'food', th: 'What do you recommend?', lat: 'wʌt də jə ˌrekəˈmend', cyr: 'уот ду ю рэкэмэнд?', ru: 'Что посоветуете?' },
  { c: 'food', th: 'I’m allergic to nuts.', lat: 'aɪm əˈlɝːdʒɪk tə nʌts', cyr: 'айм элёрджик ту натс', ru: 'У меня аллергия на орехи' },
  { c: 'food', th: 'Just water, please.', lat: 'dʒʌst ˈwɑːɾɚ, pliːz', cyr: 'джаст уадэр, плиз', ru: 'Просто воды, пожалуйста', tip: ['Вода из-под крана со льдом — бесплатно. water в Америке звучит «уадэр».'] },
  { c: 'food', th: 'For here.', lat: 'fɚ hɪr', cyr: 'фор хир', ru: 'Здесь (поем на месте)' },
  { c: 'food', th: 'To go, please.', lat: 'tə ɡoʊ, pliːz', cyr: 'ту гоу, плиз', ru: 'С собой, пожалуйста' },
  { c: 'food', th: 'It was delicious!', lat: 'ɪt wəz dɪˈlɪʃəs', cyr: 'ит уоз дэлишэс!', ru: 'Было очень вкусно!' },
  { c: 'food', bill: 'receipt', th: 'Can we get the check?', lat: 'kən wi ɡet ðə tʃek', cyr: 'кэн уи гет зэ чэк?', ru: 'Счёт, пожалуйста', tip: ['В США — check, а не bill. Официант часто сам приносит счёт, когда видит, что вы закончили.'] },
  { c: 'food', bill: 'split', th: 'Can we split the check?', lat: 'kən wi splɪt ðə tʃek', cyr: 'кэн уи сплит зэ чэк?', ru: 'Можно раздельный счёт?', tip: ['Или: Separate checks, please. Пополам на двоих — Let’s split it.'] },
  { c: 'food', bill: 'merge', th: 'All on one check, please.', lat: 'ɔːl ɑːn wʌn tʃek, pliːz', cyr: 'ол он уан чэк, плиз', ru: 'Всё одним счётом', tip: ['Удобно, если платит один, а остальные переведут ему через Venmo или Zelle.'] },
  { c: 'food', bill: 'credit-card', th: 'Do you take cards?', lat: 'duː jə teɪk kɑːrdz', cyr: 'ду ю тэйк кардз?', ru: 'Можно картой?', tip: ['Почти везде да. Бесконтактная оплата — tap to pay.'] },
  { c: 'food', bill: 'gift', th: 'It’s on me.', lat: 'ɪts ɑːn mi', cyr: 'итс он ми', ru: 'Я угощаю', tip: ['Ещё вариант: I got this — «я заплачу».'] },
  { c: 'food', bill: 'coins', th: 'Keep the change.', lat: 'kiːp ðə tʃeɪndʒ', cyr: 'кип зэ чэйндж', ru: 'Сдачи не надо', tip: ['Чаевые 18–20% — обязательная часть счёта в ресторане, а не бонус. Официанты живут на них.'] },
  { c: 'travel', th: 'Where’s the restroom?', lat: 'werz ðə ˈrestruːm', cyr: 'уэрз зэ рэструм?', ru: 'Где туалет?', tip: ['В США говорят restroom или bathroom. Toilet звучит грубовато — это сам унитаз.'] },
  { c: 'travel', th: 'How do I get to the airport?', lat: 'haʊ də aɪ ˈɡet tə ði ˈerpɔːrt', cyr: 'хау ду ай гет ту зи эрпорт?', ru: 'Как добраться до аэропорта?' },
  { c: 'travel', th: 'Is it far from here?', lat: 'ɪz ɪt fɑːr frəm hɪr', cyr: 'из ит фар фром хир?', ru: 'Это далеко отсюда?' },
  { c: 'travel', th: 'Which way is downtown?', lat: 'wɪtʃ weɪ ɪz ˌdaʊnˈtaʊn', cyr: 'уич уэй из даунтаун?', ru: 'Как пройти в центр?', tip: ['Downtown — деловой центр города.'] },
  { c: 'travel', th: 'Can you drop me off here?', lat: 'kən jə drɑːp mi ɔːf hɪr', cyr: 'кэн ю дроп ми оф хир?', ru: 'Высадите меня здесь' },
  { c: 'travel', th: 'How much is a ticket?', lat: 'haʊ mʌtʃ ɪz ə ˈtɪkɪt', cyr: 'хау мач из э тикит?', ru: 'Сколько стоит билет?' },
  { c: 'travel', th: 'Turn left.', lat: 'tɝːn left', cyr: 'тёрн лэфт', ru: 'Налево' },
  { c: 'travel', th: 'Turn right.', lat: 'tɝːn raɪt', cyr: 'тёрн райт', ru: 'Направо' },
  { c: 'travel', th: 'Go straight.', lat: 'ɡoʊ streɪt', cyr: 'гоу стрэйт', ru: 'Прямо' },
  { c: 'hotel', th: 'I have a reservation.', lat: 'aɪ hæv ə ˌrezɚˈveɪʃən', cyr: 'ай хэв э рэзэрвэйшн', ru: 'У меня бронь' },
  { c: 'hotel', th: 'What time is checkout?', lat: 'wʌt taɪm ɪz ˈtʃekaʊt', cyr: 'уот тайм из чэкаут?', ru: 'Во сколько выезд?' },
  { c: 'hotel', th: 'What’s the Wi-Fi password?', lat: 'wʌts ðə ˈwaɪfaɪ ˈpæswɝːd', cyr: 'уотс зэ уайфай пэсуорд?', ru: 'Какой пароль от вайфая?' },
  { c: 'hotel', th: 'The AC isn’t working.', lat: 'ði ˌeɪˈsiː ˈɪzənt ˈwɝːkɪŋ', cyr: 'зи эй-си изнт уоркин', ru: 'Кондиционер не работает', tip: ['AC — так в США называют кондиционер.'] },
  { c: 'hotel', th: 'Could I get some extra towels?', lat: 'kʊd aɪ ɡet səm ˈekstrə ˈtaʊəlz', cyr: 'куд ай гет сам экстра тауэлз?', ru: 'Можно ещё полотенец?' },
  { c: 'hotel', th: 'Can I leave my bags here?', lat: 'kən aɪ liːv maɪ bæɡz hɪr', cyr: 'кэн ай лив май бэгз хир?', ru: 'Можно оставить вещи?' },
  { c: 'hotel', th: 'Is breakfast included?', lat: 'ɪz ˈbrekfəst ɪnˈkluːdɪd', cyr: 'из брэкфаст инклудид?', ru: 'Завтрак включён?' },
  { c: 'meet', th: 'What’s your name?', lat: 'wʌts jɚ neɪm', cyr: 'уотс ёр нэйм?', ru: 'Как тебя зовут?' },
  { c: 'meet', th: 'I’m Alex.', lat: 'aɪm ˈælɪks', cyr: 'айм Алекс', ru: 'Меня зовут Алекс', tip: ['Американцы представляются коротко: I’m + имя. My name is… звучит официальнее.'] },
  { c: 'meet', th: 'Where are you from?', lat: 'wer ɚ jə frʌm', cyr: 'уэр ар ю фром?', ru: 'Откуда ты?' },
  { c: 'meet', th: 'I’m from Russia.', lat: 'aɪm frəm ˈrʌʃə', cyr: 'айм фром раша', ru: 'Я из России' },
  { c: 'meet', th: 'What do you do?', lat: 'wʌt də jə duː', cyr: 'уот ду ю ду?', ru: 'Кем работаешь?', tip: ['Это вопрос о работе, а не «что делаешь сейчас».'] },
  { c: 'meet', th: 'Could you say that again?', lat: 'kʊd jə seɪ ðæt əˈɡen', cyr: 'куд ю сэй зэт эгэн?', ru: 'Повторите, пожалуйста' },
  { c: 'meet', th: 'Could you speak a little slower?', lat: 'kʊd jə spiːk ə ˈlɪɾəl ˈsloʊɚ', cyr: 'куд ю спик э лидл слоуэр?', ru: 'Говорите помедленнее, пожалуйста' },
  { c: 'meet', th: 'Do you want to grab a coffee?', lat: 'də jə ˈwɑnə ɡræb ə ˈkɑːfi', cyr: 'ду ю уона грэб э кафи?', ru: 'Сходим на кофе?', tip: ['want to в речи сливается в wanna — «уона».'] },
  { c: 'meet', th: 'Can I get your number?', lat: 'kən aɪ ɡet jɚ ˈnʌmbɚ', cyr: 'кэн ай гет ёр намбэр?', ru: 'Дашь свой номер?' },
  { c: 'time', th: 'What time is it?', lat: 'wʌt taɪm ɪz ɪt', cyr: 'уот тайм из ит?', ru: 'Который час?', tip: ['Время 12-часовое: 2 pm — два часа дня, 9 am — девять утра.'] },
  { c: 'time', th: 'now', lat: 'naʊ', cyr: 'нау', ru: 'сейчас' },
  { c: 'time', th: 'today', lat: 'təˈdeɪ', cyr: 'тудэй', ru: 'сегодня' },
  { c: 'time', th: 'tomorrow', lat: 'təˈmɑːroʊ', cyr: 'тумароу', ru: 'завтра' },
  { c: 'time', th: 'yesterday', lat: 'ˈjestɚdeɪ', cyr: 'йестэрдэй', ru: 'вчера' },
  { c: 'time', th: 'morning, afternoon, evening', lat: 'ˈmɔːrnɪŋ · ˌæftɚˈnuːn · ˈiːvnɪŋ', cyr: 'морнин · афтэрнун · ивнин', ru: 'утро · день · вечер' },
  { c: 'time', th: 'Just a second.', lat: 'dʒʌst ə ˈsekənd', cyr: 'джаст э сэкэнд', ru: 'Секундочку' },
  { c: 'time', th: 'How long does it take?', lat: 'haʊ lɔːŋ dʌz ɪt teɪk', cyr: 'хау лонг даз ит тэйк?', ru: 'Сколько времени это займёт?' },
  { c: 'help', th: 'Help!', lat: 'help', cyr: 'хэлп!', ru: 'Помогите!' },
  { c: 'help', th: 'Call nine one one!', lat: 'kɔːl ˌnaɪn wʌn ˈwʌn', cyr: 'кол найн уан уан!', ru: 'Звоните 911!', tip: ['911 — единый номер: полиция, скорая, пожарные. Читается по цифрам: nine-one-one.'] },
  { c: 'help', th: 'I need a doctor.', lat: 'aɪ niːd ə ˈdɑːktɚ', cyr: 'ай нид э доктэр', ru: 'Мне нужен врач' },
  { c: 'help', th: 'Where’s the nearest hospital?', lat: 'werz ðə ˈnɪrɪst ˈhɑːspɪɾəl', cyr: 'уэрз зэ нириэст хоспидл?', ru: 'Где ближайшая больница?', tip: ['Скорая и больница в США очень дорогие — нужна медицинская страховка.'] },
  { c: 'help', th: 'I lost my wallet.', lat: 'aɪ lɔːst maɪ ˈwɑːlɪt', cyr: 'ай лост май уолит', ru: 'Я потерял кошелёк' },
  { c: 'help', th: 'Someone stole my phone.', lat: 'ˈsʌmwʌn stoʊl maɪ foʊn', cyr: 'самуан стоул май фоун', ru: 'У меня украли телефон' },
  { c: 'help', th: 'I need to contact my embassy.', lat: 'aɪ niːd tə ˈkɑːntækt maɪ ˈembəsi', cyr: 'ай нид ту контэкт май эмбэси', ru: 'Мне нужно связаться с посольством' },
  { c: 'survive', th: 'I don’t understand.', lat: 'aɪ doʊnt ˌʌndɚˈstænd', cyr: 'ай доунт андэрстэнд', ru: 'Я не понимаю' },
  { c: 'survive', th: 'Sorry, my English isn’t very good.', lat: 'ˈsɑːri, maɪ ˈɪŋɡlɪʃ ˈɪzənt ˈveri ɡʊd', cyr: 'сари, май инглиш изнт вэри гуд', ru: 'Извините, я плохо говорю по-английски', tip: ['Скажите это первым — собеседник сам заговорит медленнее.'] },
  { c: 'survive', th: 'How do you say this in English?', lat: 'haʊ də jə seɪ ðɪs ɪn ˈɪŋɡlɪʃ', cyr: 'хау ду ю сэй зис ин инглиш?', ru: 'Как это по-английски?', tip: ['Покажите на предмет — словарь пополняется сам.'] },
  { c: 'survive', th: 'Yeah.', lat: 'jeə', cyr: 'йэа', ru: 'Да (разговорное)', tip: ['В речи yes звучит официально — чаще говорят yeah или sure.'] },
  { c: 'survive', th: 'No, thanks.', lat: 'noʊ, θæŋks', cyr: 'ноу, сэнкс', ru: 'Нет, спасибо', tip: ['Одно No звучит резко. Всегда добавляйте thanks.'] },
  { c: 'survive', th: 'Sounds good!', lat: 'saʊndz ɡʊd', cyr: 'саундз гуд!', ru: 'Отлично, договорились!' },
  { c: 'survive', th: 'How much is this?', lat: 'haʊ mʌtʃ ɪz ðɪs', cyr: 'хау мач из зис?', ru: 'Сколько это стоит?', tip: ['К цене на ценнике на кассе добавят налог — sales tax, обычно 5–10%.'] },
  { c: 'survive', th: 'I’m just looking, thanks.', lat: 'aɪm dʒʌst ˈlʊkɪŋ, θæŋks', cyr: 'айм джаст лукин, сэнкс', ru: 'Я просто смотрю, спасибо', tip: ['Ответ продавцу на Can I help you?'] }
].map(x => ({ ...x, np: 1 }));

// no polite particles or gendered pronouns in English
const PARTICLE = { m: { th: '', lat: '', cyr: '' }, f: { th: '', lat: '', cyr: '' } };

/* ================= SOUNDS & INTONATION ================= */
const SOUNDS = [
  { sym: 'θ', th: 'think', lat: 'θɪŋk', ru: { t: 'Глухое th', d: 'Кончик языка между зубами, выдохните. Не «с» и не «ф» — иначе think превращается в sink.', w: 'думать' } },
  { sym: 'ð', th: 'this', lat: 'ðɪs', ru: { t: 'Звонкое th', d: 'То же положение языка, но с голосом. Звучит в the, this, that, mother — очень частый звук.', w: 'это' } },
  { sym: 'w', th: 'water', lat: 'ˈwɑːɾɚ', ru: { t: 'w — не «в»', d: 'Губы трубочкой, как для «у», и сразу раскрыть. Зубы губы не касаются: wine ≠ vine.', w: 'вода' } },
  { sym: 'æ', th: 'cat', lat: 'kæt', ru: { t: 'Широкое «э»', d: 'Рот открыт широко, как для «а», а произносите «э». cat ≠ cut ≠ bed.', w: 'кошка' } },
  { sym: 'ɪ / iː', th: 'ship, sheep', lat: 'ʃɪp · ʃiːp', ru: { t: 'Короткое и долгое «и»', d: 'ship — короткий звук между «и» и «ы», sheep — долгое улыбчивое «и». Перепутаете — получится другое слово.', w: 'корабль · овца' } },
  { sym: 'r', th: 'red', lat: 'red', ru: { t: 'Американское r', d: 'Кончик языка загнут назад и ничего не касается. Не раскатывайте. В конце слова (car, water) r тоже слышно.', w: 'красный' } },
  { sym: 'ŋ', th: 'sing', lat: 'sɪŋ', ru: { t: 'Носовое ng', d: 'Один звук, задняя часть языка у нёба, воздух через нос. «г» в конце не произносите: sing, а не «синг».', w: 'петь' } },
  { sym: 'h', th: 'hat', lat: 'hæt', ru: { t: 'h — просто выдох', d: 'Лёгкий выдох, как будто греете руки. Русское «х» слишком грубое.', w: 'шляпа' } },
  { sym: 'ɾ', th: 'better', lat: 'ˈbeɾɚ', ru: { t: 'Американское t', d: 'Между гласными t звучит как быстрое «д»: water — «уадэр», better — «бэдэр». Так говорят все в США.', w: 'лучше' } }
];
// intonation patterns: th = example, mark = arrow
const TONES = [
  { mark: '↘', th: 'I’m from Russia.', lat: 'утверждение', path: 'M6 10 Q30 8 54 28', ru: { n: 'Понижение', d: 'Утверждения и команды — голос уходит вниз в конце.', w: 'Я из России.' } },
  { mark: '↘', th: 'Where are you from?', lat: 'вопрос со словом', path: 'M6 12 Q36 6 54 28', ru: { n: 'Тоже вниз', d: 'Вопрос с what, where, how — тоже понижение. Это не ошибка.', w: 'Откуда вы?' } },
  { mark: '↗', th: 'Are you from Russia?', lat: 'вопрос да / нет', path: 'M6 26 Q30 26 54 6', ru: { n: 'Повышение', d: 'Вопрос «да или нет» — голос поднимается в конце.', w: 'Вы из России?' } },
  { mark: '↘↗', th: 'Well, maybe.', lat: 'сомнение, вежливость', path: 'M6 8 Q30 34 54 8', ru: { n: 'Вниз и вверх', d: 'Сомнение, недоговорённость, вежливое «ну…».', w: 'Ну, может быть.' } },
  { mark: '↗↘', th: 'Oh, really!', lat: 'удивление, восторг', path: 'M6 26 Q30 0 54 28', ru: { n: 'Вверх и вниз', d: 'Удивление и эмоции — голос взлетает и падает.', w: 'Да ну, правда!' } }
];
// statement vs question drill for the intonation trainer: k = index in INT_OPTS
const INT_OPTS = [0, 2];
const INT_DRILL = ['You’re from Russia', 'It’s ready', 'You like coffee', 'She’s here', 'That’s the price', 'We’re late', 'You’re a teacher', 'It’s open']
  .flatMap(s => [{ th: s + '.', k: 0 }, { th: s + '?', k: 1 }]);
// noun / verb stress pairs: [noun phrase, noun syllables, verb phrase, verb syllables, ru noun, ru verb]
const STRESS = [
  ['a record', 'REC·ord', 'to record', 're·CORD', 'запись', 'записывать'],
  ['a present', 'PRES·ent', 'to present', 'pre·SENT', 'подарок', 'представлять'],
  ['an object', 'OB·ject', 'to object', 'ob·JECT', 'предмет', 'возражать'],
  ['a permit', 'PER·mit', 'to permit', 'per·MIT', 'разрешение', 'разрешать'],
  ['an increase', 'IN·crease', 'to increase', 'in·CREASE', 'рост', 'увеличивать'],
  ['a contract', 'CON·tract', 'to contract', 'con·TRACT', 'контракт', 'сокращаться'],
  ['a desert', 'DES·ert', 'to desert', 'de·SERT', 'пустыня', 'покидать'],
  ['the produce', 'PRO·duce', 'to produce', 'pro·DUCE', 'овощи и фрукты', 'производить']
];

/* ================= ALPHABET ================= */
// letter | name IPA | name in Russian letters | v/c/s | how it reads | example | example IPA | example ru
const LETTERS = `A|eɪ|эй|v|Короткое [æ] — cat; «алфавитное» [eɪ] — cake|apple|ˈæpəl|яблоко
B|biː|би|c|[b]|boy|bɔɪ|мальчик
C|siː|си|c|[k] перед a, o, u — cat; [s] перед e, i, y — city|city|ˈsɪɾi|город
D|diː|ди|c|[d] — язык у дёсен, а не у зубов|dog|dɔːɡ|собака
E|iː|и|v|Короткое [e] — bed; долгое [iː] — me|egg|eɡ|яйцо
F|ef|эф|c|[f]|fish|fɪʃ|рыба
G|dʒiː|джи|c|[ɡ] — go; перед e, i часто [dʒ] — gym|go|ɡoʊ|идти
H|eɪtʃ|эйч|c|[h] — лёгкий выдох, не русское «х»|hat|hæt|шляпа
I|aɪ|ай|v|Короткое [ɪ] — sit; «алфавитное» [aɪ] — time|ice|aɪs|лёд
J|dʒeɪ|джей|c|[dʒ] — «дж»|juice|dʒuːs|сок
K|keɪ|кей|c|[k] с лёгким выдохом; перед n не читается — knife|key|kiː|ключ
L|el|эл|c|[l]; в конце слова «тёмное», глубже — ball|lemon|ˈlemən|лимон
M|em|эм|c|[m]|milk|mɪlk|молоко
N|en|эн|c|[n]|name|neɪm|имя
O|oʊ|оу|v|Короткое [ɑː] — hot (в США почти «а»); [oʊ] — go|orange|ˈɔːrɪndʒ|апельсин
P|piː|пи|c|[p] с выдохом в начале слова|pizza|ˈpiːtsə|пицца
Q|kjuː|кью|c|Почти всегда qu — [kw]: queen|queen|kwiːn|королева
R|ɑːr|ар|c|Американское [r]: язык загнут назад, ничего не касается|red|red|красный
S|es|эс|c|[s]; между гласными часто [z] — rose|sun|sʌn|солнце
T|tiː|ти|c|[t]; между гласными в США — быстрое «д»: water|tea|tiː|чай
U|juː|ю|v|Короткое [ʌ] — cup; [juː] — use; [ʊ] — put|umbrella|ʌmˈbrelə|зонт
V|viː|ви|c|[v] — верхние зубы на нижнюю губу|van|væn|фургон
W|ˈdʌbəljuː|дабл-ю|s|[w] — губы трубочкой, как «уэ», не «в»|water|ˈwɑːɾɚ|вода
X|eks|экс|c|[ks] — box; в начале слова [z] — xylophone|box|bɑːks|коробка
Y|waɪ|уай|s|В начале — согласный [j]: yes; в конце — гласный: my, happy|yes|jes|да
Z|ziː|зи|c|[z]. В США буква называется «зи», в Британии — «зэд»|zoo|zuː|зоопарк`.split('\n').map(r => {
  const [ch, name, nameRu, cls, sound, word, wordIpa, wordRu] = r.split('|');
  return { ch, name, nameRu, cls, sound, word, wordIpa, wordRu, say: `${ch}, as in ${word}` };
});
const CLS_COLOR = { v: 'bg-accent', c: 'bg-zinc-500', s: 'bg-sky-400' };
// letter sounds: [example word, IPA, what it is]
const VOWELS = [
  ['cat', 'æ', 'a короткое — широкое «э»'], ['cake', 'eɪ', 'a «алфавитное» — «эй»'], ['car', 'ɑːr', 'ar — «ар»'], ['bed', 'e', 'e короткое — «э»'],
  ['me', 'iː', 'e долгое — «и»'], ['sit', 'ɪ', 'i короткое — между «и» и «ы»'], ['time', 'aɪ', 'i «алфавитное» — «ай»'], ['hot', 'ɑː', 'o короткое — в США почти «а»'],
  ['go', 'oʊ', 'o — «оу»'], ['cup', 'ʌ', 'u короткое — между «а» и «э»'], ['use', 'juː', 'u — «ю»'], ['put', 'ʊ', 'u — короткое «у»'],
  ['bird', 'ɝː', 'ir, er, ur — «ё» без «й»'], ['about', 'ə', 'безударная гласная — нейтральное «э»'], ['my', 'aɪ', 'y в конце — «ай»'], ['happy', 'i', 'y в конце длинного слова — «и»']
];
// digraphs: [letters, example, IPA]
const DIGRAPHS = [
  ['sh', 'ship', 'ʃ'], ['ch', 'chair', 'tʃ'], ['th', 'think', 'θ · ð'], ['ph', 'phone', 'f'], ['wh', 'what', 'w'], ['ck', 'back', 'k'],
  ['ng', 'sing', 'ŋ'], ['qu', 'queen', 'kw'], ['ee', 'see', 'iː'], ['ea', 'eat', 'iː'], ['oo', 'food', 'uː · ʊ'], ['ai', 'rain', 'eɪ'],
  ['ay', 'day', 'eɪ'], ['ow', 'now', 'aʊ · oʊ'], ['ou', 'house', 'aʊ'], ['igh', 'night', 'aɪ']
];
// silent letters: [word, html with the silent letter underlined]
const SILENT = [['knife', '<u>k</u>nife'], ['write', '<u>w</u>rite'], ['lamb', 'lam<u>b</u>'], ['hour', '<u>h</u>our'], ['walk', 'wa<u>l</u>k'], ['night', 'ni<u>gh</u>t'], ['listen', 'lis<u>t</u>en'], ['cake', 'cak<u>e</u>']];

/* ================= WORDS ================= */
const NUM = [
  ['zero', 'ˈzɪroʊ', 'зироу', '0'], ['one', 'wʌn', 'уан', '1'], ['two', 'tuː', 'ту', '2'], ['three', 'θriː', 'сри', '3'], ['four', 'fɔːr', 'фор', '4'],
  ['five', 'faɪv', 'файв', '5'], ['six', 'sɪks', 'сикс', '6'], ['seven', 'ˈsevən', 'сэвэн', '7'], ['eight', 'eɪt', 'эйт', '8'], ['nine', 'naɪn', 'найн', '9'],
  ['ten', 'ten', 'тэн', '10'], ['eleven', 'ɪˈlevən', 'илэвэн', '11'], ['twelve', 'twelv', 'твэлв', '12'], ['thirteen', 'θɝːˈtiːn', 'сётИН', '13'], ['thirty', 'ˈθɝːɾi', 'сЁрди', '30'],
  ['fifteen', 'fɪfˈtiːn', 'фифтИН', '15'], ['fifty', 'ˈfɪfti', 'фИфти', '50'], ['twenty', 'ˈtwenti', 'туэнти', '20'], ['one hundred', 'wʌn ˈhʌndrəd', 'уан хандрэд', '100'], ['one thousand', 'wʌn ˈθaʊzənd', 'уан саузэнд', '1000']
].map(([th, lat, cyr, n]) => ({ th, lat, cyr, ru: n, np: 1 }));
const ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const NUM_RU = { zero: 'зироу', one: 'уан', two: 'ту', three: 'сри', four: 'фор', five: 'файв', six: 'сикс', seven: 'сэвэн', eight: 'эйт', nine: 'найн', ten: 'тэн', eleven: 'илэвэн', twelve: 'твэлв', thirteen: 'сётин', fourteen: 'фортин', fifteen: 'фифтин', sixteen: 'сикстин', seventeen: 'сэвэнтин', eighteen: 'эйтин', nineteen: 'найнтин', twenty: 'туэнти', thirty: 'сёрди', forty: 'форди', fifty: 'фифти', sixty: 'сиксти', seventy: 'сэвэнти', eighty: 'эйди', ninety: 'найнти', hundred: 'хандрэд', thousand: 'саузэнд' };
const sub100 = n => n < 20 ? ONES[n] : TENS[n / 10 | 0] + (n % 10 ? '-' + ONES[n % 10] : '');
// American style, no "and"; parts are played back to back (pre-generated audio chunks)
function engNum(n) {
  if (n === 0) return { th: 'zero', cyr: 'зироу', parts: ['zero'] };
  const parts = [];
  if (n >= 1000) parts.push(sub100(n / 1000 | 0) + ' thousand');
  if (n % 1000 >= 100) parts.push(ONES[(n % 1000) / 100 | 0] + ' hundred');
  if (n % 100) parts.push(sub100(n % 100));
  const th = parts.join(' ');
  return { th, cyr: th.split(/([ -])/).map(w => NUM_RU[w] ?? w).join(''), parts };
}
console.assert(engNum(21).th === 'twenty-one' && engNum(250).th === 'two hundred fifty' && engNum(12345).th === 'twelve thousand three hundred forty-five' && engNum(1000).th === 'one thousand', 'engNum');

const BODY = [
  ['head', 'hed', 'хэд', 'голова'], ['hair', 'her', 'хэр', 'волосы', 1], ['eye', 'aɪ', 'ай', 'глаз'], ['ear', 'ɪr', 'ир', 'ухо'],
  ['nose', 'noʊz', 'ноуз', 'нос'], ['mouth', 'maʊθ', 'маус', 'рот'], ['tooth', 'tuːθ', 'тус', 'зуб'], ['throat', 'θroʊt', 'сроут', 'горло'],
  ['hand', 'hænd', 'хэнд', 'кисть руки'], ['arm', 'ɑːrm', 'арм', 'рука'], ['leg', 'leɡ', 'лэг', 'нога'], ['foot', 'fʊt', 'фут', 'ступня'],
  ['stomach', 'ˈstʌmək', 'стамэк', 'живот'], ['back', 'bæk', 'бэк', 'спина'], ['chest', 'tʃest', 'чэст', 'грудь']
].map(([th, lat, cyr, ru, noPain]) => ({ th, lat, cyr, ru, np: 1, noPain }));
const painPhrase = x => `My ${x.th} hurts.`;

// th, IPA, Russian reading, ru infinitive, ru 1st person
const VERB = [
  ['go', 'ɡoʊ', 'гоу', 'идти, ехать', 'иду'], ['come', 'kʌm', 'кам', 'приходить', 'прихожу'], ['eat', 'iːt', 'ит', 'есть', 'ем'],
  ['drink', 'drɪŋk', 'дринк', 'пить', 'пью'], ['sleep', 'sliːp', 'слип', 'спать', 'сплю'], ['speak English', 'spiːk ˈɪŋɡlɪʃ', 'спик инглиш', 'говорить по-английски', 'говорю по-английски'],
  ['understand', 'ˌʌndɚˈstænd', 'андэрстэнд', 'понимать', 'понимаю'], ['know', 'noʊ', 'ноу', 'знать', 'знаю'], ['like it', 'laɪk ɪt', 'лайк ит', 'любить это', 'люблю это'],
  ['buy it', 'baɪ ɪt', 'бай ит', 'купить это', 'покупаю это'], ['pay', 'peɪ', 'пэй', 'платить', 'плачу'], ['help', 'help', 'хэлп', 'помогать', 'помогаю'],
  ['wait', 'weɪt', 'уэйт', 'ждать', 'жду'], ['work', 'wɝːk', 'уорк', 'работать', 'работаю'], ['drive', 'draɪv', 'драйв', 'водить машину', 'вожу машину'],
  ['cook', 'kʊk', 'кук', 'готовить', 'готовлю'], ['walk', 'wɔːk', 'уок', 'идти пешком', 'хожу пешком']
].map(([th, lat, cyr, ru, r1]) => ({ th, lat, cyr, ru, r1, np: 1 }));
const MODALS = [
  { k: 'none', th: 'I', lat: 'aɪ', cyr: 'ай', ru: v => `Я ${v.r1}` },
  { k: 'want', th: 'I want to', lat: 'aɪ ˈwɑːnt tə', cyr: 'ай уонт ту', ru: v => `Я хочу ${v.ru.split(',')[0]}` },
  { k: 'not', th: 'I don’t', lat: 'aɪ doʊnt', cyr: 'ай доунт', ru: v => `Я не ${v.r1}` },
  { k: 'will', th: 'I’ll', lat: 'aɪl', cyr: 'айл', ru: v => `Я буду ${v.ru.split(',')[0]}` },
  { k: 'can', th: 'I can', lat: 'aɪ kən', cyr: 'ай кэн', ru: v => `Я могу ${v.ru.split(',')[0]}` }
];

// Top verbs by frequency in US English (wordfreq: subtitles, Reddit, Twitter, books, Wikipedia), all forms summed, per million words.
// th | IPA | Russian reading | ru | irregular forms | example | example reading | example ru | per million
const TOPV = `be|biː|би|быть|am, is, are · was, were · been|I’m tired.|айм тайэрд|Я устал.|35524
have|hæv|хэв|иметь|has · had · had|I have a question.|ай хэв э квэсчн|У меня вопрос.|9999
do|duː|ду|делать|does · did · done|What do you do?|уот ду ю ду?|Кем работаешь?|4480
get|ɡet|гет|получать, брать|got · gotten|Can I get a coffee?|кэн ай гет э кафи?|Можно кофе?|3302
like|laɪk|лайк|нравиться||I like it here.|ай лайк ит хир|Мне здесь нравится.|2691
make|meɪk|мэйк|делать, готовить|made · made|Can you make it less spicy?|кэн ю мэйк ит лэс спайси?|Можно менее остро?|2667
go|ɡoʊ|гоу|идти, ехать|went · gone|Let’s go!|лэтс гоу!|Пошли!|2571
say|seɪ|сэй|сказать|said · said|What did you say?|уот дид ю сэй?|Что ты сказал?|2339
see|siː|си|видеть|saw · seen|See you later!|си ю лэйдэр!|Увидимся!|1959
know|noʊ|ноу|знать|knew · known|I don’t know.|ай доунт ноу|Не знаю.|1838
think|θɪŋk|синк|думать|thought · thought|I think so.|ай синк соу|Думаю, да.|1823
take|teɪk|тэйк|брать|took · taken|I’ll take it.|айл тэйк ит|Беру.|1766
use|juːz|юз|пользоваться||Can I use the restroom?|кэн ай юз зэ рэструм?|Можно в туалет?|1648
work|wɝːk|уорк|работать||It doesn’t work.|ит дазнт уорк|Не работает.|1534
want|wɑːnt|уонт|хотеть||Do you want some?|ду ю уонт сам?|Хочешь немного?|1534
come|kʌm|кам|приходить|came · come|Come on in!|кам он ин!|Заходи!|1399
look|lʊk|лук|смотреть, выглядеть||Look at this!|лук эт зис!|Смотри!|1376
need|niːd|нид|нуждаться||I need help.|ай нид хэлп|Мне нужна помощь.|1328
give|ɡɪv|гив|давать|gave · given|Give me a second.|гив ми э сэкэнд|Дай секунду.|1196
find|faɪnd|файнд|находить|found · found|I can’t find it.|ай кэнт файнд ит|Не могу найти.|1165
call|kɔːl|кол|звонить, звать||Call me later.|кол ми лэйдэр|Позвони мне позже.|886
play|pleɪ|плэй|играть||Let’s play!|лэтс плэй!|Давай поиграем!|880
show|ʃoʊ|шоу|показывать|showed · shown|Can you show me?|кэн ю шоу ми?|Покажете?|877
love|lʌv|лав|любить||I love it!|ай лав ит!|Обожаю!|836
tell|tel|тэл|рассказать|told · told|Can you tell me the way?|кэн ю тэл ми зэ уэй?|Подскажете дорогу?|829
feel|fiːl|фил|чувствовать|felt · felt|I feel better.|ай фил бэдэр|Мне лучше.|817
leave|liːv|лив|уходить, оставлять|left · left|I have to leave.|ай хэв ту лив|Мне пора уходить.|793
start|stɑːrt|старт|начинать||When does it start?|уэн даз ит старт?|Когда начало?|793
try|traɪ|трай|пробовать||Can I try it on?|кэн ай трай ит он?|Можно примерить?|790
mean|miːn|мин|иметь в виду|meant · meant|What do you mean?|уот ду ю мин?|Что ты имеешь в виду?|775
live|lɪv|лив|жить||Where do you live?|уэр ду ю лив?|Где ты живёшь?|761
help|help|хэлп|помогать||Can I help you?|кэн ай хэлп ю?|Чем могу помочь?|753
keep|kiːp|кип|держать, оставлять|kept · kept|Keep the change.|кип зэ чэйндж|Сдачи не надо.|673
change|tʃeɪndʒ|чэйндж|менять||Can I change my order?|кэн ай чэйндж май ордэр?|Можно поменять заказ?|654
put|pʊt|пут|класть|put · put|Put it here.|пут ит хир|Положи сюда.|563
talk|tɔːk|ток|разговаривать||Can we talk?|кэн уи ток?|Можем поговорить?|540
ask|æsk|эск|спрашивать||Can I ask you something?|кэн ай эск ю самсин?|Можно спросить?|538
read|riːd|рид|читать|read · read|Can you read this?|кэн ю рид зис?|Прочитаете?|503
open|ˈoʊpən|оупэн|открывать||What time do you open?|уот тайм ду ю оупэн?|Во сколько открываетесь?|487
write|raɪt|райт|писать|wrote · written|Can you write it down?|кэн ю райт ит даун?|Запишете?|480
meet|miːt|мит|встречать|met · met|Nice to meet you.|найс ту мит ю|Приятно познакомиться.|473
let|let|лэт|позволять|let · let|Let me see.|лэт ми си|Дай-ка посмотреть.|464
pay|peɪ|пэй|платить|paid · paid|Can I pay by card?|кэн ай пэй бай кард?|Можно картой?|457
lose|luːz|луз|терять|lost · lost|I lost my keys.|ай лост май киз|Я потерял ключи.|449
stop|stɑːp|стоп|останавливать||Stop here, please.|стоп хир, плиз|Остановите здесь.|445
order|ˈɔːrdɚ|ордэр|заказывать||Are you ready to order?|ар ю рэди ту ордэр?|Готовы заказать?|428
hear|hɪr|хир|слышать|heard · heard|I can’t hear you.|ай кэнт хир ю|Вас не слышно.|428
bring|brɪŋ|бринг|приносить|brought · brought|Can you bring the check?|кэн ю бринг зэ чэк?|Принесёте счёт?|423
happen|ˈhæpən|хэпэн|случаться||What happened?|уот хэпэнд?|Что случилось?|404
watch|wɑːtʃ|уоч|смотреть, следить||Watch out!|уоч аут!|Осторожно!|389
wait|weɪt|уэйт|ждать||Wait a minute.|уэйт э минит|Подожди минутку.|362
buy|baɪ|бай|покупать|bought · bought|Where can I buy a SIM card?|уэр кэн ай бай э сим кард?|Где купить сим-карту?|355
close|kloʊz|клоуз|закрывать||When do you close?|уэн ду ю клоуз?|Во сколько закрываетесь?|346
send|send|сэнд|отправлять|sent · sent|Send me the address.|сэнд ми зи эдрэс|Пришли адрес.|329
learn|lɝːn|лёрн|учить||I’m learning English.|айм лёрнин инглиш|Я учу английский.|308
drive|draɪv|драйв|водить, везти|drove · driven|Can you drive me there?|кэн ю драйв ми зэр?|Отвезёте меня туда?|291
check|tʃek|чэк|проверять||Let me check.|лэт ми чэк|Сейчас проверю.|286
understand|ˌʌndɚˈstænd|андэрстэнд|понимать|understood · understood|Do you understand?|ду ю андэрстэнд?|Понимаешь?|286
speak|spiːk|спик|говорить|spoke · spoken|Do you speak Russian?|ду ю спик рашн?|Говорите по-русски?|284
remember|rɪˈmembɚ|римэмбэр|помнить||I don’t remember.|ай доунт римэмбэр|Не помню.|270
walk|wɔːk|уок|идти пешком||Can I walk there?|кэн ай уок зэр?|Туда можно дойти пешком?|260
eat|iːt|ит|есть|ate · eaten|Let’s eat!|лэтс ит!|Давай поедим!|250
sit|sɪt|сит|сидеть|sat · sat|Can I sit here?|кэн ай сит хир?|Можно сесть здесь?|211
drink|drɪŋk|дринк|пить|drank · drunk|What do you want to drink?|уот ду ю уона дринк?|Что будешь пить?|207
forget|fɚˈɡet|фэргэт|забывать|forgot · forgotten|I forgot.|ай фэргот|Я забыл.|185
sleep|sliːp|слип|спать|slept · slept|Did you sleep well?|дид ю слип уэл?|Хорошо спал?|169`.split('\n').map((r, i) => {
  const [th, lat, cyr, ru, forms, xth, xlat, xru, n] = r.split('|');
  return { rank: i + 1, th, lat, cyr, ru, forms, xth, xlat, xru, en: '', n: +n, np: 1 };
});

/* ================= WHAT AMERICANS SAY TO YOU ================= */
const ANS_CATS = [['food', 'utensils'], ['shop', 'store'], ['taxi', 'car-taxi-front'], ['people', 'users']];
const ANS = [
  { c: 'food', v: 'f', th: 'For here or to go?', lat: 'fɚ hɪr ɚ tə ɡoʊ', cyr: 'фор хир ор ту гоу?', ru: 'Здесь или с собой?', tip: ['Ответ: For here или To go.'] },
  { c: 'food', v: 'm', th: 'What can I get you?', lat: 'wʌt kən aɪ ˈɡetʃə', cyr: 'уоткэнай гечу?', ru: 'Что вам принести?' },
  { c: 'food', v: 'f', th: 'How many in your party?', lat: 'haʊ ˈmeni ɪn jɚ ˈpɑːrɾi', cyr: 'хау мэни ин ёр парди?', ru: 'Сколько вас?', tip: ['party здесь — «компания», а не вечеринка. Ответ: Just two.'] },
  { c: 'food', v: 'm', th: 'Are you ready to order?', lat: 'ɚ jə ˈredi tə ˈɔːrdɚ', cyr: 'ар ю рэди ту ордэр?', ru: 'Готовы заказать?', tip: ['Не готовы: Can I have a few more minutes?'] },
  { c: 'food', v: 'm', th: 'How would you like your steak?', lat: 'haʊ wʊd jə laɪk jɚ steɪk', cyr: 'хау вуд ю лайк ёр стэйк?', ru: 'Какой прожарки стейк?', tip: ['rare — с кровью, medium — средняя, well-done — полностью.'] },
  { c: 'food', v: 'f', th: 'Anything to drink?', lat: 'ˈeniθɪŋ tə drɪŋk', cyr: 'энисин ту дринк?', ru: 'Что-нибудь выпить?' },
  { c: 'food', v: 'f', th: 'How’s everything?', lat: 'haʊz ˈevriθɪŋ', cyr: 'хауз эврисин?', ru: 'Всё ли хорошо?', tip: ['Официант спрашивает мимоходом. Ответ: Great, thanks!'] },
  { c: 'food', v: 'm', th: 'Anything else?', lat: 'ˈeniθɪŋ els', cyr: 'энисин элс?', ru: 'Что-нибудь ещё?', tip: ['Ответ: That’s it, thanks.'] },
  { c: 'food', v: 'f', th: 'Can I get you a box?', lat: 'kən aɪ ˈɡetʃə ə bɑːks', cyr: 'кэн ай гечу э бокс?', ru: 'Упаковать с собой?', tip: ['Недоеденное в США забирают домой — это нормально.'] },
  { c: 'shop', v: 'f', th: 'Can I help you find anything?', lat: 'kən aɪ help jə faɪnd ˈeniθɪŋ', cyr: 'кэн ай хэлп ю файнд энисин?', ru: 'Помочь что-нибудь найти?', tip: ['Ответ: I’m just looking, thanks.'] },
  { c: 'shop', v: 'f', th: 'Did you find everything okay?', lat: 'dɪd jə faɪnd ˈevriθɪŋ oʊˈkeɪ', cyr: 'дид ю файнд эврисин оукэй?', ru: 'Всё нашли?', tip: ['Дежурный вопрос кассира. Ответ: Yes, thanks!'] },
  { c: 'shop', v: 'm', th: 'Do you need a bag?', lat: 'də jə niːd ə bæɡ', cyr: 'ду ю нид э бэг?', ru: 'Пакет нужен?', tip: ['Ответ: Yes, please или No, I’m good.'] },
  { c: 'shop', v: 'f', th: 'Would you like your receipt?', lat: 'wʊd jə laɪk jɚ rɪˈsiːt', cyr: 'вуд ю лайк ёр рисит?', ru: 'Чек нужен?', tip: ['В receipt буква p не читается: «рисит».'] },
  { c: 'shop', v: 'm', th: 'Debit or credit?', lat: 'ˈdebɪt ɚ ˈkredɪt', cyr: 'дэбит ор крэдит?', ru: 'Дебетовая или кредитная?', tip: ['Спрашивают тип карты. Для иностранной карты обычно отвечают credit.'] },
  { c: 'shop', v: 'm', th: 'Can I see some ID?', lat: 'kən aɪ siː səm ˌaɪˈdiː', cyr: 'кэн ай си сам ай-ди?', ru: 'Можно документ?', tip: ['Спросят при покупке алкоголя, даже если вам явно больше 21.'] },
  { c: 'shop', v: 'f', th: 'You’re all set!', lat: 'jʊr ɔːl set', cyr: 'юр ол сэт!', ru: 'Всё готово, можете идти!' },
  { c: 'taxi', v: 'm', th: 'Where to?', lat: 'wer tuː', cyr: 'уэр ту?', ru: 'Куда едем?' },
  { c: 'taxi', v: 'm', th: 'Are you Alex?', lat: 'ɚ jə ˈælɪks', cyr: 'ар ю Алекс?', ru: 'Вы Алекс?', tip: ['Водитель Uber сверяет имя. Проверьте и номер машины в приложении.'] },
  { c: 'taxi', v: 'm', th: 'Buckle up, please.', lat: 'ˈbʌkəl ʌp, pliːz', cyr: 'бакл ап, плиз', ru: 'Пристегнитесь, пожалуйста' },
  { c: 'taxi', v: 'm', th: 'Traffic is pretty bad today.', lat: 'ˈtræfɪk ɪz ˈprɪɾi bæd təˈdeɪ', cyr: 'трэфик из приди бэд тудэй', ru: 'Пробки сегодня так себе', tip: ['Small talk — достаточно ответить Yeah, it is.'] },
  { c: 'taxi', v: 'm', th: 'Here we are.', lat: 'hɪr wi ɑːr', cyr: 'хир уи ар', ru: 'Приехали' },
  { c: 'people', v: 'f', th: 'How’s it going?', lat: 'haʊz ɪt ˈɡoʊɪŋ', cyr: 'хаузыт гоуин?', ru: 'Как дела? (приветствие)', tip: ['Это «привет», а не вопрос. Ответ: Good, you?'] },
  { c: 'people', v: 'm', th: 'Your English is really good!', lat: 'jɚ ˈɪŋɡlɪʃ ɪz ˈrɪli ɡʊd', cyr: 'ёр инглиш из рили гуд!', ru: 'Вы хорошо говорите по-английски!', tip: ['Ответ: Thanks, I’m still learning!'] },
  { c: 'people', v: 'f', th: 'No problem!', lat: 'noʊ ˈprɑːbləm', cyr: 'ноу проблэм!', ru: 'Не за что!', tip: ['Так в США отвечают на thank you чаще, чем You’re welcome.'] },
  { c: 'people', v: 'm', th: 'Have a good one!', lat: 'hæv ə ˈɡʊd wʌn', cyr: 'хэв э гуд уан!', ru: 'Всего хорошего!', tip: ['Ответ: You too!'] },
  { c: 'people', v: 'f', th: 'Sorry, what was that?', lat: 'ˈsɑːri, wʌt wəz ðæt', cyr: 'сари, уот уоз зэт?', ru: 'Простите, что вы сказали?', tip: ['Так переспрашивают сами американцы — и вы тоже можете.'] },
  { c: 'people', v: 'm', th: 'Watch out!', lat: 'wɑːtʃ aʊt', cyr: 'уоч аут!', ru: 'Осторожно!' }
].map(x => ({ ...x, np: 1 }));

/* ================= DIALOGS ================= */
// lat here is the reading in Russian letters; your replies are voiced by the opposite voice to the speaker
const SCENES = [
  { k: 'coffee', icon: 'coffee', ru: 'Кофейня', steps: [
    { them: { v: 'f', th: 'Hi! What can I get for you?', lat: 'хай! уот кэн ай гет фор ю?', ru: 'Здравствуйте! Что вам приготовить?' }, you: [
      { th: 'Can I get a large latte?', lat: 'кэн ай гет э ладж латэй?', ru: 'Можно большой латте?', ok: 1 },
      { th: 'Give me coffee.', lat: 'гив ми кафи', ru: 'Дайте кофе.', why: ['Звучит как приказ. Американцы заказывают через Can I get…'] },
      { th: 'See you later!', lat: 'си ю лэйдэр!', ru: 'Увидимся!', why: ['Это прощание — вы только пришли.'] }] },
    { them: { v: 'f', th: 'Hot or iced?', lat: 'хот ор айст?', ru: 'Горячий или со льдом?' }, you: [
      { th: 'Iced, please.', lat: 'айст, плиз', ru: 'Со льдом, пожалуйста', ok: 1 },
      { th: 'Hot, please.', lat: 'хот, плиз', ru: 'Горячий, пожалуйста', ok: 1 },
      { th: 'Yes, please.', lat: 'йес, плиз', ru: 'Да, пожалуйста', why: ['Спросили «горячий или со льдом?» — нужно выбрать одно.'] }] },
    { them: { v: 'f', th: 'Can I get a name for the order?', lat: 'кэн ай гет э нэйм фор зи ордэр?', ru: 'Как вас записать?' }, you: [
      { th: 'Sure, it’s Alex.', lat: 'шур, итс Алекс', ru: 'Конечно, Алекс', ok: 1 },
      { th: 'I’m from Russia.', lat: 'айм фром раша', ru: 'Я из России', why: ['Спрашивают имя — его напишут на стакане.'] }] },
    { them: { v: 'f', th: 'That’ll be five fifty.', lat: 'зэтл би файв фифти', ru: 'С вас пять пятьдесят' }, you: [
      { th: 'Can I pay with my phone?', lat: 'кэн ай пэй уиз май фоун?', ru: 'Можно телефоном?', ok: 1 },
      { th: 'Here you go.', lat: 'хир ю гоу', ru: 'Вот, пожалуйста', ok: 1 },
      { th: 'Fifty dollars?', lat: 'фифти доларз?', ru: 'Пятьдесят долларов?', why: ['five fifty — это $5.50. Цены так и читают: «пять — пятьдесят».'] }] },
    { them: { v: 'f', th: 'Have a good one!', lat: 'хэв э гуд уан!', ru: 'Всего хорошего!' }, you: [
      { th: 'Thanks, you too!', lat: 'сэнкс, ю ту!', ru: 'Спасибо, и вам!', ok: 1 },
      { th: 'I’m fine.', lat: 'айм файн', ru: 'У меня всё хорошо', why: ['Have a good one — пожелание. Отвечают You too!'] }] }
  ] },
  { k: 'restaurant', icon: 'utensils', ru: 'Ресторан', steps: [
    { them: { v: 'm', th: 'Hi there! How many in your party?', lat: 'хай зэр! хау мэни ин ёр парди?', ru: 'Добрый вечер! Сколько вас?' }, you: [
      { th: 'Just two.', lat: 'джаст ту', ru: 'Двое', ok: 1 },
      { th: 'I’m good, thanks.', lat: 'айм гуд, сэнкс', ru: 'Я в порядке, спасибо', why: ['party — компания: спрашивают, сколько вас.'] }] },
    { them: { v: 'm', th: 'Are you ready to order?', lat: 'ар ю рэди ту ордэр?', ru: 'Готовы заказать?' }, you: [
      { th: 'Can we have a few more minutes?', lat: 'кэн уи хэв э фью мор минитс?', ru: 'Можно ещё пару минут?', ok: 1 },
      { th: 'Yes, I’ll have the steak.', lat: 'йес, айл хэв зэ стэйк', ru: 'Да, мне стейк', ok: 1 },
      { th: 'Where’s the airport?', lat: 'уэрз зи эрпорт?', ru: 'Где аэропорт?', why: ['Официант ждёт заказ.'] }] },
    { them: { v: 'm', th: 'How would you like that cooked?', lat: 'хау вуд ю лайк зэт кукт?', ru: 'Какую прожарку?' }, you: [
      { th: 'Medium, please.', lat: 'мидиэм, плиз', ru: 'Среднюю, пожалуйста', ok: 1 },
      { th: 'Well-done, please.', lat: 'уэл-дан, плиз', ru: 'Полностью, пожалуйста', ok: 1 },
      { th: 'Cooked, please.', lat: 'кукт, плиз', ru: 'Приготовленный, пожалуйста', why: ['Спрашивают степень прожарки: rare, medium или well-done.'] }] },
    { them: { v: 'm', th: 'How’s everything?', lat: 'хауз эврисин?', ru: 'Всё ли хорошо?' }, you: [
      { th: 'Great, thanks!', lat: 'грэйт, сэнкс!', ru: 'Отлично, спасибо!', ok: 1 },
      { th: 'Everything.', lat: 'эврисин', ru: 'Всё.', why: ['Это вопрос «всё ли хорошо?». Ответ: Great, thanks!'] }] },
    { them: { v: 'm', th: 'Can I get you anything else?', lat: 'кэн ай гечу энисин элс?', ru: 'Что-нибудь ещё?' }, you: [
      { th: 'Just the check, please.', lat: 'джаст зэ чэк, плиз', ru: 'Только счёт, пожалуйста', ok: 1 },
      { th: 'Can I get a box?', lat: 'кэн ай гет э бокс?', ru: 'Можно упаковать с собой?', ok: 1 },
      { th: 'No.', lat: 'ноу', ru: 'Нет.', why: ['Одно No звучит резко. Лучше: No, thanks — just the check.'] }] },
    { them: { v: 'm', th: 'Here’s your check. No rush!', lat: 'хирз ёр чэк. ноу раш!', ru: 'Ваш счёт. Не торопитесь!' }, you: [
      { th: 'Thanks! Can we pay by card?', lat: 'сэнкс! кэн уи пэй бай кард?', ru: 'Спасибо! Можно картой?', ok: 1 },
      { th: 'Is the tip included?', lat: 'из зэ тип инклудид?', ru: 'Чаевые включены?', ok: 1 },
      { th: 'Bye!', lat: 'бай!', ru: 'Пока!', why: ['Сначала оплатите — и оставьте 18–20% чаевых.'] }] }
  ] },
  { k: 'uber', icon: 'car-taxi-front', ru: 'Uber', steps: [
    { them: { v: 'm', th: 'Hey, are you Alex?', lat: 'хэй, ар ю Алекс?', ru: 'Привет, вы Алекс?' }, you: [
      { th: 'Yes, that’s me!', lat: 'йес, зэтс ми!', ru: 'Да, это я!', ok: 1 },
      { th: 'No, I’m from Russia.', lat: 'ноу, айм фром раша', ru: 'Нет, я из России', why: ['Водитель сверяет имя. Ответ: Yes, that’s me.'] }] },
    { them: { v: 'm', th: 'Going to the airport, right?', lat: 'гоуин ту зи эрпорт, райт?', ru: 'В аэропорт, верно?' }, you: [
      { th: 'That’s right.', lat: 'зэтс райт', ru: 'Верно', ok: 1 },
      { th: 'Yes, terminal B, please.', lat: 'йес, тёрминэл би, плиз', ru: 'Да, терминал B, пожалуйста', ok: 1 },
      { th: 'Turn left.', lat: 'тёрн лэфт', ru: 'Налево', why: ['right здесь — «верно», а не «направо».'] }] },
    { them: { v: 'm', th: 'Traffic is pretty bad today.', lat: 'трэфик из приди бэд тудэй', ru: 'Пробки сегодня так себе' }, you: [
      { th: 'Yeah, no worries.', lat: 'йэа, ноу уориз', ru: 'Да, ничего страшного', ok: 1 },
      { th: 'How much is it?', lat: 'хау мач из ит?', ru: 'Сколько стоит?', why: ['В Uber цена уже в приложении — водителю платить не нужно.'] }] },
    { them: { v: 'm', th: 'Here we are. Have a great flight!', lat: 'хир уи ар. хэв э грэйт флайт!', ru: 'Приехали. Хорошего полёта!' }, you: [
      { th: 'Thanks, have a good one!', lat: 'сэнкс, хэв э гуд уан!', ru: 'Спасибо, всего хорошего!', ok: 1 },
      { th: 'Keep the change.', lat: 'кип зэ чэйндж', ru: 'Сдачи не надо', why: ['В Uber и оплата, и чаевые — в приложении.'] }] }
  ] },
  { k: 'store', icon: 'shopping-basket', ru: 'Магазин', steps: [
    { them: { v: 'f', th: 'Hi! Did you find everything okay?', lat: 'хай! дид ю файнд эврисин оукэй?', ru: 'Здравствуйте! Всё нашли?' }, you: [
      { th: 'Yes, thanks!', lat: 'йес, сэнкс!', ru: 'Да, спасибо!', ok: 1 },
      { th: 'I’m just looking.', lat: 'айм джаст лукин', ru: 'Я просто смотрю', why: ['Вы уже на кассе — так отвечают, когда только смотрите товар.'] }] },
    { them: { v: 'f', th: 'Do you need a bag?', lat: 'ду ю нид э бэг?', ru: 'Пакет нужен?' }, you: [
      { th: 'No, I’m good.', lat: 'ноу, айм гуд', ru: 'Нет, не нужно', ok: 1 },
      { th: 'Yes, please.', lat: 'йес, плиз', ru: 'Да, пожалуйста', ok: 1 },
      { th: 'I need a doctor.', lat: 'ай нид э доктэр', ru: 'Мне нужен врач', why: ['Это для экстренных случаев.'] }] },
    { them: { v: 'f', th: 'Your total is twelve forty-nine.', lat: 'ёр тоудл из твэлв форди-найн', ru: 'С вас двенадцать сорок девять' }, you: [
      { th: 'Can I pay with my phone?', lat: 'кэн ай пэй уиз май фоун?', ru: 'Можно телефоном?', ok: 1 },
      { th: 'Here’s my card.', lat: 'хирз май кард', ru: 'Вот моя карта', ok: 1 },
      { th: 'Twelve? The tag says ten!', lat: 'твэлв? зэ тэг сэз тэн!', ru: 'Двенадцать? На ценнике десять!', why: ['На ценнике цена без налога: sales tax добавляют на кассе. Это нормально.'] }] },
    { them: { v: 'f', th: 'Would you like your receipt?', lat: 'вуд ю лайк ёр рисит?', ru: 'Чек нужен?' }, you: [
      { th: 'No, thanks.', lat: 'ноу, сэнкс', ru: 'Нет, спасибо', ok: 1 },
      { th: 'Sure, thanks.', lat: 'шур, сэнкс', ru: 'Да, спасибо', ok: 1 }] },
    { them: { v: 'f', th: 'You’re all set. Have a nice day!', lat: 'юр ол сэт. хэв э найс дэй!', ru: 'Всё готово. Хорошего дня!' }, you: [
      { th: 'You too!', lat: 'ю ту!', ru: 'И вам!', ok: 1 },
      { th: 'All set what?', lat: 'ол сэт уот?', ru: 'Что «готово»?', why: ['You’re all set — «всё готово, можете идти». Ответ: You too!'] }] }
  ] },
  { k: 'hotel', icon: 'bed-double', ru: 'Отель', steps: [
    { them: { v: 'f', th: 'Hi, welcome! Checking in?', lat: 'хай, уэлкам! чэкин ин?', ru: 'Здравствуйте! Заселяетесь?' }, you: [
      { th: 'Yes, I have a reservation.', lat: 'йес, ай хэв э рэзэрвэйшн', ru: 'Да, у меня бронь', ok: 1 },
      { th: 'Checkout, please.', lat: 'чэкаут, плиз', ru: 'Выезд, пожалуйста', why: ['Вы только заезжаете — это check in.'] }] },
    { them: { v: 'f', th: 'Can I get your last name?', lat: 'кэн ай гет ёр ласт нэйм?', ru: 'Ваша фамилия?' }, you: [
      { th: 'Sure, it’s Ivanov.', lat: 'шур, итс Иванов', ru: 'Конечно, Иванов', ok: 1 },
      { th: 'Alex.', lat: 'Алекс', ru: 'Алекс', why: ['last name — фамилия. Имя — first name.'] }] },
    { them: { v: 'f', th: 'I’ll need a card for incidentals.', lat: 'айл нид э кард фор инсидэнтлз', ru: 'Нужна карта для депозита' }, you: [
      { th: 'Sure, here you go.', lat: 'шур, хир ю гоу', ru: 'Конечно, вот', ok: 1 },
      { th: 'Sorry, what does that mean?', lat: 'сари, уот даз зэт мин?', ru: 'Простите, что это значит?', ok: 1 },
      { th: 'Keep the change.', lat: 'кип зэ чэйндж', ru: 'Сдачи не надо', why: ['Это депозит на карте за мини-бар и прочее. Его снимут после выезда.'] }] },
    { them: { v: 'f', th: 'You’re in room five twelve. Breakfast is from seven to ten.', lat: 'юр ин рум файв твэлв. брэкфаст из фром сэвэн ту тэн', ru: 'Ваш номер 512. Завтрак с 7 до 10' }, you: [
      { th: 'What’s the Wi-Fi password?', lat: 'уотс зэ уайфай пэсуорд?', ru: 'Какой пароль от вайфая?', ok: 1 },
      { th: 'Great, thank you!', lat: 'грэйт, сэнк ю!', ru: 'Отлично, спасибо!', ok: 1 }] },
    { them: { v: 'f', th: 'Anything else I can help with?', lat: 'энисин элс ай кэн хэлп уиз?', ru: 'Чем-то ещё помочь?' }, you: [
      { th: 'No, that’s all. Thanks!', lat: 'ноу, зэтс ол. сэнкс!', ru: 'Нет, это всё. Спасибо!', ok: 1 },
      { th: 'Can I get a late checkout?', lat: 'кэн ай гет э лэйт чэкаут?', ru: 'Можно поздний выезд?', ok: 1 }] }
  ] }
];

/* ================= ETIQUETTE ================= */
const ADDR = [
  { th: 'Excuse me', lat: 'ɪkˈskjuːz mi', cyr: 'икскьюз ми', ru: 'Чтобы обратиться к незнакомцу — в магазине, на улице, официанту.', call: 'Excuse me, could you help me?' },
  { th: 'Sir', lat: 'sɝː', cyr: 'сёр', ru: 'Вежливо к мужчине — официанту, полицейскому, незнакомцу.', call: 'Excuse me, sir?' },
  { th: 'Ma’am', lat: 'mæm', cyr: 'мэм', ru: 'Вежливо к женщине. На юге США — постоянно.', call: 'Thank you, ma’am.' },
  { th: 'First name', lat: 'fɝːst neɪm', cyr: 'фёрст нэйм', ru: 'Коллегам и знакомым — сразу по имени, даже старшим и начальникам.', call: 'Hi, Mike! How are you?' },
  { th: 'Hey guys', lat: 'heɪ ɡaɪz', cyr: 'хэй гайз', ru: 'К компании — даже если в ней одни женщины.', call: 'Hey guys, what’s up?' }
];
const POLITE_YES = { m: { th: 'Could you…?', lat: 'kʊd juː', cyr: 'куд ю', say: 'Could you help me, please?' }, f: { th: 'Could you…?', lat: 'kʊd juː', cyr: 'куд ю', say: 'Could you help me, please?' } };
const WAI = [
  ['message-circle', 'How are you? — не настоящий вопрос. Отвечайте коротко: Good, thanks! You?', 'Good, thanks! You?'],
  ['smile', 'Улыбайтесь и смотрите в глаза. Серьёзное лицо американцы читают как недовольство.', 'Have a great day!'],
  ['cloud-sun', 'Безопасные темы: погода, еда, путешествия, спорт, планы на выходные.', 'Any plans for the weekend?'],
  ['handshake', 'Рукопожатие — крепкое и короткое. Обнимаются только с близкими.', 'Nice to meet you.']
];
const DONTS = [
  ['receipt', 'Не забывайте чаевые: в ресторане 18–20%, в такси, барах и салонах 15–20%. Без чаевых — почти оскорбление.'],
  ['user-x', 'Не спрашивайте о зарплате, возрасте, весе, религии и политике.'],
  ['move-horizontal', 'Держите дистанцию — примерно на вытянутую руку. Не трогайте незнакомцев.'],
  ['users', 'Не лезьте без очереди: стоять в очереди (line) — святое.'],
  ['volume-x', 'Не говорите в лоб «вы неправы». Мягче: I see your point, but…']
];
const SMILE = [
  { th: 'Thanks so much!', lat: 'θæŋks soʊ mʌtʃ', cyr: 'сэнкс соу мач!', ru: 'Огромное спасибо!' },
  { th: 'I really appreciate it.', lat: 'aɪ ˈrɪli əˈpriːʃieɪt ɪt', cyr: 'ай рили эпришиэйт ит', ru: 'Я правда очень ценю' },
  { th: 'That’s awesome!', lat: 'ðæts ˈɑːsəm', cyr: 'зэтс осэм!', ru: 'Это потрясающе!' },
  { th: 'Sounds great!', lat: 'saʊndz ɡreɪt', cyr: 'саундз грэйт!', ru: 'Звучит отлично!' },
  { th: 'No worries!', lat: 'noʊ ˈwɝːiz', cyr: 'ноу уориз!', ru: 'Без проблем!' },
  { th: 'My bad!', lat: 'maɪ bæd', cyr: 'май бэд!', ru: 'Моя ошибка, извини!', tip: ['Лёгкое «виноват» — когда ошиблись по мелочи.'] },
  { th: 'I’m still learning English.', lat: 'aɪm stɪl ˈlɝːnɪŋ ˈɪŋɡlɪʃ', cyr: 'айм стил лёрнин инглиш', ru: 'Я ещё учу английский', tip: ['Скажите это — и собеседник станет терпеливее.'] },
  { th: 'Have a great day!', lat: 'hæv ə ɡreɪt deɪ', cyr: 'хэв э грэйт дэй!', ru: 'Отличного дня!' }
].map(x => ({ ...x, np: 1 }));

/* ================= QUESTIONS ================= */
const QWORDS = [
  ['what', 'wʌt', 'уот', 'что', 'What’s this?', 'уотс зис?', 'Что это?'],
  ['who', 'huː', 'ху', 'кто', 'Who’s that?', 'хуз зэт?', 'Кто это?'],
  ['where', 'wer', 'уэр', 'где, куда', 'Where are you from?', 'уэр ар ю фром?', 'Откуда вы?'],
  ['when', 'wen', 'уэн', 'когда', 'When does it open?', 'уэн даз ит оупэн?', 'Когда открывается?'],
  ['why', 'waɪ', 'уай', 'почему', 'Why is it so expensive?', 'уай из ит соу экспэнсив?', 'Почему так дорого?'],
  ['how', 'haʊ', 'хау', 'как', 'How do I get there?', 'хау ду ай гет зэр?', 'Как туда добраться?'],
  ['how much', 'haʊ mʌtʃ', 'хау мач', 'сколько (денег, «неисчисляемого»)', 'How much is it?', 'хау мач из ит?', 'Сколько стоит?'],
  ['how many', 'haʊ ˈmeni', 'хау мэни', 'сколько (штук)', 'How many people?', 'хау мэни пипл?', 'Сколько человек?'],
  ['which', 'wɪtʃ', 'уич', 'который из', 'Which one is better?', 'уич уан из бэдэр?', 'Какой лучше?']
].map(([th, lat, cyr, ru, xth, xlat, xru]) => ({ th, lat, cyr, ru, xth, xlat, xru, np: 1 }));
const QPARTS = [
  ['Do you…?', 'duː juː', 'ду ю', 'вопрос о действии', 'Do you have Wi-Fi?', 'ду ю хэв уайфай?', 'У вас есть вайфай?'],
  ['Is it…?', 'ɪz ɪt', 'из ит', 'вопрос о свойстве', 'Is it far?', 'из ит фар?', 'Это далеко?'],
  ['Can I…?', 'kən aɪ', 'кэн ай', 'можно мне?', 'Can I pay by card?', 'кэн ай пэй бай кард?', 'Можно картой?'],
  ['Could you…?', 'kʊd juː', 'куд ю', 'вежливая просьба', 'Could you repeat that?', 'куд ю рипит зэт?', 'Повторите, пожалуйста?'],
  ['Are you…?', 'ɑːr juː', 'ар ю', 'вопрос о человеке', 'Are you open?', 'ар ю оупэн?', 'Вы открыты?'],
  ['Is there…?', 'ɪz ðer', 'из зэр', 'есть ли где-то', 'Is there a pharmacy near here?', 'из зэр э фармэси нир хир?', 'Здесь есть аптека рядом?']
].map(([th, lat, cyr, ru, xth, xlat, xru]) => ({ th, lat, cyr, ru, xth, xlat, xru, np: 1 }));

/* ================= COUNTING: CONTAINERS ================= */
const CLS = [
  ['cup', 'cups', 'kʌp', 'кап', 'чашка — кофе, чай'], ['glass', 'glasses', 'ɡlæs', 'глэс', 'стакан, бокал — вода, сок, вино'], ['bottle', 'bottles', 'ˈbɑːɾəl', 'ботл', 'бутылка'],
  ['can', 'cans', 'kæn', 'кэн', 'банка — газировка, пиво'], ['slice', 'slices', 'slaɪs', 'слайс', 'ломтик — пицца, хлеб'], ['piece', 'pieces', 'piːs', 'пис', 'кусок — торт, «штука»'],
  ['bag', 'bags', 'bæɡ', 'бэг', 'пакет — чипсы'], ['box', 'boxes', 'bɑːks', 'бокс', 'коробка'], ['pair', 'pairs', 'per', 'пэр', 'пара — обувь, джинсы'], ['dozen', 'dozen', 'ˈdʌzən', 'дазн', 'дюжина — яйца, донаты']
].map(([th, pl, lat, cyr, ru]) => ({ th, pl, lat, cyr, ru, np: 1 }));
// item | reading | ru | container
const ORDER = [
  ['coffee', 'кафи', 'кофе', 'cup'], ['water', 'уадэр', 'вода', 'bottle'], ['orange juice', 'ориндж джус', 'апельсиновый сок', 'glass'], ['beer', 'бир', 'пиво', 'bottle'],
  ['soda', 'соуда', 'газировка', 'can'], ['pizza', 'пицца', 'пицца', 'slice'], ['cake', 'кэйк', 'торт', 'piece'], ['chips', 'чипс', 'чипсы', 'bag'],
  ['eggs', 'эгз', 'яйца', 'dozen'], ['jeans', 'джинз', 'джинсы', 'pair']
].map(([th, cyr, ru, cls]) => ({ th, cyr, ru, cls }));
const ORDER_N = [[1, 'a', 'э'], [2, 'two', 'ту'], [3, 'three', 'сри'], [4, 'four', 'фор'], [5, 'five', 'файв']];
function orderPhrase(it, n) {
  const c = CLS.find(x => x.th === it.cls), [, w, wr] = ORDER_N[n - 1], cont = n === 1 ? c.th : c.pl;
  const ccyr = n === 1 || c.th === 'dozen' ? c.cyr : c.cyr + (/(s|x)$/.test(c.th) || c.th.endsWith('ce') ? 'из' : 'з');
  return { th: `Can I get ${w} ${cont} of ${it.th}?`, lat: '', cyr: `кэн ай гет ${wr} ${ccyr} ов ${it.cyr}?` };
}

/* ================= FOOD ================= */
const FOOD = [
  { g: 'meat', ru: 'Мясо и рыба', items: [['beef', 'biːf', 'биф', 'говядина'], ['chicken', 'ˈtʃɪkən', 'чикэн', 'курица'], ['pork', 'pɔːrk', 'порк', 'свинина'], ['turkey', 'ˈtɝːki', 'тёрки', 'индейка'], ['bacon', 'ˈbeɪkən', 'бэйкэн', 'бекон'], ['shrimp', 'ʃrɪmp', 'шримп', 'креветки'], ['salmon', 'ˈsæmən', 'сэмэн', 'лосось — l не читается'], ['tofu', 'ˈtoʊfuː', 'тоуфу', 'тофу']] },
  { g: 'cook', ru: 'Как готовят', items: [['grilled', 'ɡrɪld', 'грилд', 'на гриле'], ['fried', 'fraɪd', 'фрайд', 'жареный во фритюре'], ['baked', 'beɪkt', 'бэйкт', 'запечённый'], ['roasted', 'ˈroʊstɪd', 'роустид', 'обжаренный в духовке'], ['scrambled eggs', 'ˈskræmbəld eɡz', 'скрэмблд эгз', 'яичница-болтунья'], ['over easy', 'ˌoʊvɚ ˈiːzi', 'оувэр изи', 'глазунья, перевёрнутая на секунду']] },
  { g: 'dish', ru: 'Популярные блюда', items: [['burger', 'ˈbɝːɡɚ', 'бёргэр', 'бургер'], ['fries', 'fraɪz', 'фрайз', 'картофель фри'], ['mac and cheese', 'ˌmæk ən ˈtʃiːz', 'мэк энд чиз', 'макароны с сыром'], ['pancakes', 'ˈpænkeɪks', 'пэнкэйкс', 'панкейки'], ['hot dog', 'ˈhɑːt dɔːɡ', 'хот дог', 'хот-дог'], ['buffalo wings', 'ˈbʌfəloʊ wɪŋz', 'бафэлоу уингз', 'острые куриные крылышки'], ['BLT', 'ˌbiː el ˈtiː', 'би-эл-ти', 'сэндвич: бекон, салат, помидор'], ['Caesar salad', 'ˈsiːzɚ ˈsæləd', 'сизэр сэлэд', 'салат «Цезарь»'], ['clam chowder', 'klæm ˈtʃaʊdɚ', 'клэм чаудэр', 'суп из моллюсков'], ['apple pie', 'ˈæpəl paɪ', 'эпл пай', 'яблочный пирог']] },
  { g: 'drink', ru: 'Напитки', items: [['tap water', 'tæp ˈwɑːɾɚ', 'тэп уадэр', 'вода из-под крана — бесплатно'], ['soda', 'ˈsoʊdə', 'соуда', 'газировка'], ['iced coffee', 'aɪst ˈkɑːfi', 'айст кафи', 'холодный кофе'], ['iced tea', 'aɪst tiː', 'айст ти', 'холодный чай'], ['lemonade', 'ˌleməˈneɪd', 'лэмэнэйд', 'лимонад'], ['refill', 'ˈriːfɪl', 'рифил', 'доливка — часто бесплатно']] },
  { g: 'ask', ru: 'Просьбы к заказу', items: [['no ice', 'noʊ aɪs', 'ноу айс', 'без льда'], ['on the side', 'ɑːn ðə saɪd', 'он зэ сайд', 'соус отдельно'], ['medium rare', 'ˈmiːdiəm rer', 'мидиэм рэр', 'стейк с розовинкой'], ['well-done', 'ˌwel ˈdʌn', 'уэл-дан', 'полностью прожаренный'], ['extra cheese', 'ˈekstrə tʃiːz', 'экстра чиз', 'побольше сыра'], ['gluten-free', 'ˈɡluːtən friː', 'глутэн-фри', 'без глютена']] }
].map(g => ({ ...g, items: g.items.map(([th, lat, cyr, ru]) => ({ th, lat, cyr, ru, np: 1 })) }));

/* ================= SIGNS & PRICE TAGS ================= */
// k | look | text | IPA | reading | ru | spoken form (if the sign isn't read literally)
const TWISTERS = [
  { th: 'She sells seashells by the seashore.', lat: 'ʃi selz ˈsiːʃelz baɪ ðə ˈsiːʃɔːr', cyr: 'ши сэлз сишэлз бай зэ сишор', ru: 'Она продаёт ракушки на берегу моря',
    tip: ['Вся фраза — на противопоставлении s и sh. Для sh губы вперёд, для s — в улыбку.'] },
  { th: 'Peter Piper picked a peck of pickled peppers.', lat: 'ˈpiːɾɚ ˈpaɪpɚ pɪkt ə pek əv ˈpɪkəld ˈpepɚz', cyr: 'пидэр пайпэр пикт э пэк ов пиклд пэпэрз', ru: 'Питер Пайпер набрал меру маринованных перчиков',
    tip: ['p в начале слова — с лёгким выдохом, как будто задуваете свечу. Самая известная американская скороговорка.'] },
  { th: 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?', lat: 'haʊ mʌtʃ wʊd wʊd ə ˈwʊdtʃʌk tʃʌk ɪf ə ˈwʊdtʃʌk kʊd tʃʌk wʊd', cyr: 'хау мач вуд вуд э вудчак чак иф э вудчак куд чак вуд?', ru: 'Сколько дерева накидал бы сурок, если бы сурок умел кидать дерево?',
    tip: ['w — губы трубочкой и сразу раскрыть, зубы губы не касаются. wood и would звучат одинаково.'] },
  { th: 'Red leather, yellow leather.', lat: 'red ˈleðɚ ˈjeloʊ ˈleðɚ', cyr: 'рэд лэзэр, йелоу лэзэр', ru: 'Красная кожа, жёлтая кожа',
    tip: ['Тренирует r и l подряд. Американское r — язык не касается нёба и не дрожит.'] },
  { th: 'Three free throws.', lat: 'θriː friː θroʊz', cyr: 'сри фри сроуз', ru: 'Три штрафных броска',
    tip: ['th (θ) — кончик языка между зубами, f — нижняя губа к зубам. Не превращайте three в free.'] },
  { th: 'Betty Botter bought some butter.', lat: 'ˈbeɾi ˈbɑːɾɚ bɑːt səm ˈbʌɾɚ', cyr: 'бэди бадэр бат сам бадэр', ru: 'Бетти Боттер купила масла',
    tip: ['Американское t между гласными звучит как быстрое «д»: butter — «бадэр». Так говорят и water, city.'] },
  { th: 'Unique New York.', lat: 'juˈniːk nuː jɔːrk', cyr: 'юник ну йорк', ru: 'Неповторимый Нью-Йорк',
    tip: ['Повторите пять раз быстро. Американцы говорят New — «ну», а не «нью».'] },
  { th: 'I scream, you scream, we all scream for ice cream!', lat: 'aɪ skriːm juː skriːm wi ɔːl skriːm fɚ ˈaɪs kriːm', cyr: 'ай скрим, ю скрим, уи ол скрим фор айс крим!', ru: 'Я кричу, ты кричишь, мы все кричим — хотим мороженого!',
    tip: ['I scream и ice cream звучат почти одинаково: в беглой речи слова сливаются, границы между ними не слышно.'] },
];

const LEARN = [
  { icon: 'calendar-clock', ev: 'proof', t: ['Интервальные повторения'], d: ['Повторяйте не подряд, а с растущими паузами: через день, через три, через неделю. Так забывается в разы меньше, чем после зубрёжки за один вечер, — один из самых надёжных результатов психологии памяти.'] },
  { icon: 'brain', ev: 'proof', t: ['Вспоминать, а не перечитывать'], d: ['Закройте перевод и попробуйте вспомнить сами. Попытка вспомнить закрепляет лучше повторного чтения, даже если ошиблись. Поэтому в тренажёрах сначала вопрос, а ответ — потом.'] },
  { icon: 'trending-up', ev: 'data', t: ['Сначала самое частое'], d: ['Первые две-три тысячи самых частых слов покрывают около 90% обычной разговорной речи. Поэтому здесь частотные глаголы и живые фразы, а не редкая лексика.'] },
  { icon: 'link', ev: 'data', t: ['Учите фразами'], d: ['Запоминайте готовые куски — Can I get…, How’s it going? — целиком, а не по словам. Американцы сами говорят заготовками, а фраза сразу даёт и грамматику, и интонацию.'] },
  { icon: 'audio-lines', ev: 'proof', t: ['Пары звуков на разных голосах'], d: ['Тренируйте слух на парах, которые различаются одним звуком: ship — sheep, think — sink, light — right, и слушайте разных дикторов. Такой тренинг (HVPT) впервые проверили как раз на английских r и l — он работает.'] },
  { icon: 'headphones', ev: 'poly', t: ['Шэдоуинг'], d: ['Включите аудио и повторяйте за голосом почти одновременно, копируя мелодию. Любимый приём полиглотов; небольшие исследования показывают пользу для произношения и понимания на слух.'] },
  { icon: 'messages-square', ev: 'poly', t: ['Говорите с первого дня'], d: ['Не ждите «готовности»: Hi! How’s it going? и пара фраз с бариста дают больше, чем месяц молчаливой теории. Ошибки на старте — нормальная часть учёбы.'] },
  { icon: 'clock', ev: 'proof', t: ['Коротко, но каждый день'], d: ['15 минут каждый день лучше двух часов раз в неделю: это то же правило интервалов, только в масштабе недели.'] },
  { icon: 'shuffle', ev: 'data', t: ['Перемешивайте темы'], d: ['Чередуйте темы и типы заданий вместо блоков «только числа». Чередование кажется труднее, но запоминается лучше.'] },
  { icon: 'moon', ev: 'data', t: ['Повторите перед сном'], d: ['Во сне память переносит выученное днём в долговременную. Для новых слов это показано в экспериментах: после ночи их вспоминают лучше.'] },
  { icon: 'sparkles', ev: 'proof', t: ['Яркие ассоциации'], d: ['Свяжите новое слово с похожим по звучанию русским и смешной картинкой. Метод ключевых слов заметно ускоряет запоминание слов.'] },
  { icon: 'ban', ev: 'myth', t: ['«Я визуал»'], d: ['Учить «под свой тип» — визуал, аудиал — бесполезно: проверки не нашли никакого эффекта. Методы выше работают для всех.'] },
];

const SIGNS = [
  ['sign', 'green', 'EXIT', 'ˈeɡzɪt', 'эгзит', 'Выход'], ['sign', 'green', 'ENTRANCE', 'ˈentrəns', 'энтрэнс', 'Вход'], ['sign', 'blue', 'RESTROOMS', 'ˈrestruːmz', 'рэструмз', 'Туалеты'],
  ['sign', 'blue', 'MEN', 'men', 'мэн', 'Мужской'], ['sign', 'blue', 'WOMEN', 'ˈwɪmɪn', 'уимин', 'Женский'], ['sign', 'green', 'PUSH', 'pʊʃ', 'пуш', 'От себя'], ['sign', 'green', 'PULL', 'pʊl', 'пул', 'На себя'],
  ['sign', 'green', 'OPEN', 'ˈoʊpən', 'оупэн', 'Открыто'], ['sign', 'red', 'CLOSED', 'kloʊzd', 'клоузд', 'Закрыто'], ['sign', 'red', 'OUT OF ORDER', 'aʊt əv ˈɔːrdɚ', 'аут ов ордэр', 'Не работает'],
  ['sign', 'yellow', 'WET FLOOR', 'wet flɔːr', 'уэт флор', 'Мокрый пол'], ['sign', 'red', 'EMPLOYEES ONLY', 'ɪmˈplɔɪiːz ˈoʊnli', 'имплоиз оунли', 'Только для персонала'], ['sign', 'red', 'NO PARKING', 'noʊ ˈpɑːrkɪŋ', 'ноу паркин', 'Парковка запрещена'],
  ['sign', 'red', 'STOP', 'stɑːp', 'стоп', 'Стоп'], ['sign', 'yellow', 'YIELD', 'jiːld', 'йилд', 'Уступи дорогу'], ['sign', 'blue', 'ONE WAY', 'wʌn weɪ', 'уан уэй', 'Одностороннее движение'],
  ['sign', 'green', 'WALK', 'wɔːk', 'уок', 'Можно идти (светофор)'], ['sign', 'red', 'DON’T WALK', 'doʊnt wɔːk', 'доунт уок', 'Стойте (светофор)'], ['sign', 'blue', 'PHARMACY', 'ˈfɑːrməsi', 'фармэси', 'Аптека'],
  ['sign', 'yellow', 'OPEN 24/7', 'ˈoʊpən ˌtwenti fɔːr ˈsevən', 'оупэн туэнти-фор сэвэн', 'Круглосуточно', 'open twenty-four seven'], ['sign', 'yellow', 'DRIVE-THRU', 'ˈdraɪv θruː', 'драйв-сру', 'Окно заказа из машины', 'drive-through'],
  ['tag', 'red', 'SALE', 'seɪl', 'сэйл', 'Распродажа'], ['tag', 'red', '50% OFF', 'ˈfɪfti pɚˈsent ɔːf', 'фифти пэрсэнт оф', 'Скидка 50%', 'fifty percent off'], ['tag', 'red', 'BOGO', 'ˈboʊɡoʊ', 'боугоу', 'Второй бесплатно', 'BOGO. Buy one, get one free.'],
  ['tag', 'red', 'CLEARANCE', 'ˈklɪrəns', 'клирэнс', 'Распродажа остатков'], ['tag', 'yellow', '$4.99', 'fɔːr ˈnaɪnti naɪn', 'фор найнти-найн', 'Четыре доллара 99 центов', 'four ninety-nine'],
  ['tag', 'yellow', '$1.99/lb', 'wʌn ˈnaɪnti naɪn pɚ paʊnd', 'уан найнти-найн пэр паунд', 'За фунт — около 450 г', 'one ninety-nine per pound'], ['tag', 'yellow', '+ TAX', 'plʌs tæks', 'плас тэкс', 'Налог добавят на кассе', 'plus tax'],
  ['tag', 'yellow', 'BEST BY', 'best baɪ', 'бэст бай', 'Годен до'], ['tag', 'yellow', 'SUGAR FREE', 'ˈʃʊɡɚ friː', 'шугэр фри', 'Без сахара'], ['tag', 'yellow', 'ORGANIC', 'ɔːrˈɡænɪk', 'органик', 'Органический'],
  ['tag', 'yellow', 'GLUTEN FREE', 'ˈɡluːtən friː', 'глутэн фри', 'Без глютена'], ['tag', 'red', 'CASH ONLY', 'kæʃ ˈoʊnli', 'кэш оунли', 'Только наличные'], ['tag', 'yellow', 'SELF CHECKOUT', 'self ˈtʃekaʊt', 'сэлф чэкаут', 'Касса самообслуживания'],
  ['tag', 'yellow', 'TIP JAR', 'tɪp dʒɑːr', 'тип джар', 'Банка для чаевых'], ['tag', 'yellow', 'BUY 2 GET 1', 'baɪ tuː ɡet wʌn', 'бай ту гет уан', 'Купи 2 — третий в подарок', 'buy two, get one']
].map(([k, s, th, lat, cyr, ru, say]) => ({ k, s, th, lat, cyr, ru, say, np: 1 }));

/* ================= SENTENCES ================= */
// Sentence builder: word blocks with a role (S who, V action, O what/where, NEG, Q helper, QW question word, T time, M want)
const SENT_JOIN = ' ';
const SENT_END = { st: '.', neg: '.', yn: '?', wh: '?', past: '.', pastq: '?', fut: '.', want: '.' };
const SENT_PH = {};
const ROLE_RU = { S: ['кто'], V: ['действие'], O: ['что / где'], NEG: ['не'], Q: ['помощник'], QW: ['вопрос'], T: ['время'], M: ['хочу'] };
const SENT_TYPES = [
  { k: 'st', ru: 'Утверждение', note: ['Жёсткий порядок: кто → действие → что. Подлежащее обязательно — просто «Ем завтрак» по-английски сказать нельзя.'] },
  { k: 'neg', ru: 'Отрицание', note: ['don’t (do not) перед глаголом. Сам глагол не меняется: I don’t eat.'] },
  { k: 'yn', ru: 'Вопрос да / нет', note: ['Помощник Do выходит в начало, остальное как было. Интонация — вверх. Отвечают коротко: Yes, I do / No, I don’t.'] },
  { k: 'wh', ru: 'Вопрос со словом', note: ['Вопросительное слово — в самое начало, дальше do + кто + глагол: What do you eat? Порядок «What you eat?» — ошибка.'] },
  { k: 'past', ru: 'Прошедшее', note: ['Глагол меняется: eat → ate, drink → drank, go → went, buy → bought. У правильных глаголов — окончание -ed: worked.'] },
  { k: 'pastq', ru: 'Вопрос о прошлом', note: ['Did в начало — и глагол возвращается в обычную форму: Did you eat? (не Did you ate). Прошедшее «забирает» did.'] },
  { k: 'fut', ru: 'Будущее', note: ['will перед глаголом. В речи почти всегда сокращают: I will → I’ll.'] },
  { k: 'want', ru: 'Хочу', note: ['want to + глагол: I want to eat. Хочу вещь — I want a coffee, а вежливо — I’d like a coffee.'] }
];
const sw = (r, th, lat, cyr) => ({ r, th, lat, cyr });
const S_I = sw('S', 'I', 'aɪ', 'ай'), S_YOU = sw('S', 'you', 'juː', 'ю');
const SENT_FORMS = {
  st: b => [S_I, sw('V', ...b.v), sw('O', ...b.o)],
  neg: b => [S_I, sw('NEG', 'don’t', 'doʊnt', 'доунт'), sw('V', ...b.v), sw('O', ...b.o)],
  yn: b => [sw('Q', 'Do', 'duː', 'ду'), S_YOU, sw('V', ...b.v), sw('O', ...b.o)],
  wh: b => [sw('QW', ...b.wh), sw('Q', 'do', 'də', 'ду'), S_YOU, sw('V', ...b.v)],
  past: b => [S_I, sw('V', ...b.past), sw('O', ...b.o)],
  pastq: b => [sw('Q', 'Did', 'dɪd', 'дид'), S_YOU, sw('V', ...b.v), sw('O', ...b.o)],
  fut: b => [S_I, sw('T', 'will', 'wɪl', 'уил'), sw('V', ...b.v), sw('O', ...b.o)],
  want: b => [S_I, sw('M', 'want to', 'wɑːnt tə', 'уонт ту'), sw('V', ...b.v), sw('O', ...b.o)]
};
const SENT_BASES = [
  { ru: 'завтрак', v: ['eat', 'iːt', 'ит'], past: ['ate', 'eɪt', 'эйт'], o: ['breakfast', 'ˈbrekfəst', 'брэкфаст'], wh: ['What', 'wʌt', 'уот'], tr: {
    st: ['Я завтракаю'], neg: ['Я не завтракаю'], yn: ['Ты завтракаешь?'], wh: ['Что ты ешь?'], past: ['Я позавтракал(а)'], pastq: ['Ты позавтракал(а)?'], fut: ['Я позавтракаю'], want: ['Я хочу позавтракать'] } },
  { ru: 'кофе', v: ['drink', 'drɪŋk', 'дринк'], past: ['drank', 'dræŋk', 'дрэнк'], o: ['coffee', 'ˈkɑːfi', 'кафи'], wh: ['What', 'wʌt', 'уот'], tr: {
    st: ['Я пью кофе'], neg: ['Я не пью кофе'], yn: ['Ты пьёшь кофе?'], wh: ['Что ты пьёшь?'], past: ['Я выпил(а) кофе'], pastq: ['Ты выпил(а) кофе?'], fut: ['Я выпью кофе'], want: ['Я хочу выпить кофе'] } },
  { ru: 'на работу', v: ['go', 'ɡoʊ', 'гоу'], past: ['went', 'went', 'уэнт'], o: ['to work', 'tə wɝːk', 'ту уорк'], wh: ['Where', 'wer', 'уэр'], tr: {
    st: ['Я хожу на работу'], neg: ['Я не хожу на работу'], yn: ['Ты ходишь на работу?'], wh: ['Куда ты ходишь?'], past: ['Я ходил(а) на работу'], pastq: ['Ты ходил(а) на работу?'], fut: ['Я пойду на работу'], want: ['Я хочу пойти на работу'] } },
  { ru: 'билет', v: ['buy', 'baɪ', 'бай'], past: ['bought', 'bɔːt', 'бот'], o: ['a ticket', 'ə ˈtɪkɪt', 'э тикит'], wh: ['What', 'wʌt', 'уот'], tr: {
    st: ['Я покупаю билет'], neg: ['Я не покупаю билет'], yn: ['Ты покупаешь билет?'], wh: ['Что ты покупаешь?'], past: ['Я купил(а) билет'], pastq: ['Ты купил(а) билет?'], fut: ['Я куплю билет'], want: ['Я хочу купить билет'] } }
];
const SENT_RULES = [
  ['arrow-right', ['Порядок слов жёсткий'], ['Кто → действие → что. Переставишь — смысл сломается: The dog bites the man ≠ The man bites the dog.']],
  ['user', ['Подлежащее обязательно'], ['По-русски «Иду домой», по-английски только I’m going home. Даже о погоде: It’s cold.']],
  ['circle-help', ['Вопрос — через помощника'], ['do / does / did / are / can выходят вперёд: You like it → Do you like it?']],
  ['repeat', ['После did — начальная форма'], ['Did you go? — а не Did you went. Прошедшее время «забирает» did.']],
  ['circle-slash', ['Только одно «не»'], ['I don’t know anything — а не I don’t know nothing. Двойное отрицание по-английски — ошибка.']],
  ['message-square-reply', ['Короткий ответ'], ['Do you like it? — Yes, I do. Are you ready? — Yes, I am. Просто Yes звучит сухо.']]
];
const sentSlots = (k, b) => SENT_FORMS[k](SENT_BASES[b]).map(s => SENT_PH[s.th] ? { r: s.r, ...SENT_PH[s.th]() } : s);
const sentText = (k, b) => sentSlots(k, b).map(s => s.th).join(SENT_JOIN) + (SENT_END[k] || '');
