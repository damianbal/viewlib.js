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
                title: "Do me please 🙏",
            },
            {
                id: 2,
                title: "I am cool 😎",
            },
            {
                id: 3,
                title: "Please do not remove me 🙀"
            }
        ]})

        /*
        setInterval(() => {
            let s = [...this.state]
            s.push({id: s.length + 1, title: "New task #" + Number(s.length + 1)})
            this.setState({state:s})
        }, 4000 )
        */
    }
}