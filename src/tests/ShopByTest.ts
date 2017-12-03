import {BasePage} from "src/pages/BasePage";
import {LoginHelper} from "src/helpers/LoginHelper";

const basePage = new BasePage(browser);
const loginHelper = new LoginHelper(browser);

let counterValue: string;

describe("shop.by test", function () {

    it("should openMainPage page", async function () {
        loginHelper.openMainPage();
    });

    it("should compare amount of Dell computers", async function () {
        basePage.mainPage.computersButton.click();
        basePage.computers.laptopsAndNetbooks.click();
        basePage.laptops.more.click();
        basePage.laptops.dell.click();
        counterValue = basePage.laptops.counterInWidget.getText();
        basePage.laptops.show.click();

        basePage.laptops.assertManufacturerAndCounterInFilterBlock(counterValue);
        basePage.laptops.assertCouterInListBlock();
    })
});