import { Transaction } from './transaction';

class TransactionPool {
    private transactions: Transaction[];

    constructor() {
        this.transactions = [];
    }

    public addTransaction(transaction: Transaction): void {
        this.transactions.push(transaction);
    }

    public getTransactions(): Transaction[] {
        return this.transactions;
    }

    public clear(): void {
        this.transactions = [];
    }

    public hasTransaction(transactionId: string): boolean {
        return this.transactions.some(tx => tx.id === transactionId);
    }
}

export default TransactionPool;