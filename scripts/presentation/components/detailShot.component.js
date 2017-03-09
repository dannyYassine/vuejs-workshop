/**
 * Created by dannyyassine on 2017-03-08.
 */
import Vue from '../../../vendors/vue';
import template from './../../../partials/detailShot.html';

const DetailShot = Vue.component('detail-shot', {
    data() {
        return {}
    },
    props: ['shot'],
    template: template,
    mounted() {
        console.log("mounted");
    }
});

export default DetailShot;