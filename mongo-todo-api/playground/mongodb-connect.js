// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

// let obj = new ObjectID();
// console.log(obj.getTimestamp());

// var user = {name: 'paulo', age: 20};

// var {name} = user;
// console.log(name);

// MongoClient.connect('mongodb://localhost:27017/Todos'
MongoClient.connect('mongodb://msr:msr@ds123029.mlab.com:23029/todo-api', function (err, db) {
	if (err) {
		return console.log('Unable to connect to mongoDB.');
	}
	console.log('Connected to mongoDB');

	// db.collection('Todos').insertOne({
	//     text: 'something to do',
	//     completed: false
	// }, function (err,res) {
	//     if (err) {
	//         return console.log('unable to insert Todo ', err);
	//     }

	//     console.log(JSON.stringify(res.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'paulo',
	// 	age: 20,
	// 	Location: 'PT',
	// }, function (err, res) {
	// 	if (err) {
	// 		return console.log('unable to insert Users ', err);
	// 	}

	// 	console.log(JSON.stringify(res.ops, undefined, 2));
	// });

	// db.collection('Users').find({}).toArray(function (err, res) {
	// 	if (err) {
	// 		return console.log('unable to get Users ', err);
	// 	}

	// 	console.log(res[0]._id.getTimestamp());
	// });

	db.close();
});
