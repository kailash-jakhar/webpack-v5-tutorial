import './Button.scss';
class Button {
    label = '';
    onClick= null
    buttonClass = 'button'
    // constructor(label) {
    //     this.label = label
    // }
    render() {
        const button = document.createElement('button')
        button.classList.add(this.buttonClass)
        button.innerHTML = this.label;
        button.onclick = this.onClick
        document.getElementById("root").appendChild(button)
    }
}

export default Button