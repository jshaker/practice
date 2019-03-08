package Dijkstra;

import DataStructures.GraphNode;

public class Vertex {

    private int weight;
    private GraphNode node;

    public Vertex(int weight, GraphNode node) {
        this.weight = weight;
        this.node = node;
    }

    public GraphNode getNode() {
        return node;
    }

    public int getWeight() {
        return weight;
    }
}
