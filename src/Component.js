import _ from 'lodash'
    
export default class Component {

    constructor() {
        this.el = '#component'
        this.view = null
        this.state = []
        this.views = []
    }

    /**
     * Set state
     * @param {*} param0 
     */
    setState({
        state = []
    }) {
        this.prevState = this.state;
        this.state = state;

        this._onSetState()
    }

    /**
     * Add item to state, id is set automatically
     * @param {Object} item 
     */
    addToState(item) {
        let s = [...this.state]
        item.id = this.state.length + 1
        s.push(item)
        this.setState({state: s})
    }

    /**
     * Remove item from state by id
     */
    removeFromStateById(id) {
        let c = [...this.state]

        c.forEach((item,index) => {
            if(item.id == id) {
                    c.splice(index,1)
            }
        })

        this.setState({state: c})
    }

    /**
     * Remove item from state by index
     * @param {integer} index 
     */
    removeFromState(index) {
        let s = [...this.state];

        s.splice(index, 1)
        this.setState({state: s})
    }


    /**
     * Creates component, do not call it directly
     */
    create() {
        let htmlEl = document.querySelector(this.el)

        let toBeRemoved = []

        // Check if any of the views don't have state item anymore
        // if they do not then remove them from DOM and this.views
        this.views.forEach((view, index) => {
            let stateItems = this.state.filter(s => s.id == view.id)
            
            if(stateItems == 0) {
                toBeRemoved.push(view.id)
            }
        })

        // Remove views from DOM and this.views
        toBeRemoved.forEach(id => {

            this.views.forEach((view, index) => {
                if (view.id == id) {
                    htmlEl.removeChild(view.view.el)
                        this.views.splice(index, 1)
                }
            })
        })

        // Create or update views
        this.state.forEach((item, index) => {

            let v = this.views.find(v => v.id == item.id)

            // do we have view for that item?
            if (typeof v != 'undefined') {
                v.view.data = item
                v.view.update()
                v.view.bindEvents()
            } else { // view not present for that item so create new one
                let v = new this.view

                v.data = item
                v.data.index = index 
                v.component = this
                let e = v.create()
                htmlEl.appendChild(e)

                // catch events
                v.bindEvents()

                this.views.push({
                    id: item.id,
                    view: v, 
                    index: index
                })
            }


        })
    }

    /**
     * Called when state is changed
     */
    _onSetState() {
        this.create()
    }

}