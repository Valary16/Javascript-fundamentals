// accessing items in arrays
// arra[3]
// accessing last item in arrays
//  creating arrays
console.log("Valary");
let student = [];
console.log(student);
let colors = ["red", "orange", "yellow", "blue"];
push = "brown"
// console.log(colors[0]);
console.log(colors.indexOf("red"));
// console.log(colors);
colors[0] = "pink";
console.log(colors);
let name = "femidevs";
name[0]= "o";
console.log(name);

let fruits = ["orange", "mangoes", "pineapple" ];
// adding an item to the end of an array
fruits.push("Apples", "melon", "banana");
fruits.pop();
fruits.pop(); //removing an item from the end of an array
fruits.shift()
fruits.unshift('grapes', 'passions', 'watermelon' );
console.log(fruits);

// concantenating arrays
let cohortOne = [ true, false, 15];
let cohortTwo = [ false, true, 19];
let femidevs = cohortOne.concat(cohortTwo);
console.log(femidevs);
console.log(femidevs.includes(10));
console.log(femidevs.includes(19));
console.log(femidevs.indexOf(19));
console.log(femidevs.join('-'));
console.log(cohortOne.join('.'));
console.log(femidevs.reverse());
console.log(femidevs.slice(1));
console.log(femidevs.slice(1,4));
let femidevsTwo = femidevs.slice();
console.log(femidevsTwo);
console.log(femidevs.splice(2, 0, 20));
console.log(femidevs);
const months = ["jan", "march", "april"];
console.log(months);
months.splice(1, 0, "may");
console.log(months);
months.splice(2, 1, "October");
console.log(months);
const yrs = [];
console.log(yrs);
// using splice in adding deleting and replacing items in an array
yrs.splice(0, 3, 1, 2, 3);
console.log(yrs);
yrs.splice(0, 3,"hello", "world", "false");
console.log(yrs);
yrs.splice(0, 0, "no", "noh",);
console.log(yrs);
const age =[];
console.log(age);
age.splice(0, 0, );
age.splice(0, 0, 2);
console.log(age);
const week = [];
console.log(week);
 //sort as an array
 const subject = ["maths", "english", "kiswahili", "biology"];
 console.log(subject.sort());
 const pass = [70, 80, 90, 95];
 console.log(pass.sort());
 const myEggs = ["brown", "brown"];
 console.log(myEggs);
 myEggs.push("pink");
 console.log(myEggs);
 myEggs.push("pink", "blue");
 myEggs [0] = ("green", "beige");
console.log(myEggs);
//Nested arrays
const animals = [
    ['man', 'monkey', 'bat', 'cows', 'lions'],
    ['lizard', 'crocodile', 'chameleon', ''],
    ['frogs', 'newts',  'toads', 'salamander']
];
// Mammals = man, monkey, bat, cows, lions
//reptiles = lizard, crocodile, chameleon
//amphibians = frogs, newts,  toads, salamander
// console.log(animals);
console.log(animals[0].join('-'));
// console.log(animals.sort());
// console.log(animals);
const Mammals =  animals[0].join(' ');
console.log(Mammals);
//using template literals
console.log(`Mammals : ${Mammals}`);
const reptiles = animals[1];
console.log(reptiles);
console.log(`reptiles : ${reptiles}`);
const amphibians = animals[2].join('.');
console.log(amphibians);
console.log(`amphibians : ${reptiles}`);
//objects
const newItems = {} //creating new items - object literals
console.log(newItems);
const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21, 22, 23, 24, 25,
26,27, 28,29, 30]
console.log(numbers);
for(i = 0; i<numbers.length; i++) {
    if (numbers[i]%2 !== 0){
        console.log(`${numbers[i]} is an odd number`)
    }
}
for(i = 0; i<numbers.length; i++) {
    if (numbers[i]%2 == 0){
        console.log(`${numbers[i]} is an odd number`)
    }
}
// BREAK  KEY WORD
let targetNum = Math.floor(Math.random()*10);
let guess = Math.floor(Math.random()*10);
while(true){
    guess = Math.floor(Math.random()*10);
    if(guess === targetNum){
        console.log(Guessed ${guess} & trgetNum: ${targetNum}...Correct);
        break;
    }
}










