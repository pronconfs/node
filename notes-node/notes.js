//module.exports.age = 25;
const fs = require('fs');
const _ = require('lodash');

// -------------------------
var fetchNotes = function () {
  try {
    notesString = fs.readFileSync('notes-data.json');
    notes =  JSON.parse(notesString);
  } catch (e) {
    var notes = [];
  }
  return notes;
};

// -------------------------
var saveNote = function (notes) {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// -------------------------
var addNote = (title, body) => {
  console.log ('Adding note', title, body);
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter(function(note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNote(notes);
    return note;
  } else {
    console.log('duplicate title');
  }
};

// -------------------------
var getAll = () => {
  console.log('getting all notes');
  return fetchNotes();
};

// -------------------------
var getNote = (title) => {
  console.log ('Getting note', title);

  var notes = fetchNotes();

  var noteFind = notes.filter(function(note) {
    return note.title === title;
  });
  return noteFind[0];
};

// -------------------------
var removeNote = (title) => {
  console.log ('Removing note', title);
  var notes= fetchNotes();

  var removedNotes = notes.filter(function(note) {
    return note.title !== title;
  });
  saveNote(removedNotes);
  console.log(removedNotes);
  return !_.isEmpty(_.difference(notes.sort(), removedNotes.sort()));
};

//--------------------------
var log_Note = function (note) {
  console.log('-----');
  console.log('Title ' + note.title);
  console.log('Body ' + note.body);
  console.log('----');
};

// -------------------------
module.exports = {
  addNote : addNote,
  getAll : getAll,
  getNote,
  logNote: log_Note,
  removeNote
};
// module.exports.addAB = function (a, b) {
//   return a+b;
// }
