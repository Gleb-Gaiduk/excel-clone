import {$} from '@core/CustomLibrary';

export class Excel {
    constructor(appRootSelector, components) {
        this.appRootElement = document.querySelector(appRootSelector);
        this.appComponents = components || [];
    }

    getAllComponentsNodes() {
        const componentsWrapper = $.createDomNode('div', 'excel');
        this.appComponents = this.appComponents.map(Component => {
            const componentNode = $.createDomNode('div', Component.className);
            const componentInstance = new Component(componentNode);
            $(componentNode).setHtml(componentInstance.getElementHTML());
            componentsWrapper.append(componentNode);
            return componentInstance
        });
        return componentsWrapper;
    }

    renderAllComponents() {
        this.appRootElement.append(this.getAllComponentsNodes());
        this.appComponents.forEach(component => component.initListeners());
    }
}