import {BasePage} from "src/pages/BasePage";

export class LoginHelper extends BasePage {
    public openMainPage() {
        this.browser.url("https://shop.by/")
    }
}