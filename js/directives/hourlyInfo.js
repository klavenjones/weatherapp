app.directive('hourlyInfo', function() { 
    return { 
      restrict: 'E', 
      scope: { 
        info: '=' 
      }, 
      templateUrl: 'js/directives/hourlyInfo.html' 
    }; 
});