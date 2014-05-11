'use strict';

angular.module('angularApp')
  .controller('MenuCtrl', function ($scope, $rootScope, $location) {
        // construction of method isActive
        $scope.isActive = function(route) {
            var path = $location.path();
            var tmp = route;
            tmp = tmp.replace(/#!/gi,"");
            return (tmp === path || (route !== '' && path.indexOf(tmp+"/") > -1));
        };
    }
);
