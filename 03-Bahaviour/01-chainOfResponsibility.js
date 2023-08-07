class Sum {
  constructor(initial) {
    this.sum = initial;
  }

  add(value) {
    this.sum += value;
    return this;
  }
}

const sum1 = new Sum(1);

console.log(sum1.add(1).add(2).add(3).add(4).add(5));
