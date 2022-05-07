// Path Module

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