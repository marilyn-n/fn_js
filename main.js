const greaterNum = (x, y) => {
  if (x > y) {
    return (`The greater number of ${x} and ${y} is ${x}`)
  } else {
    return (`The greater number of ${y} and ${x} is ${y}`)
  }
}

console.log(greaterNum(9, 8))
console.log(greaterNum(3, 5))


/* expected 
output The greater number of 5 and 10 is 10.
*/


const helloWorld = (code) => {
  if (code === 'es') {
    return ('Hola a todos!')
  } else if (code === 'it') {
    return ('Ciao tutti!')
  } else {
    return ('Hello everyone!')
  }
}

console.log(helloWorld('en'))
console.log(helloWorld('it'))
console.log(helloWorld('es'))

/* expected output 
Hola a todos, --> es
Ciao, tutti, ---> it
Hello everyone ---> en
*/

const pluralizer = (noun, number) => {
  if (number > 1) {
    return (`${number} ${noun + 's'}`)
  } else if (number < 1) {
    return (noun)
  } else {
    return (`${number} ${noun}`)
  }
}

console.log(pluralizer('casa', 9))
console.log(pluralizer('casa', 2))
console.log(pluralizer('casa', 1))
console.log(pluralizer('casa', 0))


/* expected output
"5 cats" or "1 dog".
*/

// const counter = (str) => { ---------------------------------->>>>>
//   for (let i = 0; i < str.length; i++) {

//     const elem = str[i]
//     const count = str[i].match(elem).length

//     const res = count + ' : ' + elem
//     console.log(res)
//   }
// }


// console.log(counter('success'))

// var temp = "This is a string.";
// for (let i = 0; i < temp.length; i++) {

// }

// var count = (temp.match(/i/g) || []).length;
// console.log(count);

// expected output 'success'
// expected output s: 3, u: 1, e:1 c: 2

const uniqueLetters = (str) => {
  const myArray = str.split('')
  const mySet = new Set(myArray)
  return mySet
}

console.log(uniqueLetters('success'))

// expected output 'success'
// s u c e

const uniqueNumbers = (arr) => {
  const mySet = new Set(arr)

  return mySet
}

console.log(uniqueNumbers([1, 1, 3, 4, 5, 5, 5, 5, 8, 9, 0, 0, 0]))

// return lenght of the 3 arguments in a function

const argsLength = function (p1, p2, p3) {
  console.log(p1, p2, p3)
  console.log(arguments);
  console.log(arguments.length);
  return arguments.length
}

argsLength()


// Write a JavaScript function that accept a list of country names as input and returns the longest 
// country name as output. Go to the editor 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])

const countries = [
  'Mexico', 
  'La Ciudad de Mexico es Maravillosa', 
  'Canada', 
  'Honduras', 
  'United States of America', 
  'Venezuela', 'Colombia'
]

const longestCountryName = (arr) => {
   const longuestCountrie = arr.reduce((a, b) => {
      if (a.length > b.length){
        return a
      } else {
        return b
      }
   })
   return longuestCountrie
}

console.log(longestCountryName(countries) );

// // Expected output : "United States of America"

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

const sumOfArray = (arr) => arr.reduce((x, y) => x + y)

console.log(sumOfArray(numbers));

// expected output. The sum of all numbers in array --->> 210

const sumOfNumbersWithForLoop = () => {
  total = 0
  for (let i = 0; i <= 20; i++) {
    total += i
  }
  return total
}

console.log(sumOfNumbersWithForLoop());

// expected output. The sum of all numbers in for loop -->> 210








