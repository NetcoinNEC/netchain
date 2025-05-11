import { Node } from './node';

export class Network {
    nodes: Node[];

    constructor() {
        this.nodes = [];
    }

    addNode(node: Node) {
        this.nodes.push(node);
    }

    getFastestNode(): Node | null {
        return this.nodes.reduce((prev, curr) => (curr.speed > prev.speed ? curr : prev), this.nodes[0]);
    }
}