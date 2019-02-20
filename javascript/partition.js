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

function partition(linkedList, value) {
    let node1 = linkedList.head;
    while(!node1) {
        if (node1.data >= value) {
            let node2 = node1.next;
            while(node2) {
                const data = node2.data;
                if (data < value) {
                    node2.data = node1.data;
                    node1.data = data;
                    break; 
                }
                node2 = node2.next;
            }
        }
        node1 = node1.next;
    }
}

function listElements(linkedList) {
    const elements = [];
    let node = linkedList.head;
    while(node) {
        elements.push(node.data);
        node = node.next;
    }
    return elements;
}

const linkedList = new LinkedList(new Node(3));
linkedList.append(new Node(5));
linkedList.append(new Node(8));
linkedList.append(new Node(5));
linkedList.append(new Node(10));
linkedList.append(new Node(2));
linkedList.append(new Node(1));

console.log('before', listElements(linkedList));
partition(linkedList, 5);
console.log('after', listElements(linkedList));
