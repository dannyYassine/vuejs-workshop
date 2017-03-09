/**
 * Created by dannyyassine on 2017-03-07.
 */
import Vue from '../../../vendors/vue';
var template = require('../../../partials/home.html');

const Home = Vue.extend({
    data: function() {
        return {someMessage: "Hellow from home"}
    },
    template: template
});

export default Home;