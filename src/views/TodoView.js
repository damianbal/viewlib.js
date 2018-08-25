import View from "../View";

export default class TodoView extends View {
    template() {
        if (this.data.id % 3 == 0) {
            return `I am third: ${this.data.title}`
        } else {
            return `Item #${this.data.id}. ${this.data.title}`
        }
    }
}