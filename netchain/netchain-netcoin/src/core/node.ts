export interface Node {
    id: string;
    address: string;
    publicKey: string;
    privateKey: string;
    isValidator: boolean;
    score: number;
    bandwidth: number;
    latency: number;
}

export class NodeImplementation implements Node {
    id: string;
    address: string;
    publicKey: string;
    privateKey: string;
    isValidator: boolean;
    score: number;
    bandwidth: number;
    latency: number;

    constructor(id: string, address: string, publicKey: string, privateKey: string) {
        this.id = id;
        this.address = address;
        this.publicKey = publicKey;
        this.privateKey = privateKey;
        this.isValidator = false;
        this.score = 0;
        this.bandwidth = 0;
        this.latency = 0;
    }

    updateScore(newScore: number): void {
        this.score = newScore;
    }

    setValidatorStatus(status: boolean): void {
        this.isValidator = status;
    }

    updateNetworkMetrics(bandwidth: number, latency: number): void {
        this.bandwidth = bandwidth;
        this.latency = latency;
    }
}