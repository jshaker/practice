/*
function mergeSort(arr) {
    const temp = [];
    mergeSortHelper(arr, 0, arr.length - 1, temp); 
}

function mergeSortHelper(arr, leftStart, rightEnd, temp) {
    if (leftStart >= rightEnd) {
        return;
    }    
    const mid = Math.floor((leftStart + rightEnd) / 2);
    mergeSortHelper(arr, leftStart, mid, temp);
    mergeSortHelper(arr, mid + 1, rightEnd, temp);
    mergeHalves(arr, leftStart, rightEnd, temp);  
}

function mergeHalves(arr, leftStart, rightEnd, temp) {
    const leftEnd = Math.floor((leftStart + rightEnd) / 2);
    const rightStart = leftEnd + 1;
    const size = rightEnd - leftStart + 1;
    
    let left = leftStart;
    let right = rightStart;
    let index = leftStart;
    
    while (left <= leftEnd && right <= rightEnd) {
        if (arr[left] <= arr[right]) {
            temp[index] = arr[left];
            left++;
        } else {
            temp[index] = arr[right];
            right++;
        }
        index++;
    }
    for (let i = left; i < leftEnd - left + 1; i++) {
        temp[index + i] = arr[i];
    }
    for (let i = right; i < rightEnd - right + 1; i++) {
        temp[index + i] = arr[i];
    }
    for (let i = leftStart; i < size; i++) {
        arr[i] = temp[i];
    }
}

const arr = [1,56,12,5,123,31,23,15,7];
mergeSort(arr);
console.log('mergeSort', arr);
*/
