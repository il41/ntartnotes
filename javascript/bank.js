let action = process.argv[2]
let amount = Number(process.argv[3])
let balance = 1000
console.log('your balance is '+balance)

if (isNaN(amount) ){
  console.log(`sorry, try a valid number instead of ${process.argv[3]}`)
  return
}

  if (action == 'give'){

  balance += amount
  console.log(`thanks for your deposit`)
  //console.log('you now have '+balance+' dollars')
  console.log(`you now have ${balance} dollars`)
  console.log(`enjoy it`)

} else if (action == 'take'){

  balance -= amount
  console.log(`withdrawl of ${amount} dollars`)
  //console.log('you now have '+balance+' dollars')
  console.log(`you now have ${balance} dollars`)
  console.log(`have a nice life`)

}else{

  console.log(`sorry,  ${action}  is not a function. try give or take.`)

}
