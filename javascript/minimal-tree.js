class Node {
    constructor(data) {
        this.data = data;
    }
    
    append(node) {
        //console.log('nodedata', node.data);
        if (node.data <= this.data) {
            if (this.left) {
                this.left.append(node);
            } else {
                this.left = node;
            }
        } else {
            if (this.right) {
                this.right.append(node);
            } else {
                this.right = node;
            }
        }
    }
    
    get height() {
        let leftHeight = 0;
        let rightHeight = 0;
        if (this.left) {
            leftHeight = this.left.height;
        }
        if (this.right) {
            rightHeight = this.right.height;
        }
        return 1 + Math.max(leftHeight, rightHeight);
    }
    
    get isBalanced() {
        if (this.height === 1) {
            return true;
        }
        let leftIsBalanced = true;
        let leftHeight = 0;
        if (this.left) {
            leftIsBalanced = this.left.isBalanced;
            if (this.left.height) {
                leftHeight = this.left.height;
            }
        }
        let rightIsBalanced = true;
        let rightHeight = 0;
        if (this.right) {
            rightIsBalanced = this.right.isBalanced;
            if (this.right.height) {
                rightHeight = this.right.height;
            }
        }
        return Math.abs(leftHeight - rightHeight) <= 1 && leftIsBalanced && rightIsBalanced; 
    }
    
}

function buildMinimalTree(arr) {
    //Assuming sorted array
    let root;
    if (arr.length === 0) {
        throw new Error('shit nigger');
    }
    if (arr.length === 1) {
        root = new Node(arr[0]);
    } else {
        const max = arr.length - 1;
        if (max % 2 === 0) {
            const index = max / 2;
            root = new Node(arr[index]);
            root.append(buildMinimalTree(arr.slice(0, index)));
            root.append(buildMinimalTree(arr.slice(index + 1, arr.length)));
        } else {
            const index = Math.floor(max / 2);
            root = new Node(arr[index]);
            if (index === 0) {
                root.append(buildMinimalTree(arr.slice(1, 2)));
            } else {
                root.append(buildMinimalTree(arr.slice(0, index)));
                root.append(buildMinimalTree(arr.slice(index + 1, arr.length)));    
            }
            
        }
    }
    return root;
}

const sortedArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
const minTree = buildMinimalTree(sortedArray);
console.log('isBalanced', minTree.isBalanced);
