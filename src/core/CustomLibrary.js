class DomLibrary {
    constructor() {
        
    }
};

export function $() {
    return new DomLibrary();
};

$.createDomNode = (tagName, classes = '') => {
    const domNode = document.createElement(tagName);
    if (classes) {
        domNode.classList.add(classes);
    }
    return domNode;
};