import TodoComponent from "./src/components/TodoComponent";
import viewLib from "./src/ViewLib";
import AddTodoComponent from "./src/components/AddTodoComponent";
import AddTodoView from "./src/views/AddTodoView";

//let todo = new TodoComponent()

//todo.create()

viewLib.registerComponent('todo', TodoComponent)
//viewLib.registerComponent('add-todo', AddTodoComponent)
viewLib.registerView(AddTodoView, '#add-todo')