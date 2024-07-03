import { spawn } from 'child_process';

const commands = {
  dev: 'next dev',
  build: 'next build',
  start: 'next start'
};

const command = process.argv[2] || 'dev'; // Default to 'dev' if no command is provided

if (!commands[command]) {
  console.error(`Unknown command: ${command}`);
  process.exit(1);
}

const child = spawn('node', ['--trace-warnings', ...commands[command].split(' ')], { stdio: 'inherit' });

child.on('close', (code) => {
  process.exit(code);
});
