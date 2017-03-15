/**
 * Created by dannyyassine on 2017-03-14.
 */

import ShotsListController from '../../presentation/controllers/shotsList.controller';
import ShotLocalStorage from './../../data/storage/shotStorage';
import GetShots from './../../domain/interactors/getShots';

export default class ShotsListFactory {
    static data() {

        let storage = new ShotLocalStorage();
        let getShots = new GetShots(storage);
        let controller = new ShotsListController(getShots);
        var shots = [];

        return {
            presenter: controller,
            shots: shots
        }
    }
}