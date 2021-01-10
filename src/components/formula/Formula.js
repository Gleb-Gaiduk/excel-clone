import {ExcelComponent} from "@core/ExcelComponent";


export class Formula extends ExcelComponent {
    static className = 'formula';

    constructor(componentRoot) {
        super(componentRoot, {
            name: 'Formula',
            listeners: ['input']
        });
    }
    
    getElementHTML() {
        return (
            `<div class="formula__info">fx</div>
             <div class="formula__input" contenteditable spellcheck="false"></div>
            `
        );
    }

    onInput(evt) {
        console.log('Formula onInput', evt);
    }
};