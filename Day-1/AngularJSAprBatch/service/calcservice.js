// Singleton
// this is acting like a constructor function ,so it not
// return anything
// Service is Lazy
calModule.service("calcService",function(){
    this.calcObject = {
        x :100,
        "add":function(firstNo, secondNo){
            return parseInt(firstNo) + parseInt(secondNo);
        },
        "subtract" :function (firstNo, secondNo){
            return firstNo - secondNo;
        }
    };
    // return calcObject;
});
