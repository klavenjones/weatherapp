app.factory('hourly', ['$http', function($http) { 
  //Get location
  return $http.get(`http://ip-api.com/json`)
  .then(function(response) { 
    return response; 
    console.log(response);  
  })
  //Return the Weather 
  .then(function(response){
   return  $http.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/${response.data.lat},${response.data.lon}?exclude=minutely,daily,currently,alerts,flags`).then(function(response){
      return response;
   })
  })
  .catch(function(err) { 
    console.log("Error");
    return err; 
  }); 
}]);