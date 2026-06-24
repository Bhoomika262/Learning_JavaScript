const user={
    username: "Bhoomika",
    price: 999,
    welcomeMessage: function(){
        //console.log(`${this.username} Welcome to website`);
        console.log(this)
    }
}

user.welcomeMessage()
user.username="Bhoomi"
user.welcomeMessage()

console.log(this)

// function chai(){
//     console.log(this)
// }

// chai()

//arrow functions

// const chai= function(){
//     let user="Bhoomi"
//     console.log(this.user)
// }

// chai()

const chai= () => {
    let user="Bhoomi"
    console.log(this.user)
}

chai()

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }

// console.log(addtwo(3,4))

//implicit return
const addtwo=(num1,num2)=> num1+num2