class User {
  constructor(name) {
    this.name = name;
    this.room = null;
  }

  send(message, to) {
    this.room.send(message, this, to);
  }

  recive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`);
  }
}

class Room {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }

  send(message, from, to) {
    if (to) {
      to.recive(message, from);
    } else {
      Object.keys(this.users).forEach((key) => {
        if (this.users[key] !== from) {
          this.users[key].recive(message, from);
        }
      });
    }
  }
}

const dima = new User("Dmitry");
const igor = new User("Igor");
const albert = new User("Albert");

const chatroom = new Room();

chatroom.register(dima);
chatroom.register(igor);
chatroom.register(albert);

dima.send("Welcome", igor);
igor.send("Hello");
albert.send("Hi!");
