class LinkedList {
    constructor(head) {
        this.head = head;
        this.tail = head;
    }
    
    append(node) {
        if(this.tail) {
            this.tail.next = node;
            this.tail = node;    
        } else {
            this.head = node;
            this.tail = node;
        }
        return this;
    }
}

class Node {
    constructor(data) {
        this.data = data;
    }
}

function listIsPalindrome(linkedList) {
    const stack = [];
    let node = linkedList.head;
    while (node) {
        stack.push(node.data);
        node = node.next;
    }
    node = linkedList.head;
    while (node) {
        if (node.data === stack.pop()) {
            node = node.next
        } else {
            return false;
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }

}
const returnsTrue = new LinkedList(new Node('a')).append(new Node('b')).append(new Node('c')).append(new Node('b')).append(new Node('a'));
console.log('true', listIsPalindrome(returnsTrue));
const returnsFalse = new LinkedList(new Node('a')).append(new Node('b')).append(new Node('c')).append(new Node('a')).append(new Node('b'));
console.log('false', listIsPalindrome(returnsFalse));
