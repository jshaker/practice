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

class SortedStack extends Stack {
    constructor(node) {
        super(node);
        this.tempStack = new Stack();
    }
    
    push(node) {
        let node2 = this.top;
        while (node2.data < node.data && !this.isEmpty()) {
            this.tempStack.push(this.pop());
        }
        super.push(node);
        while (!this.tempStack.isEmpty()) {
            super.push(this.tempStack.pop());
        }
        return this;
    }
    
    pop() {
        return super.pop();
    }
    
    isEmpty() {
        return super.isEmpty();
    }
}

const stack = new SortedStack(new Node(3));
stack.push(new Node(5));
stack.push(new Node(8));
stack.push(new Node(1));
stack.push(new Node(9));
console.log('1', stack.pop().data);
console.log('3', stack.pop().data);
console.log('5', stack.pop().data);
console.log('8', stack.pop().data);
console.log('9', stack.pop().data);
