var isValid = function(s) {
    var stack = [];
    var matches = {
        '{': '}',
        '[': ']',
        '(': ')',
    };
    var open = Object.keys(matches);
    var close = Object.values(matches);
    for (var i = 0; i < s.length; i++) {
        if (open.indexOf(s[i]) >= 0) {
            stack.push(s[i]);
        } else {
            var value = stack.pop();
            if (matches[value] !== s[i]) {
                return false;
            }
        }
    }
    return !stack.length;
};

