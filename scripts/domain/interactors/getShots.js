/**
 * Created by dannyyassine on 2017-03-13.
 */

import {HttpService} from './../../data/network/httpService';
import {DribbbleWebService} from './../../data/network/dribbbleWebService';

export default class GetShots {

    constructor(shotStorage) {
        this.shotStorage = shotStorage;
    }

    getCachedShot(callback = () => {}) {
        let shot = this.shotStorage.get();
        if (shot) {
            this.getShotWithId(shot.id, callback);
        } else {
            this.getRandomShot(callback);
        }
    }

    getShots(page = 1, callback = () => {}) {

        var webService = new DribbbleWebService();
        webService
            .setShotEndpoint()
            .setPage(page)
            .setPerPage(100)
            .setSort(DribbbleWebService.Sort.RECENT)
            .execute((json) => {
                let shots = json;
                callback(shots, null);
            }, (error) => {
                callback(null, error);
            });

    }

    getShotWithId(shotId, callback = () => {}) {

        var webService = new DribbbleWebService();
        webService
            .setShotEndpoint()
            .setPathId(shotId)
            .execute((json) => {
                callback(json, null);
                this._handleShot(json);
            }, (error) => {
                callback(null, error);
            });
    }

    getRandomShot(callback = () => {}) {
        let per_page = 100;
        var http = new HttpService();
        http.URL(`https://api.dribbble.com/v1/shots?access_token=9cc6c5a89983f37524e9c6d9536c033e03c778687dbb388d0f14ea7bb2595694&sort=recent&per_page=${per_page}`)
            .GET()
            .execute((json) => {

                let shot = json[Math.floor(Math.random() * per_page)];
                callback(shot, null);
                this._handleShot(shot);

            }, (error) => {
                callback(null, error);
            });
    }

    _handleShot(shot) {
        this.shotStorage.set(shot);
    }

}