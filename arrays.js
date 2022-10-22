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






