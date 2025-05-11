import { VotingSystem } from './votingSystem';
import { ReputationSystem } from './reputationSystem';

export class Governance {
    private votingSystem: VotingSystem;
    private reputationSystem: ReputationSystem;

    constructor() {
        this.votingSystem = new VotingSystem();
        this.reputationSystem = new ReputationSystem();
    }

    public initiateVote(proposal: string): void {
        this.votingSystem.startVote(proposal);
    }

    public castVote(voterId: string, proposalId: string, vote: boolean): void {
        this.votingSystem.recordVote(voterId, proposalId, vote);
    }

    public getVotingResults(proposalId: string): any {
        return this.votingSystem.getResults(proposalId);
    }

    public updateReputation(userId: string, change: number): void {
        this.reputationSystem.updateReputation(userId, change);
    }

    public getReputation(userId: string): number {
        return this.reputationSystem.getReputation(userId);
    }
}