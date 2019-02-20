/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var si = 0;
    var pi = 0;
    while (si < s.length && pi < p.length) {
        console.log('start', si, pi);
        var character = p[pi];
        if (p[pi + 1] === '*') {
            if (character === '.') {
                if (p[pi + 2] != null) {
                    var nextCharacter = p[pi + 2];
                    var tracker = si;
                    while (tracker < s.length) {
                        if (s[tracker] === nextCharacter) {
                            si = tracker;
                        }
                        tracker++;
                    }
                } else {
                    return true;
                }    
            } else {
                var buffer = 0;
                while (p[pi + 2 + buffer] === character) {
                    buffer++;
                }
                var count = 0;
                while (count < buffer && s[si] === character) {
                    count++;
                    si++;
                }
            }
            pi += 2;
        } else {
            if (character === '.') {
                if (s[si] != null) {
                    si++;
                }
            } else {
                if (s[si] === character) {
                    si++;
                } else {
                    return false;
                }
            }
            pi++;
        }
        console.log('end', si, pi);
    }
    console.log('shit', si, pi);
    return si === s.length && pi === p.length;
};

console.log('result', isMatch('aaa', 'a*a'));
