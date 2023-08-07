class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((item) => item !== observer);
  }

  fire(action) {
    this.observers.forEach((observer) => observer.update(action));
  }
}

class Observer {
  constructor(state = 1) {
    this.state = state;
    this.initialState = state;
  }

  update(action) {
    switch (action.type) {
      case "increment":
        this.state += 1;
        break;
      case "decrement":
        this.state -= 1;
        break;
      case "add":
        this.state += action.payload;
        break;
      default:
        this.state = this.initialState;
    }
  }
}

const stream$ = new Subject();

const obs1 = new Observer();
const obs2 = new Observer(42);

stream$.subscribe(obs1);
stream$.subscribe(obs2);

stream$.fire({ type: "increment" });
stream$.fire({ type: "add", payload: 5 });
// stream$.fire({}); // reset the state

console.log(obs1.state, obs2.state);
