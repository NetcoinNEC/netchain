export function generateUniqueId(): string {
    return 'id-' + Math.random().toString(36).substr(2, 9);
}

export function isValidAddress(address: string): boolean {
    const addressPattern = /^[a-zA-Z0-9]{34}$/; // Example pattern for a valid address
    return addressPattern.test(address);
}

export function calculateHash(data: string): string {
    const crypto = require('crypto');
    return crypto.createHash('sha256').update(data).digest('hex');
}

export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}