import {MainPage} from "src/pages/MainPage";
import {Computers} from "src/pages/Computers";
import {Laptops} from "src/pages/Laptops";

/**
 * Page connections
 */

export class BasePage {

    public mainPage: MainPage;
    public computers: Computers;
    public laptops: Laptops;

    constructor(protected browser: WebdriverIO.Client<void>) {
        this.mainPage = new MainPage(browser);
        this.computers = new Computers(browser);
        this.laptops = new Laptops(browser);
    }
}

