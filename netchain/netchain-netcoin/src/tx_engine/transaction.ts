import { v4 as uuidv4 } from 'uuid';

export interface Transaction {
    id: string;
    sender: string;
    recipient: string;
    amount: number;
    timestamp: number;
    signature?: string;
}

export class TransactionEngine {
    private transactions: Transaction[] = [];

    public createTransaction(sender: string, recipient: string, amount: number): Transaction {
        const transaction: Transaction = {
            id: uuidv4(),
            sender,
            recipient,
            amount,
            timestamp: Date.now(),
        };
        this.transactions.push(transaction);
        return transaction;
    }

    public getTransactions(): Transaction[] {
        return this.transactions;
    }

    public validateTransaction(transaction: Transaction): boolean {
        // Implement validation logic (e.g., check signature, amount, etc.)
        return true; // Placeholder for actual validation logic
    }
}