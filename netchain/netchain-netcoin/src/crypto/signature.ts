import { createSign, createVerify } from 'crypto';

const ALGORITHM = 'SHA256';
const PRIVATE_KEY = 'your-private-key'; // Replace with your actual private key
const PUBLIC_KEY = 'your-public-key'; // Replace with your actual public key

export function signMessage(message: string): string {
    const sign = createSign(ALGORITHM);
    sign.update(message);
    sign.end();
    return sign.sign(PRIVATE_KEY, 'hex');
}

export function verifySignature(message: string, signature: string): boolean {
    const verify = createVerify(ALGORITHM);
    verify.update(message);
    verify.end();
    return verify.verify(PUBLIC_KEY, signature, 'hex');
}