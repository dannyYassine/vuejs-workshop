/**
 * Created by dannyyassine on 2017-03-07.
 */
import { HttpService } from '../../data/services/httpService';
import Presenter from './basePresenter.presenter.js';

export default class RandomShotPresenter extends Presenter {

    constructor() {
        super();
        this.counter = 0;
        this.vm = null;
    }
    onLoad() {
        let shotId = localStorage.getItem('shot');
        if (shotId != null) {
            console.log(shotId);
            this.getShotWithId(shotId);
        }
    }

    startRequest(callback = () => {}) {
        this.vm.loading = true;
        this.counter += 1;
        let per_page = 100;
        var http = new HttpService();
        http.URL(`https://api.dribbble.com/v1/shots?access_token=9cc6c5a89983f37524e9c6d9536c033e03c778687dbb388d0f14ea7bb2595694&sort=recent&per_page=${per_page}&list=animated`)
            .GET()
            .execute((json) => {

                let shot = json[Math.floor(Math.random() * per_page)];
                callback(shot, null);

                localStorage.setItem('shot', shot.id);
                this.vm.presentShot(shot);
                this.vm.loading = false;
            }, (error) => {
                callback(null, error);
                this.vm.loading = false;
            });
    }

    getShotWithId(shotId) {
        this.vm.loading = true;
        this.counter += 1;
        var http = new HttpService();
        http.URL(`https://api.dribbble.com/v1/shots/${shotId}?access_token=9cc6c5a89983f37524e9c6d9536c033e03c778687dbb388d0f14ea7bb2595694&sort=recent&list=animated`)
            .GET()
            .execute((json) => {

                let shot = json;
                localStorage.setItem('shot', shot.id);
                this.vm.presentShot(shot);
                this.vm.loading = false;
                console.log(shot);
            }, (error) => {
                //callback(null, error);
                this.vm.loading = false;
            });

    }

}