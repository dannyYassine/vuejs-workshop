/**
 * Created by dannyyassine on 2017-03-06.
 */
import Vue from './../vendors/vue';
import {router, routes} from './presentation/routing/applicationRouter';
import ApplicationFactory from './application/factories/applicationFactory';
import template from './../partials/base.html';
import {EventBus} from './application/eventBus';

let data = ApplicationFactory.applicatonData();
data.routes = routes;

var app = new Vue({
    el: '#app',
    router: router,
    template: template,
    data: data,
    methods: {
        onSignIn(from) {
            this.$router.push(from.query.source_path.replace("/", ""));
        }
    },
    beforeCreate() {

    },
    created() {
        this.presenter.bind(this);
        EventBus.$on('user-sign-in', this.onSignIn);
    },
    beforeMount() {

    },
    mounted() {
        this.presenter.onLoad();
        this.$router.push('/');
    },
    beforeUpdate() {

    },
    updated() {

    },
    beforeDestroy() {

    },
    destroyed() {

    }
});