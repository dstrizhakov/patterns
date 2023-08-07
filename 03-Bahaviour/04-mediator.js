const keyArray = [1, 2, 3];

const myMap = new Map();

myMap.set(keyArray, "my value by array key");

console.log(myMap.get(keyArray)); // "my value by array key"
console.log(keyArray); // [1, 2, 3]

keyArray.push(4);

console.log(myMap.get(keyArray)); // "my value by array key"
console.log(keyArray); // [1, 2, 3, 4]
