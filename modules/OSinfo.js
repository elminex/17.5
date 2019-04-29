const os = require('os');
const colors = require('colors');
const time = require('./time')
function getOSinfo() {
    let type = os.type();
    let release = os.release();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    let cpu = os.cpus()[0].model;
    let uptime = os.uptime();
    let userInfo = os.userInfo();
    console.log(colors.green('System:'), type);
    console.log(colors.red('Release:'), release);
    console.log(colors.america('CPU model:'), cpu);
    console.log(colors.blue.underline('Uptime:'), time.print(uptime));
    console.log(colors.black.bgWhite('User name:'), userInfo.username);
    console.log(colors.magenta.bold('Home dir:'), userInfo.homedir);
}
exports.print = getOSinfo;