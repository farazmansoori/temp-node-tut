// OS Module (built-in module provides many useful properties & methods for interacting with Operating systemas well as the server)

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


module.exports.currentOS = currentOs