export default class Component {

    constructor() {
        this.el = '#component'
        this.view = null
        this.state = []
        this.views = []
    }

    setState({
        state = []
    }) {
        this.prevState = this.state;
        this.state = state;

        this._onSetState()
    }

    addToState(item) {
        let s = [...this.state]
        item.id = this.state.length + 1
        s.push(item)
        this.setState({state: s})
    }

    didItemsChange(itemA, itemB) {
        return JSON.stringify(itemA) != JSON.stringify(itemB);
    }

    removeView(index) {
        
    }

    create() {
        let htmlEl = document.querySelector(this.el)

        let toBeRemoved = []

        // Check if any of the views don't have state item anymore
        // if they do not then remove them from DOM and this.views
        this.views.forEach((view, index) => {
            let stateItems = this.state.filter(s => s.id == view.id)
            
            console.log('view', view, index, stateItems.length)

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
                // did state changed for that item?
                // if not then do not update it, leave it as it is
                if(this.didItemsChange(item, this.prevState[index])) {
                    v.view.data = item

                    v.view.component = this // should be that anyway
                    v.view.update()
                }
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

    _onSetState() {
        this.create()
    }

}