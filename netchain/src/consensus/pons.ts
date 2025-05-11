import { Network } from '../core/network';

export function selectLeader(network: Network) {
    return network.getFastestNode();
}