/*

const amount = 9;

if(amount < 10) {
    console.log('small number');
}else {
    console.log('large number');
}

console.log("hey it's my first node app");

*/












// GLOBALS   - NO WINDOW  !!!

// __dirname   -   path to current directory
// __filename  -   file name
// require     -   function to use modules (CommonJs)
// module      -   info about current module (file)
// process     -   info about env where the program is bieng executed

/*

console.log(__dirname);

setInterval(()=>{
    console.log('hello world');
},1000);

*/









// Modules Setup
/*
const john = 'john';
const peter = 'peter';

// Function
const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}
sayHi('Faraz');
sayHi(john);
sayHi(peter);
*/













// First Module

// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

/*
const names = require('./4-names'); // here we requiring 4-names file to access exports constants. always use "./" for require a module
const sayHi = require('./5-utils');

// console.log(sayHi);

sayHi('Faraz');
sayHi(names.john);
sayHi(names.peter);
*/















// Alternative Syntax

/*
const data = require('./6-alternative-flavour')
console.log(data)
*/










// Mind Granade
/*
require('./7-mind-grenade')
*/















// OS Module (built-in module provides many useful properties & methods for interacting with Operating systemas well as the server)
/*
const os = require('os')

console.log(os.hostname);

// info about current user
const user = os.userInfo()
console.log(user);

// Return System Uptime
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOs);

*/



























// Path Module
/*
const path = require('path')
console.log(path.sep)

// getting whole path of a file 'content/subfolder/test.txt' file using 'path'
const filepath = path.join('/content', 'subfolder', 'test.txt')
console.log(filepath)

// get base file name
const base = path.basename(filepath)
console.log(base)

// get absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
*/

















// FS Module(sync)
/*
// const fs = require('fs')
// fs.readFileSync

const {readFileSync, writeFileSync} = require('fs')

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
*/





















// FS Module(async){Non-Blocking}
/*
// const fs = require('fs')
// fs.readFileSync

const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        // return;
        //OR
        console.log(err)
    }
    // console.log(result)
    const first = result

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            // return;
            //OR
            console.log(err)
        }
        // console.log(result)
        const second = result

        writeFile(
            './content/result-sync.txt',
            `\nHere is Async result: ${first}, ${second}`,
            {flag: 'a'},
            (err, result1)=> {
                if(err) {
                    return
                }else {
                    console.log(result1);
                }
            }
        )
    })
})
*/



























// HTTP Module(allow us to setup a web server)

// HTTP Module (Setup)

/*

const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req);
    // res.write('Welcome to our home page')
    // res.end()

    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seems to find the page your are looking for</p>
        <a href="/">back home</a>`)
})

server.listen(5000)

*/








// NPM Info
// NPM Command

// npm - global command, comes with node
// npm --version

// local dependecy - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info anout project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)



const _ = require('lodash')
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)