public class LRUCache {
    
    private int capacity;
    private Node head;
    private Node tail;

    private Dictionary<int, Node> map = new Dictionary<int, Node>();

    public LRUCache(int capacity) {
        this.capacity = capacity;
    }
    
    public int Get(int key) {
        if (!map.ContainsKey(key)) { return -1; }
        Node n = map[key];
        if (n == this.head) { return n.val; }
        this.Remove(n);
        this.Add(n);
        return n.val;
    }
    
    public void Put(int key, int value) {
        Node n = new Node(key, value);
        if (map.ContainsKey(key)) { 
            this.Remove(map[key]);
        } else if (this.map.Count() == this.capacity) {
            this.map.Remove(this.tail.key);
            this.Remove(this.tail);
        }
        this.Add(n);
        map[key] = n;
    }    
    
    private void Remove(Node n) {
        if (n != this.head) {
            n.prev.next = n.next;                
        } else {
            this.head = n.next;
        }
        if (n != this.tail) {
            n.next.prev = n.prev;
        } else {
            this.tail = n.prev;            
        }
    }
    
    private void Add(Node n) {
        n.next = this.head;
        n.prev = null;
        if (this.head != null) {
            this.head.prev = n;
        }
        this.head = n;
        if (this.tail == null) {
            this.tail = n;
        }
    }
    
    class Node {
        public Node next { get; set; }
        public Node prev { get; set; }
        public int val { get; set; }
        public int key { get; set; }
        
        public Node(int key, int val) {
            this.key = key;
            this.val = val;
        }
    }
    
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.Get(key);
 * obj.Put(key,value);
 */
