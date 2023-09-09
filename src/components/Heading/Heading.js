import './heading.scss';
class Heading {
    text = ''
    constructor(level) {
        this.level = level
    }

    render (pageNo) {
        const headingElement = document.createElement(`h${this.level}`);
        headingElement.innerHTML = this.text + `${pageNo}`;
        document.getElementById('root').appendChild(headingElement)
    }
}

export default Heading