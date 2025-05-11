import { generateKeyPairSync, sign, verify } from 'crypto';
import { createHash } from 'crypto';
import { describe, it, expect } from '@jest/globals';
import { generateKeyPair, signMessage, verifyMessage } from '../crypto';

describe('Crypto Module', () => {
    let privateKey: string;
    let publicKey: string;

    beforeAll(() => {
        const { publicKey: pubKey, privateKey: privKey } = generateKeyPairSync('rsa', {
            modulusLength: 2048,
        });
        publicKey = pubKey.export({ type: 'spki', format: 'pem' });
        privateKey = privKey.export({ type: 'pkcs8', format: 'pem' });
    });

    it('should generate a key pair', () => {
        expect(publicKey).toBeDefined();
        expect(privateKey).toBeDefined();
    });

    it('should sign a message', () => {
        const message = 'Hello, Netchain!';
        const signature = sign('sha256', Buffer.from(message), {
            key: privateKey,
            padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
        });

        expect(signature).toBeDefined();
    });

    it('should verify a signed message', () => {
        const message = 'Hello, Netchain!';
        const signature = sign('sha256', Buffer.from(message), {
            key: privateKey,
            padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
        });

        const isVerified = verify(
            'sha256',
            Buffer.from(message),
            {
                key: publicKey,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
            },
            signature
        );

        expect(isVerified).toBe(true);
    });

    it('should hash a message', () => {
        const message = 'Hello, Netchain!';
        const hash = createHash('sha256').update(message).digest('hex');

        expect(hash).toBeDefined();
    });
});