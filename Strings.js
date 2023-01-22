console.log("country")

let country = "Pakistan"
console.log(country)
console.log(country[0])
console.log(country[8]) //undefined
console.log(country.charAt(0)) 
console.log(country.charAt(8)) //empty string
console.log(typeof country)

console.log("message")

let message = "Hi! My name is: M.Rebaal"
console.log(message)
console.log(message.toLocaleUpperCase())
console.log(message.toLocaleLowerCase())
console.log(message.includes("name"))
console.log(message.endsWith("M.Rebaal"))
console.log(message.startsWith("Hi!"))

console.log(" toString "," split "," concate ")


let num1 = 121
let alive = true
let counting = [1,2,3,4,5,6,7,8]
console.log(num1.toString())
console.log(alive.toString())
console.log(counting.toString())
console.log(typeof num1.toString())
console.log(typeof alive.toString())
console.log(typeof counting.toString())

let a_message = "Hi! My name is: M.Rebaal"
console.log(a_message.split(" "))

let a = " abc "
let b = " bcd "
let c = " ced "

console.log(a.concat(b,c))
console.log(a+b+c)

console.log(" slice "," substring "," substr ")

let b_message = "This is a great game."
console.log(b_message.slice(0,5))
console.log(b_message.slice(0))
console.log(b_message.slice())
console.log(b_message.slice(1))
console.log(b_message.slice(-7,-1))

console.log(b_message.substring(0,5))

console.log(b_message.substr(0,6))

console.log("Escape Sequence")

let another_message = '\tIt\'s a \ great \\ Course!\n How are you?'
console.log(another_message)