import View from "../View";
import viewLib from "../ViewLib";

export default class AddTodoView extends View {
    constructor() {
        super()
    }

    
    onButtonClick(button) {
        if(button.name == 'removeAll') {
            viewLib.getComponent('todo').setState({state:[]})
            alert('Removed')
        }
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
            <form name='add-todo'>
                <div class='form-group'>
                    <label>Task:</label>
                    <input placeholder='Task Title...' minlength='3' name='task' class='form-control' required>
                </div>
                <button class='btn btn-outline-primary'>Add</button>
            </form>
                        
                <button name='removeAll' type='button' class='btn btn-outline-dark mt-3'>Remove All</button>

        `
    }
}