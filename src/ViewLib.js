class ViewLib {

    constructor() {
        this.components = []
        this.views = []
    }

    /**
     * Register component with name 
     * 
     * @param {string} name 
     * @param {Component} component 
     */
    registerComponent(name, component) {
        let c = new component()
        c.create()

        this.components.push({
            name: name,
            component: c
        })
    }

    /**
     * Adds view to element, note that it is not reactive in anyway,
     * but can access state of different components.
     * 
     * @param {View} view 
     * @param {string} el 
     */
    registerView(view, el) {
        let element = document.querySelector(el)

        let v = new view() 
        v.create()
        element.appendChild(v.el)
        v.bindEvents()

        this.views.push({name: 'View #' + this.views.length + 1, view: v})
    }

    /**
     * Returns component
     * 
     * @param {string} name 
     */
    getComponent(name) {
        return this.components.find(v => {
            return v.name == name
        }).component
    }

}

const viewLib = new ViewLib()

export default viewLib