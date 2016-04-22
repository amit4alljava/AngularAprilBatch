app.controller("taskController",function($scope,Task){
 $scope.taskList =[];
    $scope.addTask=function(){
    var taskName = $scope.taskName;
    var taskDesc = $scope.taskDesc;
    var task = new Task(taskName,taskDesc); // Object
    $scope.taskList.push(task);

}
 $scope.countCompleted=function(){
     var taskArray = $scope.taskList.filter(function(taskObject){
        return taskObject.isCompleted==true;
     });
     return taskArray.length;
 }
 $scope.countPending=function(){
     var taskArray = $scope.taskList.filter(function(taskObject){
         return taskObject.isCompleted==false;
     });
     return taskArray.length;
 }
 $scope.deleteTask=function(){
     var taskArray = $scope.taskList.filter(function(taskObject){
         return taskObject.isCompleted==false;
     });
     $scope.taskList=taskArray;
 }
$scope.saveTask=function(){
    var json = JSON.stringify($scope.taskList);
    if(localStorage){
        localStorage.tasks =json;
        alert("Congrats U Have Local Storage ");
    }
    else
    {
        alert("OOPS Your Browser Doesn't Support this");
    }

}
$scope.loadTask=function(){
    if(localStorage.tasks){
        //localStorage.clear();
        var tasks = JSON.parse(localStorage.tasks);
        $scope.taskList=tasks;
    }
}

});