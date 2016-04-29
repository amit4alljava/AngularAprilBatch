// Collection View
var TodoItemsView = Backbone.View.extend({
    counter:0,
    initialize:function(){
      this.model.on("add",this.onAddTodoItem,this);
    },
    onAddTodoItem:function(todoItem){
        var view = new TodoItemView({model:todoItem});
        this.$el.append(view.render().$el);
    },
    events:{
        "click #add":"onClickAdd"
    },
    onClickAdd:function (){
    var $textBox = this.$("#newtodoitem");
    if($textBox.val()){
        this.counter++;
        alert("Counter is "+this.counter);
        var todoItem = new TodoItem({id:this.counter,desc:$textBox.val()});
        this.model.add(todoItem);
        $textBox.val('');
    }
    },
    render:function(){
        var self = this;
        this.$el.append("<input type='text' " +
        "placeholder='ToDo Item' autofocus id='newtodoitem'>");
        this.$el.append("<button id='add'>Add</button>")  ;
        this.model.each(function(itemObject){
            var view = new TodoItemView({model:itemObject});
            self.$el.append(view.render().$el);
        })
        return this;
    }
})