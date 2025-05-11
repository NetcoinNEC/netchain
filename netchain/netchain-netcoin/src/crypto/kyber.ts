import { KeyPair, PublicKey, SecretKey } from 'crypto-kyber';

export class Kyber {
    private keyPair: KeyPair;

    constructor() {
        this.keyPair = this.generateKeyPair();
    }

    private generateKeyPair(): KeyPair {
        return KeyPair.generate();
    }

    public getPublicKey(): PublicKey {
        return this.keyPair.publicKey;
    }

    public getSecretKey(): SecretKey {
        return this.keyPair.secretKey;
    }

    public encrypt(message: string): string {
        const publicKey = this.getPublicKey();
        return publicKey.encrypt(message);
    }

    public decrypt(ciphertext: string): string {
        const secretKey = this.getSecretKey();
        return secretKey.decrypt(ciphertext);
    }
}