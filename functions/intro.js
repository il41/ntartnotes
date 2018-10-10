function powers2(amount){
  let num=1
  let arr=[]
  for(let i=0;i<amount;i++){
    arr.push(num)
    num*=2
  }
  return arr
  lastTwo= arr[arr]
}
let twos=powers2(1000)
console.log(twos)
console.log(twos[twos.length-1])

let powers4 = function(){
  let num=1
  for(let i=0;i<8;i++){
    console.log(num)
    num*=4
  }
}
powers4()


let powers8=()=>{
  let num=1
  for(let i=0;i<8;i++){
    console.log(num)
    num*=8
  }
}
powers8()

let a=5
function squareA(){
  a *= a
}
squareA()
console.log(a)

function square(b){
  b*=b
  return b
}

function add(a,b){
  let answer= a+b
  return answer
}
let x = square(5)
let y = add(10,20)
