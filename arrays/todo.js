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
     const index = todos.findIndex(function (todo){
        return todo.text.toLowerCase() === todoText.toLowerCase()
     
    
  })
  if(index > -1){
    todos.splice(index, 1)
  }

}

const findTodo = function (todos, todoTitle){
  return todos.find(function (todo,index){
  return todo.title.toLowerCase() === todoTitle.toLowerCase();
 })

 }


deleteTodo(todos,"Brush Cat")
console.log(todos)
