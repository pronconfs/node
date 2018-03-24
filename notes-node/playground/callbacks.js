var getUser = function (id, callback) {
  var user = {
    id: id,
    name: 'osga'
  };
  setTimeout (()=>{
    callback(user);
  }, 4000);

};

getUser(31, function(userObject){
  console.log(userObject);
})
