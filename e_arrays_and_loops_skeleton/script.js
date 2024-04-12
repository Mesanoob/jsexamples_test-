// ---------
// 1. ARRAYS
// ---------

// Basic array
// This is just an example, the best practice is to store a single data type to an array
const myArray = [1, 2, 3, 4, 'Hello', true, null]
// console.log(myArray)

// An array SHOULD be used with values of a single data type
const myArray2 = ['James', 'Sam', 'Xavier']

// A) ARRAY PROPERTIES
// console.log('Number of elements in mappedArray: ' + myArray2.length)

// B) ARRAY METHODS

// i - map function of an array
// Implement your code here
const mappedArray = [1, 2, 3, 4, 5, 6]

const arrMultiplyArrBy10 = mappedArray.map((item) => item * 10) //arrow func

const arr = mappedArray.map(function (item) {
  return item * 20 //normal func
})

// console.log(arrMultiplyArrBy10)
// console.log(arr)

// ii - filter function of an array
// Implement your code here
const vowels = ['a', 'e', 'i', 'o', 'u']
const filteredVowels = vowels.filter((vowel) => vowel == 'a' || vowel == 'u')
console.log(filteredVowels)
// iii - sort function of an array
// Implement your code here
const nums = [1, 2, 3, 4, 5, 6]
const names = ['James', 'Chris', 'Max', 'Lenon']
// Sort by descending order
// Implement your code here
const descendingNums = nums.sort((a, b) => (a > b ? -1 : 1))
console.log(descendingNums)
// Sort by ascending order
// Implement your code here
const ascendingNums = nums.sort((a, b) => (a < b ? -1 : 1))
console.log(ascendingNums)
// iv - reduce function of an array
// Implement your code here
const numbers = [1, 2, 3, 4]
const productOfNums = numbers.reduce((a, b) => a * b)
console.log(productOfNums)
// another approach of applying a reuduce function of an array
// Implement your code here
function product(a, b) {
  return a * b
}
const productOfNums2 = numbers.reduce((a, b) => product(a, b))

// v - manipulating data on an existing array
const teamList = ['Tanna', 'Shia Lyn', 'Zhi Yan', 'Francis']
teamList.push('Muhaimin') // pushed a value to the end of an array
console.log('Team 1: ' + teamList)
// const extractedMembers = teamList splice(0, 2); // remove a value starting from index and ends before index
// console. log(extractedMembers); // ["Tanna", "Shia Lyn"]
// console. log(teamList); // ["Zhi Yan", "Francis", "Muhaimin"]
const index = 1
const newTeamList = [...teamList.splice(0, index), 'Colin', ...teamList] // ["Tanna", "Shia Lyan", "Colin", "Zhi Yan"]
console.log(newTeamList)
console.log(newTeamList.reverse())
// ---------
// 2. LOOPS
// ---------

// i - for loops (Simulate a countdown using a for loop)
// Implement your code here
let countdown = 0

for (let index = 10; index >= countdown; index--) {
  index > countdown
    ? console.log(countdown.index)
    : console.log('The weekend is here.')
}

// ii - for-each loop
// Implement your code here

const tickerSymbols = ['FB', 'AAPL', 'AMZN', 'NFLX', 'GOOG']
tickerSymbols.forEach((ticker) => console.log(ticker))

const productListing = [
  { name: 'Jordan 3', price: '$100' },
  { name: 'Nike Dunks', price: '$150' },
]
productListing.forEach((item) => console.log(item))
// iii - do-while loop (execute first, check for the condition later)
// Implement your code here
let getName = ''

do {
  getName = prompt('enter name')
  if (getName !== '')
    document.getElementById('displayName').textContent = getName
} while (getName == '')
// iv - while loop (check the conditions first before running the while loop)
let getName2 = ''

while (getName2 == '') {
  getName2 = prompt('enter ur name')

  if (getName2 !== '')
    document.getElementById('displayName').textContent = getName2
}
// Implement your code here
