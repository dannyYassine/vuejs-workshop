/**
 * Created by dannyyassine on 2017-03-07.
 */
import Presenter from './basePresenter.presenter.js';

export default class RandomShotPresenter extends Presenter {

    /**
     * @property {LocalStorage} shotStorage
     */
    constructor(getShotsInteractor) {
        super();
        this.counter = 0;
        this.vm = null;
        this.getShotsInteractor = getShotsInteractor;
    }
    onLoad() {
        super.onLoad();
        this.getShotsInteractor.getCachedShot((shot, error) => {
            this._handleShot(shot, error);
        });
    }

    startRequest(callback = () => {}) {
        this.vm.loading = true;
        this.counter += 1;
        this.getShotsInteractor.getRandomShot((shot, error) => {
            this._handleShot(shot, error);
        });
    }

    _handleShot(shot) {
        this.vm.presentShot(shot);
        this.vm.loading = false;
    }

}