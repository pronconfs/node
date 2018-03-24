const request = require('request');

var getWeather = function (coord, callback) {
  request ({
    url : 'https://api.darksky.net/forecast/8074a270b23f2e02510782b981050a96/'+coord.latitude+','+coord.longitude,
    json : true
  }, (error, response, body) => {
    if (error) {
      callback('unable to connect');
    }
    //console.log(response.body);
    if (error || response.statusCode !==200) {
      return callback('request denied - wrong auth/parameters.');
    }
    return callback(undefined, {
      temperature : body.currently.temperature,
      apparentTemperature: body.currently.apparentTemperature
    });
});
};

module.exports = {
 getWeather : getWeather
};
