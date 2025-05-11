import { createShard, sendCrossShardMessage } from '../core/utils';
import { Shard } from '../core/node';

class ShardEngine {
    private shards: Shard[];

    constructor() {
        this.shards = [];
    }

    public createShard(): Shard {
        const newShard = createShard();
        this.shards.push(newShard);
        return newShard;
    }

    public sendMessageBetweenShards(fromShardId: string, toShardId: string, message: any): void {
        const fromShard = this.shards.find(shard => shard.id === fromShardId);
        const toShard = this.shards.find(shard => shard.id === toShardId);

        if (!fromShard || !toShard) {
            throw new Error('One or both shards not found');
        }

        const encryptedMessage = this.encryptMessage(message);
        sendCrossShardMessage(fromShard, toShard, encryptedMessage);
    }

    private encryptMessage(message: any): string {
        // Implement encryption logic here
        return JSON.stringify(message); // Placeholder for actual encryption
    }
}

export default new ShardEngine();