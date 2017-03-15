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
    methods: {
        description() {
            if (this.shot) {
                var divDetail = document.getElementById('detail');
                if (divDetail) {
                    divDetail.innerHTML = this.shot.description;
                }
            }
        },
        detailClicked(event) {
            this.$emit('detail-clicked', this.shot);
        }
    },
    mounted() {
        console.log("mounted");
    }
});

export default DetailShot;