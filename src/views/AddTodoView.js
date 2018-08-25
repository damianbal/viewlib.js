import View from "../View";
import viewLib from "../ViewLib";

export default class AddTodoView extends View {
    constructor() {
        super()
    }

    onFormSubmit(form) {
        if(form.name == 'add-todo') {
           viewLib.getComponent('todo').addToState({
               title: form.task.value
           })
           form.task.value = ''
        }
    }

    template() {
        return `
            <form method='POST' action='#' name='add-todo'>
                <div class='form-group'>
                    <label>Task:</label>
                    <input placeholder='Task Title...' minlength='3' name='task' class='form-control' required>
                </div>
                <button type='submit' class='btn btn-outline-primary'>Add</button>
            </form>
        `
    }
}