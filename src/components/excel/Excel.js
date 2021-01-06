import {$} from '@core/CustomLibrary';

export class Excel {
    constructor(appRootSelector, components) {
        this.appRootElement = document.querySelector(appRootSelector);
        this.appComponents = components || [];
    }
    
    getComponentNode(componentClass) {
        const componentRoot = $.createDomNode('div', componentClass.className);
        const component = new componentClass(componentRoot);
        componentRoot.innerHTML = component.getElementHTML();
        
        return componentRoot;
    }
    
    getAllComponentsNodes(components) {
        const componentsWrapper = $.createDomNode('div', 'excel');
        
        components.forEach(Component => {
            const componentNode = this.getComponentNode(Component);
            componentsWrapper.append(componentNode);
        });
        
        return componentsWrapper;
    }
    
    renderAllComponents() {
        this.appRootElement.append(this.getAllComponentsNodes(this.appComponents));
    }
}