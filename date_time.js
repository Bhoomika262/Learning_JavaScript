let myDate=new Date()
console.log(myDate)

console.log(myDate.toString())

console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)

let c=new Date(2023,0,23)
console.log(c.toDateString())

let d=new Date(2023,0,23,5,3)
console.log(d.toLocaleString())

// let myT=Date.now()
// console.log(myT)
console.log(Math.floor(Date.now()/1000))

let n=new Date()
console.log(n)
console.log(n.getMonth())
console.log(n.getDay())

s=n.toLocaleString('default',{
    weekday: "long"
})
console.log(s)