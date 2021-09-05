'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
const restaurant = {
  locationName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  www: function () {console.log(this)},
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  oderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Oder received! ${this.starterMenu[mainIndex]}
      will be delivered to ${address} at ${time}`
    );
  },
  orderPaste: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainOngredient, ...otherIngredients) {
    console.log(mainOngredient);
    console.log(otherIngredients);
  }
};
// console.log(restaurant.order(2,0));
// restaurant.www();

// let starter;
// let main;

// [starter, main] = restaurant.order(2,0);
// //const starter, main = restaurant.order(2,0);
// console.log('Print results: ',starter, main);

// const nested = [2,4,[5,6]];

// const [i,,j]= nested;
// console.log(i,j);

// let [q,z] = [nested[0], nested[2][1]]
 
// console.log(q,z); 

// const {locationName, openingHours, categories} = restaurant;
// console.log(locationName, openingHours, categories);

// const { locationName: restaurantName, openingHours: hours, 
//   categories: tags} = restaurant;

// console.log(restaurantName, hours,tags);

// // default values
// const { menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// // mutating variables while desctructing objects
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c:14};

// ({a, b} = obj);
// console.log(a, b);

// // nested objects

// console.log(restaurant['openingHours']['sat']);

// const {fri:{open,close}} = openingHours;
// console.log(open,close);


// const arr = [7,8,9]
// const badNewArr = [1,2, arr[0], arr[1], arr[2]];

// console.log(badNewArr);

// const newArr = [1,2,...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Borsh']
// console.log(newMenu);

// // copy array

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log('copy: ', mainMenuCopy);

// // join arrays

// const menu1 = [...restaurant.starterMenu,...restaurant.mainMenu]
// console.log(menu1);

// const ingridients = [prompt('Lets make pasta! ingridient 1?'), 
// prompt(' ingridient 2?'),prompt('ingridient 3?')];

// restaurant.orderPaste(...ingridients);

// spread because on right side of =
const arr = [1,2,...[3,4]];

// rest, because on left side of = 

const [a,b, ...others] = [1,2,3,4,5]

console.log(a,b,others)

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu,
                ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

// rest in objects

const { sat, ...weekDays} = restaurant.openingHours

console.log(weekDays);

// 2) functions 

const add = function (...numbers) { // rest to unpack data
  let sum = 0;
  for (let i = 0; i<numbers.length; i++) {
    sum +=numbers[i]
  }
  console.log(sum);
}

add(2,3)
add(5,3,7,2)

const x = [23, 5, 7]
add(...x); // spread to pack values 

restaurant.orderPizza('mushroom', 'onion','spinach','olives');
restaurant.orderPizza('superIngridient')

// properties of logical operators 
// 1. use any data type
// 2. return any data type 
// 3. short-circuting 

console.log('------ OR -------');
// or (||) operator works like
// if fisrt is true , all is true
// so it doesnt make sence to continue excution of logical operator 

console.log(34444444 || 'Jonas');
console.log('' || 'Jonas');
console.log( true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
console.log(undefined || 0 || '' || null || 'Hello' || 23);

restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('------ AND -------');

// and (&&) operator works like
// if fisrt is false , all is false
// so it doesnt make sence to continue excution of logical operator 

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'beer');
}

restaurant.orderPaste && restaurant.orderPizza('super', 'muper');


// =============================
// nullish coalescing operator
// =============================

console.log('--------- nullish coalescing operator ------------');
restaurant.numGuests = 0;

const guest3 = restaurant.numGuests || 10;
console.log(guest3);

// nullish = null and undifined 
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

