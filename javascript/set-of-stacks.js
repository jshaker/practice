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

class SetOfStacks {
    constructor() {
        this.maxHeight = 5;
        this.currentHeight = 0;
        this.stacks = new Stack(new Node(new Stack()));
    }
    
    push(node) {
        if (this.currentHeight === this.maxHeight) {
            this.stacks.push(new Node(new Stack()));
            this.currentHeight = 0;
        }
        this.stacks.top.data.push(node);
        this.currentHeight++;
        return this;
    }
    
    pop() {
        if (this.currentHeight === 0) {
            throw new Error('Cannot pop because stack is empty');
        }
        const node = this.stacks.top.data.pop();
        this.currentHeight--;
        if (this.currentHeight === 0) {
            if (this.stacks.top.data.isEmpty) {
                this.stacks.pop();
                this.currentHeight = this.maxHeight;
            }
        }
        return node;
    }
}

const set = new SetOfStacks();
set.push(new Node(1)).push(new Node(2)).push(new Node(3)).push(new Node(4)).push(new Node(5)).push(new Node(6)).push(new Node(7)).push(new Node(8));
console.log(set.pop().data);
console.log(set.pop().data);
console.log(set.pop().data);
console.log(set.pop().data);
console.log(set.pop().data);
console.log(set.pop().data);
console.log(set.pop().data);
console.log(set.pop().data);
