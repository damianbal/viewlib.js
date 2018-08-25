import View from "../View";

export default class TodoView extends View {
    onButtonClick(button) {
  
        if(button.name == 'remove') {
            this.component.removeFromStateById(this.data.id)
        } else if(button.name == 'xd') {
            alert('Hey?, I am item with title: ' + this.data.title)
        }

    }

    template() {
        let t = `<div class='mb-2'>`

        if (this.data.id % 3 == 0) {
            t += `I am third: ${this.data.title}`
        } else {
            t += `Item #${this.data.id}. ${this.data.title}`
        }

        t += `&nbsp; <button id='${this.data.id}' type='button' name='remove' class='btn btn-outline-danger btn-sm text-right'>Remove</button>`
        t += `&nbsp; <button id='${this.data.id}' type='button' name='xd' class='btn btn-outline-success btn-sm text-right'>Hey</button>`

        return `</div>` + t
    }
}