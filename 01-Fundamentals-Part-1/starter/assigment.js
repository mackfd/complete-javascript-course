
// Values and veriables
// const country = 'Russia';
// const continent = 'Eurasia';
// const population = 140;

// console.log('I am from' + ' ' + country + ' ' + 'which is' + ' ' + continent
//     + ' ' + 'with population about' + ' ' + population);

// // Data types
// const isIsland = false;
// let language;

// console.log(isIsland);


// //let , const and var
// language = 'Russian'
// console.log(language);

// //basic operators

// const finlandPopulation = 6;

// console.log(population > finlandPopulation);

// let description = 'Portugal is in Europe, and its 11 million people speak \
// portuguese';

// console.log(description)

// ===============================================
// CODING CHALLANGE 1
// ===============================================
// console.log('==========================================================');
// console.log('                                                          ');
// console.log('CODING CHALLANGE 1');
// let massMark = 78;
// let hightMark = 1.69;

// let massJohn = 92;
// let hightJohn = 1.95;

// /*
// let massMark = 95;
// let hightMark = 1.88;

// let massJohn = 85;
// let hightJohn = 1.76;
// */

// let markBMI;
// let johnBMI;

// let markHigherBMI;

// markBMI = massMark / hightMark ** 2;
// johnBMI = massJohn / hightJohn ** 2;
// markHigherBMI = markBMI > johnBMI;
// console.log('Mark BMI is higher:' + ' ' + markHigherBMI);

// ===============================================
// CODING CHALLANGE 2
// ===============================================
// console.log('==========================================================');
// console.log('                                                          ');
// console.log('CODING CHALLANGE 2');

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//     console.log(`John's (${johnBMI}) is higher than Mark's BMI (${markBMI})!`);
// }

// ===============================================
// CODING CHALLANGE 3
// ===============================================
// console.log('==========================================================');
// console.log('                                                          ');
// console.log('CODING CHALLANGE 3');

// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;

// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

// let dolphinsAVG = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// let koalasAVG = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// if (dolphinsAVG > koalasAVG) {
//     console.log('Dolphins team has won!');
// } else if (dolphinsAVG === koalasAVG) {
//     console.log('It is a DRAW!');
// } else {
//     console.log('Koalas team has won!');
// }

// console.log('==========================================================');
// console.log('                                                          ');
// console.log('CODING CHALLANGE 3. BONUS part 1');

// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;

// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 123;

// let dolphinsAVG = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// let koalasAVG = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// console.log(dolphinsAVG, koalasAVG);

// if (dolphinsAVG > koalasAVG && dolphinsAVG >= 100) {
//     console.log('Dolphins team has won!');
// } else if (dolphinsAVG === koalasAVG) {
//     console.log('It is a DRAW!');
// } else if (koalasAVG > dolphinsAVG && koalasAVG >= 100) {
//     console.log('Koalas team has won!');
// }

// console.log('==========================================================');
// console.log('                                                          ');
// console.log('CODING CHALLANGE 3. BONUS part 2');

// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;

// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 106;

// let dolphinsAVG = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// let koalasAVG = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// console.log(dolphinsAVG, koalasAVG);

// if (dolphinsAVG > koalasAVG && dolphinsAVG >= 100) {
//     console.log('Dolphins team has won!');
// } else if (dolphinsAVG === koalasAVG && dolphinsAVG >= 100) {
//     console.log('It is a DRAW!');
// } else if (koalasAVG > dolphinsAVG && koalasAVG >= 100) {
//     console.log('Koalas team has won!');
// } else {
//     console.log('No one wins!')
// }

// let val = prompt('bla bla bla');
// console.log(` user's input was '${val}'`);


// const day = 'monday';

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan my course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tueday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day');
// }

// if (day === 'monday') {
//     console.log('Plan my course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tueday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend');
// } else {
//     console.log('Not a valid day');
// }

// ===============================================
// part 28 ternary operator 
// ===============================================

//const age = 15;

// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water')

// const drink = age >= 18 ? 'wine' : 'water'
// console.log(drink)

//console.log(` i like to drink ${age >= 18 ? 'wine' : 'water'}`);

// ===============================================
// CODING CHALLENGE 4
// ===============================================

let bill = 40;
let tip;

tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);