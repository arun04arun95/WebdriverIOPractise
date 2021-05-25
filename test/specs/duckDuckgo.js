const { expect } = require("chai");

describe('Launch browser chrome', () => {
    let title;
    it('Open WebdriverIO get title', () => {
        browser.url('https://webdriver.io/')
        $('//button[@class="close"]').click()
        title = browser.getTitle()
        console.log('Title is: ' + title)

        expect(title).to.equal("WebdriverIO · Next-gen browser and mobile automation test framework for Node.js");
        // outputs: "Title is: WebdriverIO · Next-gen browser and mobile automation test framework for Node.js'"
    })

    it('Navigate to WebdriverIO docs page and get title ', () => {
        browser.url('https://webdriver.io/')
       // $('//button[@class="close"]').click()
        title = browser.getTitle()
        console.log('Title is: ' + title)
         // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"

         expect(title).to.be.equal('WebdriverIO · TNext-gen browser and mobile automation test framework for Node.js');

      $('//a[text()="Docs"]').click()
        title = browser.getTitle()
         // outputs: "Title is: Getting Started · WebdriverIO"
       expect(title).to.be.equal('Getting Started · WebdriverIO')
    })
})