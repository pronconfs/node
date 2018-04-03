const request = require('supertest');
const expect = require('expect');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

const todos = [{
	text: 'First test todo',
}, {
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
