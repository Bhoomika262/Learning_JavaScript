// const myarray= [0,1,2,3,4]
// console.log(myarray[2])

// const mine=["and","oref","sder"]
// console.log(mine)

// const my2= new Array(0,1,2,3,4)
// console.log(my2)
// console.log(my2[3])

// //Methods
// my2.push(6)
// console.log(my2)

// my2.push(7)
// console.log(my2)

// my2.pop()
// console.log(my2)

// my2.unshift(5)
// console.log(my2)

// my2.shift()
// console.log(my2)

// console.log(my2.includes(9))

// console.log(my2.indexOf(9))

// console.log(my2.indexOf(6))

// const myA=my2.join()
// console.log(my2)
// console.log(myA)

// console.log(typeof my2)
// console.log(typeof myA)

// console.log("A ",my2)
// const my3=my2.slice(1,6)
// console.log(my3)
// console.log("B ",my2)

// const my4=my2.splice(1,6)
// console.log(my4)
// console.log("C ",my2)

const fruits = ["Mango","Apple","Lychee"]
const veggies =["Potato","Pumpkin","Cabbage"]

// fruits.push(veggies)
// console.log(fruits) 

// console.log(fruits[3][1])

// const all=fruits.concat(veggies)
// console.log(all)

// const all=[...fruits,...veggies]
// console.log(all)

const another=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real=another.flat(1)
console.log(real)

const real2=another.flat(2)
console.log(real2)

const real3=another.flat(Infinity)
console.log(real3)

console.log(Array.isArray("Bhoomi"))
console.log(Array.from("Bhoomi"))
console.log(Array.from({name: "Bhoomi"}))
console.log(Array.from(Object.keys({name: "Bhoomi"})))
console.log(Array.from(Object.values({name: "Bhoomi"})))

let a=100
let b=200
let c=300
console.log(Array.of(a,b,c))