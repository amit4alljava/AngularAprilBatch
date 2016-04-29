$(document).ready(function(){
   var todoItem1 = new TodoItem({id:1,desc:"This is Item1"});
    var todoItem2 = new TodoItem({id:2,desc:"This is Item2"});
    console.log(todoItem1);
    console.log(todoItem2);
   var todoItems = new ToDoItems([todoItem1,todoItem2]);
    console.log("Collection ",todoItems);

   var todoItemsView = new TodoItemsView({model:todoItems});
    $("body").append(todoItemsView.render().$el)
});