const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const id='5ac2c8f236c8596823aa0fa6';

if (!ObjectID.isValid(id)) {
  return console.log('object id not valid');
}

Todo.find({
  _id : id
}).then( function(todo) {
  if (!todo) {
    return console.log('id not found');
  }
  console.log('Todos', todo);
  console.log(todo.length);
});

Todo.findById(id).then( function(tod) {
  if (!tod) {
    return console.log('id not found');
  }
  console.log('Todos', tod);
})
.catch(function(e) {
  console.log(e)
});