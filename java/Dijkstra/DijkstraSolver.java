package Dijkstra;

import java.util.*;

public class DijkstraSolver {

    public static int solve(Node srcNode, Node destinationNode) {
        Map<Node, Integer> weightMap = new HashMap<Node, Integer>();
        PriorityQueue<Node> q = new PriorityQueue<Node>(new NodeComparator(weightMap));
        HashSet<Node> visited = new HashSet<Node>();
        q.add(srcNode);
        while (q.size() > 0) {
            Node n = q.poll();
            visited.add(n);
            if (!weightMap.containsKey(n)) {
                weightMap.put(n, 0);
            }
            int baseWeight = weightMap.get(n);
            ArrayList<Vertex> vertices = n.getVertices();
            for (Vertex v : vertices) {
                Node n2 = v.getNode();
                if (visited.contains(n2)) { continue; }
                int nodeWeight = v.getWeight();
                int calculatedWeight = baseWeight + nodeWeight;
                if (!weightMap.containsKey(n2)) {
                    weightMap.put(n2, calculatedWeight);
                } else {
                    int existingWeight = weightMap.get(n2);
                    if (calculatedWeight < existingWeight) {
                        weightMap.put(n2, calculatedWeight);
                    }
                }
                if (q.contains(n2)) {
                    q.remove(n2);
                }
                q.add(n2);
            }
        }
        return weightMap.get(destinationNode);
    }
}

class NodeComparator implements Comparator<Node>{

    Map<Node, Integer> weightMap;

    public NodeComparator(Map<Node, Integer> weightMap) {
        this.weightMap = weightMap;
    }

    public int compare(Node n1, Node n2) {
        Integer weight1 = null;
        if (weightMap.containsKey(n1)) {
            weight1 = weightMap.get(n1);
        }
        Integer weight2 = null;
        if (weightMap.containsKey(n2)) {
            weight2 = weightMap.get(n2);
        }
        if (weight2 == null) {
            return -1;
        }
        if (weight1 == null) {
            return 1;
        }
        return weight1 - weight2;
    }
}