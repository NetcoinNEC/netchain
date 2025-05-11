import { Node } from '../core/node';
import { Network } from '../core/network';
import { measureBandwidth, measureLatency } from '../utils/networkUtils';

interface Validator {
    id: string;
    score: number;
}

class PoSConsensus {
    private validators: Validator[] = [];
    private network: Network;

    constructor(network: Network) {
        this.network = network;
    }

    public async selectValidators(): Promise<Validator[]> {
        await this.evaluateNodeScores();
        this.validators.sort((a, b) => b.score - a.score);
        return this.validators.slice(0, this.getValidatorCount());
    }

    private async evaluateNodeScores(): Promise<void> {
        const nodes = this.network.getNodes();
        for (const node of nodes) {
            const bandwidth = await measureBandwidth(node);
            const latency = await measureLatency(node);
            const score = this.calculateScore(bandwidth, latency);
            this.validators.push({ id: node.id, score });
        }
    }

    private calculateScore(bandwidth: number, latency: number): number {
        return bandwidth / (latency + 1); // Simple scoring function
    }

    private getValidatorCount(): number {
        return Math.max(1, Math.floor(this.network.getNodes().length * 0.2)); // 20% of nodes as validators
    }
}

export default PoSConsensus;