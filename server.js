const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;

const app = express();

hbs.registerPartials(`${__dirname}/views/partials`);

app.set('view engine', 'hbs');
app.use(express.static(`${__dirname}/public`));

app.use(function (req, res, next) {
	const now = new Date().toString();
	const log = (`${now}: ${req.method} ${req.url}`);

	console.log(log);
	fs.appendFile('server.log', log + '\n', function (err) {
		if (err) {
			console.log('Unable to write to server.log');
		}
	});
	next();
});

app.use(function (req, res, next) {
	// res.render('maintenance.hbs');
	next();
});

hbs.registerHelper('getCurrentYear', function () {
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt', function (text) {
	return text.toUpperCase();
});

app.get('/', function (request, response) {
	// console.log(request);
	// response.send('hello world!');
	response.send({
		name: 'andrew',
		likes: ['bike', 'sailing'],
	});
});

app.get('/about', function (req, res) {
	res.render('about.hbs', {
		pageTitle: 'About Page',
	});
});

app.get('/home', function (req, res) {
	res.render('home.hbs', {
		pageTitle: 'Home Page',
		welcomeMessage: 'ola pato!',
	});
});

app.get('/projects', function (req, res) {
	res.render('projects.hbs', {
		pageTitle: 'Home Page',
		welcomeMessage: 'Project!',
	});
});


app.get('/bad', function (req, res) {
	res.send({
		errorMessage: 'bad request!!',
	});
});



app.listen(port, function () {
	console.log(`server is up:${port}`);
});
