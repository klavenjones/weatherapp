app.directive('dailyInfo', function() { 
    return { 
      restrict: 'E', 
      scope: { 
        info: '=' 
      }, 
      templateUrl: 'js/directives/dailyInfo.html' 
    }; 
});