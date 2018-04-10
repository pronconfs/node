const express = require('express');
const bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');

const { mongoose } = require('./db/mongoose.js');
const { Todo } = require('./models/todo.js');
const { User } = require('./models/user.js');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post('/todos', function (req, res) {
	const todo = new Todo({
		text: req.body.text,
		completed: req.body.completed,
	});
	console.log(req.body);

	todo.save().then(function (doc) {
		res.send(doc);
	}, function (e) {
		res.status(400).send(e);
	});
});

app.get('/todos', function (req, res) {
	Todo.find({}).then(function (todosRes) {
		res.send({
			todos: todosRes,
			resultado: 'ok',
		});
	}, function (e) {
		res.status(400).send(e);
	});
});

app.get('/todos/:id', function (req, res) {
	var id = req.params.id;
	//res.send(id);

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findById(id).then( function(todo) {
		if (!todo) {
			return res.status(404).send();
		}
		res.send ({todo});
	})
	.catch(function(e) {
		return res.status(404).send();
	});
}, 
function (e) {
	return res.send(e);
});

app.delete('/todos/:id', function (req, res) {
	var id = req.params.id;
	//res.send(id);

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findByIdAndRemove(id).then( function(todo) {
		if (!todo) {
			return res.status(404).send();
		}
		res.send ({todo});
	})
	.catch(function(e) {
		return res.status(404).send();
	});
}, 
function (e) {
	return res.send(e);
});

app.listen(port, function () {
	console.log('started on port ' + port);
});

module.exports = { app };

// let user = new User({
// 	email: 'proncon@gmail.com',
// });

// user.save().then(function (res) {
// 	console.log('Saved User', res);
// }, function (err) {
// 	console.log('Error: ', err);
// });

// const newTodo = new Todo({
// 	text: 'Cook Lunch',
// 	completed: 'true',
// 	completedAt: 123,
// });

// newTodo.save().then(function (res) {
// 	console.log('Saved Todo', res);
// }, function (err) {
// 	console.log('Error: ', err);
// });

