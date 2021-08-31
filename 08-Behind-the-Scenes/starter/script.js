 'use strict';

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;
    
//     function printAge() {
//         let output = `${firstName} ,you are ${age}, born in ${birthYear}`
//         console.log(output);

//         if (birthYear >=1981 && birthYear <=1996) {
//             const firstName = 'Steven';
//             const str = `Oh you are a millenial, ${firstName}`
//             console.log(str);

//             // reassigning variable 'output' in block scope
//             output = "NEW OUTPUT!"

//             function add(a,b) {
//                 return a + b;
//             }
//         }
//         //console.log(add(2,2));
//         console.log(output);
//     }

//     printAge();

//     return age;
// };

// const firstName = 'Jonas';

// calcAge(1991);

// ================================
// functions scopes calling

// console.log(addDec(2,3));
// //console.log(addExp(2,3));
// //console.log(addArrow(2,3));


// function addDec(a,b) {
//     return a + b;
// }

// var addExp = function(a,b) {
//     return a+b;
// };

// var addArrow = (a,b) => a+b;

// // Example

// if(!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deleted');
// }

// if (!undefined) {
//     console.log('undefined is a false value by default')
// };

// ======================
// this keyword
// ======================

//console.log(this);

// const calcAge = function(birthYear) {
//     console.log(2037 - birthYear);
//     //console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     //console.log(this);
// };

// calcAgeArrow(1991);

// const jonas = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// }

// jonas.calcAge();

// const matilda = {
//     year:2017,
// }

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;

// f();

// =====================================
// Regular functionns vs Arraw functions
// =====================================

// const firstName = 'QQQq';
// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function () {
//         console.log(this);
//         console.log(2037- this.year);

//         const isMillenial = function() {
//             console.log(this.year >=1981 && this.year <=1996);
//         };
//         isMillenial();
//     },

//     greet: () => console.log(`Hey ${this.firstName}`)
// }
// jonas.greet();
// jonas.calcAge();

// ==================================
// primitive values and reference values
// ==================================

// let age = 30;

// let oldAge = age;

// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'jonas',
//     age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log('friend',friend);
// console.log('me',me);


let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

const jessica = {
    fistName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Devis';

console.log(jessica);
console.log(marriedJessica);

const jessica2 = {
    fistName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Devis';

console.log(jessicaCopy);
console.log(jessica2);


