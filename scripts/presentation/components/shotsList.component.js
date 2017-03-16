/**
 * Created by dannyyassine on 2017-03-14.
 */
import Vue from '../../../vendors/vue';
var template = require('../../../partials/shotsList.html');
import ShotsListFactory from './../../application/factories/shotsList.factory';
import DetailShot from './detailShot.component.js';
import CardShot from './cards/cardShot.component.js';

/**
 * @props presenter: RandomShotPresenter
 * @props shot: Shot (initially null)
 */
const ShotsList = Vue.extend({
    data: function() {
        var data = ShotsListFactory.data();
        data.loading = true;
        data.showModal = false;
        data.selectedShot = null;
        return data;
    },
    template: template,
    methods: {
        presentShots(shots) {
            this.shots = shots;
        },
        detailShotClicked(shot) {
            this.selectedShot = shot;
            this.showModal = true;
        },
        dismissModal() {
            this.showModal = false;
        }
    },
    created() {
        this.presenter.bind(this);
    },
    mounted() {
        this.presenter.onLoad();
    },
    components: {
        'shot-item': DetailShot
    }
});

export default ShotsList;