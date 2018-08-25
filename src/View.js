export default class View {
    constructor() {
        this.component = null
        this.data = null
        this.el = null
    }

    template() {
        return '[View]'
    }

    _handleFormSubmit(form) {
        this.onFormSubmit(form)
    }

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

    bindEvents() {
        let forms = this.el.getElementsByTagName("form")
        let buttons = this.el.getElementsByTagName("button")

        for (let i = 0; i < forms.length; i++) {
            let form = forms[i]

            form.onsubmit = (ev) => {
                ev.preventDefault()

                this._handleFormSubmit(form)
            }
        }

        for (let i = 0; i < buttons.length; i++) {
            let btn = forms[i]

            btn.onsubmit = (ev) => {
                ev.preventDefault()

                this._handleFormSubmit(btn)
            }
        }
    }

    create() {

        let e = document.createElement('div')
        e.innerHTML = this.template()
        this.el = e

        return this.el
    }

    update() {
        this.el.innerHTML = this.template()
    }
}