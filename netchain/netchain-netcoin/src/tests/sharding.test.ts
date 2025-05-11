import { createShard, getShard, deleteShard } from '../sharding/engine';
import { Shard } from '../core/node';

describe('Sharding Engine', () => {
    let shard: Shard;

    beforeEach(() => {
        shard = createShard('test-shard');
    });

    afterEach(() => {
        deleteShard(shard.id);
    });

    test('should create a shard successfully', () => {
        expect(shard).toBeDefined();
        expect(shard.id).toBe('test-shard');
    });

    test('should retrieve a shard by id', () => {
        const retrievedShard = getShard(shard.id);
        expect(retrievedShard).toEqual(shard);
    });

    test('should delete a shard successfully', () => {
        deleteShard(shard.id);
        const retrievedShard = getShard(shard.id);
        expect(retrievedShard).toBeUndefined();
    });

    test('should not retrieve a non-existent shard', () => {
        const retrievedShard = getShard('non-existent-shard');
        expect(retrievedShard).toBeUndefined();
    });
});