const { MongoClient, ObjectID } = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017/test', function (err, db) {
// 	if (err) {
// 		return console.log('Unable to connect to mongoDB.');
// 	}
// 	console.log('Connected to mongoDB');

MongoClient.connect('mongodb://localhost:27017/test').then(function (db) {
	console.log('Connected to mongoDB');

	// db.collection('Todos').find({}).toArray(function (err, res) {
	// 	if (err) {
	// 		return console.log('unable to get Users ', err);
	// 	}

	// 	//console.log(res[0]._id.getTimestamp());
	// 	console.log(res);
	// });

	db.collection('Todos').find({
		completed: 'true',
		_id: new ObjectID('5ab7e0c678b41947d0d60579'),
	}).toArray().then(function (res) {
		console.log(res[0].text);
	})
		.catch(function (error) {
			console.log('unable to get Todos ', error);
		});

	db.collection('Todos').find({
		completed: 'true',
	}).count().then(function (count) {
		console.log(count);
	})
		.catch(function (error) {
			console.log('unable to get Todos ', error);
		});



	db.close();
})
	.catch(function (err) {
		return console.log('Unable to connect to mongoDB.', err);
	});
