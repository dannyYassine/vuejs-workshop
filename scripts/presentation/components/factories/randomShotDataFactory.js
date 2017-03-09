/**
 * Created by dannyyassine on 2017-03-07.
 */

import RandomShotPresenter from '../../presenters/RandomShotPresenter';

let randomShotPresenter = new RandomShotPresenter();

export default class RandomShotDataFactory {
    static data() {
        return {someMessage: "Hellow from home", presenter: randomShotPresenter}
    }
}