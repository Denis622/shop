import {BaseHelper} from "src/helpers/BaseHelper";

/**
 * Selectors and methods for the MainPages
 */

export class MainPage extends BaseHelper{

    get computersButton() {
        return this.getElement('span=Компьютеры')
    }
}