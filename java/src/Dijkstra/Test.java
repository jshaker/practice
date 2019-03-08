package Dijkstra;

import DataStructures.GraphNode;

public class Test {

    public static void main(String[] args) {
        GraphNode n1 = new GraphNode("1");
        GraphNode n2 = new GraphNode("2");
        GraphNode n3 = new GraphNode("3");
        GraphNode n4 = new GraphNode("4");
        GraphNode n5 = new GraphNode("5");
        GraphNode n6 = new GraphNode("6");

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
