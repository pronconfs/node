const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://msr:msr@ds123029.mlab.com:23029/todo-api', function(err,db) {
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

    db.collection('Users').insertOne({
        name: 'paulo',
        age: 20,
        Location: 'PT'
    }, function (err,res) {
        if (err) {
            return console.log('unable to insert Users ', err);
        }

        console.log(JSON.stringify(res.ops, undefined, 2));
    });

    db.close();
});
