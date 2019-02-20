/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var maxIndex = findMax(numbers, target, 0, numbers.length - 1);
    console.log('maxIndex', maxIndex);
    var map = {};
    let answer;
    for (var index = 0; index <= maxIndex; index++) {
        var num = numbers[index];
        map[target-num] = index;
    }
    for (var index = 0; index <= maxIndex; index++) {
        var num = numbers[index];
        if (map[num] != null && map[num] !== index) {   
            var index2 = map[num];
            if (index < index2) {
                return [index+1, index2+1];
            } else {
                return [index2+1, index+1];
            }
        }
    }
    throw new Error('No twos sum');
};

var findMax = function(numbers, target, min, max) {
    if (target >= numbers[max]) { return max; }
    if (max - min <= 1) {
        return max;
    }
    var mid = max - (Math.floor((max - min) / 2));
    if (numbers[mid] === target) {
        return mid;
    } else if (numbers[mid] > target) {
        return findMax(numbers, target, min, mid);
    } else {
        return findMax(numbers, target, mid, max);
    }
};

console.log(twoSum([0,0,3,4], 0));

