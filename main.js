const greaterNum = (x, y) => {
  if (x > y) {
    return (`The greater number of ${x} and ${y} is ${x}`)
  } else {
    return (`The greater number of ${y} and ${x} is ${y}`)
  }
}

console.log(greaterNum(9,8))
console.log(greaterNum(3,5))


/* expected 
output The greater number of 5 and 10 is 10.
*/


const helloWorld = (code) =>{
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
     return(`${number} ${noun}`)
   }
}

console.log(pluralizer('casa', 9))
console.log(pluralizer('casa', 2))
console.log(pluralizer('casa', 1))
console.log(pluralizer('casa', 0))


/* expected output
"5 cats" or "1 dog".
*/

// expected output 'success'
// expected output s: 3, u: 1, e:1 c: 2

const counter = (str) => {
  const myArray = str.split('')
  const mySet = new Set(myArray)
  return mySet
}

console.log(counter('success'))

// expected output 'success'
// s u c e