export default class View {
    constructor() {
        this.component = null
        this.data = null
        this.el = null

        this.forms = []
    }

    /**
     * Return HTML template
     */
    template() {
        return '[View]'
    }

    /**
     * 
     * @param {*} form 
     */
    _handleFormSubmit(form) {
        this.onFormSubmit(form)
    }

    /**
     * 
     * @param {*} button 
     */
    _handleButtonClick(button) {
        this.onButtonClick(button)
    }

    /**
     * Called when form from view is submitted
     * 
     * @param {HTMLFormElement} form 
     */
    onFormSubmit(form) {

    }

    /**
     * Called when button is clicked
     * 
     * @param {HTMLElement} button 
     */
    onButtonClick(button) {

    }

    /**
     * Bind events for buttons and forms so they can be handled 
     * with onFormSubmit and onButtonClick
     */
    bindEvents() {
        let forms = this.el.getElementsByTagName("form")
        let buttons = this.el.getElementsByTagName("button")

        for (let i = 0; i < forms.length; i++) {
            let form = forms[i]

            this.forms [form.name] = form

            form.addEventListener("submit", (ev) => {
                ev.preventDefault()
                    this._handleFormSubmit(form)
            })
        }

      
        for (let i = 0; i < buttons.length; i++) {
            let btn = buttons[i]

            if(btn.type != 'submit') {
               
             

                    btn.addEventListener("click", () => {
                        this._handleButtonClick(btn)
                    })
                   
               
            }
        }
       
    }

    /**
     * Create element for that view
     */
    create() {

        let e = document.createElement('div')
        e.innerHTML = this.template()
        if(this.data) {
            e.dataset.vlIndex = this.data.index 
        }
        this.el = e

        return this.el
    }

    /**
     * Update element
     */
    update() {
        this.el.innerHTML = this.template()
    }
}