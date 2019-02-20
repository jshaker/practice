/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    let answer;
    nums.forEach(function(num, index){
        map[target-num] = index;            
    });
    nums.forEach(function(num, index) {
        if (map[num] != null && map[num] !== index) {
            var index2 = map[num];
            if (index < index2) {
                answer = [index, index2];
                return;
            } else {
                answer = [index2, index];
                return;
            }
        }
    });
    if (answer) {
        return answer;
    }
    throw new Error('Could not solve two sums');
};
