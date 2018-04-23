const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.PROD_MONGODB);
// mongoose.connect('mongodb://msr:msr@ds123029.mlab.com:23029/todo-api');

module.exports = {
	mongoose,
};
