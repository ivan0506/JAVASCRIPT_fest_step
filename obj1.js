const person = {
    name: 'Bob',
    age: 22
}
const person2 = Object.assign({}, person) //не работает с вложенными свойствами
console.log(person2.age)
person2.age = 26
console.log(person.age)
console.log(person2.age)
