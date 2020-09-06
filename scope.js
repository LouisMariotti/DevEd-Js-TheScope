// // Global Scope = all code available outside functions

// let food = "apple";
// const fruits = 5;

// // Not using var anymore

// function store() {
//   // Function scope = all code inside a function
//   let food = "banana";
//   let fruits = 50;
//   console.log(food, fruits);
// }
// store();

/* The function has nothing to do with the outside, every variable 
we have inside the function is only available inside the function */

// console.log(food, fruits);

// // Block scope

// for (let fruits = 0; fruits < 20; fruits++) {
//   console.log(fruits);
// }

// Can do this

let food = "apple";
const fruits = 5;

function store() {
  console.log(food, fruits);
}

store();

/* On the example above we first declared two variable food and fruits,
then we created a function and we decided to use the variables inside 
the function store, the  we had to call the function to display the function
things inside the console on our browser */
