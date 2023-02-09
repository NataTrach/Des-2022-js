// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// const arr = [1,2,'hello',true];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// const arr = ['Vasya','Petya','Ira',125,3,13,0,'Olya','Vova',2];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);





// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// const book = {
//     title: 'book',
//     pageCount: 200,
//     genre: 'comedy'
// }
// console.log(book);
//
// const book1 = {
//     title: 'book1',
//     pageCount: 150,
//     genre: 'detective'
// }
// console.log(book1);
//
// const book2 = {
//     title: 'book2',
//     pageCount: 250,
//     genre: 'drama'
// }
// console.log(book2);





// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом. Кожен автор має поля name та age.

// const book = {
//     title: 'book',
//     pageCount: 300,
//     genre: 'detective',
//     authors: [
//         {
//             name: 'Oleksandr',
//             age: 45
//         },
//         {
//             name: 'Ivan',
//             age: 25
//         }
//
//     ]
// }
// console.log(book);





// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль ' +
// 'пароль кожного користувача

// let arr = [
//     {name: 'Olga',username: 'olyabarabolya',password:123456},
//     {name: 'Veronika',username: 'verka',password:678910},
//     {name: 'Petro',username: 'petrik',password:101112},
//     {name: 'Svitlana',username: 'svetik',password:131415},
//     {name: 'Volodimir',username: 'vovan',password:161718},
//     {name: 'Ivan',username: 'vano',password:192021},
//     {name: 'Olena',username: 'prekrasna',password:222324},
//     {name: 'Natalya',username: 'poltavka',password:252627},
//     {name: 'Stepan',username: 'stiv',password:282930},
//     {name: 'Julia',username: 'roberts',password:313233}
// ];
// console.log(arr[0].password);
// console.log(arr[1].password);
// console.log(arr[2].password);
// console.log(arr[3].password);
// console.log(arr[4].password);
// console.log(arr[5].password);
// console.log(arr[6].password);
// console.log(arr[7].password);
// console.log(arr[8].password);
// console.log(arr[9].password);





// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює
// 1, 0, -3

// let x = 5;
// if (x !== 0) {
//     console.log('virno');
// } else  {
//     console.log('ne virno');
// }

// let x = 1;
// if (x !== 0) {
//     console.log('virno');
// } else {
//     console.log('ne virno');
// }

// let x = 0;
// if (x !== 0) {
//     console.log('virno');
// } else {
//     console.log('ne virno');
// }

// let x = -3 ;
// if (x !== 0) {
//     console.log('virno');
// } else {
//     console.log('ne virno');
// }





// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає
// число
// (в першу, другу, третю или четверту частину години).

// let time = 3;
//
// if (time > 0 && time <=15) {
//     console.log('1');
// }else if (time > 15 && time <=30) {
//     console.log('2');
// }else if (time > 30 && time <=45) {
//     console.log('3');
// }else if (time > 45 && time <=60) {
//     console.log('4');
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

// let day = 5;
// if (day >0 && day <=10) {
//     console.log('1');
// }else if (day >10 && day <=20) {
//     console.log('2');
// }else if (day > 20 && day <=30) {
//     console.log('3');
// }





// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
//     інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day = 5;
// switch (day) {
//
//     case 1:
//         console.log('1');
//         break;
//     case 2:
//         console.log('2');
//         break
//     case 3:
//         console.log('3');
//         break;
//     case 4:
//         console.log('4');
//         break;
//     case 5:
//         console.log('5');
//         break;
//     case 6:
//         console.log('6');
//         break;
//     case 7:
//         console.log('7');
//         break;
//     default:
//         console.log('????????');
//
// }





//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let a = 0;
// let b = -2;
//
// if (a >b) {
//     console.log('a');
// }else if (a<b) {
//     console.log('b');
// }else if (a===b) {
//     console.log('equal')
// }





// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподібні, тобто приводиться до false)

// let x = '';
// let res = x || 'default';
// console.log(res);





// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
// його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// if (coursesAndDurationArray [0].monthDuration >5) {
//     console.log('super');
// }
// if (coursesAndDurationArray [1].monthDuration >5) {
//     console.log('super');
// }
// if (coursesAndDurationArray [2].monthDuration >5) {
//     console.log('super');
// }
// if (coursesAndDurationArray [3].monthDuration >5) {
//     console.log('super');
// }
// if (coursesAndDurationArray [4].monthDuration >5) {
//     console.log('super');
// }
// if (coursesAndDurationArray [5].monthDuration >5) {
//     console.log('super');
// }
