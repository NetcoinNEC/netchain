import { EventEmitter } from 'events';

interface NetworkConfig {
    host: string;
    port: number;
    protocol: 'http' | 'https';
}

class Network extends EventEmitter {
    private config: NetworkConfig;

    constructor(config: NetworkConfig) {
        super();
        this.config = config;
    }

    public start(): void {
        this.emit('start', `Network started at ${this.config.protocol}://${this.config.host}:${this.config.port}`);
        // Additional logic to start the network can be added here
    }

    public stop(): void {
        this.emit('stop', 'Network stopped');
        // Additional logic to stop the network can be added here
    }

    public getConfig(): NetworkConfig {
        return this.config;
    }
}

export default Network;