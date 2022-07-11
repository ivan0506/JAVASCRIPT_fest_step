const person = {
    name: 'Bob',
    age: 230,
    nations: {
        job: 'blue'
    }
}
const person2 = JSON.parse(JSON.stringify(person))//работвет с вложенными свойствами
console.log(person2.age)
person2.age = 26
console.log(person.age)
console.log(person2.age)
console.log(person2.nations.job)

