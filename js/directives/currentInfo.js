app.directive('currentInfo', function() { 
    return { 
      restrict: 'E', 
      scope: { 
        info: '=' 
      }, 
      templateUrl: 'js/directives/currentInfo.html' 
    }; 
});

