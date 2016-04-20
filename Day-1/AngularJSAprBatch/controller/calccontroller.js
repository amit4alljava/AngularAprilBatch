
// Controller is Acting as a Glue B/W Factory and View
calModule.controller("calcCtrl",function($scope,calcService){
    $scope.add=function(){
        $scope.result= calcService.calcObject.add($scope.firstNo,$scope.secondNo);
        // $scope.result= calcFactory.add($scope.firstNo,$scope.secondNo);
        //$scope.result = parseInt($scope.firstNo)+parseInt($scope.secondNo);
    }
    $scope.subtract=function(){
        $scope.result= calcService.calcObject.subtract($scope.firstNo,$scope.secondNo);
        // $scope.result= calcFactory.subtract($scope.firstNo,$scope.secondNo);
        //$scope.result = parseInt($scope.firstNo)+parseInt($scope.secondNo);
    }
});