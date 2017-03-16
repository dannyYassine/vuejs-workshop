/**
 * Created by dannyyassine on 2017-03-11.
 */

import VueRouter from './../../../vendors/vue-router';
import Vue from './../../../vendors/vue';

import Home from './../components/home.component.js';
import About from './../components/composition.component.js';
import RandomShot from './../components/randomShot.component.js';
import SendPush from './../components/sendPush.component.js';
import ShotsList from '../components/shotsList.component.js';
import SignInComponent from '../components/signIn.componenet.js';

import Route from './route';

let homeRoute = new Route();
homeRoute.component = Home;
homeRoute.nav_name = "Home";

let aboutRoute = new Route();
aboutRoute.path = "/composition";
aboutRoute.component = About;
aboutRoute.nav_name = "Composition";

let dribbbleRoute = new Route();
dribbbleRoute.path = "/dribbble";
dribbbleRoute.component = RandomShot;
dribbbleRoute.nav_name = "Dribbble";

let pushRoute = new Route();
pushRoute.path = "/push";
pushRoute.component = SendPush;
pushRoute.nav_name = "Push";

let shotsListRoute = new Route();
shotsListRoute.path = "/shots";
shotsListRoute.component = ShotsList;
shotsListRoute.nav_name = "Shots";

let redirectRoute = new Route();
redirectRoute.path = "/redirect";
redirectRoute.component = {};
redirectRoute.nav_name = "Redirect";

let signInRoute = new Route();
signInRoute.path = "/sign_in";
signInRoute.component = SignInComponent;

const routes = [
    homeRoute,
    aboutRoute,
    dribbbleRoute,
    pushRoute,
    shotsListRoute,
    signInRoute
];

var routesRequireLogin = [shotsListRoute, pushRoute];

Vue.use(VueRouter);
const router = new VueRouter({
    routes
});

var validateToken = function() {
    return localStorage.getItem('user_token');
};

router.beforeEach((to, from, next) => {
    routesRequireLogin.map((route) => {
        if (to.path == route.path) { // requires login
            if (!validateToken()) {
                next(`/sign_in?source_path=${to.path}`);
                return;
            }
        }
        next(); // continue
    });
});

export {router, routes}
