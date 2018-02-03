import {BaseHelper} from "src/helpers/BaseHelper";

/**
 * Selectors and methods for the laptops page
 */

export class Laptops extends BaseHelper {

    _manufacturerName: string = "Dell";
    _nameAndCounter: string;
    _counterInFoundList: string;

    /**
     * Filter block
     */

    get filterParent() {
        return this.getElement('.ModelFilter__CheckboxBlock.ModelFilter__PositionWindowCounter')
    }

    get more() {
        return this.getElement('span=Еще');
    }

    get dell() {
        return this.getElement(this.filterParent.selector + ' [for="prof_1000_2023"]');
    }

    get manufacturerNameAndCounter() {
        return this.getElement(
            '.ModelFilter__ParamBlock.ModelFilter__ParamBlockSelected [for="prof_1000_2023"] ' +
            '.ModelFilter__ClassifCountBlock');
    }

    public assertManufacturerAndCounterInFilterBlock(counterValue: string) {
        this._nameAndCounter = this.manufacturerNameAndCounter.getText();
        this._nameAndCounter.includes(counterValue);
        this._nameAndCounter.includes(this._manufacturerName);
    }

    /**
     * Widget
     */

    get counterInWidget() {
        return this.getElement('#count_item');
    }

    get show() {
        return this.getElement('.ModelFilter__NumModelBtn.Page__ActiveButtonBg.ModelFilter__GALink');
    }

    /**
     * List block
     */

    get foundListCounter() {
        return this.getElement('.PanelSetUp__CountBlockItem')
    }

    public assertCouterInListBlock() {
        this._counterInFoundList = this.foundListCounter.getText();
        this._counterInFoundList.includes(this._counterInFoundList);
    }
}