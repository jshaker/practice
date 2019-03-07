package PalindromePairs;

import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<List<Integer>> palindromePairs(String[] words) {
        List<List<Integer>> answer = new ArrayList<List<Integer>>();
        for (int i = 0; i < words.length; i++) {
            for (int j = i + 1; j< words.length; j++) {
                String str1 = words[i] + words[j];
                if (isPalindrome(str1)) {
                    List<Integer> pair = new ArrayList<>();
                    pair.add(i);
                    pair.add(j);
                    answer.add(pair);
                }
                String str2 = words[j] + words[i];
                if (isPalindrome(str2)) {
                    List<Integer> pair = new ArrayList<>();
                    pair.add(j);
                    pair.add(i);
                    answer.add(pair);
                }
            }
        }
        return answer;
    }
    
    private static boolean isPalindrome(String word) {
        int length = word.length();
        for (int i = 0; i < length / 2; i++) {
            if (word.charAt(i) != word.charAt(length - 1 - i)) {
                return false;
            }
        }
        return true;
    }
}