package BFS;

import DataStructures.GraphNode;
import DataStructures.GraphTraversalResolver;
import DataStructures.Vertex;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;

public class Solution {
    private Queue<GraphNode> q = new LinkedList<>();
    private HashSet<GraphNode> visited = new HashSet<>();

    public void BFS(GraphNode srcNode, GraphTraversalResolver resolver) {
        addToQueue(srcNode);
        while (q.size() > 0) {
            GraphNode n = q.poll();
            if (resolver.resolve(n)) {
                System.out.println("Found node!");
                return;
            }
            ArrayList<Vertex> vertices = n.getVertices();
            for (Vertex vertex: vertices) {
                GraphNode n2 = vertex.getNode();
                if (!visited.contains(n2)) {
                    addToQueue(n2);
                }
            }
        }
    }

    private void addToQueue(GraphNode n) {
        visited.add(n);
        q.add(n);
    }
}
