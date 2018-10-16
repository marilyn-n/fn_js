# JS Functions

Experiments and exercises with function expression and FARTs.

```js

const argsLength = function (p1, p2, p3) {
  console.log(p1, p2, p3)
  console.log(arguments);
  console.log(arguments.length);
  return arguments.length
}

argsLength()
```

```js
const uniqueNumbers = (arr) => {
  const mySet = new Set(arr)
  return mySet
}

uniqueNumbers([1, 1, 3, 4, 5, 5, 5, 5, 8, 9, 0, 0, 0])

```