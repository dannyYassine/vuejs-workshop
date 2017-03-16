/**
 * Created by dannyyassine on 2017-03-16.
 */

import Vue from './../../../../vendors/vue';
import template from './../../../../partials/cards/shot-image-card.html';

const CardShot = Vue.component('card-shot', {

    data: function() {
        return {};
    },
    props: ['shot'],
    template: template,
    methods : {
        detailClicked(event) {
            this.$emit('detail-clicked', this.shot);
        }
    }
});

export default CardShot;