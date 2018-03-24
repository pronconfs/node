const notes = require('./notes');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

var user = os.userInfo();
const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// console.log(_.isString('gdfgdf'));
// fs.appendFile('greetings.txt', `Hello ${user.username}`, function (err) {
//   if (err) {
//     console.log('Error');
//   }
//   else {
//     console.log('ok');
//   }
// });
//
// console.log(user.username);
// console.log(notes.age);
var filteredArray = _.uniq(['Paulo',1,'',1,2,'Paulo','paulo']);
console.log(filteredArray);

var res = notes.addNote();

console.log(res);

console.log(notes.addAB(1,2));
