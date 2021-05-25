const { expect } = require("chai");

describe('Webdriver universtiy', () => {
    it('Get title of the webdriver university website', () => {
        browser.url('/');

        console.log(browser.getTitle());
    
        console.log('Title of the page : ');
        expect(browser.getTitle()).to.have.string('WebDriverUniversity.com');

    });
});