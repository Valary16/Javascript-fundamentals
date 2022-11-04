function grumpus() {
    console.log('ugh...you again...');
    console.log('for the last time');
    console.log('LEAVE ME ALONE!!!');
}// a function without inputs
grumpus(); //calling a function
//fuctions that accept inputs are arguments
function greet(names){
    console.log(`Hello, ${names}`)
}
greet('Valary');


//  function avg(nums){
//     let sum = 0
//     for(let n of nums){
//     sum +=n; 
// }
// console.log(sum);
// let average = sum / nums.length ;
// console.log(average);

// }

//  avg([5,7,8,9,10]);

 
 console.log('hello'.toUpperCase());

 //2 Arguments, find largest between two arguments
 function findLargest(x,y){
    if (x > y){
        console.log(`${x} is larger!`);
    }
  else if (x < y) {
    console.log(`${y} is larger`);
  }
  else{
    console.log(`${x} and ${y} are equal!`);
  }
 }
 findLargest(6, 4);
 findLargest(9, 6);
findLargest(6, 6);

// RETURN IN FUNCTIONS
//return values can be captured and stored for future use
//functions return only one value
//A function can have multiple return statements
//Return statements ends function execution.
let str="string";
str.toUpperCase();
console.log(str);

 function sum(numbers){
  let sum = 0;
  for (let n of numbers){
  sum += n; 
  }
   console.log(sum);
 }
 sum([6,7]);

 //subtracting two numbers
 function subtract(x,y){
  console.log(x-y)
 }
 subtract(5,2);
function multiply(x,y){
  console.log(x*y)
}
multiply(5,6);

function divide(x,y){
  console.log(x/y)
}
divide(6,2);

function arr(x,y){
  return [x,y] ;//returns more than one value
}
let stored = arr(5,7);{
  console.log(stored); //Storing for future use and reusing
}
// if you have areturn statement in the middle of a function the
//  code after the return statement will not be executed
function sqrt(sq){
  return sq * sq;
  console.log('hello');
}
let square = sqrt(4);
console.log(square);
//NO RETURN
function sum1(x,y){
  console.log(x + y);
}
const sums3 = sum1(10,6);
console.log(sums3);// result is undefined that means no return
//  function addNext(x, y){
//   console.log(x+y)
//  }
//  const next = addNext(2,4)
//  console.log(next);
function addNext(x, y){
  return(x+y)
 }
 const next = addNext(2,4)
 console.log(next); //6

 function isPurple(color){
 if(color === "purple"){
  return true;
 }
 else{
  return false;
 }
 }
  // let newColor =isPurple("purple")
   let newColor =isPurple("blue")
  console.log(newColor);

