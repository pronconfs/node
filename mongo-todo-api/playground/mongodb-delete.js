const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test').then(function (db) {
	console.log('Connected to mongoDB');

// deletemany
// deleteone
// findOneandDelete

	// db.collection('Todos').deleteMany({
	// 	text: 'eat lunch',
	// }).then(function (res) {
	// 	console.log(res);
	// })
	// db.collection('Todos').deleteOne({
	// 	text: 'Pool course',
	// }).then(function (res) {
	// 	console.log(res);
	// })
	db.collection('Todos').findOneAndDelete({
		text: 'Pool course',
	}).then(function (res) {
		console.log(res);
	})
		.catch(function (error) {
			console.log('unable to get Todos ', error);
		});

	db.close();
})
	.catch(function (err) {
		return console.log('Unable to connect to mongoDB.', err);
	});
