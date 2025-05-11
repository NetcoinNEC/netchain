import { Command } from 'commander';
import { startCLI } from './main';

const program = new Command();

program
  .name('netchain-cli')
  .description('Command-line interface for Netchain & Netcoin')
  .version('1.0.0');

program
  .command('start')
  .description('Start the Netchain node')
  .action(() => {
    startCLI();
  });

// Add more commands as needed

program.parse(process.argv);