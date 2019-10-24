# Список всех критериев продвинутого интенсива



# Базовые критерии


## Задача

### Код соответствует техническому заданию проекта
Все обязательные пункты технического задания выполнены

### При выполнении кода не возникает необработанных ошибок
При открытии диалогов, загрузке данных и работе с сайтом не возникает ошибок, программа не ломается и не зависает


## Именование

### Название переменных, параметров, свойств и методов начинается со строчной буквы и записываются в нотации [camelcase](https://ru.wikipedia.org/wiki/CamelCase) 

### Для названия значений используются английские существительные
Сокращения в словах запрещены. Сокращённые названия переменных можно использовать только, если такое название широко распространено. Допустимые сокращения:
- `xhr`, для объектов `XMLHttpRequest`
- `evt` для объектов `Event` и его производных (`MouseEvent`, `KeyboardEvent` и подобные)
- `ctx` для контекста канваса
- `i`, `j`, `k`, `l`, `t` для счётчика в цикле, `j` для счётчика во вложенном цикле и так далее по алфавиту
- если циклов два и более, то можно не переиспользовать переменную `i`
- `cb` для единственного коллбэка в параметрах функции

### Названия констант (постоянных значений) написаны прописными (заглавными) буквами
Слова разделяются подчёркиваниями (`UPPER_SNAKE_CASE`), например:
 ```js
 const MAX_HEIGHT = 400;
 const EARTH_RADIUS = 6370;
 ```
 
### Классы названы английскими существительными. Название класса начинается с заглавной буквы
Названия функций не являющихся конструкторами должны начинаться со строчной буквы

Неправильно:
```js
class wizard {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Run {
  constructor() {
    console.log(`О, я бегу!`);
  }
}
```

Правильно:
```js
class Wizard {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Runner {
  constructor() {
    console.log(`О, я бегун!`);
  }
}
```

### Перечисления (`Enum`) названы английскими существительными и начинаются с прописной (заглавной) буквы
Перечисления начинаются с прописной (заглавной) буквы. Перечисления названы существительными в единственном числе. Значения перечислений объявлены как константы

Неправильно:
```js
const view = {
  artist: Artist,
  genre: Genre,
};

const EndGameType = {
  lives: `lives`,
  quests: `quests`,
};
```

Правильно:
```js
const View = {
  ARTIST: Artist,
  GENRE: Genre,
};

const EndGameType = {
  LIVES: `lives`,
  QUESTS: `quests`,
};
```
 
### Массивы названы существительными во множественном числе
Неправильно:
```js
const age = [12, 40, 22, 7];
const name = [`Иван`, `Петр`, `Мария`, `Алексей`];

const wizard = {
  name: `Гендальф`,
  friend: [`Саурон`, `Фродо`, `Бильбо`]
};
```

Правильно:
```js
const ages = [12, 40, 22, 7];
const names = [`Иван`, `Петр`, `Мария`, `Алексей`];

const wizard = {
  name: `Гендальф`,
  friends: [`Саурон`, `Фродо`, `Бильбо`]
};
```

### Название функции или метода содержит глагол
Название функции/метода должно быть глаголом и соответствовать действию, которое выполняет функция/метод. Например, можно использовать глагол `get` для функций/методов, которые что-то возвращают

Исключения:
1. Функции конструкторы (см. критерий `Конструкторы названы английскими существительными`)
2. Функции обработчики/коллбэки (см. критерий `Из названия обработчика события и функции-коллбэка следует, что это обработчик`)

Неправильно:
```js
const function1 = (names) => {
  names.forEach((name) => {
    console.log(name);
  });
};

const wizard = {
  name: `Гендальф`,
  action() {
    console.log(`Стреляю файрболлом!`);
  }
};

const randomNumber = () => {
  return Math.random();
};
```

Правильно:
```js
const printNames = (names) => {
  names.forEach((name) => {
    console.log(name);
  });
};

const wizard = {
  name: `Гендальф`,
  fire() {
    console.log(`Стреляю файрболлом!`);
  }
};

const getRandomNumber = () => {
  return Math.random();
};
```

### Названия модулей записаны строчными (маленькими) буквами. Слова разделены дефисами
Для того, чтобы избежать конфликтов имён в разных операционных системах, лучше применять наименее конфликтный способ именования файлов — строчными (маленькими) буквами через дефис


## Форматирование и внешний вид

### Неизменяемые значения объявлены через `const`
При объявлении новых значений, предпочтение стоит отдавать использованию ключевого слова `const`. Использовать `let` нужно только в том случае, если значение будет перезаписано

Неправильно:
```js
let a = 1;
let b = 2;
let sum = a + b;
```

Правильно:
```js
const a = 1;
const b = 2;
const sum = a + b;

for (let i = 0; i < 42; i++) {
  console.log(i);
}
```

Неправильно:
```js
let level = getLevel(this.state.level, this.quest);
let answerNames = Object.keys(level.answers);
let answers = answerNames.map((key) => ({key, value: level.answers[key]}));
```
Правильно:
```js
const level = getLevel(this.state.level, this.quest);
const answerNames = Object.keys(level.answers);
const answers = answerNames.map((key) => ({key, value: level.answers[key]}));
```

### Используются обязательные блоки кода
В любых конструкциях, где подразумевается использование блока кода (фигурных скобок), таких как `for`, `while`, `if`, `switch`, `function` — блок кода используется обязательно, даже если инструкция состоит из одной строчки

Неправильно:
```js
(() => {
  if (x % 2 === 1) return;
})();
```

Правильно:
```js
(() => {
  if (x % 2 === 1) {
    return;
  }
})();
```

Исключения составляют однострочные стрелочные функции, которые можно использовать без обязательных блоков кода:
```js
const checkedCheckBoxes = checkboxes.filter((checkbox) => checkbox.checked);
```

### Список констант идёт перед основным кодом
Все константы выносятся в начало модуля/файла

### Код соответствует гайдлайнам <img src="https://eslint.org/img/logo.svg" width="24" alt="ESLint"/>
- Отступы между операторами и ключевым словами соответствуют стайлгайду.
- Для отступов используются одинаковые символы, вложенность кода обозначается отступами.
- Однообразно расставлены пробелы перед, после и внутри скобок, операторов и ключевых слов

---
Не возникает ошибок при проверке проекта ESLint: `npm i && npm test`

### Сложные составные константы собираются в перечисления `Enum`
Множества однотипных констант собираются в перечисления.

Неправильно:
```js
const EARTH_WEIGHT = 5.972 * Math.pow(10, 24);
const EARTH_GRAVITY = 9.8;
const EARTH_RADIUS = 6370;
```

Правильно:
```js
const Earth = {
  WEIGHT: 5.972 * Math.pow(10, 24),
  GRAVITY: 9.8,
  RADIUS: 6370
};
```

### Для итерирования по массивам и структурам данных по которому можно итерироваться (**Iterable**) используется конструкция `for .. of`
Там где не требуется индекс элемента массива или нужно обойти все элементы итерируемой структуры данных, используется цикл `for .. of` вместо цикла `for`

Неправильно:
```js
for (let i = 0; i < levels.length; i++) {
  const level = levels[i];
  renderLevel(level);
}
```

Правильно:
```js
for (const level of levels) {
  renderLevel(level);
}
```

### Приватные поля в классах помечены
Названия методов, которые есть в классе, но не предназначены для внешнего использования начинаются с нижнего подчёркивания `_`. Доступ к таким полям из вне класса запрещён


## Мусор

### В итоговом коде проекта находятся только те файлы, которые были на момент создания репозитория, которые были получены в патчах и файлы, созданные по заданию

### В коде проекта нет файлов, модулей и частей кода, которые не используются, включая, закомментированные участки кода
Нет файлов скриптов, которые являются «мёртвым кодом», который никогда не выполняется

### Версии используемых зависимостей зафиксированы в `package.json`
В списках зависимостей в файле `package.json` указаны точные версии используемых пакетов. Версия обязательно должна быть указана. Не допускается использование `^`, `*` и `~`

### В коде нет заранее недостижимых участков кода
Например:
- Невыполнимые условия:
```js
const happen = false;
if (happen) {
  console.log(`This will not happen anyway!`);
}
```

- Операции после выхода из функции <img src="https://eslint.org/img/logo.svg" width="16" alt="ESLint"/>: 
```js
(() => {
  return;
  console.log(`This will not happen!`);
})();
```


## Корректность

### Константы и перечисления нигде в коде не переопределяются
Константы и перечисления (`enum`) используются только для чтения, и никогда не переопределяются на всем промежутке жизни программы


### Используются строгие сравнения вместо нестрогих <img src="https://eslint.org/img/logo.svg" width="24" alt="ESLint"/>
Вместо операторов нестрогого сравнения `==` и `!=`, используются операторы строгого сравнения `===`, `!==`. [Таблицы истинности](http://dorey.github.io/JavaScript-Equality-Table/) для JavaScript

Неправильно:
```js
const foo = ``;
const bar = [];
if (foo == bar) {
  destroy(world);
}
```

Правильно:
```js
const foo = ``;
const bar = [];
if (foo === bar) {
  destroy(world);
}
```

### В коде не используются зарезервированные слова в качестве имён переменных и свойств
В названия переменных и свойств не включаются операторы и ключевые слова зарезервированные для будущих версий языка (например, `class`, `extends`).
Список всех зарезервированных слов можно найти [тут](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)   

### Шаблоны созданные в коде программы корректны
HTML-страница должна быть корректным **W3C** документом в любой момент работы программы. Т.о. шаблоны не должны конструировать некорректные HTML-фрагменты

Неправильно:
```html
<div class="player-wrapper" src="${answer.src}"></div>
```

Правильно:
```html
<div class="player-wrapper" data-src="${answer.src}"></div>
```

### API встроенных функций и объектов используется правильно
Передаются корректные значения, которые ожидаются по спецификации

Неправильно:
```js
const isPressed = element.getAttribute(`aria-pressed`, false);
```
Правильно:
```js
const isPressed = element.getAttribute(`aria-pressed`);
```
Встроенные методы массивов используются по назначению.

Неправильно:
```js
let greet = `Привет `;

wizards.map((it) => {
  greet += `, ${it.name}`;
});

console.log(`${greet}!`);
```
Правильно:
```js
const greet = `Привет `;

const names = wizards.map((it) => it.name);

console.log(`${greet} ${names.join(`, `)}!`);
```

### Отсутствуют потенциально некорректные операции
Например, некорректное сложение двух операндов как строк. Проблема приоритета конкатенации над сложением. 

Неправильно:
```js
new Date() + 1000;
```

Правильно:
```js
+new Date() + 1000;
```
Некорректные проверки на существование с числами. 
Пример некорректной проверки на то, что переменная является числом:
```js
const double = (value) => {
  if (!value) {
    return NaN;
  }

  return value * 2;
};

double(0);
double();
double(5);
```

Потенциально некорректная операция взятия целой части числа

Неправильно:
```js
const minutesNumber = ~~(seconds / 60);
```

Правильно:
```js
const minutesNumber = Math.trunc(seconds / 60);
```


## Модульность

### Все файлы JS представляют собой отдельные модули [ES2015](http://exploringjs.com/es6/ch_modules.html)
Экспорт и импорт значений производится при помощи ключевых слов `export` и `import`. Сохранение в глобальную область видимости значений не допускается

Пример правильного модуля:
```js
import {changeView} from '../util';
import WelcomeView from './welcome-view';
import App from '../main';


export default class Welcome {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    changeView(this.view);

    this.view.onStart = () => {
      App.showGame();
    };
  }
}
```

### Модули не экспортируют изменяющиеся переменные
Модуль не должен экспортировать переменную значение которой может измениться в будущем
Неправильно:
```js
export let latestResult;
```

Правильно:
```js
export const latestResult = loadLatestResult();
```

### Название модуля соответствует его содержимому
Разные логические части кода вынесены в отдельные файлы модулей.
Имя модуля должно соответствовать его содержимому. Например, если в модуле лежит класс `GameView`, то и имя модуля должно быть `game-view.js`

### Из одного модуля экспортируется не больше одного класса. Класс всегда экспортируется как `default`


## Универсальность

### Код является кроссбраузерным и не вызывает ошибок в разных браузерах и разных операционных системах

При проверке этого критерия, необходимо удостовериться в правильной работе и отсутствии сообщений об ошибках в выполняемых скриптах в браузерах: Chrome, Firefox, Safari, Microsoft Edge.

---
Допустимое исключение в кроссбраузерности кода: валидация форм в Safari. Safari плохо поддерживает работу с валидацией, например, не показывает ошибку, если при отправке формы не введены данные в поле с атрибутом required, поэтому небольшие ошибки, связанные с валидацией в Safari можно проигнорировать.
Тестирование необходимо проводить именно в последних версиях браузеров, которые предоставляют поставщики, а не те, которые установлены в данный момент на компьютере проверяющего.
Важно: для пользователей Windows последняя версия браузера Safari — 5, а у всех остальных — 9, поэтому проводить тестирование на Windows не надо.
IE не поддерживается, только Edge.


## Магия

### Нельзя пользоваться глобальной переменной `event`
Приводит к неосознанному коду:
```js
const elem = document.querySelector(`.test`);

const onElemClick = () => {
  event.target.innerText = `you really need event`;
};

elem.addEventListener(`click`, oneElemClick);
```

## Оптимальность

### Своевременный выход из цикла: цикл не работает дольше чем нужно
Неправильно:
```js
apartments.forEach((it, index) => {
  if (index < 3) {
    render(it);
  }
});
```

Правильно:
```js
for (let i = 0; i < Math.min(apartments.length, 3); i++) {
  render(apartments[i]);
}
```

### Внутри шаблонов-строк (template literals) не используется конкатенация строк
Конкатенация строк в шаблонных строках является антипаттерном, т.к. ухудшает читаемость шаблонной строки

Неправильно:
```js
const page = `${header + `\n` + main + `\n` + footer}`;
```

Правильно:
```js
const page = `${header}\n${main}\n${footer}`;
```

### Количество вызовов циклов минимизировано
Если задачу можно решить за один проход по циклу, вместо нескольких она должна быть решена за один

Неправильно:
```js
const wizardNames = source.
    map((it) => it.wizard).
    map((it) => it.name);
```

Правильно:
```js
const wizardNames = source.map((it) => it.wizard.name);
```

### Множественные DOM-операции производятся на элементах, которые не добавлены в DOM 
Например, наполнение скопированного из шаблона элемента данными


## Безопасность

### Обработчики события добавляются и удаляются своевременно
Обработчики событий для виджетов добавляются только в момент появления виджета на странице и удаляются в момент их исчезновения.

**Защита от `memory-leak`**  
Кол-во обработчиков подвешенных на глобальную область видимости не должно возрастать. Например, если подвешивается обработчик, который следит за перемещением курсора по экрану, то он должен подвешиваться и отвешиваться в нужный момент. В случае если обработчик на `document` только подвешивается это может свидетельствовать о проблеме бесконечного создания обработчиков и потенциальной утечке памяти.

**Защита от неправильного поведения интерфейса**
 Например, на странице может существовать попап, который скрывается по `ESC`. Лучше для него гасить обработчик, если он не показан, потому что он может каким-то образом ломать поведение сайта — останавливать распространение, отменять поведение по умолчанию и т.д. Поэтому поведение должно быть **явным** — если в этот момент времени обработчики не нужны, их нужно удалить. Явное и предсказуемое поведение.

### Запрещено использовать `innerHTML` и подобные ему свойства и методы для вставки пользовательских строк (имён, фамилий и т.д.)
Защита от XSS-атак, а также изменения исходных данных, запутывание пользователя и прочее



# Дополнительные критерии

## Задача

### Техническое задание реализовано в полном объёме
Все обязательные и необязательные пункты технического задания выполнены


## Именование

### Переменные носят абстрактные названия и не содержат имён собственных

Неправильно:
```js
const keks = {
  name: `Кекс`
};
```

Правильно:
```js
const cat = {
  name: `Кекс`
};
```

### Название методов и свойств объектов не содержит название объектов 
Неправильно:
```js
const popup = {
  openPopup() {
    console.log(`I will open popup`);
  }
};

class Wizard {
  constructor(name = `Пендальф`) {
    this.wizardName = name;
  }
}
```

Правильно
```js
const popup = {
  open() {
    console.log(`I will open popup`);
  }
};

class Wizard {
  constructor(name = `Пендальф`) {
    this.name = name;
  }
}
```

### Из названия обработчика события и функции-коллбэка следует, что это за обработчик
Для единственного обработчика или функции можно использовать `callback` или `cb`. Для именования нескольких обработчиков внутри одного модуля используется `on` или `handler` и описание события. Название обработчика строится следующим образом:
 - `on` + (на каком элементе) + что случилось:
 
```js
const onSidebarClick = () => {};
const onContentLoad = () => {};

const onResize = () => {};
```
 - (на каком элементе) + что случилось + `Handler`:
 
```js
const sidebarClickHandler = () => {};
const contentLoadHandler = () => {};

const resizeHandler = () => {};
```


## Единообразие

### Все функции объявлены единообразно
При объявлении функций используются только стрелочные функции. Для объявления методов объектов используется специальный синтаксис для методов. Для объявления классов используется ключевое слово `class`.
 Смешение стилей в рамках проекта не допускается

Функция:
```js
const getTheMeaningOfLive = () => {
  return 42;
};
```
или
```js
const getTheMeaningOfLive = function () {
  return 42;
};
```

Метод:
```js
const GOD = {
  createWorld() {
    return `Your world is ready!`;
  }
};
```

Конструктор
```js
class Planet {
  constructor(weight, mass) {
    this.weight = weight;
    this.mass = mass;
  }
}
```

---
Использование объявления функций через `function` допускается, но не рекомендуется, т.к. все возможные случаи использования контекстных функций решаются при помощи синтаксиса для методов и классов.

### Используется единый стиль именования переменных
Стиль именования переменных сохраняется во всех модулях, например:
- не следует мешать обработчики содержащие `Handler` и `on`
- если переменные, которые хранят DOM-элемент и содержат слово `Element`, то это правило работает везде.

Неправильно:
```js
const popupMainElement = document.querySelector(`.popup`);
const sidebarNode = document.querySelector(`.sidebar`);
const similarContainer = popupMainElement.querySelector(`ul.similar`);
```

Правильно:
```js
const popupMainElement = document.querySelector(`.popup`);
const sidebarElement = document.querySelector(`.sidebar`);
const similarContainerElement = popupMainElement.querySelector(`ul.similar`);
```

### При использовании встроенного API, который поддерживает несколько вариантов использования, используется один способ
Если существуют несколько разных **API** позволяющих решить одну и ту же задачу, например поиск элемента по **id** в DOM-дереве, то в проекте используется только один из этих **API**.

Неправильно:
```js
const popupMainElement = document.querySelector(`#popup`);
const sidebarElement = document.getElementById(`sidebar`);

const popupClassName = popupMainElement.getAttribute(`class`);
const sidebarClassName = sidebarElement.className;
```

Правильно:
```js
const popupMainElement = document.querySelector(`#popup`);
const sidebarElement = document.querySelector(`#sidebar`);
```

```js
const popupClassName = popupMainElement.getAttribute(`class`);
const sidebarClassName = sidebarElement.getAttribute(`class`);

```

или

```js
const popupMainElement = document.getElementById(`popup`);
const sidebarElement = document.getElementById(`sidebar`);
```

```js
const popupClassName = popupMainElement.className;
const sidebarClassName = sidebarElement.className;

```

### Методы внутри классов упорядочены
Во всех классах методы упорядочены следующим образом:

1. Конструктор
2. Геттеры/сеттеры свойств объекта
3. Основные методы объекта:
  - Методы объекта
  - Приватные методы
  - Перегруженные методы родительских объектов
4. Обработчики событий
5. Статические методы

Сортировка основных методов объекта свободная, подразумевается что методы будут расположены оптимально для конкретного класса нет смысла ограничивать порядок, потому что он может меняться в зависимости от особенностей объекта.


## Модульность

### В случае, если одинаковый код повторяется в нескольких модулях, повторяющаяся часть вынесена в отдельный модуль
Критерий касается структурных единиц кода — повторяющийся блок кода, либо функции с одним и теми же конструкциями, например, утилитные методы для работы с DOM:
```js
export const createElement = (template) => {
  const outer = document.createElement(`div`);
  outer.innerHTML = template;
  return outer;
};

const main = document.getElementById(`main`);

export const changeView = (view) => {
  main.innerHTML = ``;
  main.appendChild(view.element);
};
```
**Не стоит выносить в отдельный модуль одну повторяющуюся инструкцию**:
```js
export const createElement = (template) => {
  const outer = document.createElement(`div`);
  outer.innerHTML = template;
  return outer;
};
```


## Корректность

### Методы, которые не используют поля класса объявлены как статические
Если метод не использует поля класса в котором он объявлен, то этот метод должен быть объявлен как статический:

Неправильно:
```js
class App {
  showWelcome() {
    location.hash = ControllerID.WELCOME;
  }

  showGame() {
    location.hash = ControllerID.GAME;
  }

  showScores() {
    location.hash = ControllerID.SCOREBOARD;
  }
}
```

Правильно:
```js
class App {
  static showWelcome() {
    location.hash = ControllerID.WELCOME;
  }

  static showGame() {
    location.hash = ControllerID.GAME;
  }

  static showScores() {
    location.hash = ControllerID.SCOREBOARD;
  }
}
```

## Избыточность

### В проекте не должно быть избыточных проверок
Например, если заранее известно, что функция всегда принимает числовой параметр, то не следует проверять его на существование

Неправильно:
```js
const isPositiveNumber = (myNumber) => {
  if (typeof myNumber === `undefined`) {
    throw new Error(`Parameter is not defined`);
  }
  return myNumber > 0;
};

isPositiveNumber(15);
isPositiveNumber(-30);
```

Правильно:
```js
const isPositiveNumber = (myNumber) => {
  return myNumber > 0;
};

isPositiveNumber(15);
isPositiveNumber(-30);
```

### Отсутствует дублирование кода: повторяющиеся части кода переписаны как функции или вынесены из условий
При написании кода следует придерживаться принципа [DRY](https://ru.wikipedia.org/wiki/Don%E2%80%99t_repeat_yourself)

Неправильно:
```js
if (this.level >= 10) {
  this.timer.stopTimer();
  this.timer.stopTimeout();
  this.setResult();
  removeTimer();
} else if (this.lives <= 0) {
  this.timer.stopTimer();
  this.timer.stopTimeout();
  app.showResultFail();
  removeTimer();
}
```

Правильно:
```js
this.timer.stopTimer();
this.timer.stopTimeout();

if (this.level >= 10) {
  this.setResult();
} else if (this.lives <= 0) {
  app.showResultFail();
}

removeTimer();
```

### Если при использовании условного оператора в любом случае возвращается значение, альтернативная ветка опускается
Неправильно:
```js
((val, anotherVal) => {
  if (2 > 1) {
    return val;
  } else {
    return anotherVal;
  }
});
```

Правильно:
```js
((val, anotherVal) => {
  if (2 > 1) {
    return val;
  }

  return anotherVal;
});
```

### Отсутствуют лишние приведения и проверки типов
Если заранее известно что в переменной число, то нет смысла превращать переменную в число `parseInt(myNumber)`. Тоже касается и избыточной проверки булевой переменной

Неправильно:
```js
if (booleanValue === true) {
  console.log(`It\`s true!`);
}
```

Правильно:
```js
if (booleanValue) {
  console.log(`It\`s true!`);
}
```

### Там где возможно, в присвоении значения вместо if используется тернарный оператор
Неправильно:
```js
let sex;
if (male) { 
  sex = `Мужчина`;
} else { 
  sex = `Женщина`;
}
```
Правильно:
```js
const sex = male ? `Мужчина` : `Женщина`;
```
 
### Условия упрощены
Если функция возвращает булево значение, не используется `if..else` с лишними `return`

Неправильно:
```js
((firstValue, secondValue) => {
  if (firstValue === secondValue) {
    return true;
  } else {
    return false;
  }
});
```
Правильно:
```js
((firstValue, secondValue) => {
  return firstValue === secondValue;
});
```


## Магия

### В коде не используются «магические значения», под каждое из них заведена отдельная переменная, названная как константа


## Оптимальность

### Значения не конвертируются в строку и обратно без необходимости
Если состояние переменной можно сохранить в переменную или во внутренне свойство, то лучше использовать внутреннее состояние объекта, вместо сериализации из значения в строку и наоборот

Неправильно:
```js
class Timer {
  setTime({minutes, seconds}) {
    document.querySelector(`.timer-value-mins`).textContent = minutes;
    document.querySelector(`.timer-value-secs`).textContent = seconds;
  }
  getTime() {
    const minutes = parseInt(document.querySelector(`.timer-value-mins`).textContent, 10);
    const seconds = parseInt(document.querySelector(`.timer-value-secs`).textContent, 10);
  
    return {minutes, seconds};
  }
}
```

Правильно:
```js
class Timer {
  constructor(time) {
    this.minutesEl = document.querySelector(`.timer-value-mins`);
    this.secondsEl = document.querySelector(`.timer-value-secs`);
    this.time = time;
  }
  
  update() {
    this.minutesEl.textContent = this.time.minutes;
    this.secondsEl.textContent = this.time.seconds;
  }
  
  get time() {
    return this.myTime;
  }
  
  set time(time) {
    this.myTime = time;
    this.update();
  }
}
```

### Константы, используемые внутри функций создаются вне функций и используются повторно через замыкания

### Поиск элементов по селекторам делается минимальное количество раз, после этого ссылки на элементы сохраняются

Неправильно:
```js
for (let i = 0; i < Math.min(apartments.length, 3); i++) {
  const dialog = document.querySelector(`.dialog`);
  render(dialog, apartments[i]);
}
```

Правильно:
```javascript
const dialog = document.querySelector(`.dialog`);

for (let i = 0; i < Math.min(apartments.length, 3); i++) {
  render(dialog, apartments[i]);
}
```

### Массивы и объекты, содержимое которых вычисляется, собираются один раз, а после этого только переиспользуются

### Изменения применяются точечно
Например, при удалении классов с DOM-элемента, не производится попытка удалить все возможные классы, если можно убрать лишь тот, который действительно установлен на DOM-элементе в данный момент

Неправильно:
```js
const imageContainer = document.querySelector(`.image-container`);

const changeFilter = (filterName) => {
  imageContainer.classList.remove(`filter-chrome`, `filter-sepia`, `filter-marvin`, `filter-phobos`, `filter-heat`);
  imageContainer.classList.add(filterName);
};
```

Правильно:
```js
const imageContainer = document.querySelector(`.image-container`);

let currentFilter;
const changeFilter = (filterName) => {
  if (currentFilter) {
    imageContainer.classList.remove(currentFilter);
  }
  imageContainer.classList.add(filterName);
  currentFilter = filterName;
};
```


## Сложность. Читаемость.

### Для каждого события используется отдельный обработчик
Одна функция не является обработчиком нескольких разных событий

### Длинные функции и методы разбиты на несколько небольших

### Для работы с JS-коллекциями используются итераторы для массивов
Итераторы используются для трансформаций массивов — `map`, `filter`, `sort` и прочие. А также для обхода проблемы потери окружения в циклах — `forEach`

Например:
```js
elements.forEach((el) => {
  el.onclick = () => {
    console.log(el);
  };
});
```

### Оператор присваивания не используется как часть выражения
Неправильно:
```js
imgGenerate(picArray = JSON.parse(data));
```

Правильно:
```js
picArray = JSON.parse(data);
imgGenerate(picArray);
```

### Операции над DOM-элементами инкапсулированы
Все операции над элементами DOM-дерева происходят только там, где эти элементы были созданы и не используются снаружи. Например, всё что связано с отрисовкой данных должно находиться внутри класса `View` и управляться только внутри этого класса, любой доступ к закрытым данным снаружи запрещён

Неправильно:
```js
class PlayerController {
  constructor(view) {
    this.view = view;
  }
  
  init() {
    const checkboxes = Array.from(this.view.element.querySelectorAll(`input`));
    
    const answers = [];
  
    this.view.makeDecision = () => {  
      answers.push(checkboxes.filter((it) => it.checked));
      
      if (answers.length > 0) {
        goToNextScreen();
      }
    };
  }
}
```

Правильно:
```js
class PlayerController {
  constructor(view) {
    this.view = view;
  }
  
  init() {
    this.view.onAnswer = (answers) => {  
      if (answers.length > 0) {
        goToNextScreen();
      }
    };
  }
}
```
