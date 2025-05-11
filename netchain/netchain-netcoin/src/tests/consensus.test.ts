import { describe, it, expect } from 'jest';
import { measureBandwidth, measureLatency, scoreNode, selectValidator } from '../consensus/pons';

describe('Consensus Mechanism Tests', () => {
    it('should measure bandwidth correctly', () => {
        const bandwidth = measureBandwidth();
        expect(bandwidth).toBeGreaterThan(0);
    });

    it('should measure latency correctly', () => {
        const latency = measureLatency();
        expect(latency).toBeLessThan(100); // Assuming latency should be less than 100ms
    });

    it('should score nodes correctly', () => {
        const nodeScores = scoreNode([{ id: 'node1', performance: 90 }, { id: 'node2', performance: 80 }]);
        expect(nodeScores).toEqual([{ id: 'node1', score: expect.any(Number) }, { id: 'node2', score: expect.any(Number) }]);
    });

    it('should select a validator from scored nodes', () => {
        const nodes = [{ id: 'node1', score: 90 }, { id: 'node2', score: 80 }];
        const validator = selectValidator(nodes);
        expect(nodes.map(node => node.id)).toContain(validator.id);
    });
});