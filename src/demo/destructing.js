var arr = [1,2,3,4,5]
var [a,b] = arr
console.log(a,b)


//Object Literal Syntax
var person ={name: 'Pooja', city: 'Pune', phone: 999999999}
console.log(person.name)

//ES5
var name5 = person.name
var city5 = person.city

console.log(name5, city5)

//ES6
let{name, city} = person
console.log(name, city)

