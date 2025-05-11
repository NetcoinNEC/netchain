import { Circuit, Groth16 } from 'snarkjs';
import { BigNumber } from 'bignumber.js';

export class Snark {
    private circuit: Circuit;

    constructor(circuitDefinition: string) {
        this.circuit = new Circuit(circuitDefinition);
    }

    async generateProof(inputs: any): Promise<any> {
        const { proof, publicSignals } = await Groth16.fullProve(this.circuit, inputs);
        return { proof, publicSignals };
    }

    async verifyProof(proof: any, publicSignals: any): Promise<boolean> {
        const isValid = await Groth16.verify(this.circuit.verificationKey, publicSignals, proof);
        return isValid;
    }

    static async setup(): Promise<any> {
        const { vk, circuit } = await Groth16.setup();
        return { vk, circuit };
    }
}