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

