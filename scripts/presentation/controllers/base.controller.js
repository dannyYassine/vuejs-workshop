/**
 * Created by dannyyassine on 2017-03-14.
 */

export default class Controller {
    constructor() {
        this.vm = null;
    }
    bind(vm) {
        this.vm = vm;
    }
    onLoad() {}
    onUnLoad() {

    }
}