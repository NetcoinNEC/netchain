import { createTransaction } from '../tx_engine/transaction';

const tx = createTransaction('user1', 'user2', 10);
console.log(tx);