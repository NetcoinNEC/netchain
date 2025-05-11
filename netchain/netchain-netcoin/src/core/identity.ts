import { v4 as uuidv4 } from 'uuid';

export interface Identity {
    id: string;
    publicKey: string;
    privateKey: string;
    createdAt: Date;
}

export class IdentityManager {
    private identities: Map<string, Identity> = new Map();

    createIdentity(publicKey: string, privateKey: string): Identity {
        const id = uuidv4();
        const identity: Identity = {
            id,
            publicKey,
            privateKey,
            createdAt: new Date(),
        };
        this.identities.set(id, identity);
        return identity;
    }

    getIdentity(id: string): Identity | undefined {
        return this.identities.get(id);
    }

    deleteIdentity(id: string): boolean {
        return this.identities.delete(id);
    }

    listIdentities(): Identity[] {
        return Array.from(this.identities.values());
    }
}