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
console.log(str); //returns in ppercase

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
  // function isPurple(color)

  function red(colors){
    if(colors === "red" && colors==="blue" ){
      return true;
  }
  else{
    return false;
  }
  }
  red(["red","yellow"]);
  let val = red(["red","yellow"])
  console.log(val);

  //for...of loop in functions
  function containsGreen(arr){
    for(let color of arr){
      if(color === "green" || color === "beige"){
        return true
      }
      {
        elseif 
        { return false}
      }
    }
  }
  let container = containsGreen(["green","mustrad","brown"]);
  console.log(container);
//throwdice function, can also be executed using loop
  function throwDice(){
    let targetNume = Math.floor(Math.random() * 6) +1;
    console.log(`rolled : ${targetNume}`)
  }
  throwDice();

  // is valid function
  //it accepts 2 parameters; password and username

  function isValid(password,username)
//   {
// if (password.length >= 8 && password.indexOf(' ') !== +1){
//    return true
// }
  
//     else {
//      return false
    
//   }
// }
// let passwords = isValid("igreen123", "green123")
// console.log(passwords);
//  alternative ways of generating function isValid(password,username)
{
if (password.length < 8){
  return false
}
if (password.indexOf(' ') !== -1){
  return false
  if(password.indexOf(username) !== -1)
  return false
}
return true;

}
// or
// {
//   if (password.length < 8) ||
//    (password.indexOf(' ') !== -1 )||
//    ( password.indexOf(username) !== -1) {
//       return false
//     }
//     return true
// }
const validator = isValid("igreen123", "green123")
console.log(validator)
  
// functions 
// function ispangram(sentence){
//   let lowercased = sentence.toLowerCase();
//   for(let char of 'abcdefghijklmnopqrstuvwxyz'){
//     if(lowercased.indexOf(char) === -1){
//       return false;
//     }
//   }
//   return true;
// }
//alternative method 
function ispangram(sentence){
  let lowercased = sentence.toLowerCase();
  for(let char of 'abcdefghijklmnopqrstuvwxyz'){
    if(!lowercased.includes(char)){
      return false;
    }
  }
  return true;
}

const validator1 = ispangram('The quick brown fox jumps over the lazy dog');
console.log(validator1);
//get question and explanation
function gateCards(){
const value = ['1','2','3', '4', '5', '6', '7', '8', '9', '10','J','K',]
//GENERATE INDEX OF VALUES RANDOMLY
const validx = Math.floor(Math.random()*value.length)
const value1 = value[validx];//
//GENERATE INDEX OF SUITS RANDOMLY
const suits = ['clubs', 'spades', 'hearts', 'diamonds']
const suitsidx = Math.floor(Math.random()*suits.length)
const suits2 = suits[suitsidx] // return individual suits
// console.log(value,suits)// returns all values in an array 
// eg ['1','2','3', '4', '5', '6', '7', '8', '9', '10','J','K',] ['clubs', 'spades', 'hearts', 'diamonds']
// console.log(value1,suits2) // returns random individual values in an array eg 5 hearts
// return an object of value against suit 
return {
  value: value1, suits:suits2
}
}
// gateCards();
const cards = gateCards();
console.log(cards);
//function in details
//understand scope(scope is variable visibility)
// right higher order function, passfunctions as callbacks

// SCOPING
function helpMe(){
  let msg = 'i am on fire';
    console.log(msg);
  
}; //function scope

// console.log(msg);
helpMe()

let bird = "eagle"
function cuteBird(){
  let bird = 'peacock'
  console.log(bird);
}
cuteBird();//function scope
console.log(bird); //function scope
 
//block scoping
let radius = 8;
if (radius > 0){
  const PI = 3.14
  let circ = 2*PI*radius
  console.log(PI) //here it displays the PI vaku ecoz its inside the block scoped content
}
console.log(radius);
// console.log(PI);//PI cant be displayed ouside the scope.It returns (PI is not defined) ie the
// of block scoping

// LEXICAL SCOPING REFERS TO FACT THAT NESTED FUNCTIONS ARE BOUND TO THE PARENT FUNCTIONS
function outter(){
let hero ='black panther';
function inner(){
let cryForHelp = `${hero}, please save me!`
console.log(cryForHelp);
}
inner();
console.log(hero);
}
outter()
//console.log(cryForHelp); not defined because  its bound to the parent function

//FUNCTION EXPRESION
const square1 = function (num){
  return num * num;
};
console.log(square1(10));
// HIGHER ORDER FUNCTIONS (operate on other functions or operate with other functions)
//they accept other functions as arguments
//1 functions as arguments
function callTwice(func){
  func();// call function inside a function
  func();// call function inside a function
}
function laugh (){
  console.log('HAHAHAHAHHAHHAHAHAHHAHAHAHAH')
}
callTwice(laugh)

function makeBetween(min,max){
return function(val){
  return val >= min && val <= max;
}
} //function val is an anonymous fucntion coz its not assigned any name
 const inAgeRange = makeBetween(18,100);
//  console.log(inAgeRange(17));
//  console.log(inAgeRange(68));
console.log(inAgeRange(16));
console.log(inAgeRange(60));
//CALLBACK FUNCTIONS(PASSED INTO ANOTHER FUNCTION AS AN ARGUMENT THEN INVOKED INSIDE THE OUTER FUNCTION)
// const x = 1;
// {
//   console.log(x); // ReferenceError coz x has not been initialized
//   const x = 2;
// }
const x = 1;
{
  const x = 2;
  console.log(x); // Returns 2

}
console.log(x)//returns 1 coz it is outside the block scoped content in the calibrackets

//below is not a form of hoisting
{
  var f = 1;
}
console.log(f); // 1 There's no "access before declaration" here; 
// it's simply because var declarations are not scoped to blocks.
console.log(squareq(5)) //hoisting
function squareq(n){
  return n*n
} //function scope

function doubleArr(arr){
  const result = [];
  for(let num of arr){
    let double = num * 2;
    result.push(double);
    // result.push(3);
    //  return result;
  }
  // return result;
}

console.log(doubleArr([2,3,4]))
 //  work on movie example
 // storing function in objects to do()
//  print all even numbers from 0-10
 function isEven([]){
  for(let n of []){
    if(n % 2 == 0  && n  < 10);
    console.log(n)
  }
 };
 return isEven[0,10]

