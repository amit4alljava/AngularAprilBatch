var TodoItem = Backbone.Model.extend({
validate:function(attrs){
    if(!attrs.desc){
        return "Task Description is Required ";
    }
}
});