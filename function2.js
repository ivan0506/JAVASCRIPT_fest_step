const personeOne = {
    name: 'Bob',
    age: 21
}
function increasePersonAge(person) {
    person.age += 1
    return person
}
increasePersonAge(personeOne)
console.log(personeOne.age)