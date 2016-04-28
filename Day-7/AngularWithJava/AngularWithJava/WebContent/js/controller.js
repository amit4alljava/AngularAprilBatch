var app = angular.module("loginapp",[]);
app.factory("loginfactory",function($http,$q){
	return {"logincheck":function(userid,pwd){
		var defered = $q.defer();  // Making Promise
		$http.post("login?userid="+userid+"&pwd="+pwd).success(function(data){
	        console.log("Inside Success "+data);
	        defered.resolve(data);
	        //scope.offers=data;
	    }) .error(function(er){
	        console.log("Error is ",er);
	        //scope.offers = er;
	        defered.reject(er);

	    });
	        return defered.promise;
	}};
});
app.controller("loginctrl",function($scope,loginfactory){
	$scope.doLogin=function(){
	var promise = loginfactory.logincheck($scope.userid,$scope.pwd);
	function pass(result){
		$scope.result = result;
	}
	function fail(err){
		$scope.result = err;
	}
	promise.then(pass,fail);
	}
	});