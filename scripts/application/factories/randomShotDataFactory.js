/**
 * Created by dannyyassine on 2017-03-07.
 */

import RandomShotController from '../../presentation/controllers/randomShot.controller';
import ShotLocalStorage from './../../data/storage/shotStorage';
import GetShots from './../../domain/interactors/getShots';

export default class RandomShotDataFactory {
    static data() {

        let storage = new ShotLocalStorage();
        let getShots = new GetShots(storage);
        let randomShotPresenter = new RandomShotController(getShots);
        
        return {
            someMessage: "Welcome to the Dribbble API",
            presenter: randomShotPresenter
        }
    }
}