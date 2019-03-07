package Dijkstra;

import java.util.ArrayList;

public class Node {
    private ArrayList<Vertex> vertices;
    private String id;

    public Node(String id) {
        this.id = id;
        vertices = new ArrayList<Vertex>();
    }

    public ArrayList<Vertex> getVertices() {
        return vertices;
    }

    public String getId() {
        return id;
    }

    public void addVertex(int weight, Node node) {
        Vertex v = new Vertex(weight, node);
        addVertex(v);
    }

    public void addVertex(Vertex v) {
        vertices.add(v);
    }

    public void addBidirectionalVertex(int weight, Node node) {
        this.addVertex(weight, node);
        node.addVertex(weight, this);
    }

}
