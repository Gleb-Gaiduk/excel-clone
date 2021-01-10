import {capitalize} from "@core/utils";
import {$} from "@core/CustomLibrary";

export class DomListener {
    constructor(componentRoot, listeners = []) {
        if (!componentRoot) {
            throw new Error ('No $root provided for DomListener');
        }
        this.componentRoot = componentRoot;
        this.listeners = listeners;
    }

    initDomListeners() {
        this.listeners.forEach(listener => {
            const callback = getMethodName(listener);
            console.log(callback)
            $(this.componentRoot).on(listener, () => {});
        })
    }

    removeDomListeners() {

    }
}

function getMethodName(eventName) {
    return 'on' + capitalize(eventName);
}