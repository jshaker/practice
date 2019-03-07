package RegularExpressionMatching;

class Solution {
    public boolean isMatch(String s, String p) {
        if (p.length() == 0) {
            return s.length() == 0;
        }
        
        if (p.length() == 1) {
            if (s.length() < 1) { return false; }
            else if (isntSameFirstCharNorWildcard(s, p)) { return false; }
            else { return isMatch(s.substring(1), p.substring(1)); }
        } else if (p.charAt(1) != '*') {
            if (s.length() < 1) { return false; }
            if (isntSameFirstCharNorWildcard(s, p)) { return false; }
            else { return isMatch(s.substring(1), p.substring(1)); }
        } else {
            if (isMatch(s, p.substring(2))) {
                return true;
            }
            int i = 0;
            while (i < s.length() && (s.charAt(i) == p.charAt(0) || p.charAt(0) == '.')) {
                if (isMatch(s.substring(i + 1), p.substring(2))) {
                    return true;
                }
                i++;
            }
            return false;
        }    
    }

    private boolean isntSameFirstCharNorWildcard(String s, String p) {
        return s.charAt(0) != p.charAt(0) && p.charAt(0) != '.';
    }
}