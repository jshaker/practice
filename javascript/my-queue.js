class Node {
    constructor(data) {
        this.data = data;
    }
}

class Stack {

    constructor(node) {
        this.top = node;
    }
    
    push(node) {
        node.next = this.top;
        this.top = node;
        return this;
    }
    
    pop() {
        const node = this.top;
        this.top = this.top.next;
        return node;
    }
    
    isEmpty() {
        return !this.top;
    }
}

class MyQueue {
    constructor(node) {
        this.start = new Stack(node);
        this.temp = new Stack();           
    }
    
    add(node) {
        while(!this.start.isEmpty()) {
            this.temp.push(this.start.pop());
        }
        this.start.push(node);
        while(!this.temp.isEmpty()) {
            this.start.push(this.temp.pop());
        }
    }
    
    remove() {
        return this.start.pop();
    }
    
    peek() {
        while(!this.start.isEmpty()) {
            this.temp.push(this.start.pop());
        }
        const node = this.temp.top;
        while(!this.temp.isEmpty()) {
            this.start.push(this.temp.pop());
        }
    }
    
    isEmpty() {
        return this.start.isEmpty();
    }
}

const queue = new MyQueue(new Node(1));
queue.add(new Node(2));
queue.add(new Node(3));
console.log('1', queue.remove().data);
console.log('2', queue.remove().data);
console.log('3', queue.remove().data);
