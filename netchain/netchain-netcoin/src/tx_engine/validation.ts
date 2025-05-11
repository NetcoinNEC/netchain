import { Transaction } from './transaction';
import { Pool } from './pool';

export function validateTransaction(transaction: Transaction, pool: Pool): boolean {
    // Check if the transaction is valid
    if (!transaction || !transaction.id || !transaction.amount) {
        return false;
    }

    // Ensure the transaction does not already exist in the pool
    if (pool.hasTransaction(transaction.id)) {
        return false;
    }

    // Additional validation rules can be added here
    // For example, checking the transaction signature, sender balance, etc.

    return true;
}

export function validateTransactionBatch(transactions: Transaction[], pool: Pool): boolean {
    for (const transaction of transactions) {
        if (!validateTransaction(transaction, pool)) {
            return false;
        }
    }
    return true;
}