process.stdout.write('prompt > ');

const pwd = require('./pwd');
pwd();

const fs = require("./ls");
fs();

process.stdout.write('\nprompt > ');

