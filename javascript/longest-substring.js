/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var longest = 0;
    var i = 0;
    var j = 0;
    var map = {};
    while(i < s.length && j < s.length) {
        if (!map[s[j]]) {
            map[s[j++]] = true;
        } else {
            map[s[i++]] = false;
        }
        var size = j - i;
        if (size > longest) { longest = size; }
    }
    return longest;
};

