const personeOne = {
    name: 'Bob',
    age: 21
}
function increasePersonAge(person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age +=1
    updatedPerson.name = 'jon'
    return updatedPerson
}
const updatedPersonOne = increasePersonAge(personeOne)

console.log(personeOne.age)
console.log(updatedPersonOne)