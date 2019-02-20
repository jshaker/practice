class Graph {
    constructor(nodes) {
        this.nodes = nodes;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.adjacentNodes = [];
    }
    
    to(node) {
        this.adjacentNodes.push(node);
    }

}

function areConnected(node1, node2) {
    const queue1 = [node1];
    const queue2 = [node2];
    while (queue1.length ||     queue2.length) {
        if (queue1.length) {
            let n1 = queue1.shift();
            if (n1 === node2) {
                return true;
            }
            n1.adjacentNodes.forEach((node) => {
                queue1.push(node);
            });
        }
        if (queue2.length) {
            let n2 = queue2.shift();
            if (n2 === node1) {
                return true;
            }
            n2.adjacentNodes.forEach((node) => {
                queue2.push(node);
            });
        }
    }
    return false;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.to(node2);
node1.to(node3);
node2.to(node4);
node3.to(node4);

console.log('true', areConnected(node1, node4));
console.log('true', areConnected(node2, node4));
console.log('false', areConnected(node2, node3));

