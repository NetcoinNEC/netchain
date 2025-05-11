import { Command } from 'commander';
import { startServer } from '../api/server';
import { executeCommand } from './commands';

const program = new Command();

program
  .name('netchain-cli')
  .description('Command-line interface for Netchain & Netcoin')
  .version('1.0.0');

program
  .command('start')
  .description('Start the Netchain server')
  .action(async () => {
    await startServer();
  });

program
  .command('execute <command>')
  .description('Execute a specific command')
  .action(async (command) => {
    await executeCommand(command);
  });

program.parse(process.argv);