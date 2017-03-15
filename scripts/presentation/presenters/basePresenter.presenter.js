/**
 * Created by dannyyassine on 2017-03-08.
 */

export default class Presenter {
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