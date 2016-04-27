var app = angular.module("directiveapp",[]);
app.directive("welcomeMsgDirective",function(){
   return {
       template:"<h1>Welcome {{firstname}} and {{lastname}}</h1>",
       restrict:"E"
   }
});
app.constant('SALARY', 90000);
app.controller("dataCtrl",function($scope,SALARY){
   $scope.data = [{"id":1001,name:"Ram",salary:SALARY},
       {"id":1002,name:"Shyam",salary:19000},
       {"id":1003,name:"Mike",salary:29000},
       {"id":1004,name:"Tom",salary:39000}


   ];
});
app.controller("welcomeCtrl",function($scope){
    $scope.firstname="Amit";
    $scope.lastname = "Srivastava";
});

app.directive("pwdvalidation",function(){
    return {
        link:function(scope,element,attrs) {
           alert("Value is "+element[0].value);
            element.bind("change",function(){
                var value = element[0].value;
                if(value.length<8){
                    alert("Password is Invalid Can't Be Less than 8 Chars");
                }
                else{
                    alert("Correct Format...");
                }
            });
        },
        restrict :"A"

    }
})

app.directive("tableattr",function(){
    return{
        controller:"dataCtrl",
        link:function(scope,element,attrs) {
            var tableData = "";
            scope.data.forEach(function(object){
                tableData=tableData+"<tr><td>"+object.id+"</td>"
                +"<td>"+object.name+"</td> <td>"+object.salary+"</td>"
                +"</tr>";

            });
            element[0].innerHTML = tableData;
        },
        restrict:"A"
    }

});
