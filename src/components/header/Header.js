import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
    static className = 'header';
    
    getElementHTML() {
        return (
        `
            <input class="header__input" type="text" value="Новая таблица" />
            <div class="header__button-wrapper">
                <button class="header__button">
                    <i class="header__button-icon material-icons">exit_to_app</i>
                </button>
                <button class="header__button">
                    <i class="header__button-icon material-icons">delete</i>
                </button>
            </div>
        `
        );
    }
}