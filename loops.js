//for ...loops
for (
    let i = 1; i<= 10; i++)
    {
        console.log(i);
    };

    let i = 1;
    if ( i <= 10)
    {i++
        console.log(i)
    }
    for (let i = 10; i >= 0; i--){
        console.log(i)
    };
  const animals = ["lions", "tigers", "bears"];
  for (let i = 0; i < animals.length; i++){
    console.log(i, animals[i]);
  }
   const animals2 = ["cow", "dogs", "cats", "goats", "sheep"];
   console.log(animals2);
   for (let i = 0; i <= animals.length; i++){
  //priniting animals2 at index
    // console.log(animals2[i]); 
//printing animalas2 without index
    console.log(`Animals at index ${i} is ${animals2[i]}`);
   }

   //NESTED LOOP
   let str = "LOL";
   for (let i = 0; i <= 4; i++){
   console.log(`Outer : ${i}`);
   for(let j = 0;  j < str.length; j++){
    console.log(` Inner : ${str[j]}`);
   };
   };

   //while loop
   let num = 0;
   while (num < 10){
    console.log(num); num++
   }
   //maths
   console.log(Math.floor(Math.random() * 5));

   let targetNum = Math.floor(Math.random() * 10);
   let guess = Math.floor(Math.random() * 10);
   //condition
   while(guess !== targetNum){
    console.log(`Guessed ${guess} ...NOT CORRECT`);
    guess = Math.floor(Math.random() * 10);
   }
   console.log(`Guessed ${guess} & targetNum: ${targetNum} ...CORRECT GUESS`);

   for (let i = 50; i<50; i+=5 ){
    console.log(i)
   }
   for (let i = 50; i>=0; i-=5 ){
    console.log(i)
   }
   for (let i = 10; i>=2; i-=2 ){
    console.log(i)
   }
   for (let i = 10; i>=0; i-=2 ){
    console.log(i)
   }
  const movies =[
    {Title : "Prison Break", Rating : "4"},  {Title : "Gotham", Rating : "7"},  
     {Title : "Halem", Rating : "9"}
  ];
  console.log(movies);

// BREAK  KEY WORD
let targetNum1 = Math.floor(Math.random()*10);
let guess1 = Math.floor(Math.random()*10);
while(true){
    guess = Math.floor(Math.random()*10);
    if(guess === targetNum1){
        console.log(`Guessed ${guess1} & targetNum1 : ${targetNum1}...Correct`);
        break;
    }
}
 //ITERATION(for ... of)
 const fruits = ["mangoes", "apple", "orange", "melon", "pineapples"];
 for (let set of fruits){
    console.log(set[0]); // gives initials of each set
    console.log(`${set}-canva.com ${set}`) // adds link to each item
    console.log(fruits[1])
 }
 let string2 = "watermelon";
 for(let ladys of string2 ){
console.log(`${ladys}- I am proud to belong`)
 }

//  console.log(`${string2}-i am proud to belong`)
//  // making the rows display
//  const magicSquare =[
//     [2, 3, 4],
//     [4, 5, 6],
//     [7, 9, 10]
//  ];
//  for (const  row of magicSquare){
//     console.log(row)
//  let sum = 0;
//  for(let num of row){
//     // sum += num;
// }
// console.log(`Row of ${row} Totals to ${sum}`)
//  }
//  console.log(`Row ${magicSquare[0]} sums to ${sum}`);

 //looping over objects
 const movieReviews = {
    Amadeu : 10,
    Arrival : 9.5,
    Alien : 9,
    Amalle : 8

 };
 for (let movie of Object.keys(movieReviews)){
    console.log(movie); // returning key values only
    let score = movieReviews[movie];
    console.log(score); //returns rating/values only
    console.log(`I rated ${movie} ${score}/10`);
 }




const shoppingList = {
Bread :120,
Milk : 80,
Sugar : 120,
SanitaryTowels : 400,
Cocoa : 200
}

for (let menu of Object.keys(shoppingList)){
    console.log(menu);
    const list =  Object.keys(shoppingList);
    const price = shoppingList[menu];
    console.log(list[1]) //return keys
    // console.log(`I bought ${list[1]}, ${list[2]}
    // @price ${price(list[1])} + ${price(list[2])}`);
}

let sum = 0;
for(let shop in shoppingList){
    //console.log(shop);
    // let newPrice = shoppingList(shop);
    sum += shoppingList[shop];
}
console.log(sum); // ..prints sum of each iteration


const obj = { a: 1, b : 2, c : 3, d : 4};
for (const prop in obj){
    console.log(`obj.${prop} = ${obj[prop]}`);
}
const triangle = {
    a: 1, b : 2, c : 3, d : 4}
    function ColoredTriangle(){
        this.color = "red";
    }
    ColoredTriangle.prototype = triangle;
    const object = new ColoredTriangle();
    for (const prop in obj) {
        if(Object.hasOwn(triangle, prop)){
        console.log(`object.${prop} = ${object[prop]}`)
        }
    };
var x = 1;
{
    var x = 2;
    console.log(x)
}
firstName = "John";
lastName = "Doe";
age = 35;
h
// var x = 5;
// var y = 10;
// var z = x + y;
// make a loop jump to next iteration when i is 5
