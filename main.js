const greaterNum = (x, y) => {
  if (x > y) {
    return (`The greater number of ${x} and ${y} is ${x}`)
  } else {
    return (`The greater number of ${y} and ${x} is ${y}`)
  }
}

console.log(greaterNum(9, 8))
console.log(greaterNum(3, 5))


/* expected output
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


// Write a JavaScript function to find the first not repeated character. Go to the editor
// Sample arguments : 'abacddbec' 
// // Expected output : 'e' 

const firstNotRepeatedChar = (str)  => {
  let result = ''
  let arr = str.split('')
  let repeatedChar = 0
 
  for (let x = 0; x < arr.length; x++) {
    repeatedChar = 0
    for (let y = 0; y < arr.length; y++) {

      arr[x] === arr[y] ? repeatedChar += 1 : null

    }

    repeatedChar < 2 ? result = arr[x] : null

  }
  return result
}

console.log(firstNotRepeatedChar('abacddbec'));


// fizz buzz
// expected output
// print fizz when number is multiple of 3, print buzz when number is multiple of 5
// print fizz buzz when number is multiple of 15


const fizzBuzz = () => {
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log('Hi');
    
    } else if (i % 5 === 0) {
      console.log('there');
      
    } else if (i % 3 === 0) {
      console.log('!');
      
    } else {
    
      console.log(i); 
    }
  
  }
  
}

console.log(fizzBuzz());


// Write a JavaScript function that accepts two arguments, a string and a letter and the function will 
// count the number of occurrences of the specified letter within the string. Go to the editor
// Sample arguments : 'w3resource.com', 'o' 
// Expected output : 2 
// Click me to see the s


// Write a JavaScript function to  get the number of occurrences of each letter in specified string


// Write a function that checks if a string its palindrome or not

// expected outout ---> oso ---> It's a palindrome!

console.log('----------------------->>>');


const isPalindrome = (str) => {
  const reversed = str.split('').reverse().join('')
  
  if (str === reversed ) {
    return `${str} true`
  } else {
    return `${str} false`
     
  }
}

console.log(isPalindrome('roma')) // false
console.log(isPalindrome('oso')) // true
console.log(isPalindrome('luis')) // false
console.log(isPalindrome('aaa')) // true

