package Dijkstra;

public class Vertex {

    private int weight;
    private Node node;

    public Vertex(int weight, Node node) {
        this.weight = weight;
        this.node = node;
    }

    public Node getNode() {
        return node;
    }

    public int getWeight() {
        return weight;
    }
}
