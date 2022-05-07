// Local
const secret = 'SUPER SECRET'

// Share
const john = 'john'
const peter = 'peter'

// console.log(module);
/*
Module {
    id: '.',
    path: 'D:\\Learn\\Node\\udemy',
    exports: {},
    parent: null,
    filename: 'D:\\Learn\\Node\\udemy\\4-names.js',
    loaded: false,
    children: [],
    paths: [
      'D:\\Learn\\Node\\udemy\\node_modules',
      'D:\\Learn\\Node\\node_modules',
      'D:\\Learn\\node_modules',
      'D:\\node_modules'
    ]
  }
  */

  module.exports = { john, peter } // this will exports only john & peter throughout the application