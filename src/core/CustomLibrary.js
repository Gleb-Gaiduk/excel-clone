class DomLibrary {
    constructor(nodeSelector) {
        this.domNode = typeof nodeSelector === 'string' ?
            document.querySelector(nodeSelector)
            : nodeSelector;
    }

    setHtml(html) {
        if (typeof  html === 'string') {
            this.domNode.innerHTML = html;
            return this;
        } else {
            return this.domNode.outerHTML.trim();
        }
    }

    clearHtml() {
        this.setHtml('');
        return this;
    }

    on(eventType, callback) {
        this.domNode.addEventListener(eventType, callback);
    }

}

export function $(nodeSelector) {
    return new DomLibrary(nodeSelector);
}

$.createDomNode = (tagName, classes = '') => {
    const domNode = document.createElement(tagName);
    if (classes) {
        domNode.classList.add(classes);
    }
    return domNode;
};