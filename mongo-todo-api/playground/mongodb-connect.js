const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://msr:msr@ds123029.mlab.com:23029/todo-api', function(err,db) {
    if (err) {
        return console.log('Unable to connect to mongoDB.');
    }
    console.log('Connected to mongoDB');

    db.close();
});
