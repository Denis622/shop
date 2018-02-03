export class BaseHelper {

    /**
     * The component for shorthand use selectors
     * Use this one for take elements on a page
     */

    constructor(protected browser: WebdriverIO.Client<void>) {
    }

    public getElement(selector: string, needVisible: boolean = true) {

        if (!this.browser.element(selector).isExisting()) {
            this.browser.element(selector).waitForExist()
        }

        if (needVisible && !this.browser.element(selector).isVisible()) {
            this.browser.element(selector).waitForVisible()
        }

        return this.browser.element(selector);
    }
}