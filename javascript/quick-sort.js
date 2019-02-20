function quickSort(arr) {
    quickSortHelper(arr, 0, arr.length - 1);
}

function quickSortHelper(arr, left, right) {
    if (left >= right) {
        return;
    }
    const pivot = arr[Math.floor((right + left) / 2)];
    const index = partition(arr, left, right, pivot);
    quickSortHelper(arr, left, index - 1);
    quickSortHelper(arr, index, right);
}

function partition(arr, left, right, pivot) {
    while (left <= right) {
        while (arr[left] < pivot) {
            left++;        
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
}

function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

const arr = [7,1,6,17,36,16,7,2,1];
quickSort(arr);
console.log('quickSort', arr);
