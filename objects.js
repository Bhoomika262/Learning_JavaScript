// Constructor method
// (Object.create)


// Object literals

const mySym=Symbol("key1")

const JSUser={
    name:"Bhoomika",
    "full name":"Bhoomika Jalandhra",
    [mySym]:"myKey1",
    age:"20",
    city:"Jaipur",
    email:"b.j@gmail.com",
    isLoggedIn:false,
    lastLoggedIn:["Monday","Saturday"]
}

console.log(JSUser.email)
console.log(JSUser["email"])
// console.log(JSUser.pass word)  //can't access like this with space
console.log(JSUser["full name"])
console.log(JSUser[mySym])
console.log(typeof mySym) 


//freeze doesn't allow to change the value
// Object.freeze(JSUser)
// JSUser.email="abc@gmail.com"
// console.log(JSUser)

JSUser.greeting=function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JSUser.greeting())