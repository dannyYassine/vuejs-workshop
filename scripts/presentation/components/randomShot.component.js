/**
 * Created by dannyyassine on 2017-03-07.
 */
import Vue from '../../../vendors/vue';
var template = require('../../../partials/randomShot.html');
import RandomShotDataFactory from './../../application/factories/randomShotDataFactory';
import DetailShot from './detailShot.component.js';

let data = RandomShotDataFactory.data();

/**
 * @props presenter: RandomShotPresenter
 * @props shot: Shot (initially null)
 */
const RandomShot = Vue.extend({
    data: function() {
        data.shot = null;
        data.loading = true;
        data.showModal = false;
        return data;
    },
    template: template,
    methods: {
        startRequestPressed() {
            this.presenter.startRequest();
        },
        presentShot(shot) {
            this.shot = shot;
        },
        detailShotClicked(shot) {
            this.showModal = true;
        }
    },
    created() {
        this.presenter.bind(this);
    },
    mounted() {
        this.presenter.onLoad();
    }
});

export default RandomShot;