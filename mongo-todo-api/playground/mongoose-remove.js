const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

const id = new ObjectID('5ac566d965c89a12f072cf9e');


// Todo.findByIdAndRemove(id).then(function (todo) {
// 	if (!todo) {
// 		return console.log('id not found');
// 	}
// 	console.log('Deleted', todo);
// })
// 	.catch(function (e) {
// 		console.log(e);
// 	});


  
Todo.findOneAndRemove({'text':'osga'}).then(function (todo) {
	if (!todo) {
		return console.log('id not found');
	}
	console.log('Deleted', todo);
})
	.catch(function (e) {
		console.log(e);
	});