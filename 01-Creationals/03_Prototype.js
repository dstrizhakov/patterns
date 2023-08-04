//===============================//PROTOTYPE//===============================/
// Prototype is a creational design pattern that lets you copy existing objects 
// without making your code dependent on their classes.

const car = {
  wheels: 4,

  init() {
    console.log(`Car has ${this.wheels} wheels, owner is ${this.owner}.`);
  },
};

const carWitnOwner = Object.create(car, {
  owner: {
    value: "Dmitry",
  },
});

console.log(carWitnOwner.__proto__ === car);

carWitnOwner.init();
