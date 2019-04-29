let OSinfo = require('./modules/OSinfo');
let EventEmitter = require('events').EventEmitter;
let emitter = new EventEmitter();
emitter.on('beforeCommand', (instruction) => console.log(`You wrote: ${instruction}. Trying to run command.`));
emitter.on('afterCommand', () => console.log('Task finished'));
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
    let input = process.stdin.read();
    if(input !== null) {
        let instruction = input.trim();
        emitter.emit('beforeCommand', instruction);
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/computername':
                process.stdout.write(process.env.COMPUTERNAME + '\n');
                break;
            case '/username':
                process.stdout.write(process.env.USERNAME + '\n');
                break;
            case '/lang':
                process.stdout.write(process.env.LANG + '\n');
                break;
            case '/node':
                process.stdout.write(process.versions.node + '\n');
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n'); 
                break;
        }
        emitter.emit('afterCommand');
    }
});
