//Model View
var TodoItemView= Backbone.View.extend({
    render:function(){
        this.$el.html(this.model.get("id")+" Desc "+this.model.get("desc"));
        return this;
    }
})
