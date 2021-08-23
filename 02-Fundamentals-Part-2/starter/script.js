'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// //const interface = 'Audio';
// const private = 534;

// function logger() {
//     console.log('My name is Jonas');
// }
// //calling, runnuning, invoking
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const juiceReady = fruitProcessor(2, 2);
// console.log(juiceReady);


// function cutfruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutfruitPieces(apples);
//     const oreangesPieces = cutfruitPieces(oranges);

//     console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} apples pieces and ${oreangesPieces} 
//     oranges pieces`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// ======================
// CODING CHALLENGE 5
// ======================

// const dolphinsScore1 = 44;
// const dolphinsScore2 = 23;
// const dolphinsScore3 = 71;

// const koalasScore1 = 65;
// const koalasScore2 = 54;
// const koalasScore3 = 49;

// const dolphinsScore1 = 85;
// const dolphinsScore2 = 54;
// const dolphinsScore3 = 41;

// const koalasScore1 = 23;
// const koalasScore2 = 34;
// const koalasScore3 = 27;

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let avgDolhins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
// let avgKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);

// console.log(avgDolhins, avgKoalas);

// function checkWinner(avgDolhins, avgKoalas) {
//     if (avgDolhins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolhins * 2) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
//     } else {
//         console.log('No teams win...');
//     }

// }

// checkWinner(avgDolhins, avgKoalas);

// ======================================
// ARRAYS 
// ======================================
// const friends = ['Mihael', 'Steven', 'Peter'];

// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// ===============================================
// CODING CHALLANGE 6
// ===============================================

// const bills = [125, 555, 44];
// let tip = 0;
// let tips = [];
// let total = [];

// // Function declaration
// function calcTip1(bill) {
//     if (bill >= 50 && bill <= 300) {
//         tip = bill * 0.15;
//     } else {
//         tip = bill * 0.2;
//     }
//     return tip
// }

// tips = [calcTip1(bills[0]), calcTip1(bills[1]), calcTip1(bills[2])];
// total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(`Tips were given ${tips}`);
// console.log(`Total were given ${total}`);

// // Arrow function don't need return 

// const calcTip3 = (bill) =>
//     bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// // with only ternary operator 
// // The conditional (ternary) operator is the only JavaScript operator that takes 
// // three operands: a condition followed by a question mark (?), 
// // then an expression to execute if the condition is truthy followed by a colon (:), 
// // and finally the expression to execute if the condition is falsy. 
// // This operator is frequently used as a shortcut for the if statement.

// const calcTip2 = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// console.log(calcTip3(1000))
// console.log(calcTip2(10000))

// ===============================================
// Dot and braket notations 
// ===============================================

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Mike', 'Peter', 'Steven']
// };

// const interestedIn = prompt('what do you want to know about Jonas? Choose among firstName, \
// lastName, age, job and friends');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong input. Choose among firstName, lastName, age, job \
// and friends')
// };

// jonas.location = 'Portugal';
// jonas['twitter'] = '@blablabla';

// console.log(jonas);

// // ====================================
// // SMALL SCHALLENGE
// // ====================================

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends,
// and his best friend is ${jonas.friends[0]}`);

// ===============================================
// Object methods
// ===============================================


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Mike', 'Peter', 'Steven'],
//     hasDriverLicense: true,

//     calcAge: function (birthYeah) {
//         return 2037 - birthYeah;
//     },

//     calcAge2: function () {
//         console.log(this);
//         return 2037 - this.birthYear;
//     },

//     calcAge3: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age
//     }
// };
// console.log(jonas.calcAge(1991));
// console.log(jonas.calcAge2());
// console.log(jonas.calcAge3());

// // ===============================
// // SMALL CHALLENGE
// // ===============================

// // Jonas is 46-years old teacher and he has a driver license 

// console.log(`${jonas.firstName} is ${jonas.age}-years old ${jonas.job} and he
// ${jonas.hasDriverLicense ? 'has' : 'has no'} driver license`)


// ===============================================
// CODING CHALLANGE 7
// ===============================================

// const objectMark = {
//     firstName: 'Mark',
//     weight: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi;
//     }

// };

// const objectJohn = {
//     firstName: 'John',
//     weight: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi;
//     }
// };
// objectMark.calcBMI();
// objectJohn.calcBMI();

// console.log(objectMark.bmi, objectJohn.bmi);

// if (objectMark.bmi > objectJohn.bmi) {
//     console.log(`${objectMark.firstName}'s BMI (${objectMark.bmi}) is higher than 
//     ${objectJohn.firstName}'s BMI (${objectJohn.bmi})!`);
// } else {
//     console.log(`${objectJohn.firstName}'s BMI (${objectJohn.bmi} is higher than 
//         ${objectMark.firstName}'s BMI (${objectMark.bmi})!`);
// };


// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];
// console.log(jonas);


// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);

//     //types[i] = typeof jonas[i];
//     types.push(typeof jonas[i])
// };

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// };

// //continue and break

// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// };

// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] == 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// };


// 48

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i]);
// };

// for (exercise = 1; exercise < 4; exercise++) {
//     console.log(`---- Starting exercise ${exercise}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weights repetition ${rep}`);
//     };
// };

//49 the while loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// };

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//     rep++;
// };

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice != 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     console.log(`new value is ${dice}`);
// }

// =========================================== 
// CODING CHALLENGE 8
// ===========================================


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip1 = (bill) =>
    bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip1(bills[i]));
    totals.push(bills[i] + tips[i]);
    console.log(`Tips are: ${tips}`);
    console.log(`Totals are: ${totals}`);
}


const calcAverage = (arr) => {
    let tipAvg = 0;
    for (let i = 0; i < arr.length; i++) {
        tipAvg += arr[i];
    };
    return tipAvg / arr.length;
}

console.log(calcAverage(tips));
console.log(calcAverage(totals));