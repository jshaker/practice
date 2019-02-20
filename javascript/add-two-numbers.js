function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var head = new ListNode();
    var tracker = head;
    var carryOver = 0;
    while (l1 || l2 || carryOver) {
        tracker.next = new ListNode();
        tracker = tracker.next;
        var value1 = 0;
        if (l1 && l1.val != null) { 
            value1 = l1.val;
            l1 = l1.next;
        }
        var value2 = 0;
        if (l2 && l2.val != null) { 
            value2 = l2.val;
            l2 = l2.next;
            
        }
        var sum = value1 + value2 + carryOver;
        var value = sum >= 10 ? sum % 10 : sum;
        carryOver = Math.floor(sum / 10);
        tracker.val = value;
    }
    return head.next;    
};

var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log('answer', addTwoNumbers(l1,l2));
