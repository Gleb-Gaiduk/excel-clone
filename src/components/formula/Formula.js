import {ExcelComponent} from "@core/ExcelComponent";


export class Formula extends ExcelComponent {
    static className = 'formula';
    
    getElementHTML() {
        return (
            `<div class="formula__info">fx</div>
             <div class="formula__input" contenteditable spellcheck="false"></div>
            `
        );
    };
};