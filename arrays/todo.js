const todos = [
{
  text:"Get Milk",
  Completed: false
},
{
  text:"Get OJ",
  Completed: true
},
{
  text:"Brush Cat",
  Completed: false
},
{
  text:"Play Destiny",
  Completed: true
}];

//1. convert array to array objects => Text, completed

//2. function that removes todo by text value
const deleteTodo = function(todos,todoText){
      return todos.find(function (todo,index){
        return todo.text.toLower() === todoText.toLower()
    
  })

}

const findTodo = function (todos, todoTitle){
  return todos.find(function (todo,index){
  return todo.title.toLowerCase() === todoTitle.toLowerCase();
})

}


findTodo(todos,"Brush Cat")
console.log(todos)
