const person = {
    name: 'Bob',
    age: 230
}
const person2 = { ...person} //не работает с вложенными свойствами
console.log(person2.age)
person2.age = 26
console.log(person.age)
console.log(person2.age)
