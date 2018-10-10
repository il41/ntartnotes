//recursion: a function that calls itself
function rec2s(num){
  console.log(num)
  num*=2
  if(num<256){
    rec2s(num)
  }
}

//rec2s(1)


//sidestep into the world of strings
//if a value is not in an array when running index of, it returns -1

function replaceAll(string, char, rep){
  if(string.indexOf(char) < 0){
    return string
  } else {
    string = string.replace(char,rep)
    if(string.indexOf(char)>=0){
      return replaceAll(string,char,rep)
    } else {
      return string
    }
  }
}
let newName = replaceAll('ilai','i','o')
console.log(newName)

// let name ="ilai"
// name.indexOf('i')
// name = name.replace('i','o')
// console.log(name)
