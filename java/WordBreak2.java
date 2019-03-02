class Solution {
    
    Map<String, List<String>> map = new HashMap();
     
    public List<String> wordBreak(String s, List<String> wordDict) {
        if (map.containsKey(s)) {
            return map.get(s);
        }
        List<String> answer = new ArrayList<String>();
        if (s.length() == 0) {
            answer.add("");
            return answer;
        }
        for (int i = 0; i < s.length(); i++) {
            String substr = s.substring(0, i + 1);
            if (wordDict.contains(substr)) {
                String rest = s.substring(i + 1, s.length());
                List<String> restAnswers = wordBreak(rest, wordDict);
                for (int j = 0; j < restAnswers.size(); j++) {
                    String restAnswer = restAnswers.get(j);
                    if (restAnswer.length() == 0) {
                        answer.add(substr);
                    } else {                    
                        answer.add(substr + " " + restAnswer);
                    }
                }
            }
        }
        map.put(s, answer);
        return answer;
    }
    
}