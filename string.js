const name="Bhoomi"
const repoCount= 50

console.log(name+repoCount)

console.log(`Hello, my name is ${name} and my repo is ${repoCount}`)

const game= new String('Bhoomi')
console.log(game)

console.log(game[0])
console.log(game.__proto__)
console.log(game.length)
console.log(game.charAt(3))
console.log(game.indexOf('m'))
const newS=game.substring(0,4)
console.log(newS)

const ano= game.slice(-6,5)
console.log(ano)

const new1="  Bhoomi  "
console.log(new1)
console.log(new1.trim())

const url= "https://bhoomi.com/bhoomi%20jalandhra"
console.log(url.replace('%20','-'))
console.log(url.includes('bhoomi'))
const g="Bhoomi-Jalandhra"
console.log(g.split('-'))