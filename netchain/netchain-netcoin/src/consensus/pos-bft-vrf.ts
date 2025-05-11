import { PoS } from './pons';
import { VRF } from '../crypto/vrf';
import { BFT } from './bft';

class PoS_BFT_VRF {
    private pos: PoS;
    private bft: BFT;
    private vrf: VRF;

    constructor() {
        this.pos = new PoS();
        this.bft = new BFT();
        this.vrf = new VRF();
    }

    public async electValidator(nodes: string[]): Promise<string> {
        const scores = await this.pos.scoreNodes(nodes);
        const selectedNode = this.bft.selectNode(scores);
        const randomValue = this.vrf.generateRandomValue(selectedNode);
        return randomValue;
    }

    public async validateElection(selectedNode: string, proof: string): Promise<boolean> {
        return this.vrf.verifyProof(selectedNode, proof);
    }
}

export default PoS_BFT_VRF;