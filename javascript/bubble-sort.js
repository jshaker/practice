function bubbleSort(arr) {
    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < arr.length - 1; i++ ) {
            if (arr[i] > arr[i+1]) {
                swap(arr, i, i+1);
                isSorted = false;                 
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
bubbleSort(arr);
console.log('bubbleSort', arr);
