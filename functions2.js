function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(400,200,500))

function  num(a,b,...c){
    return c
}

console.log(num(1,2,3,4,5,6))

//Object
const user={
    name:"Bhoomika",
    age:20
}

function id(any){
    console.log(`Name: ${any.name}`)
}

id(user)
//or
id({
    name:"Bhoomika"
})

//Array
const myArray=[10,20,30]

function arr1(getArray){
    return getArray[2]
}

console.log(arr1(myArray))
