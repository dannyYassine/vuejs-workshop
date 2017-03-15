/**
 * Created by dannyyassine on 2017-03-11.
 */

import ApplicationController from './../../presentation/controllers/application.controller.js';

let applicationController = new ApplicationController();

export default class ApplicationFactory {

    static applicatonData() {
        let data = {
            presenter: applicationController
        };
        return data;
    }

}