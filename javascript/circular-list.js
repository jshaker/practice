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

function detectLoop(linkedList) {
    let node = linkedList.head;    
    while (node) {
        const node2 = node.next;
        if (!node2) {
            if (node !== linkedList.tail) {
                return node;
            }
        }
        delete node.next;
        node = node2;
    }
}

const normalList = new LinkedList(new Node(2)).append(new Node(3)).append(new Node(4));
console.log('undefined', detectLoop(normalList));
const referenceNode = new Node(20);
const corruptedNode = new Node(5);
const circularList = new LinkedList(referenceNode).append(new Node(3)).append(new Node(4)).append(corruptedNode);
corruptedNode.next = referenceNode;
console.log('20', detectLoop(circularList).data);
