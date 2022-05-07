// CommonJs, every file is moule (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names'); // here we requiring 4-names file to access exports constants. always use "./" for require a module
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')

sayHi('Faraz');
sayHi(names.john);
sayHi(names.peter);