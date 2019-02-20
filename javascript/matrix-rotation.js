function rotate90(matrix) {
    let length = matrix.length - 1;
    let clone = Array(length + 1).fill(1).map(() => []);
    for (let i = 0; i <= length; i++) {
        const j = length - i;
        for (let k = 0; k <= length; k++) {
            clone[i][k] = matrix[k][j];
        }
    }
    return clone;
}

const initialMatrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
console.log('initial', initialMatrix);
console.log('result', rotate90(initialMatrix));
