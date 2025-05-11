import { Governance } from '../governance/index';

describe('Governance Module', () => {
    let governance: Governance;

    beforeEach(() => {
        governance = new Governance();
    });

    test('should initialize with default values', () => {
        expect(governance).toBeDefined();
        expect(governance.votes).toEqual([]);
        expect(governance.reputation).toEqual({});
    });

    test('should allow adding a vote', () => {
        governance.addVote('user1', 'proposal1');
        expect(governance.votes).toContainEqual({ userId: 'user1', proposalId: 'proposal1' });
    });

    test('should calculate reputation correctly', () => {
        governance.addVote('user1', 'proposal1');
        governance.addVote('user2', 'proposal1');
        governance.calculateReputation();
        expect(governance.reputation['user1']).toBeGreaterThan(0);
        expect(governance.reputation['user2']).toBeGreaterThan(0);
    });

    test('should return correct voting results', () => {
        governance.addVote('user1', 'proposal1');
        governance.addVote('user2', 'proposal1');
        const results = governance.getVotingResults('proposal1');
        expect(results).toEqual({ proposalId: 'proposal1', votes: 2 });
    });
});