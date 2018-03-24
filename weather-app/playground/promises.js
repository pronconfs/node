
var asyncAdd = (a,b) => {
  return new Promise ((resolve, reject) => {
      setTimeout(() => {
        if (typeof a === 'number' && typeof b ==='number') {
          resolve (a + b);
        }
        else {
          reject ('parameters are not numbers!');
        }
      }, 1500);
  });
};

// asyncAdd ('sds',2).then ((resolve) => {
//   console.log(resolve);
//   return asyncAdd (resolve, 30);
// }, (errorMessage) => {
//   console.log(errorMessage);
// }).then ((res) => {
//   console.log(res);
// }, (err) => {
//   console.log(err);
// });

asyncAdd (1,2).then ((resolve) => {
  console.log(resolve);
  return asyncAdd (resolve, '30');
}).then ((res) => {
  console.log(res);
}).catch ((err) => {
  console.log(err);
});


// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() =>{
//     //resolve ('funcionou');
//     reject('falhou');
//   }, 2500);
// });
//
// somePromise.then((message) => {
//   console.log('Success: ' + message);
// }), (errorMessage) => {
//   console.log('Error: ' + errorMessage);
// }
