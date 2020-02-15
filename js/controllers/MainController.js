app.controller('MainController', ['$scope', 'current', 'daily', 'hourly', function($scope, current, daily, hourly){
    $scope.Math = window.Math;


    let getPhoto = function(condition){
        let photo = "clear-day";
        
        if(condition === "clear-night" ){
            photo = "clear-night"
        }
        else if(condition === "partly-cloudy-night" || condition === "Overcast"){
            photo = "cloudy-night"
        }
        else if(condition === "partly-cloudy-day"){
            photo = "cloudy-day"
        }
        else if(condition === "snow"){
            photo = "snowy-day"
        }
        else if(condition === "rain"){
            photo = "rainy-day"
        }  
        else if(condition === "thunderstorm"){
            photo = "thunder-day"
        }   
        return photo;
    }
    let getIcon = function(icon){
        let weekly = "";
        if(icon === "clear-day"){
            weekly = "wi wi-day-sunny";
        }
        else if(icon === "clear-night"){
            weekly = "wi wi-night-clear"
        }
        else if(icon === "rain"){
           weekly = "wi wi-rain"
        }
        else if(icon === "snow"){
            weekly = "wi wi-snow"
        }
        else if(icon === "sleet"){
            weekly = "wi wi-sleet"
        }
        else if(icon === "wind"){
            weekly = "wi wi-strong-wind"
        }
        else if(icon === "fog"){
            weekly = "wi wi-fog"
        }
        else if( icon === "cloudy"){
            weekly = "wi wi-cloudy"
        }
        else if(icon === "partly-cloudy-day"){
            weekly = "wi wi-day-cloudy"
        }
        else if( icon === "partly-cloudy-night"){
            weekly = "wi wi-night-alt-cloudy"
        }
        else if( icon === "hail"){
            weekly = "wi wi-hail"
        }
        else if( icon === "thunderstorm"){
            weekly = "wi wi-thunderstorm"
        }
        else{
           weekly = "wi wi-tornado"
        } 

        return weekly;
    } //end of getIcon
    let windDirection = function(wind){
        let value = parseInt((wind/22.5) + .5)
        let dirArr = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]
        return dirArr[value%16];
    }
    //Current Controller
    current.then(function(response) {
        
        $scope.Math = window.Math
        $scope.current = response.data.currently;
        let icon = response.data.currently.icon;
        $scope.url = getIcon(icon);
        $scope.wind = windDirection($scope.current.windBearing) + " " + Math.round($scope.current.windSpeed) + " MPH";
        $scope.photoCondition = getPhoto(icon);
        
        $scope.currentWeather = {

            summary: $scope.current.summary,
            time: $scope.current.time,
            temp: Math.round($scope.current.temperature),
            wind: $scope.wind,
            humidity: Math.round($scope.current.humidity) * 100,
            dewPoint: Math.round($scope.current.dewPoint),
            pressure: $scope.current.pressure,
            UV: $scope.current.uvIndex,
            realFeel: Math.round($scope.current.apparentTemperature),
            pic: $scope.url

            
        }
        
    }); //end of currently
    daily.then(function(response){
        
        $scope.daily = response.data.daily.data
        $scope.windDaily = windDirection($scope.daily[0].windBearing) + " " + Math.round($scope.daily[0].windSpeed) + " MPH";
        $scope.winds = []; 
        $scope.dailyUrl = [];
        $scope.today = response.data.daily.data[0];
        let dailyIcon = response.data.daily.data;
        $scope.dailyForecast = {
            
            data: $scope.daily,
            winds: $scope.winds,
            url: $scope.dailyUrl,
            Math: window.Math
        }

        

        for(let i = 0; i < dailyIcon.length; i++){
            $scope.dailyUrl.push(getIcon(dailyIcon[i].icon));
   
        }
        for(let j = 0; j < $scope.daily.length; j++)
            $scope.winds.push(windDirection($scope.daily[j].windBearing) + " " + Math.round($scope.daily[j].windSpeed) + " MPH");
           
           
    }); //end of daily
    //Hourly
    hourly.then(function(response){
        $scope.hourly = response.data.hourly.data;
        $scope.windsHourly = [];
        $scope.hourlyUrl = []

        for(let i = 0; i<$scope.hourly.length; i++){
             $scope.hourlyUrl.push(getIcon($scope.hourly[i].icon));
        }
         for(let j = 0; j < $scope.hourly.length; j++)
            $scope.windsHourly.push(windDirection($scope.hourly[j].windBearing) + " " + Math.round($scope.hourly[j].windSpeed) + " MPH");
    
        $scope.hourlyForecast = {

            data: $scope.hourly,
            winds: $scope.windsHourly,
            url: $scope.hourlyUrl,
            Math: window.Math
        }
       
    
    });




}]) ; 
           