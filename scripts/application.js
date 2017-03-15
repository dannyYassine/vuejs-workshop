/**
 * Created by dannyyassine on 2017-03-06.
 */
import Vue from './../vendors/vue';
import {router, routes} from './application/routing/applicationRouter';
import ApplicationFactory from './application/factories/applicationFactory';
import template from './../partials/base.html';

let data = ApplicationFactory.applicatonData();
data.routes = routes;

var app = new Vue({
    el: '#app',
    router: router,
    template: template,
    data: data,
    beforeCreate() {

    },
    created() {
        this.presenter.bind(this);
    },
    beforeMount() {

    },
    mounted() {
        this.presenter.onLoad();
    },
    beforeUpdate() {

    },
    updated() {

    },
    beforeDestroy() {

    },
    destroyed() {

    },
    methods: {
    }
});