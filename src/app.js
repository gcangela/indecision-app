// // import './utils.js'
// import { square, add } from './utils.js'

// console.log('app.js is running')
// console.log(square(4))
// console.log(add(2,3))

//person.js 
//named export isAdult(18) - true if adult otherwise false 
//named export canDrink(18) - true if 21 and over otherwise false 

import { canDrink, isAdult } from './person.js' 

console.log(isAdult(12))
console.log(canDrink(21))
