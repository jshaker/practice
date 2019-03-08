package ReverseNodesInKGroup;

import DataStructures.ListNode;

class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        if (!hasNNextNodes(head, k -1)) {
            return head;
        }
        ListNode actualHead = skipNNodesOrLastOne(head, k - 1);
        reverseNextN(head, k);
        if (head.next != null) {
            head.next = reverseKGroup(head.next, k);
        }
        return actualHead;
    }  
    
    public boolean hasNNextNodes(ListNode head, int n) {
        return skipNNodes(head, n) != null;
    }
    
    public void reverseNextN(ListNode head, int n) {
        if (n <= 0 || head == null) { return; }
        ListNode[] tempArray = new ListNode[n];
        while (n > 0 && head != null) {
            tempArray[--n] = head;
            head = head.next;
        }
        ListNode nextNode = tempArray[n].next;
        while (n < tempArray.length) {
            if (n < tempArray.length - 1) {
                tempArray[n].next = tempArray[n + 1];
            } else {
                tempArray[n].next = nextNode;
            }
            n++;
        }
    }
    
    public ListNode skipNNodes(ListNode head, int n) {
        while (n > 0 && head != null) {
            head = head.next;
            n--;
        }
        return head;
    }
    
    public ListNode skipNNodesOrLastOne(ListNode head, int n) {
        while (n > 0 && head != null && head.next != null) {
            head = head.next;
            n--;
        }
        return head;
    }
}