//Primitive : string, number, boolean, null, undefined, symbol, bigint
//Reference/ non-primitive: array, objects, functions

//Symbol
const i=Symbol('123')
const j=Symbol('123')

console.log(i==j)

//BigInt
const a = 218248204713413n
console.log(a)

//Array
const heros = ["Shaktimaan","Spiderma","Hulk"]

//Objects
let me={
   name:"Bhoomi",
   age: 20
}

//Functions
const myf= function(){
   console.log("Me")
} 

console.log(typeof myf)
console.log(typeof me)
console.log(typeof heros)
console.log(typeof null)