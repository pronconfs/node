const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test').then(function (db) {
	console.log('Connected to mongoDB');

	// findoneandupdate

	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5ab31319a7c0f3beefcb72bd'),
	}, {
		$set: {
			completed: true,
		},
	}, {
		returnOriginal: false,
	}).then(function (result) {
		console.log(result);
	});

	db.close();
})
	.catch(function (err) {
		return console.log('Unable to connect to mongoDB.', err);
	});
