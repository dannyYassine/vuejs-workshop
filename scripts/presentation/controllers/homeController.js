/**
 * Created by dannyyassine on 2017-03-06.
 */

export default class HomeController {

    constructor(vm) {
        this.vm = vm;
        this.counter = 0;
    }

    increment() {
        this.counter += 1;
        console.log("hello world1");
    }

}