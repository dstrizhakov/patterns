function* generator(collection) {
  let index = 0;

  while (index < collection.length) {
    yield collection[index++];
  }
}

const iterable = generator([1, 2, 3, 4, 5, 6, 7, 8]);

// for (let value of iterable) {
//   console.log(value);
// }

console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
