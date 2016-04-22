var utilModule = angular.module("utils",[]);
utilModule.factory("Task",function(){
    // Function Constructor
    function Task(name,desc){
       this.name = name;
        this.desc= desc;
        this.isCompleted = false; //Task is Pending not completed
   }
    Task.prototype.toggleTask=function(){
        this.isCompleted = !this.isCompleted;
    }
    return Task;
});