const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname +'/views/partials');
app.set('view engine', 'hbs');

 app.get('/osga', (req, res) => {
   //res.send('hello');
   res.send({
     name: 'paulo',
     gostos: [
       'carros', 'vinho'
     ]
   });
 });

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = now + ': ' + req.method + ' ' + req.url;
  console.log(log);
  fs.appendFile('server.log', log +'\n', (err) => {
    if (err) {
      console.log(err);
    }
  });
  next();
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'about page',
    welcomeMessage: 'Welcome to my page'
    //,
    //currentYear: new Date().getFullYear()
  });
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: 'Welcome to my page'
    // ,
    // currentYear: new Date().getFullYear()
  });
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log('server is up!!');
});
