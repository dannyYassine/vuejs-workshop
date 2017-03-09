/**
 * Created by dannyyassine on 2017-03-07.
 */
import Vue from '../../../vendors/vue';
var template = require('../../../partials/randomShot.html');
import RandomShotDataFactory from './factories/randomShotDataFactory';
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
        return data;
    },
    template: template,
    methods: {
        startRequestPressed() {
            this.presenter.startRequest();
        },
        presentShot(shot) {
            this.shot = shot;
        }
    },
    created() {
        this.presenter.bind(this);
    },
    mounted() {
        this.presenter.onLoad();

        var button = document.getElementById('request-button');
        button.addEventListener('click', this.startRequestPressed, false);
        
    }
});

export default RandomShot;