import {ExcelComponent} from "@core/ExcelComponent";

export class Toolbar extends ExcelComponent {
    static className = 'toolbar';
    
    getElementHTML() {
        return (
            `
                <button class="toolbar__button">
                    <i class="toolbar__button-icon material-icons">format_align_left</i>
                </button>
                
                <button class="toolbar__button">
                    <i class="toolbar__button-icon material-icons">format_align_center</i>
                </button>
                
                <button class="toolbar__button">
                    <i class="toolbar__button-icon material-icons">format_align_right</i>
                </button>
                
                <button class="toolbar__button">
                    <i class="toolbar__button-icon material-icons">format_bold</i>
                </button>
                
                <button class="toolbar__button">
                    <i class="toolbar__button-icon material-icons">format_italic</i>
                </button>
                
                <button class="toolbar__button">
                    <i class="toolbar__button-icon material-icons">format_underline</i>
                </button>
            `
        );
    }
};