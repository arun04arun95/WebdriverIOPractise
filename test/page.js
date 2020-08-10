export default class Page {

    open(path){
        browser.url(path);
    }

    wait(time){
        browser.pause(time);
    }

    waitForElementToAppear(elem, waitTime = 30000) {
        elem.waitForDisplayed(waitTime);
    }

    waitForElementToDisplay(elem, waitTime = 25000) {
        return elem.waitForDisplayed(waitTime);
    }
    
    waitForToEnable(elem, waitTime) {
        elem.waitforEnabled(waitTime);
    }

    waitForElementToBeClickable(elem, timeToWait = 55000) {
        elem.waitForClickable({ timeout: timeToWait });
    }

    waitForElementThenCLick(elem, waitTime) {
        var flag = false;
        driver.waitUntil(() => {
            try{
                elem.click();
                flag = true;
            } catch (err) {
                flag = false;
            }
            return flag;
        }, waitTime);
    }

    waitForElementToDisappear(elem, waitTime) {
        driver.waitUntil(() => {
            return elem.isDisplayed() === false;
        }, waitTime);
        return this;
    }

    bringElementToView(elem) {
        elem.scrolIntoView();
    }

    close() {
        browser.closeWindow();
    }

}
