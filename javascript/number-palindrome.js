/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x <= 0) { return false; }
    let size = getNumberSize(x);
    while (size > 1) {
        const highExtraction = extractDigit(x, size);
        x = highExtraction.remainder;
        const lowExtraction = extractDigit(x, 0);
        
    }
};

function extractOuterDigit(num, index) {
    const digit = (num / Math.pow(10, index)) % 10;
    const value = digit * Math.pow(10, index);f
    return { digit, remainder: num - value };
}

function getNumberSize(num) {
    let highBound = 1000000000;
    while (num / highBound <= 0) {
        highBound = highBound / 10;
    }
    return Math.sqrt(highBound, 10);
}
