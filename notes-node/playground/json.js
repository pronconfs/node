// var obj = {
//   name : 'paulo'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
//
// console.log(stringObj);
//
// var personString = '{"name": "paulo", "age" : 12}';
// var person = JSON.parse (personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title : 'some title',
  body : 'some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.js', originalNoteString);

var noteString = fs.readFileSync('notes.js');

var note = JSON.parse(noteString)
console.log(note.body);
