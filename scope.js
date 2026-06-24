let a=10
// const b=20
var c=300

// console.log(a)
// console.log(b)
// console.log(c)

if(true){
    let a=100
    const b=20
    var c=30
    console.log(a)
}

console.log(a)
// console.log(b)
console.log(c)

// nested scope

function one(){
    const userName="Bhoomika"
    function two(){
        const website="youtube"
        console.log(userName)
    }
    // console.log(website)
    two()
} 

one()

if(true){
    const user="Bhoomi"
    if(user === "Bhoomi"){
        const website=" youtube"
        console.log(user)
        console.log(user+website)
    }
}

console.log(addone(5))
function addone(num){
    return num+1
} 


// console.log(addtwo(5))
const addtwo=function(num){
    return num+2
}

addtwo(5)
console.log(addtwo)
