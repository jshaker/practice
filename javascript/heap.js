var MinHeap = function() {
  var size = 0;
  var data = [];
  
    
  var getParentIndex = function(index) {
    return Math.round((index - 2) / 2);
  };
  
  var getLeftIndex = function(index) {
    return (index * 2) + 1;
  };
  
  var getRightIndex = function(index) {
    return (index * 2) + 2;
  };
  
  this.insert = function(node) {
    data.push(node);
    var index = ++size - 1;
    var parentIndex = getParentIndex(index);
    while(data[parentIndex] > node) {
        swap(data, index, parentIndex);
        index = parentIndex;
        parentIndex = getParentIndex(index);
    }
  };
  
  this.get = function(index) {
    return data[index];
  };
  
  this.remove = function(index) {
    var last = data[size - 1];
    delete data[--size];
    data[index] = last;
    var leftIndex = getLeftIndex(index);
    var left = data[leftIndex];
    var rightIndex = getRightIndex(index);
    var right = data[rightIndex];
    while (last > left || last > right) {
        if (left < right) {
            swap(data, leftIndex, index);
            index = leftIndex;
        } else {
            swap(data, rightIndex, index);
            index = rightIndex;
        }
        last = data[index];
        leftIndex = getLeftIndex(index);
        left = data[leftIndex];
        rightIndex = getRightIndex(index);
        right = data[rightIndex];
    }
  };
  
  this.peak = function() { return data; }
  
};

var swap = function(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
};

var heap = new MinHeap();
heap.insert(1);
heap.insert(0);
heap.insert(12);
heap.insert(2);
heap.insert(5);
heap.insert(1);
heap.insert(24);
heap.insert(3);
heap.insert(16);
heap.insert(-1);
heap.insert(-5);

console.log(heap.peak());
