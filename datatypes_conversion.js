let score = 33
console.log(typeof score);
console.log(typeof(score));

let num = "33"
console.log(typeof num);
console.log(typeof(num));

let value = Number(num)
console.log(typeof value);
console.log(value);

let n = "null"
console.log(typeof n);
console.log(typeof(n));

let v = Number(n)
console.log(typeof v);
console.log(v);

let m = "33abs"
console.log(typeof m);
console.log(typeof(m));

let a = Number(m)
console.log(typeof a);
console.log(a);

let i=1
let b= Boolean(i)
console.log(b)

let is= "Bhoomi"
let bo= Boolean(is)
console.log(bo)

let isb= ""
let boo= Boolean(isb)
console.log(boo)

let str1="Hello"
let str2=" Bhoomi"
str3=str1+str2
console.log(str3)

//The following code show how it works but we should not code like this
console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")

console.log(-true)  
console.log(+"")
console.log(-"")

let n1,n2,n3
n1=n2=n3=4 

let g=100
g++;
console.log(g)
