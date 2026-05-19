//stack -> primitive
//heap -> non-primitive

let a=1
let b=a
a=3
console.log(b)
console.log(a)

let user1={
    name:"Bhoomi",
    age:20
}

let user2= user1

user2.age=22

console.log(user1.age)
console.log(user2.age)