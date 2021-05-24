import TestFilter from "../../common/testFilter";
describe('Launch browser chrome', () => { 
    TestFilter.anyPlatform(['web']).anyRunType(['smoke'], () => {
        it('Open WebdriverIO', () => {
            browser.url('https://webdriver.io/');
               // $('//button[@class="close"]').click();
            browser.maximizeWindow();

        });
        it('Navigate to Docus pages', () => {
            $('//a[text()="Docs"]').click();
               // $('//button[@class="close"]').click();
        });
    });
});