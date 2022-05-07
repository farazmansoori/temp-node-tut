// FS Module(sync){Blocking}

// const fs = require('fs')
// fs.readFileSync

const {readFileSync, writeFileSync} = require('fs')
console.log('Start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second)


// write in file if not exist (will delete all data in file and place write data)
writeFileSync(
    './content/result-sync.txt',
    `Here is result: ${first}, ${second}`
);

// write in file if exist (append data after file data)
writeFileSync(
    './content/result-sync.txt',
    `\nHere is result: ${first}, ${second}`,
    {flag: 'a'}
);

console.log('Done with the task');
console.log('starting the next one');