// 'use strict';

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

// functions 

console.log(addDec(2,3));
//console.log(addExp(2,3));
//console.log(addArrow(2,3));


function addDec(a,b) {
    return a + b;
}

var addExp = function(a,b) {
    return a+b;
};

var addArrow = (a,b) => a+b;

// Example

if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted');
}

if (!undefined) {
    console.log('undefined is a false value by default')
};
