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

function sumLists(list1, list2) {
    let carryOver = 0;
    let sum = new LinkedList();
    let node1 = list1.head;
    let node2 = list2.head;
    while(node1 || node2) {
        let currentSum = 0;
        if (node1) {
            currentSum += node1.data;
            node1 = node1.next;
        }
        if (node2) { 
            currentSum += node2.data;
            node2 = node2.next;
        }
        currentSum += carryOver;
        if (currentSum >= 10) { 
            carryOver = 1;
            sum.append(new Node(currentSum - 10));
        } else {
            carryOver = 0;
            sum.append(new Node(currentSum));
        }
    }
    return sum;
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

const linkedList1 = new LinkedList(new Node(7));
linkedList1.append(new Node(1));
linkedList1.append(new Node(6));

const linkedList2 = new LinkedList(new Node(5));
linkedList2.append(new Node(9));
linkedList2.append(new Node(2));

console.log('answer', listElements(sumLists(linkedList1, linkedList2)));
