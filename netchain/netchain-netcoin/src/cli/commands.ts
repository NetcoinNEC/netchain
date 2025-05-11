import { Command } from 'commander';
import { startServer } from '../api/server';
import { runConsensus } from '../consensus/pons';
import { executeTransaction } from '../tx_engine/transaction';

const program = new Command();

program
  .name('netchain-cli')
  .description('CLI for interacting with the Netchain & Netcoin system')
  .version('1.0.0');

program
  .command('start')
  .description('Start the Netchain server')
  .action(() => {
    startServer();
  });

program
  .command('consensus')
  .description('Run the consensus mechanism')
  .action(() => {
    runConsensus();
  });

program
  .command('transaction <amount> <to>')
  .description('Execute a transaction')
  .action((amount, to) => {
    executeTransaction(amount, to);
  });

program.parse(process.argv);