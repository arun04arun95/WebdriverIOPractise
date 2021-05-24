
describe('Launch browser chrome', () => {
    let Pagetitle;
    it('Open WebdriverIO get title', () => {
        browser.url('https://webdriver.io/');
       // $('//button[@class="close"]').click();
       browser.maximizeWindow();
       
        console.log('Title is: ' + browser.getTitle());

        //expect(Pagetitle).to.equal("WebdriverIO · Next-gen browser and mobile automation test framework for Node.js");
        // outputs: "Title is: WebdriverIO · Next-gen browser and mobile automation test framework for Node.js'"
    });

    it('Navigate to WebdriverIO docs page and get title ', () => {
        browser.url('https://webdriver.io/');
       // $('//button[@class="close"]').click()
        
        console.log('Title is: ' + browser.getTitle());
         // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"

       // expect(Pagetitle).to.be.equal('WebdriverIO · TNext-gen browser and mobile automation test framework for Node.js');

        $('//a[text()="Docs"]').click();
        console.log(browser.getTitle());
         // outputs: "Title is: Getting Started · WebdriverIO"
       // expect(Pagetitle).to.be.equal('Getting Started · WebdriverIO');
    });
});