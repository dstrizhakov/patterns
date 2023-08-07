class MyMath {
  constructor(initial = 0) {
    this.number = initial;
  }

  square() {
    return this.number ** 2;
  }

  cube() {
    return this.number ** 3;
  }
}

class Command {
  constructor(target) {
    this.target = target;
    this.commands = [];
  }

  execute(command) {
    this.commands.push(command);
    return this.target[command]();
  }
}

const num1 = new Command(new MyMath(2));

console.log(num1.execute("square"));
console.log(num1.execute("cube"));

console.log(num1.commands);
