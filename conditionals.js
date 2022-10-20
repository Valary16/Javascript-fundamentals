// COMPARISON OPEREATORS
console.log(1 > 2);
console.log(1 < 2);
console.log(1 >= 2);
console.log(1 <= 2);
console.log('a' <= 'b');
console.log('A' <= 'b');
console.log( 1 == '1');
console.log(0 == false);
console.log(null == undefined);
console.log(0 === false);
console.log(10 == '10');
console.log(10 !== '10');
console.log(2==3);
// let rating = 3;
// if (rating === 3) {
//     console.log("YOU ARE A SUPERSTAR")
// }
// let pass = 80;
// if (pass ===80) {
//     console.log("MOVE TO THE NEXT CLASS")
// }
// let attendance = 60;
// if (attendance === 60) {
// console.log("GRADUATE")
// }
// let ratings = 2;
// if (ratings === 3) {
//     console.log("YOU ARE A SUPERSTAR");
// }
// else if(ratings === 2) {
//     console.log("MEETS EXPECTATION");

// }
// let days = 6;
// if (days === 3)
// {
//     console.log("MID WEEK");
// }
// else if(days === 7){
//     console.log("ONE WEEK");
// }
// else if(days === 4){
//     console.log("WEDSDAY")
// }
// let day = 9;
// if (day === 3)
// {
//     console.log("MID WEEK");
// }
// else if(day === 7){
//     console.log("ONE WEEK");
// }
// else if(day === 4){
//     console.log("WEDNESDAY");
// }
// else if(day === 6){
//     console.log("SATURDAY");
// }
// else {
//     console.log("NO VALID DAY");
// }
// //  CREATWE A VARIABLE WITH THE NAME PASSWORD AND GIVE IT ANY VALUE
// // THE VALUE MUST BE A STRING
// // VALUE PASSWORD MUST BE >= 6 CHARACTERS
// // ENSURE VALUE OF PASSWORD HAS NO SPACES BETWEEN IT
//  let password = "FEMIDEVS 2022"
//  if( password.length >=6){
//     if(password.indexOf(' ')=== -1) {
//         console.log("THE PASSWORD IS CORRECET")
//     }

//     else {
//         console.log("INCORRECT PASSWORD");
//      }
     
    
//  }

 let age = 20;
 console.log(age === 20 ? 'correct age' : 'wrong age');
// switch statement
let days = 7;
switch (days) {
    case 1 :
    console.log("Monday");
        break;
        case 2 :
        console.log("Tuesday");
        break;
        case 3 :
        console.log("Wednesday");
        break;
        case 4 : 
        console.log("Thursday");
        break;
        case 5 :
        console.log("Friday");
        break;
        case 6 : 
        console.log("Saturday");
        break;
        case 7 :
        console.log("Sunday");

    default: 'NOT A VALID DAY'
        break;
} 
