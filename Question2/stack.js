class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  find(item) {
    return this.items.includes(item);
  }
}

let stack = new Stack();

console.log("Is the stack empty? ", stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Stack size: ", stack.size());
console.log("Is 3 in the stack? ", stack.find(3));

stack.pop();

console.log("Is 3 in the stack? ", stack.find(3));
console.log("Stack size: ", stack.size());

stack.pop();
stack.pop();

console.log("Is the stack empty? ", stack.isEmpty());
