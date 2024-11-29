// introduction 4
const spreadArray = (arr1, arr2) => [...arr1, ...arr2]
const spreadObject = (obj1, obj2) => (newObject = { ...obj1, ...obj2 })
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const person = { name: 'Jhon', age: 18 }
const gender = { gender: 'male' }

console.log(spreadArray(arr1, arr2))
console.log(spreadObject(person, gender))

const numbers = [10, 12, 23, 21, 23, 25, 52]
