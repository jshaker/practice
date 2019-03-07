package Dijkstra;

import java.util.*;

public class Solution {

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
                replaceWeightIfSmaller(weightMap, v, baseWeight);
                addToQueue(q, n2);
            }
        }
        return weightMap.get(destinationNode);
    }

    private static void addToQueue(PriorityQueue<Node> q, Node n) {
        if (q.contains(n)) {
            q.remove(n);
        }
        q.add(n);
    }

    private static void replaceWeightIfSmaller(Map<Node, Integer> weightMap, Vertex v, int baseWeight) {
        Node n = v.getNode();
        int nodeWeight = v.getWeight();
        int calculatedWeight = baseWeight + nodeWeight;
        if (!weightMap.containsKey(n)) {
            weightMap.put(n, calculatedWeight);
        } else {
            int existingWeight = weightMap.get(n);
            if (calculatedWeight < existingWeight) {
                weightMap.put(n, calculatedWeight);
            }
        }
    }
}

class NodeComparator implements Comparator<Node>{

    Map<Node, Integer> weightMap;

    public NodeComparator(Map<Node, Integer> weightMap) {
        this.weightMap = weightMap;
    }

    public int compare(Node n1, Node n2) {
        Integer weight1 = getWeight(n1);
        Integer weight2 = getWeight(n2);
        if (weight2 == null) {
            return -1;
        }
        if (weight1 == null) {
            return 1;
        }
        return weight1 - weight2;
    }

    private Integer getWeight(Node n) {
        if (weightMap.containsKey(n)) {
            return weightMap.get(n);
        }
        return null;
    }
}