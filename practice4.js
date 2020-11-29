// -  Створити функцію конструктор для об'єкту
// який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ============
//
// function TagObject (name, youActions, arrayAttr){
// this.name = name;
// this.youActions = youActions;
// this.arrayAttr = arrayAttr;
// this.ride = function () {
//     let str = this.arrayAttr.map(value => {
//         return `${value.name} ==== ${value.action}`
//     })
//     console.log(str);
//     console.log('I know teg '+
//         this.name+ ' it '+
//         this.youActions +' and it is attributes '
//         +str+ '.')
// }
// }
// function Attr (name, youActions){
// this.name = name;
// this.action = youActions;
// };
// let arg1 =[ new Attr('style','применяется для определения стилей элементов веб-страницы'),
//             new Attr('title','oпределяет заголовок документа'),
//             new Attr('script','предназначен для описания скриптов, может содержать ссылку на программу или ее текст на определенном языке'),
//             new Attr('meta','определяет метатеги, которые используются для хранения информации предназначенной для браузеров и поисковых систем')
//         ]
// let head = new TagObject('head', 'heading', arg1);
// head.ride();


// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
//
// class TagObject {
//     constructor(name, action, Attr) {
//         this.name = name;
//         this.action = action;
//         this.Attr = Attr;
//     }
// }
//
// let name = '<meta>';
// let action = 'Тег <meta> определяет метатеги, которые используются для хранения информации предназначенной для браузеров и поисковых систем.';
// let Attr = [
//     {nameOfAttr: 'charset', actionOfAttr: 'Задает кодировку документа'},
//     {nameOfAttr: 'content', actionOfAttr: 'Устанавливает значение атрибута, заданного с помощью name или http-equiv'},
//     {nameOfAttr: 'http-equiv', actionOfAttr: 'Предназначен для конвертирования метатега в заголовок HTTP'}
// ];
// let obj = new TagObject(name,action,Attr);
// console.log(obj);


// - Створити об'єкт car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю
//    {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення
//     максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій"
//    з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
// let car = {
//     model: 'X6',
//     manufakturer: 'BMW',
//     maxSpeed: 260,
//     year: 2019,
//     engineCapacity : '4,395',
//     drive: function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     },
//     info: function () {
//         console.log(`
//             model: ${this.model},
//             manufakturer: ${this.manufakturer},
//             maxSpeed: ${this.maxSpeed},
//             year: ${this.year},
//             engineСapacity: ${this.engineCapacity},
//         `);
//     },
//     increaseMaxSpeed : function (newSpeed) {
//         this.maxSpeed += newSpeed;
//
//     },
//     changeYear : function (newValue) {
//         this.year = newValue;
//     },
//
// }
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear(2020);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю
//    {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення
//    максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій"
//    з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
// function car (model,
//               manufakturer,
//               maxSpeed,
//               year,
//               engineCapacity) {
//     this.model = model || 'X6';
//     this.manufakturer = manufakturer || 'BMW';
//     this.maxSpeed = maxSpeed || 260;
//     this.year = year || 2019;
//     this.engineCapacity = engineCapacity || '4,395';
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function () {
//         console.log(`
//             model: ${this.model}
//             manufakturer: ${this.manufakturer}
//             maxSpeed: ${this.maxSpeed}
//             year: ${this.year}
//             engineСapacity: ${this.engineCapacity}
//         `);
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     };
// }
//
// let car1 = new car ('Q7', 'Audi', 300, 2021, 5.5,);
//
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(50);
// car1.changeYear(2020);


//  - Створити клас який дозволяє створювати об'єкти car,
//  з властивостями модель, виробник, рік випуску,
//  максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю
// {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення
// максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій"
// з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
// class car {
//     constructor(
//         model,
//         manufakturer,
//         maxSpeed,
//         year,
//         engineCapacity) {
//     this.model = model || 'X6';
//     this.manufakturer = manufakturer || 'BMW';
//     this.maxSpeed = maxSpeed || 260;
//     this.year = year || 2019;
//     this.engineCapacity = engineCapacity || '4,395';
// }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     info () {
//         console.log(`
//             model: ${this.model}
//             manufakturer: ${this.manufakturer}
//             maxSpeed: ${this.maxSpeed}
//             year: ${this.year}
//             engineСapacity: ${this.engineCapacity}
//         `);
//     };
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//     changeYear (newValue) {
//         this.year = newValue
//     };
// }
//
// let car1 = new car ('Q7', 'Audi', 290, 2021, 5.5,);
//
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(50);
// car1.changeYear(2020);


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу
// який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
//
// class Human {
//     constructor(name, age) {
//         this.name = name || 'No Name';
//         this.age = age || 'No age';
//     }
// }
//
// class Cinderella extends Human{
//     constructor(name, age, footSize) {
//         super(name, age);
//         this.footSize = footSize || 'No footSize'
//     }
// }
//
// class Princ extends Human{
//     constructor(name, age,shoesSize) {
//         super(name, age);
//         this.shoesSize = shoesSize || 'No shoesSize'
//     }
//     findCinderell(array){
//         let find = null;
//         for (const item of array) {
//             if (item.footSize === this.shoesSize){
//                 find = item;
//             }
//         }
//         if(find){
//             console.log('My cinderella name ' + find.name);
//         }else{
//             console.log('I not find my cinderell')
//         }
//     }
// }
// let cinderella1 = new Cinderella('Adel', 16, 35);
// let cinderella2 = new Cinderella('Asol', 15, 34);
// let cinderella3 = new Cinderella('Eva', 17, 37);
// let cinderella4 = new Cinderella('Mari', 25, 39);
// let cinderella5 = new Cinderella('Inga', 35, 41);
// let cinderella6 = new Cinderella('Olga', 15, 36);
// let cinderella7 = new Cinderella('Ket', 17, 38);
// let cinderella8 = new Cinderella('Bet', 19, 40);
// let cinderella9 = new Cinderella('Sonya', 16, 36);
// let cinderella10 = new Cinderella('Marta', 18, 37);
//
// let arrayCinderella = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10]
//
// console.log(arrayCinderella);
//
// const princ = new Princ('Artur', 21, 36);
//
// princ.findCinderell(arrayCinderella);


// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
