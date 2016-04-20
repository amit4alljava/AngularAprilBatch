// factory acting as a normal function and it return something
// this contains logic and factory always return
// Factory is Eager
calModule.factory("calcFactory",function(){
    var calcObject = {
        x :100,
        "add":function(firstNo, secondNo){
            return parseInt(firstNo) + parseInt(secondNo);
        },
        "subtract" :function (firstNo, secondNo){
            return firstNo - secondNo;
        }
    };
    return calcObject;
});