const notes = require('./notes');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
var command = process.argv[2];
//console.log (process.argv);
//console.log(argv);
//console.log(command);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('note added');
    console.log('-----');
    console.log('Title ' + note.title);
    console.log('Body ' + note.body);
    console.log('----');
  }
  else {
    console.log('note duplicate');
  }
}
else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log('Listing ' + allNotes.length + ' notes.');
  allNotes.forEach( function (note) {
    notes.logNote(note);
  });
}
else if (command === 'read') {
  console.log('read note');
  console.log('----');
  var note = notes.getNote(argv.title);
  if (note) {
    notes.logNote(note);
  }
  else {
    console.log('note not found.');
  }
}
else if (command === 'remove') {
  var result = notes.removeNote(argv.title);
  var message = result ? 'Titulo removido.' : 'Titulo não encontrado.' ;
  console.log(message);
}
else {
  console.log('not recognised');
}
