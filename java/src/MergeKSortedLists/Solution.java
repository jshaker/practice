package MergeKSortedLists;

import DataStructures.ListNode;

class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        ListNode head = null;
        ListNode current = null;
        while (true) {
            Integer minimum = null;
            Integer minimumIndex = null;
            for (int i = 0; i < lists.length; i++) {
                if (lists[i] == null) { continue; }
                if (minimum == null || lists[i].val < minimum) {
                    minimum = lists[i].val;
                    minimumIndex = i;
                }
            }
            if (minimum == null) { break; }
            if (head == null) {
                head = new ListNode(minimum);
                current = head;
            } else {
                current.next = new ListNode(minimum);
                current = current.next;
            }
            lists[minimumIndex] = lists[minimumIndex].next;
        }
        return head;
    }
}