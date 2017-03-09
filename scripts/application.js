/**
 * Created by dannyyassine on 2017-03-06.
 */
import Vue from '../vendors/vue';
import VueRouter from '../vendors/vue-router';

import ApplicationController from './controllers/application.controller';

import Home from './presentation/components/home.component';
import About from './presentation/components/about.component';
import RandomShot from './presentation/components/randomShot.component';

Vue.use(VueRouter);

let applicationController = new ApplicationController();

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/shot', component: RandomShot}
];

const router = new VueRouter({
    routes
});

var app = new Vue({
    el: '#app',
    router: router,
    template: require("../partials/base.html"),
    data: {
        presenter: applicationController
    },
    ready() {
        this.presenter.bind(this);
    },
    mounted() {
        this.presenter.onLoad();
    },
    methods: {
    }
});
