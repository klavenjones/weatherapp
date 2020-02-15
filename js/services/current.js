<<<<<<< HEAD
/* 

Dark SKY API WEATHER

Secret Key
c85c9659ecd34964654ab75325fcf6a9

Latitude and Longitude
40.681965,-73.906887

https://api.darksky.net/forecast/1e5c94b4ae8bd4877a95f19846e81a31/40.681965,-73.906887?exclude=minutely,hourly,alerts,flags


*/

let key = '1e5c94b4ae8bd4877a95f19846e81a31'; 
=======


let key; 
>>>>>>> 6253ac9ea2b93ebecf603bed55392e840d71144c

app.factory('current', ['$http', function($http) { 
    //Get Coordinates by IP address
    return $http.get(`http://ip-api.com/json`)
    .then(function(response) { 
      return response; 
      console.log(response);  
    })
    //Return the Weather 
    .then(function(response){
     return  $http.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/${response.data.lat},${response.data.lon}?exclude=minutely,daily,hourly,alerts,flags`).then(function(response){
        return response;
     })
    })
    .catch(function(err) { 
      console.log("Error");
      return err; 
    }); 
}]);

