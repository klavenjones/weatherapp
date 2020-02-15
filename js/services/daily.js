
<<<<<<< HEAD
//https://api.openweathermap.org/data/2.5/forecast?zip=11207,us&units=imperial&APPID=724ee4dc36b7252cd93c94d6a4c49106

// app.factory('daily', ['$http', function($http) { 
//     return $http.get(`https://api.darksky.net/forecast/${key}/40.676,-73.9206?exclude=minutely,currently,hourly,alerts,flags`).then(function(response) { 
//                 // console.log(data);
//                 return response; 
//               }).catch(function(err) { 
//                 console.log("Error");
//                 return err; 
//               }); 
// }]);
=======

>>>>>>> 6253ac9ea2b93ebecf603bed55392e840d71144c

app.factory('daily', ['$http', function($http) { 
  //Get location
  return $http.get(`http://ip-api.com/json`)
  .then(function(response) { 
    console.log(response); 
    return response;   
  })
  //Return the Weather 
  .then(function(response){
   return  $http.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/${response.data.lat},${response.data.lon}?exclude=minutely,currently,hourly,alerts,flags`).then(function(response){
    return response;
   })
  })
  .catch(function(err) { 
    console.log("Error");
    return err; 
  }); 
<<<<<<< HEAD
}]);
=======
}]);
>>>>>>> 6253ac9ea2b93ebecf603bed55392e840d71144c
