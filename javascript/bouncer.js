let age = process.argv[2];
let drinkingAge = 21;
let elder = 100

if( age>= 200 ){
    console.log("welcome great elder")
  }
  else if(age >= elder){
    console.log("welcome elder")
  }
  else if (age >= drinkingAge){
    console.log("welcome to the bar")
  }
  else{
    console.log("get outta here kid!")
  }
