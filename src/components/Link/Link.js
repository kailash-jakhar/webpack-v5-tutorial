class Link {
    render(href,content) {
        const link = document.createElement('a');
        link.href = href;
        link.innerHTML = content;
        document.getElementById('root').appendChild(link)
    }
}

export default Link