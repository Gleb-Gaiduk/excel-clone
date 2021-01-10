import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
    constructor(componentRoot, options = {}) {
        super(componentRoot, options.listeners)
    }

    toHTML() {
        return '';
    }

    initListeners() {
        this.initDomListeners();
    }
}