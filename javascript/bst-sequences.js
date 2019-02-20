class Node {
    constructor(data) {
        this.data = data;
    }
}

function findTreeInput(root) {
    let leftCombinations = [];
    let rightCombinations = []; 
    if (root.left) {
        leftCombinations = findTreeInput(root.left);
    }
    if (root.right) {
        rightCombinations = findTreeInput(root.right);
    }
    const combinations = []; 
    leftCombinations.forEach((leftCombination) => {
        if (rightCombinations.length) {
            rightCombinations.forEach((rightCombination) => {
                combinations.push([root].concat(leftCombination).concat(rightCombination));    
            });
        }
        else {
            combinations.push([root].concat(leftCombination));
        }
    });

    rightCombinations.forEach((rightCombination) => {
        if (leftCombinations.length) {
            leftCombinations.forEach((leftCombination) => {
                combinations.push([root].concat(rightCombination).concat(leftCombination));    
            });
        }
        else {
            combinations.push([root].concat(rightCombination));
        }
    });
    if (!combinations.length) {
        combinations.push([root]);
    }
    return combinations;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);

node1.left = node2;
node1.right = node3;
node2.right = node4;
node2.left = node7;
node7.left = node6;
node7.right = node5;

console.log('sequences', findTreeInput(node1));

