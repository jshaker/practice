package DFS;

import DataStructures.GraphNode;
import DataStructures.Vertex;

import java.util.ArrayList;
import java.util.HashSet;

public class Solution {
    private HashSet<GraphNode> visited = new HashSet<>();

    public boolean DFS(GraphNode srcNode, GraphNode destNode) {
        if (srcNode == destNode) {
            System.out.println("Found node!");
            return true;
        }
        ArrayList<Vertex> vertices = srcNode.getVertices();
        for (Vertex vertex: vertices) {
            GraphNode n = vertex.getNode();
            if (!visited.contains(n)) {
                visited.add(n);
                if (DFS(n, destNode)) { return true; }
            }
        }
        return false;
    }
}
