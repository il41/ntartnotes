//higher order functions:a function that takes another function as one of its arguments
function repeat(num,func){
  for(let i=0;i<num;i++){
    func(i)
  }
}
function sayHi(num){
  console.log(`hello for the ${num} time`)
}
//repeat(10,sayHi)


function startsWithA(string){
  if (string[0]=="A") return true
  else return false
}

function hasPrefix(string){
  if( string.indexOf('Mr.') >= 0 ||
      string.indexOf('Ms.') >= 0 ||
      string.indexOf('Mrs.') >= 0 ||
      string.indexOf('Dr.') >= 0 ){
        return true
      }else{
        return false
      }
  }

function filter(arr,func){
  let passed = []
  for(i=0;i<arr.length;i++){
    if(func(arr[i])){
      passed.push([i])
    }
  }
  return passed
}
let faculty = ["Nick","Jon","Dr. Englebart","Dr. Poop"]
let docs = filter(faculty, function(string){
  if(string[0]=="N") return true
  else return false
})
console.log(docs)




//for homework:
//make a brush in p5
//must be a function that takes in at least 2 arguments (x,y) and can't be pure. has to have a side effect(rendering somthing to a p5 canvas)
