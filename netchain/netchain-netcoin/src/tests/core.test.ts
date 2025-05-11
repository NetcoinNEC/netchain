import { Node } from '../core/node';
import { Identity } from '../core/identity';
import { Network } from '../core/network';
import { Utils } from '../core/utils';

describe('Core Module Tests', () => {
    let node: Node;
    let identity: Identity;
    let network: Network;

    beforeEach(() => {
        node = new Node('test-node');
        identity = new Identity('test-identity');
        network = new Network();
    });

    test('Node should initialize with correct name', () => {
        expect(node.name).toBe('test-node');
    });

    test('Identity should initialize with correct ID', () => {
        expect(identity.id).toBe('test-identity');
    });

    test('Network should start with no nodes', () => {
        expect(network.getNodes()).toHaveLength(0);
    });

    test('Node should be able to join the network', () => {
        network.addNode(node);
        expect(network.getNodes()).toContain(node);
    });

    test('Utils should generate a valid UUID', () => {
        const uuid = Utils.generateUUID();
        expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
    });
});