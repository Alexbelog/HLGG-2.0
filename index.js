const dataSets = {
    items: [
        'Шуточное колесо [Активное событие]',
        'Слыш, купи! [Активное событие]',
        'Чат выбирает игру [Активное событие]',
        'Вин Дизель [Активное событие]',
        'Вин  Дроссель [Активное событие]',
        'О господи, 12 из 10 [Активное событие]',
        'Тупое говно, тупого говна [Активное событие]',
        'Кальяный стрим [Активное событие]',
        'Там ревели Гоги [Активное событие]',
        'Отключение интернета [Активное событие]',
        'Вкуснятина [Активное событие]',
        'Black Friday [Активное событие]',
        'Деменция [Активное событие]',
        'Выбор Зумера [Активное событие]',
        'Выбор Бумера [Активное событие]',
        'Хуевый Трейд [Активное событие]',
        'Благотворительность [Активное событие]',
        'Приляг, поспи [Активное событие]',
        'На попей, 3 глоточка [Активное событие]',
        'Джокерге [Активное событие]',
        'Уолтер, убери свой.. [Активное событие]',
        'Классика жанра [Активное событие]',
        'Я здесь закон [Активное событие]',
        'Боярин меня... [Активное событие]',
        'Фанат Сталкера [Одноразовое событие]',
        'LEGO ZA DUPLO [Одноразовое событие]',
        'Блять, я второй [Одноразовое событие]',
        'Главное, не ешь жёлтый снег [Одноразовое событие]',
        'R.G. Механики [Одноразовое событие]',
        'Good Game [Одноразовое событие]',
        'Что такое Денди ? [Одноразовое событие]',
        'Что такое Sega ? [Одноразовое событие]',
        'Что такое PlayStation ? [Одноразовое событие]',
        'Мультики [Одноразовое событие]',
        'Бродилки [Одноразовое событие]',
        'Каловздутие [Одноразовое событие]',
        'Корзина AlexDrop [Предмет] ',
        'Стальные трусы [Предмет]',
        'Воровской карман [Предмет]',
        'Кубик "Гойда" [Предмет]',
        'Капкан [Предмет]',
        'Веревка из убежища 15 [Предмет]',
        'Домашнее задание [Предмет]',
        'Шпаргалка [Предмет]',
        'Заминированный тапок [Предмет]',
        'Потёртый диск [Предмет]',
        'Секундомер [Предмет]',
        'Нейрализатор [Предмет]',
        'Метка "Антидроп" [Предмет]',
        'Платиновая монета [Предмет]',
        'Кора Мудрого дерева [Предмет]',
        'Метка "Hardкорщик" [Предмет]',
        'Ведро Цоя [Предмет]',
        'ESTA VIVO?!?! [Предмет]',
        'Счастливый билет [Предмет]',
        'Ходули [Предмет]',
        'Палка [Предмет]',
    ],
    supeshiaru: [
        'Чуйка на говно',
        'Выбор Бумера',
        'Выбор Зумера',
        'Чат здесь закон',
        'Я здесь закон',
        'Never Lucky',
        'Четырёхлистный клевер',
    ],
    buffs: [
        'Дроп',
        'Стальные трусы',
        'Воровской карман',
        'Гойда',
        'Конченное событие',
        'Веревка из убежища 15',
        'Джокерге',
        'Домашнее задание',
        'Шпаргалка',
        'Заминированный тапок',
        'Скип',
        'Я не спидранер, я просто быстро прохожу игры',
        'Это игровой контент, такое можно',
        'Классика жанра',
        'Я здесь закон',
        'Чат здесь закон',
        'DeLorian',
        'Slow-Мotion',
        'Потрогай траву',
        'Антидроп',
        'Выкуп',
        'WiseTree',
        'Стример Hardкорщик',
        'Тяжело...',
        'Уолтер, убери свой..',
        'ESTA VIVO?!?!',
        'MORTIS',
        'Че пацаны, Аниме?',
        'AYAYA',
        'Ходули',
    ],
    debuffs: [
        'Мистер Ржавчик',
        'Скупщик гречи',
        'ОПЯТЬ НДИДИ',
        'Вор',
        'Тест на вирус',
        'Штаны за 40 хрывень',
        'Пустышка',
        'Конченное событие',
        'Комбо неудач',
        'Три топора',
        'Не та позиция тебе выпала',
        'Повязка Рэмбо',
        'Пиццианская башня',
        'Крышка от мусорного бака',
        'Сексуальные чулки',
        'Проклятая жилетка Вассермана',
        'Шиш кебаб',
    ],
    coin: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
    ],
    streamers: [
        'Alexbelog',
        'Ragnar',
        'Akvitan',
        'REVENGELUV',
        'Wolfiin',
    ],
    corona: [
        'Тест положительный',
        'Тест отрицательный',
    ]
};
let currentDataSet = 'inventory',
    editedDataSets = {};

const editDialog = document.getElementById('dialog-edit'),
    editButton = document.getElementById('btn-edit'),
    editConfirmButton = editDialog.getElementsByClassName('apply')[0],
    editOptions = editDialog.getElementsByClassName('options')[0],
    editPresets = editDialog.getElementsByClassName('presets')[0],
    optionClick = function (option, checked) {
        editedDataSets[currentDataSet][option] = checked;
    },
    generateOptions = function (dataObject) {
        let options = '';
        for (let i in dataObject) {
            options += `<label><input type="checkbox" onchange="optionClick('${i}', this.checked)" ${dataObject[i] ? 'checked' : ''} />${i}</label><br />`;
        }

        return options;
    },
    resetEditedDataSet = function (toState = true) {
        editedDataSets[currentDataSet] = Object.fromEntries(dataSets[currentDataSet].map(v => v).sort().map(v => [v, toState]));
    },
    editedDataToArray = function () {
        let result = [];

        for (let [key, value] of Object.entries(editedDataSets[currentDataSet])) {
            if (value) {
                result.push(key)
            }
        }

        return result;
    },
    radioClickHandler = function () {
        currentDataSet = this.value;

        if (currentDataSet === 'custom') {
            p5Instance.mouseDragEnable(false);
            customDialog.style.display = 'block';

            return;
        }

        customDialog.style.display = 'none';
        p5Instance.mouseDragEnable();

        if (presets.hasPreset(currentDataSet)) {
            if (!editedDataSets[currentDataSet]) {
                resetEditedDataSet();
                presets.applyDefaults(currentDataSet);
            }

            p5Instance.setData(editedDataToArray());

            this.parentElement.append(editButton);
            editButton.className = '';
        }
        else {
            p5Instance.setData(dataSets[currentDataSet]);
            editButton.className = 'hide';
        }
    }
;

editButton.addEventListener('click', function () {
    if (currentDataSet === 'custom') {
        p5Instance.mouseDragEnable(false);
        customDialog.style.display = 'block';

        return;
    }

    editDialog.style.display = 'block';
    p5Instance.mouseDragEnable(false);

    editPresets.innerHTML = '';
    editPresets.append(...presets.getNodes(currentDataSet));
    editOptions.innerHTML = generateOptions(editedDataSets[currentDataSet]);
});
editConfirmButton.addEventListener('click', function () {
    editDialog.style.display = 'none';
    p5Instance.mouseDragEnable();

    p5Instance.setData(editedDataToArray());
});

class Preset {
    constructor(title, entries, isTurnOnEntries, isDefault) {
        this._title = title;
        this._entries = entries;
        this._isTurnOn = Boolean(isTurnOnEntries);
        this._isDefault = Boolean(isDefault);
    }

    get isDefault() {
        return this._isDefault;
    }

    get domNode() {
        const el = document.createElement('a');

        el.setAttribute('href', '#');
        el.appendChild(document.createTextNode(this._title));
        el.addEventListener('click', this.handleClick.bind(this));

        return el;
    }

    handleClick() {
        resetEditedDataSet(!this._isTurnOn);

        for(const i in this._entries) {
            if (editedDataSets[currentDataSet][this._entries[i]] !== undefined) {
                editedDataSets[currentDataSet][this._entries[i]] = this._isTurnOn;
            }
        }

        editOptions.innerHTML = generateOptions(editedDataSets[currentDataSet]);

        return false;
    }
}

class PresetAll extends Preset {
    constructor(isDefault) {
        super('Выбрать всё', [], false, isDefault);
    }
}

class PresetWithoutSpecialRolls extends Preset {
    constructor(isDefault) {
        super(
            'Без спецроллов',
            [
                'Факер опять переписывает правила',
            ],
            false,
            isDefault
        );
    }
}

class PresetOnlyBuffs extends Preset {
    constructor(isDefault) {
        super(
            'Только баффы',
            [
                'Стримбернар',
                'Выключенный ОБС',
                'Успешная вылазка',
                'Шуточное колесо',
                'КОКтейль бунтаря',
                'Щit',
                'Комбинезон химзащиты',
                'Респиратор',
                'Одноразовые перчатки',
                'Банка шпината',
                'Рука для фистинга имени Билли Херрингтона',
                'Кукла вуду',
                'Набор выживальщика',
                'Наперсток удачи',
                'Переносной телепорт',
                'Футляр',
                'Альпинистский трос',
                'Хакерский компьютер',
                'Корона короля петучей',
                'Порошок прозрения',
            ],
            true,
            isDefault
        );
    }
}

class PresetOnlyDebuffs extends Preset {
    constructor(isDefault) {
        super(
            'Только дебаффы',
            [
                'Мистер Ржавчик',
                'Скупщик гречи',
                'ОПЯТЬ НДИДИ',
                'Вор',
                'Тест на вирус',
                'Штаны за 40 хрывень',
                'Пустышка',
                'Конченное событие',
                'Комбо неудач',
                'Три топора',
                'Не та позиция тебе выпала',
                'Повязка Рэмбо',
                'Пиццианская башня',
                'Крышка от мусорного бака',
                'Сексуальные чулки',
                'Проклятая жилетка Вассермана',
                'Шиш кебаб',
            ],
            true,
            isDefault
        );
    }
}

class Presets {
    constructor() {
        this._presets = {
            /*items: [
                new PresetAll(),
                new PresetOnlyBuffs(),
                new PresetOnlyDebuffs(),
                // new PresetWithoutSpecialRolls(),
            ],
            supeshiaru: [
                new PresetAll(),
            ],
            */
            streamers: [
                new PresetAll(),
            ],
        };
    }

    hasPreset(dataSetKey) {
        return !!this._presets[dataSetKey];
    }

    getNodes(dataSetKey) {
        let result = [];

        for(const i in this._presets[dataSetKey]) {
            result.push(document.createTextNode(', '));
            result.push(this._presets[dataSetKey][i].domNode);
        }

        result.shift();

        return result;
    }

    applyDefaults(dataSetKey) {
        for(const i in this._presets[dataSetKey]) {
            if (this._presets[dataSetKey][i].isDefault) {
                this._presets[dataSetKey][i].handleClick();
            }
        }
    }
}

const presets = new Presets;

function getImageURI(index) {
    let result = 'images/items/000.png',
        mapping = []
    ;
    switch (currentDataSet) {
        case "buffs":
            mapping = [
                33,
                34,
                35,
                36,
                37,
                38,
                39,
                40,
                41,
                42,
                43,
                44,
                45,
                46,
                47,
                48,
                49,
                50,
                51,
                52,
                53,
                54,
                55,
                56,
                57,
                58,
                59,
                60,
                61,
                62,
            ];
            result = 'images/items/0' + ('0' + (mapping[index])).slice(-2) + '.png';
            break;

        case "debuffs":
            mapping = [
                1,
                7,
                10,
                12,
                16,
                18,
                20,
                21,
                22,
                31,
                45,
                23,
                49,
                57,
                61,
                68,
                70,
            ];
            result = 'images/items/0' + ('0' + (mapping[index])).slice(-2) + '.png';
            break;

        case "items":
            mapping = [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31,
                32,
                33,
                34,
                35,
                36,
                37,
                38,
                39,
                40,
                41,
                42,
                43,
                44,
                45,
                46,
                47,
                48,
                49,
                50,
                51,
                52,
                53,
                54,
                55,
                56,
                57,
            ];
            result = 'images/items/0' + ('0' + (mapping[index])).slice(-2) + '.png';
            break;

        case "supeshiaru":
            mapping = [
                25,
                27,
                28,
                13,
                30,
                45,
                62,
            ];
            result = 'images/items/0' + ('0' + (mapping[index])).slice(-2) + '.png';
            break;

        case "coin":
             mapping = [
                1,
                2,
                3,
                4,
                5,
                6,
            ];
            result = 'images/coins/0' + ('0' + (mapping[index])).slice(-2) + '.png';
            break;

        case "streamers":
            result = 'images/streamers/'+ dataSets[currentDataSet][index] +'.png';
            break;

        case "corona":
            result = 'images/items/016.png';
            break;
    }

    return result;
}

const p5Instance = new p5(WheelSketch);

p5Instance.onAfterSetup = function () {
    p5Instance.setVideos([
        () => p5Instance.random([
            ['videos/Putin walking meme (Full version).mp4', 32],
            'videos/milos.mp4',
            'videos/Nope..mp4',
        ]),
        () => p5Instance.random([
            //['videos/BASSBOOSTED   Смешарики-От винта.mp4', 14, 28],
            // ['videos/BASSBOOSTED   Смешарики-От винта.mp4', 44, 34],
            //['videos/BASSBOOSTED   Смешарики-От винта.mp4', 73, 29],
        ]),
        ['videos/JOJO\'S BIZARRE MAKEUP TUTORIAL.mp4', 6],
        //['videos/Останьте, босмер.mp4', 1],
        ['videos/All Star but they don\'t stop coming pitch corrected.mp4', 3],
        () => p5Instance.random([
            ['videos/Pinoki - Pingana (Havana by Camila Cabello ft. Young Thug Remix).mp4', 32],
            //['videos/Pinoki - Pingana (Havana by Camila Cabello ft. Young Thug Remix).mp4', 22],
        ]),
        ['videos/HOOD NARUTO  pt.4 (full video) naruto vs pain.mp4', 23, 32],
        'videos/arabic.mp4',
        'videos/Country Roads cover by Mario Mario.mp4',
        'videos/[Re-upload] [1080p] HONK HONK.mp4',
        'videos/CHIKA VIBES   Kaguya-sama Love is War.mp4',
        'videos/best Chika meme ever   anime characters in Chika dance MV.mp4',
        'videos/chipichapa.mp4',
        'videos/Music make you lose control triangle.mp4',
        'videos/Танец под волчок из  Что Где Когда.mp4',
        'videos/dendi.mp4',
        ['videos/fish.mp4', 0, 17],
        'videos/gena bukin.mp4',
        ['videos/greg.mp4', 0, 30],
        ['videos/khajit.mp4', 0, 30],
        ['videos/дора, МЭЙБИ БЭЙБИ — Не исправлюсь.mp4', 0, 30],
        ['videos/Dj Eban.mp4', 48],
        //['videos/RONDONDON  (official music video) Lil John & Eastside boyz- Get Low (cover).mp4', 0, 30], // Not cool
        ['videos/lotar.mp4', 0, 31],
        ['videos/Sailor Moon OP1.mp4', 0, 32],
        ['videos/Antonio Banderas, Los Lobos • Desperado.mp4', 0, 30],
        () => p5Instance.random([
            ['videos/I\'m a Bee.mp4', 0, 23],
            //['videos/I\'m a Bee.mp4', 23, 25],
        ]),
        'videos/faina.mp4',
        'videos/love Blade Runner 2049 edit.mp4',
        // 'videos/mausu.mp4',

        ['videos/Папич-марш  прощание славянки .9мая.mp4', 7],
        ['videos/Мэддисон - Shooting Stars.mp4', 13],
        () => p5Instance.random([
            ['videos/Мэддисон дрифтит под Фонк.mp4', 0, 25],
            ['videos/учит крутить рулём под phonk.mp4', 5],
        ]),
        () => p5Instance.random([
            ['videos/[SFM] Shrekophone.mp4', 15],
        ]),
        //['videos/streamers/U GOT THAT   LASQA EDITION.mp4', 9],
        // 'videos/streamers/westmage - kalovik.mp4',
        // 'videos/streamers/Крутое ХПГ.webm',
        // 'videos/streamers/Лизон в ХПГ.mp4',

        'videos/01.mp4', // Crab rave
        'videos/02.mp4',
        'videos/03.mp4', // AAAAAAAT
        'videos/04.mp4',
        'videos/06.mp4',
        'videos/x-men.mp4', // HPG
        'videos/Ryan Gosling in Stalker.mp4',
        'videos/ryzen.mp4',
        'videos/Skooma Addicted Khajiit Inhales Skooma.mp4',
        'videos/Sleepwalker - Danila Bagrov edit.mp4',
        'videos/Walter.mp4',
        'videos/Стрим по готике 2 от мэддисона.mp4', // banned
        'videos/17.mp4', // U got that
        'videos/18.mp4',
        'videos/19.mp4',
        'videos/Тони не спал с тобой. Тонилайф.mp4', // HPG
        'videos/Этот мем поймут только 25-летние.mp4', // HPG
        'videos/Заминированный тапок- Remix.mp4', // HPG
        'videos/9MM x LOLI SHIGURE UI.mp4', // HPG
        'videos/BOOMBASTIC.mp4', // HPG
        'videos/slovopacana.mp4', // HPG
        'videos/Легендарное РУКОПОЖАТИЕ.mp4', // HPG
    ]);
};

const image = document.querySelector('#item-image img');
p5Instance.onSelectItem = function(data, selectedKey) {
    let url = 'images/items/000.png';
    if (dataSets[currentDataSet]) {
        const imageIndex = dataSets[currentDataSet].indexOf(data[selectedKey]);
        if (imageIndex !== -1) {
            url = getImageURI(imageIndex);
        }
    }

    if (image.src !== url) {
        image.src = url;
    }
};

const customDialog = document.getElementById('custom-list'),
    customTextarea = customDialog.getElementsByTagName('textarea')[0],
    customButton = customDialog.getElementsByTagName('button')[0],
    saveCustomData = function (stringData) {
        const url = new URL(window.location);

        url.search = new URLSearchParams({custom: stringData});
        console.log(url.toString());
        history.pushState({}, '', url.toString());
    },
    loadCustomData = function () {
        const urlSearchParams = new URL(window.location).searchParams,
            list = urlSearchParams.get('custom')
        ;

        return list;
    },
    applyCustomData = function (customData) {
        const customRadio = document.querySelector('[name="list"][value="custom"]');
        customTextarea.value = customData;

        customButton.dispatchEvent(new Event('click'));
        customRadio.setAttribute('checked', true);
    },
    windowPopStateHandler = function (event) {
        applyCustomData(loadCustomData());
    }
;

customButton.addEventListener('click', function () {
    customDialog.style.display = 'none';

    p5Instance.setData(customTextarea.value.split('\n'));
    p5Instance.mouseDragEnable();

    saveCustomData(customTextarea.value);
});

let radios = document.querySelectorAll('[name="list"]');
for(let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', radioClickHandler);

    // Выбираем начальный вариант при загрузке страницы
    if (radios[i].hasAttribute('checked')) {
        radios[i].dispatchEvent(new Event('click'));
    }
}

const customData = loadCustomData();
if (customData) {
    applyCustomData(customData);
}

window.onpopstate = windowPopStateHandler;
