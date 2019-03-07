package Dijkstra;

public class Main {

    public static void main(String[] args) {
        Node n1 = new Node("1");
        Node n2 = new Node("2");
        Node n3 = new Node("3");
        Node n4 = new Node("4");
        Node n5 = new Node("5");
        Node n6 = new Node("6");

        n1.addBidirectionalVertex(7, n2);
        n1.addBidirectionalVertex(9, n3);
        n1.addBidirectionalVertex(14, n6);

        n2.addBidirectionalVertex(10, n3);
        n2.addBidirectionalVertex(15, n4);

        n3.addBidirectionalVertex(2, n6);
        n3.addBidirectionalVertex(11, n4);

        n4.addBidirectionalVertex(6, n5);

        n5.addBidirectionalVertex(9, n6);

        int shortestDistance = Solution.solve(n1, n5);

        System.out.println("Shortest distance: " + shortestDistance);
    }
}
