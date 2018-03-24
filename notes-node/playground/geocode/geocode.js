const request = require('request');

var geocodeAddress = function (address, callback) {
  request ({
    //url : 'https://maps.googleapis.com/maps/api/geocode/json?address=agueda',
    url : 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(address),
    json : true
  }, (error, response, body) => {

    if (error) {
      callback('unable to connect');
      //console.log('unable to connect');
    } else if(body.status ==='ZERO_RESULTS') {
      //console.log('unable to find address');
      callback('unable to find address');
    } else if (body.status === 'OK') {
      callback(undefined, {
          address : body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
      });
     //console.log(JSON.stringify(body, undefined, 2));
     //console.log(body.results[0].formatted_address);
   }
  });
};

module.exports = {
 geocodeAddress : geocodeAddress
};
