const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options ({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodeAddress = encodeURIComponent(argv.address);
var geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeAddress;

axios.get (geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    //console.log(response.data);
    throw new Error('unable to find the address');
  };
  //console.log(response.data);
  var lat  = response.data.results[0].geometry.location.lat;
  var long = response.data.results[0].geometry.location.lng;
  var weatherUrl = 'https://api.darksky.net/forecast/8074a270b23f2e02510782b981050a96/'+lat+','+long;
  console.log(response.data.results[0].formatted_address);
  return axios.get (weatherUrl);
}).then((response) => {
    //console.log(response);
    var temperature = response.data.currently.temperature;
    var apparentTemperature= response.data.currently.apparentTemperature;
    console.log(temperature + '---' + apparentTemperature);
    if (response.status !==200) {
      //console.log(response.data);
      throw new Error('request denied - wrong auth/parameters.');
    };
}).catch ((e) => {
  //console.log(e);
  if (e.code ==='ENOTFOUND') {
    console.log('erro');
  } else {
    console.log(e.message);
  }
});
