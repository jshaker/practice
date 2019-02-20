/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var MAX = 2147483647;
    var largest = Math.pow(10, String(Math.abs(x)).length - 1);
    var answer = 0;
    for (var i = largest; i >= 1; i = i / 10) {
        answer += Math.floor(Math.abs((x % (i * 10)) / i)) * (largest / i);
    }
    if (Math.abs(answer) > MAX) {
        return 0;
    }
    if (x < 0) {
        return -answer;
    } else {
        return answer;
    }
};

console.log('answer', reverse(1534236469));
