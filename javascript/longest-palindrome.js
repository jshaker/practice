/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var palindrome = [0,-1];
    const mem = {};
    for (var i = 0; i < s.length ; i = i + 0.5) {
        var start = Math.floor(i);
        var end = Math.ceil(i);
        while(true) {
            if (start < 0 || end >= s.length) {
                break;
            }
            if (isPalindrome(s,start,end, mem)) {
                if ((end - start) > (palindrome[1] - palindrome[0])) {
                    palindrome = [start, end];
                }
                
            } else {
                break;
            }
            start--;
            end++;
        }
    }
    return s.substring(palindrome[0], palindrome[1] + 1);
};

var isPalindrome = function(s, start, end, mem) {
    var key = s.substring(start, end + 1);
    if (mem[key] != null) { return mem[key]; }
    if (start >= end || start < 0 || end >= s.length ) { return true; }
    if(s[start] === s[end]) {
        mem[key] = isPalindrome(s, start + 1, end - 1, mem);
    } else {
        mem[key] = false;
    }
    return mem[key];
};

console.log('result', longestPalindrome("babadada"));
