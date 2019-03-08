package Dijkstra;

import DataStructures.GraphNode;
import DataStructures.Vertex;

import java.util.*;

public class Solution {

    public static int solve(GraphNode srcNode, GraphNode destinationNode) {
        Map<GraphNode, Integer> weightMap = new HashMap<GraphNode, Integer>();
        PriorityQueue<GraphNode> q = new PriorityQueue<GraphNode>(new NodeComparator(weightMap));
        HashSet<GraphNode> visited = new HashSet<GraphNode>();
        q.add(srcNode);
        while (q.size() > 0) {
            GraphNode n = q.poll();
            visited.add(n);
            if (!weightMap.containsKey(n)) {
                weightMap.put(n, 0);
            }
            int baseWeight = weightMap.get(n);
            ArrayList<Vertex> vertices = n.getVertices();
            for (Vertex v : vertices) {
                GraphNode n2 = v.getNode();
                if (visited.contains(n2)) { continue; }
                replaceWeightIfSmaller(weightMap, v, baseWeight);
                addToQueue(q, n2);
            }
        }
        return weightMap.get(destinationNode);
    }

    private static void addToQueue(PriorityQueue<GraphNode> q, GraphNode n) {
        if (q.contains(n)) {
            q.remove(n);
        }
        q.add(n);
    }

    private static void replaceWeightIfSmaller(Map<GraphNode, Integer> weightMap, Vertex v, int baseWeight) {
        GraphNode n = v.getNode();
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

class NodeComparator implements Comparator<GraphNode>{

    Map<GraphNode, Integer> weightMap;

    public NodeComparator(Map<GraphNode, Integer> weightMap) {
        this.weightMap = weightMap;
    }

    public int compare(GraphNode n1, GraphNode n2) {
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

    private Integer getWeight(GraphNode n) {
        if (weightMap.containsKey(n)) {
            return weightMap.get(n);
        }
        return null;
    }
}