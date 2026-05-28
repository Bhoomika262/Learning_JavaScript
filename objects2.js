// const tinderUser= new Object() //Singleton object

const tinderUser={} //non-singleton object

tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLogIn=false

console.log(tinderUser)

const regUser={
    email:"reg@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Bhoomika",
            lastname:"Jalandhra"
        }
    }
}

console.log(regUser.fullname.userfullname.lastname)

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}
// const obj3=Object.assign({},obj1,obj2)

// console.log(obj3)
const obj3={...obj1,...obj2}
console.log(obj3)

//when we recieve values from database, it will be array of objects
//Objects in array
const users=[
    {
        id:1
    },
    {
        id:2
    },
    {
        id:3
    }
]

console.log(users[1].id)

console.log(tinderUser)
console.log(Object.keys(tinderUser)) //output is array
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLogIn'))