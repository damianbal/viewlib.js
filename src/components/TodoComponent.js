import Component from "../Component";
import TodoView from "../views/TodoView";

export default class TodoComponent extends Component {
    constructor() {
        super()

        this.el = '#todo'

        this.view = TodoView

        this.setState({state: [
            {
                id: 1,
                title: "Do me please",
                done: false
            },
            {
                id: 2,
                title: "haha",
                done: false
            }
        ]})

        /*
        setInterval(() => {
            let s = [...this.state]
            s.push({id: s.length + 1, title: "New task"})
            this.setState({state:s})
        }, 3000 )*/
    }
}