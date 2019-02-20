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

class StackWithMin extends Stack {
    constructor(node){
        super(node);
        this.minStack = new Stack(node);
    }
    
    get min() {
        return this.minStack.top;
    }
    
    push(node) {
        super.push(node);
        if (node.data < this.minStack.top.data) {
            this.minStack.push(node);
        }
    }
    
    pop() {
        const node = super.pop();
        if (node === this.minStack.top) {
            this.minStack.pop();
        }
    }
}

const stack = new StackWithMin(new Node(3));
stack.push(new Node(5));
console.log('min: 3', stack.min.data);
stack.push(new Node(2));
console.log('min: 2', stack.min.data);
stack.pop();
console.log('min: 3', stack.min.data);

