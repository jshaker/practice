class Node {
    constructor(data) {
        this.data = data;
    }
}

function pathsWithSum(value, root) {
    const counterObj = { count: 0 };
    pathsWithSumHelper(value, root, counterObj);
    return counterObj.count;
}

function pathsWithSumHelper(value, root, counterObj) {
    
    const sums = [root.data];
    if (root.left) {
        const leftSums = pathsWithSumHelper(value, root.left, counterObj);
        leftSums.forEach((sum) => {
            sums.push(sum + root.data);
        });
    }
    if (root.right) {
        const rightSums = pathsWithSumHelper(value, root.right, counterObj); 
        rightSums.forEach((sum) => {
            sums.push(sum + root.data);
        });
    }
    sums.forEach((sum) => {
        if (sum === value) {
            counterObj.count++;
        }
    });
    return sums;
    
}

const node1 = new Node(2);
const node2 = new Node(2);
const node3 = new Node(2);
const node4 = new Node(2);
const node5 = new Node(2);
const node6 = new Node(2);
const node7 = new Node(2);

node1.left = node2;
node1.right = node3;
node2.right = node4;
node2.left = node7;
node7.left = node6;
node7.right = node5;

console.log('count 6', pathsWithSum(6, node1)); 
