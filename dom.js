// const button = document.querySelector('h1');
// button.addEventListener('Click',() =>{
//     alert("You clicked me!!")
// })
//ARRAY CALLBACK METHODS
//1.FOREACH
const nums = [2, 3, 4, 5,6, 7, 8, 9, 10];
nums.forEach(function(n){
    console.log(n*n)
})

nums.forEach(function(el){
    if(el % 2 ===0){
        console.log(el)
    }
})
//ARRAY CALLBACK METHODS
//1.MAPS
const text = ['val', 'vil','ban', 'bin', 'tab']
const caps = text.map(function(t){
    return t.toUpperCase();
})
console.log(caps)
// CREATE NEW MP
const fruits = new Map([
    ['apple', 300], 
    ['oranges', 230],
    ['mangoes', 500]
])
console.log(fruits)
//ARROW FUNCTIONS
//square
const square = (x) => {
    return(x*x);
  
}
console.log(square(5))
//arrow fuctions // sum
const sum = (x, y) =>{
    return (x+y)
}
console.log(sum(4,7))
const singASong = () =>{
    return 'LA LA LA LA LA LA LA LA'
}
console.log(singASong('LA LA LA LA LA LA LA LA'))
//IMPLICIT RETURN
// Single-line
const implicit1 = (value) => value;

// Multi-line
const implicit2 = value => (
  value(n*n)
);
const materials = [
    // 'Hydrogen',
    // 'Potassium',
    // 'Helium',
    // 'Lithium',
    // 'Beryllium',
    // 'Calcium'
  'plastic',
  'metals',
  'wood'
];
console.log(materials.map(material => material.length)); 
//  console.log(materials.map(material => material.indexOf[''])); 

//find
let movies = [
    'Queen of The South',
    'Man of the Month',
    'Mr. and Mrs. Smith',
    'Mrs.  Malaki',
    'Enemy within',
]
let movie = movies.find(movie =>{
    return movie.includes('Mrs.')
})
console.log(movie)

let name =[
    'Madam Mercy',
    'Ms. Maria',
    'Mrs Germany',
    'Mr James',
]
let names = name.find(names =>{
    return names.includes('Ms.')
})
console.log(names)
    
let grade = [
    'gr 1',
    'gr 2',
    'gr 3',
    'gr 4',
]
let upperGrades = grade.find(upperGrade =>{
    return upperGrade.includes('1')
})
console.log(upperGrades)

let upperGrades2 = grade.find(gr => gr.indexOf('gr 2') === 0)
console.log(upperGrades2)
//filter - Creates a new array with all element that pass the test
const num = [9, 8, 7, 6, 5, 4, 3, 2, 1]
const odds = nums.filter(n =>{
    return n % 2 ===1
})
console.log(odds)
const numb = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const even = numb.filter(
    n1=>{
return n1 % 2 === 0
} )
//EVERY- TESTS WHETHER ALL ELEMENTS IN THE ARRAY PASS
// THE PROVIDED FUNCTION.IT RETURNS A BOOLEAN VALUE
const words =['val','dog','dig','bag','wag'];
words.every(word =>{
    return word.length === 3;
})
console.log(words)
words.every(word => word[0] ==='d');
words.every(w=>{
    let last_letter = w[w.leghth -1];
    return last_letter ==='g'
})

const naming = ['dogg', 'dig', 'log', 'bag','wag']
naming.every(name1 =>{
    return name1.length === 3
})
console.log(naming);
words.every(word => word[0] === 'd');
console.log(naming)
naming.every(w =>{
    let last_letter = w[w.length -1];
    return last_letter === 'g'
})
//Reduce- Execute a reducer function on each element of the array
const array1 = [3,5,8,11];
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator,currentValue) =>
         accumulator + currentValue, initialValue
);
console.log(sumWithInitial);
const sum1 = [10, 20, 30].reduce((a, b) => a + b)
console.log(sum1); // Output: 60
const addd = [3, 4, 5,18,19,20].reduce((a,b)=> a+b);
console.log(addd);

const arre = [30,40,50,90]
const initialValue2 = 0;
const newArre = arre.reduce(
    (accumulator,currentValue)=> accumulator + currentValue, initialValue
)
console.log(newArre)



