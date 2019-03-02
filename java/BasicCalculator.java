class Solution {
    
    public int calculate(String s) {
        return calculate(s, 1);
    }
    
    public int calculate(String s, int multiplier2) {
        s = s.trim();
        int length = s.length();
        if (length == 0) { return 0; }
        int index = 0;
        char c = s.charAt(index);
        int firstNumber = 0;
        int multiplier = 1;
        if (c == '(') {
            int endIndex = findBalancingParenthesis(s, index + 1);
            //recursive call for the parenthesis
            firstNumber = calculate(s.substring(index + 1, endIndex));
            index = endIndex + 1;
        } else {
            while (Character.isDigit(c)) {
                firstNumber = firstNumber * 10 + Character.getNumericValue(c);
                if (index >= length - 1) { break; } 
                c = s.charAt(++index);
            }
        }
        if (index == length - 1) {
            return firstNumber * multiplier2;
        }
        // parsing operator
        while (index < length) {
            c = s.charAt(index++);
            if (c == '+') {
                break;
            }
            if (c == '-') {
                multiplier = -1;
                break;
            }
        }
        int secondNumber = calculate(s.substring(index, length), multiplier);
        return firstNumber * multiplier2 + secondNumber;
    }
    
    public int findBalancingParenthesis(String s, int startIndex) {
        int leftCounter = 0;
        for (int i = startIndex; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == '(') { leftCounter++; }
            if (c == ')') {
                if (leftCounter > 0) {
                    leftCounter--;
                } else {
                    return i;
                }
            }
        }
        return -1;
    }
}