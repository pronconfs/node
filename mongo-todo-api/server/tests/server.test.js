const request = require('supertest');
const expect = require('expect');

const {ObjectID} = require('mongodb');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

const todos = [{
	_id: new ObjectID(),
	text: 'First test todo',
}, {
	_id: new ObjectID(),
	text: 'Second test todo',
}];

let text = 'test todo text!!!';

beforeEach(function (done) {
	// Todo.remove({ text: text }).then(function (deleted) {
	// 	done();
	// }).catch(function (e) {
	// 	done(e);
	// });
	Todo.remove({}).then(function () {
		Todo.insertMany(todos).then(function () {
			done();
		});
	}).catch(function (e) {
		done(e);
	});
});

describe('POST /todos', function () {
	it('should create a new todo', function (done) {
		request(app)
			.post('/todos')
			.send({
				text,
			})
			.expect(200)
			.expect(function (res) {
				expect(res.body.text).toBe(text);
			})
			.end(function (err, res) {
				if (err) {
					return done(err);
				}

				Todo.findOne({ 'text': text }).then(function (todos) {
					expect(todos).toExist();
					expect(todos.text).toBe(text);
					done();
				}).catch(function (e) {
					done(e);
				});
			});
	});

	it('should nor create todo with invalid body data', function (done) {
		request(app)
			.post('/todos')
			.send({ text: '' })
			.expect(400)
			.expect(function (res) {
				// console.log(res.statusCode);
				// done();
			})
			.end(function (err, res) {
				if (err) {
					return done(err);
				}
			});

		Todo.find({}).then(function (todos) {
			expect(todos).toExist();
			expect(todos.length).toBe(2);
			done();
		}).catch(function (e) {
			done(e);
		});
	});     
});

describe('GET /todos', function () {
	it('should get all todos', function (done) {
		request(app)
			.get('/todos')
			.expect(200)
			.expect(function (res) {
				expect(res.body.todos.length).toBe(2);
				done();
				//expect(res.body).toBe(todos);
			})
			.end(function (err, res) {
				if (err) {
					return done(err);
				}
			});
	});
});


describe('GET /todos/:id', function () {
	it('should validate id', function (done) {

		const safeObjectId = id => (ObjectID.isValid(id) ? new ObjectID(id) : null);

		request(app)
			.get(`/todos/${todos[0]._id.toHexString()}`)
			.expect(200)
			.expect(function (res) {

				let id = res.body.todo._id;

				const result = safeObjectId(id)
				expect(typeof result).toBe('object');
				//expect(res.body).toBe(todos);
				expect (res.body.todo.text).toBe(todos[0].text);
			})

			.end(function (err, res) {
				if (err) {
					return done(err);
				}
				done();
			});
	});

	it('should return 404 if ID not found', function (done) {
		var hexid = new ObjectID().toHexString();
		request(app)
		.get(`/todos/${hexid}`)
		.expect(404)
		.end(done);
	});

	it('should return 404 if invalid ID', function (done) {
		request(app)
		.get(`/todos/aaaaaaa`)
		.expect(404)
		.end(done);
	});
	
});
