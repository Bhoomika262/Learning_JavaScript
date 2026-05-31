function myName(){
    console.log("Bhoomika")
}

myName()

function add(a,b){
    console.log(a+b)
}

add(1,4)
add(1,"4")
add(3,null)
add(3,"a")

const result=add(3,5)
console.log("Result:",result) //our function didn't return anything

//Solution
function add2(c,d){
    return c+d
}

result2=add2(3,7)
console.log(result2)

//After return nothing inside the function is executed


function isLoggedin(userName){
    if(userName===undefined){
        console.log("Please enter a user name")
        return
    }
    return `${userName} just logged in`
}

console.log(isLoggedin("Bhoomika"))
console.log(isLoggedin())

//Default value
function isLoggedin(userName="Sam"){
    if(userName===undefined){
        console.log("Please enter a user name")
        return
    }
    return `${userName} just logged in`
}

console.log(isLoggedin("Bhoomika"))
console.log(isLoggedin())