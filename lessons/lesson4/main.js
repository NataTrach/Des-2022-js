
//  function foo(title,description) {
//     let html = `
// <div> <h2>${title}</h2> <p>${description}</p> </div>`;
//     document.write(html);
// }
// foo('helllllllloo!','beeeeeeeebeeeee!');
//
// foo();
//
//  foo('hiii!','okttttteeen');

// function calculator(num1,nam2) {
//     return num1 + nam2;
// }
//
// console.log(calculator(10,20));

// let newVar = [calculator(10,30),calculator(100,50)];
// console.log(newVar);

// function supercalculytor(num1,nam2) {
//     let obj = {
//         dif: num1-nam2,
//         add: num1+nam2
//     }
//     return obj;
// }
// let x = supercalculytor(10,20);
// console.log(x);

//  function calc() {
//   let bascket = 0;
//   for (const num of arguments) {
//       bascket = bascket + num;
//   }
//   return bascket;
//
//   // console.log(arguments);
//   // console.log(arguments[0]);
//   // console.log(arguments[1]);
//   // console.log(arguments[2]);
//   // console.log(arguments[3]);
//  }
//
// console.log(calc(10,20,30,40));

// function  calc2(a = 'jyhggtfc',b,...x) {
//  console.log(x);
//
// }
// calc2(1,2,true,[],{},'hi');

// function userCreator(name) {
//  let user = {name:name}
//  return user;
// }
// let u1 = userCreator('Vanya');
// console.log(u1);

function userCreator(name) {
 let user = {name:name}

 let proxy = {
  getName: function () {
   return user.name
  },
  setName: function (name) {
   if (typeof name === 'string') {
    user.name = name;
   }else  {
    console.log('waywayway')
   }
  },

 }
 return proxy;
}
let u1 = userCreator('Vanya');
console.log(u1);
u1.setName('kokosik');
let name =u1.getName();
console.log(name);