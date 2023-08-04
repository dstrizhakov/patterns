//===============================//FACTORY//===============================/
// Factory Method is a creational design pattern that provides an interface 
// for creating objects in a superclass, but allows subclasses to alter the 
// type of objects that will be created.

class SimpleMemvership {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}

class StandardMemvership {
  constructor(name) {
    this.name = name;
    this.cost = 150;
  }
}

class PremiumMemvership {
  constructor(name) {
    this.name = name;
    this.cost = 500;
  }
}

// Factory for creating Membership

class MemberFactory {
  static list = {
    simple: SimpleMemvership,
    standard: StandardMemvership,
    premium: PremiumMemvership,
  };

  create(name, type = "simple") {
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
    const member = new Membership(name);
    member.type = type;
    member.define = function () {
      console.log(`${this.name}(${this.type}): ${this.cost}`);
    };
    return member;
  }
}

const factory = new MemberFactory();

const members = [
  factory.create("Dmitry", "simple"),
  factory.create("Valera", "premium"),
  factory.create("Alexey", "standard"),
];

members.forEach(function (member) {
  member.define();
});
