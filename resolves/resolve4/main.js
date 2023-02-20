// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//    function pS(a,b) {
//     return (a*b);
//    }
//
// console.log(pS(10,20));
// console.log(pS(5,10));


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function piRPow(pi,r) {
//     return (pi*r*r);
// }
//
// console.log(piRPow(3.14,5));



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function sSquare(h,r) {
//     let pi = 3.14;
//     return 2*pi*r*(h+r);
// }
//
// console.log(sSquare(5,2));


// - створити функцію яка приймає масив та виводить кожен його елемент

// function arrayPrinter(arr) {
//     for (let Element of arr) {
//         console.log(Element);
//     }
// }



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(text) {
//     document.write(`<p>${text}</p>`);
// }
// paragraph('ghyhgytft');
// paragraph(334563);
// paragraph(tyue);
// paragraph('4322334');




/* - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
* */
// function liCreator(text) {
//
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`);
//
// }
// liCreator(['text']);




// - створити функцію яка створює ul з li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function liCreat(text,count) {
//     document.write(`<ul>`);
//     for (let i = 0; i < count; i++){
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
// liCreat ('text',4);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// const arrey = [1,2,'bybyby',true,[5,10]];
// function listCreator(arr) {
//     document.write('<ul>');
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// }
// listCreator(arrey);




// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.' +
// ' Для кожного об'єкту окремий блок.

// function objBlockCreator(objects) {
//     for (const item of objects) {
//         document.write(`<div>${item.id}${item.name}${item.age}</div>`);
//     }
// }



// - створити функцію яка повертає найменьше число з масиву

// function minName(numbers) {
//     let min = numbers[0];
//     for (const number of numbers) {
//         if (min > number) {
//             min = number
//         }
//     }
//     return min;
// }
// minName([-54,32,-11,6]);




// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13

// function sum(numbers) {
//     let bascket = 0;
//     for (const number of numbers) {
//         bascket += number;
//     }
//     return bascket;
// }
// console.log(sum([1,2,10]));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr,index1,index2) {
//     let v1 = arr[index1];
//     let v2 = arr[index2];
//     arr[index1] = v2;
//     arr[index2] = v1;
//     return arr;
// }
//
// console.log(swap([11,12,13,14],0,4));




//
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

// function exchange(uah,currencies,exitCurrency) {
//     for (const item of currencies) {
//         if (item.currency === exitCurrency) {
//             return uah / item.value;
//         }
//     }
// }
//
// console.log(exchange(
//     10000,
//     [
//         {currency: 'USD', value: 40},
//         {currency: 'EUR', value: 42},
//         {currency: 'GBP', value: 43},
//     ],
//     'USD'
// ));








// ***********
// .log