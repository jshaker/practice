package TrappingRainWater;

class Solution {
    public int trap(int[] heights) {
        int volume = 0;
        int i = 0;
        while (i < heights.length) {
            if (heights[i] == 0) {
                i++;
                continue;
            }
            int j = findNextWall(heights, i);
            if (j == -1) {
                i++;
                continue;
            }
            volume += calculateVolume(heights, i, j);
            i = j;
        }
        return volume;
    }
    
    private int findNextWall(int[] heights, int index) {
        int height = heights[index];
        int max = 0;
        int maxIndex = -1;
        for (int i = index + 1; i < heights.length; i++) {
            if (heights[i] >= height) {
                return i;
            }
            if (heights[i] > max) {
                max = heights[i];
                maxIndex = i;
            }
        }
        return maxIndex;
    }
    
    private int calculateVolume(int[] heights, int start, int end) {
        int volume = 0;
        int height = Math.min(heights[start], heights[end]);
        for (int i = start + 1; i < end; i++) {
            volume += height - heights[i];
        }
        return volume;
    }
}