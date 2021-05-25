const ALLOWED_PLATFORMS = ['web', 'ios', 'android', 'mweb-android', 'mweb-ios'];
const ALLOWED_RUN_TYPES = ['smoke', 'regression', 'visual'];

class TestFilter {

    anyRunType(tags, testFn) {
        this.run = tags;
        this._validateTags(tags,ALLOWED_RUN_TYPES);
        if( typeof testFn === 'function') {
            this.exec(testFn);
        } else {
            return this;
        }
    }
    anyPlatform(tags, testFn) {
        this.platform = tags;
        this._validateTags(tags,ALLOWED_PLATFORMS);
        if( typeof testFn === 'function') {
            this.exec(testFn);
        } else {
            return this;
        }
    }
    _validateTags(tags, allowedTags) {
        let tagsNotPresent =tags.filter(tags => !allowedTags.includes(tags));
        if(tagsNotPresent.length >0) {
            throw new Error (`Tags: ${allowedTags} are not allowed, supported tags are ${allowedTags}` );
        }
    }
    exec (testFn) {
        if (this._runTypeFound()  && this.platformFound() ) { 
            testFn(); 
        }
    }
    _runTypeFound() {
        if(typeof this.run === 'undefined' || !process.env.RUN_TYPE) { return true; }
        let runEnv = process.env.RUN_TYPE.split(';');
        return this.run.some(t => runEnv.includes(t));
    }
    platformFound() {
        if(typeof this.platform === "undefined" || !process.env.PLATFORM) { return true; }
        let platEnv = process.env.PLATFORM.split(';');
        return this.platform.some(t => platEnv.includes(t));
    }
}
export default new TestFilter();