import {BaseHelper} from "src/helpers/BaseHelper";

/**
 * Selectors and methods for the Computers page
 */

export class Computers extends BaseHelper {

    get laptopsAndNetbooks() {
        return this.getElement('span=Ноутбуки и нетбуки');
    }
}