/**
 * Created by dannyyassine on 2017-03-14.
 */
import Controller from './base.controller';

export default class ShotsListController extends Controller {

    constructor(getShotsInteractor) {
        super();
        this.getShotsInteractor = getShotsInteractor;
    }

    onLoad() {
        super.onLoad();

        this.getShotsInteractor.getShots(1, (shots, error) => {
            this._handleShot(shots, error);
        });
    }

    _handleShot(shots, error) {
        if (shots) {
            this.vm.loading = false;
            this.vm.presentShots(shots);
        } else {
            
        }
    }

}