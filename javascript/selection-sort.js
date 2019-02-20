function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                swap(arr, i, j);
            }    
        }
    }
}

function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
const arr = [1,56,12,5,123,31,23,15,7];
selectionSort(arr);
console.log('selectionSort', arr);
