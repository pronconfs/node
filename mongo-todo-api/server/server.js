let express = require('express');
let bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose.js');
const { Todo } = require('./models/todo.js');
const { User } = require('./models/user.js');

const app = express();

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

app.listen(3001, function () {
	console.log('started on port 3001');
});

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

