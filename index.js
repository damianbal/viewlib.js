import TodoComponent from "./src/components/TodoComponent";
import viewLib from "./src/ViewLib";
import AddTodoView from "./src/views/AddTodoView";

viewLib.registerComponent('todo', TodoComponent)
viewLib.registerView(AddTodoView, '#add-todo')