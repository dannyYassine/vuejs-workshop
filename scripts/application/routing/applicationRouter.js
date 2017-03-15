/**
 * Created by dannyyassine on 2017-03-11.
 */

import VueRouter from './../../../vendors/vue-router';
import Vue from './../../../vendors/vue';

import Home from './../../presentation/components/home.component.js';
import About from './../../presentation/components/composition.component.js';
import RandomShot from './../../presentation/components/randomShot.component.js';
import SendPush from './../../presentation/components/sendPush.component.js';
import ShotsList from '../../presentation/components/shotsList.component';
import SignInComponent from '../../presentation/components/signIn.componenet';

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

pathsRequireLogin([shotsListRoute, pushRoute]);

const routes = [
    homeRoute,
    aboutRoute,
    dribbbleRoute,
    pushRoute,
    shotsListRoute,
    redirectRoute,
    signInRoute
];

function pathsRequireLogin(paths) {

    var validate = function validateSignedInUser() {
        return false;//localStorage.getItem('user_token') == null ? false : true;
    };

    var redirect = (to) => {
        console.log(to);
        if (validate()) {
            return to.path;
        } else {
            return `/sign_in?source_path=${to.path}`
        }
    };
    for (var path in paths) {
        paths[path].redirect = redirect;
    }
};
Vue.use(VueRouter);
const router = new VueRouter({
    routes
});

export {router, routes}
