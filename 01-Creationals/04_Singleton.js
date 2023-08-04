//===============================//SINGLETON//===============================/
// Singleton is a creational design pattern that lets you ensure that a class
// has only one instance, while providing a global access point to this instance.

class Database {
  constructor(data) {
    if (Database.exits) {
      return Database.instance;
    }
    Database.instance = this;
    Database.exits = true;
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

const mongo = new Database("MongoDB");

console.log(mongo.getData()); // MongoDB

const mySQL = new Database("SQL");

console.log(mySQL.getData()); // MongoDB
