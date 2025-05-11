export interface Transaction {
    sender: string;
    receiver: string;
    amount: number;
    timestamp: number;
}

export function createTransaction(sender: string, receiver: string, amount: number): Transaction {
    return {
        sender,
        receiver,
        amount,
        timestamp: Date.now()
    };
}