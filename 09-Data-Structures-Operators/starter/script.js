// 'use strict';

// // // Data needed for a later exercise
// // const flights =
// //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // // Data needed for first part of the section
// const restaurant = {
//   locationName: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   www: function () {console.log(this)},
//   order: function(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   oderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Oder received! ${this.starterMenu[mainIndex]}
//       will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPaste: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },
//   orderPizza: function (mainOngredient, ...otherIngredients) {
//     console.log(mainOngredient);
//     console.log(otherIngredients);
//   }
// };
// // console.log(restaurant.order(2,0));
// // restaurant.www();

// // let starter;
// // let main;

// // [starter, main] = restaurant.order(2,0);
// // //const starter, main = restaurant.order(2,0);
// // console.log('Print results: ',starter, main);

// // const nested = [2,4,[5,6]];

// // const [i,,j]= nested;
// // console.log(i,j);

// // let [q,z] = [nested[0], nested[2][1]]
 
// // console.log(q,z); 

// // const {locationName, openingHours, categories} = restaurant;
// // console.log(locationName, openingHours, categories);

// // const { locationName: restaurantName, openingHours: hours, 
// //   categories: tags} = restaurant;

// // console.log(restaurantName, hours,tags);

// // // default values
// // const { menu = [], starterMenu: starters = []} = restaurant;
// // console.log(menu, starters);

// // // mutating variables while desctructing objects
// // let a = 111;
// // let b = 999;
// // const obj = {a: 23, b: 7, c:14};

// // ({a, b} = obj);
// // console.log(a, b);

// // // nested objects

// // console.log(restaurant['openingHours']['sat']);

// // const {fri:{open,close}} = openingHours;
// // console.log(open,close);


// // const arr = [7,8,9]
// // const badNewArr = [1,2, arr[0], arr[1], arr[2]];

// // console.log(badNewArr);

// // const newArr = [1,2,...arr];
// // console.log(newArr);

// // const newMenu = [...restaurant.mainMenu, 'Borsh']
// // console.log(newMenu);

// // // copy array

// // const mainMenuCopy = [...restaurant.mainMenu];
// // console.log('copy: ', mainMenuCopy);

// // // join arrays

// // const menu1 = [...restaurant.starterMenu,...restaurant.mainMenu]
// // console.log(menu1);

// // const ingridients = [prompt('Lets make pasta! ingridient 1?'), 
// // prompt(' ingridient 2?'),prompt('ingridient 3?')];

// // restaurant.orderPaste(...ingridients);

// // spread because on right side of =
// const arr = [1,2,...[3,4]];

// // rest, because on left side of = 

// const [a,b, ...others] = [1,2,3,4,5]

// console.log(a,b,others)

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu,
//                 ...restaurant.starterMenu]
// console.log(pizza, risotto, otherFood);

// // rest in objects

// const { sat, ...weekDays} = restaurant.openingHours

// console.log(weekDays);

// // 2) functions 

// const add = function (...numbers) { // rest to unpack data
//   let sum = 0;
//   for (let i = 0; i<numbers.length; i++) {
//     sum +=numbers[i]
//   }
//   console.log(sum);
// }

// add(2,3)
// add(5,3,7,2)

// const x = [23, 5, 7]
// add(...x); // spread to pack values 

// restaurant.orderPizza('mushroom', 'onion','spinach','olives');
// restaurant.orderPizza('superIngridient')

// // properties of logical operators 
// // 1. use any data type
// // 2. return any data type 
// // 3. short-circuting 

// console.log('------ OR -------');
// // or (||) operator works like
// // if fisrt is true , all is true
// // so it doesnt make sence to continue excution of logical operator 

// console.log(34444444 || 'Jonas');
// console.log('' || 'Jonas');
// console.log( true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// console.log(undefined || 0 || '' || null || 'Hello' || 23);

// restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log('------ AND -------');

// // and (&&) operator works like
// // if fisrt is false , all is false
// // so it doesnt make sence to continue excution of logical operator 

// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'beer');
// }

// restaurant.orderPaste && restaurant.orderPizza('super', 'muper');


// // =============================
// // nullish coalescing operator
// // =============================

// console.log('--------- nullish coalescing operator ------------');
// restaurant.numGuests = 0;

// const guest3 = restaurant.numGuests || 10;
// console.log(guest3);

// // nullish = null and undifined 
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);


// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are 
// field players. 
// For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name,
//     and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 
//    Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that 
//    were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

//TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// // task 1
// const players1 = game.players[0]
// const players2 = game.players[1]

// console.log('team 1: ', players1);
// console.log('team 2: ', players2);

// const [players11, players22] = game.players;
// console.log(players11, players22);

// // task 2
// const gk = players1[0]
// const fieldPlayers = [];
// for (let i = 1; i<players1.length; i++) {
//   fieldPlayers.push(players1[i])
// }

// const [gk1, ...fieldPlayers1] = players1;
// console.log(gk1, fieldPlayers1);

// console.log('Bayern Munich field players: ', fieldPlayers);

// // task 3
// const allPlayers = [...players1, ...players2];
// console.log('all players from 2 teams: ', allPlayers);
// console.log('all players from 2 teams are: ', allPlayers.length);

// // task 4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // task 5
// const team1 = game.odds.team1;
// const team2 = game.odds.team2;
// const draw = game.odds.x;
// console.log('task 5: ',team1, team2, draw);

// const {
//   odds: { team1: team1o, x: drawo, team2: team2o },
// } = game;
// console.log('task 5 optimized :', team1o, drawo, team2o);

// // task 6
// const printGoals = function (...datas) {
//   for (let i = 0; i < datas.length;i ++) {
//     console.log(datas[i]);
//   }
// }
// printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels',game.score)

// // task 7

// team1 < team2 && console.log('team 1 is goin got win');
// team1 > team2 && console.log('team 2 is goin got win');

// ===================================
// for of looping
// ===================================

// const menu = [...restaurant.starterMenu,...restaurant.mainMenu];

// for (const item of menu) console.log(item); 

// for (const item of menu.entries()) {
//   //console.log(`${item[0]+1}: ${item[1]}`)

// }
// console.log('Dectructuring option------------');
// for (const [index, element] of menu.entries()) {

//   console.log(`${index+1}: ${element}`)

// }
// console.log([...menu.entries()]);

// ======================
// 111. objects literals  
// ======================
// console.log('======== 111. objects literals ===========');


// const weekDays = ['mon','tue','wed','thu','fri']

// const openingHours = {
//   [weekDays[3]]: {
//     open: 12,
//     closed: 22,
//   },
//   fri: {
//     open: 11,
//     closed: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     closed: 24,
//   },
// }

// const restaurant = {
//   locationName: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// //ES6 enhansed object literals
//   openingHours,
//   www: function () {console.log(this)},
//   order: function(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   //ES6 enhanced object literals for functions
//   order1(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   oderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Oder received! ${this.starterMenu[mainIndex]}
//       will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPaste: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },
//   orderPizza: function (mainOngredient, ...otherIngredients) {
//     console.log(mainOngredient);
//     console.log(otherIngredients);
//   }
// };

// ==================================
// 112. Optional Chaining
// ==================================
// console.log('======== 112. Optional Chaining ==========');
// if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// // with optional chaining
// console.log(restaurant.openingHours.mon?.open);

// const days = ['mon','tue','wed','thu','fri','sat','sun'];

// for (const day of days) {
//   console.log(day);

//   //looping throug array 
//   // using a day as a paramets to get data from object 
//   // to do that we put day to brackets 
//   // than we use optional chaining to check we day is a property of object  
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} hours are ${open}`);
// }

// // Methods to check if it exist

// console.log(restaurant.order?.(0,1) ?? 'Metod doesnt exist');
// console.log(restaurant.orderRizotto?.(0,1) ?? 'Metod doesnt exist');

// // Array fi it is empty

// const users = [ { name: 'Jonas', emailL: 'kokoo@koko.ko'}];

// console.log(users[0]?.name ?? 'no users');

// if (users.length >0) console.log(users[0].name);

// =======================
// 113. looping object 
// =======================

// console.log('======= 113. Looping objects =========');

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, value] of entries) {
//   console.log(key, value);
// }

// for (const [key, {open,closed}] of entries) {
//   console.log(key, open, closed);
// }

// ===========================
// 114. Coding challenge 
// ===========================

console.log('======= 114. Coding challenge =========');



const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1. Loop over the game.scored array and print each player name to the console, 
//  along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console
 //  (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty 
// like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them 
// (except for "draw"). 
// HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the 
// players who scored as properties, and the number of goals as the value. 
// In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }


// task 1 

//  for (let [key, value] of game.scored.entries()) {
//    console.log(`Goal ${key+1}: ${value}`);
//  }

//  //taks 2

//  console.log(Object.values(game.odds));

//  const odds = Object.values(game.odds);


//  let avgOdd = 0;
//  for (let odd of odds) avgOdd +=odd;
// avgOdd = avgOdd/odds.length
// console.log(avgOdd);
 
// // task 3
// for (let [team, odd] of Object.entries(game.odds)){
//   const teamStr = team === 'x' ? 'draw' : game[team];
//   console.log(`Odd of victory ${teamStr}: ${odd}`)
// };

// // task 4 
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : scorers[player] = 1 
// };
// console.log(scorers);

// ===========================
// 115. Sets. 
// ===========================

const orderSet = new Set(['Pasta','Pizza', 'Pizza','Pasta','Rizotto', 'Pizza']);

console.log(orderSet);

console.log(orderSet.size);
console.log(orderSet.has('Bread'));
orderSet.add('GarlicBread');
orderSet.delete('Rizotto')
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example 

const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staff);
console.log(staffUnique);
console.log(new Set(['Waiter','Chef','Waiter','Manager','Chef','Waiter']).size);

console.log(new Set('jonasschmedtmann').size);

