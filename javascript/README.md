define variable with var, let, or const
garbage collection is when javascript deletes unused variables for you for the memory management
+ can add math or combine strings. this is called polymorphism.
can write things on the same line:
let a=1,b=2,c=3;
you can use double and single quotes in a string by using `` tick mark ``
javascript object: can store lots of variables in an object
s = {age:100, name:'nick'}
""> s.age
100
object is like a dictionary (key value pairs)
typeof to check data type of object

&& and
|| or

domino rally

arrays:
let primes=[2,3,5,7,11]
console.log(primes[2])
in order to get 5

to add value to the end of array use
primes.push()
to remove from the end of array:
primes.pop()
to remove from beginning of array:
primes.shift()
to add from beginning of array:
primes.unshift()

to remove from specific index:
let names = ["tina","nick","anna","andy"]
names.splice(1,2)
(starting from 1, remove 2 of the items)
//output-> ["tina","andy"]

remove specific item without knowledge of array data.

let nick = names.indexOf("nick")
names.splice(nick,1)
