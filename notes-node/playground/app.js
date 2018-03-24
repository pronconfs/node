//const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const argv = yargs
  .options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'address to fetch weather for',
        string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

//console.log(argv);

geocode.geocodeAddress(argv.address, function (error, results) {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.stringify(results, undefined, 4));
  }
});
