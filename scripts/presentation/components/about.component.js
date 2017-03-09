/**
 * Created by dannyyassine on 2017-03-07.
 */
import Vue from '../../../vendors/vue';
var template = require('../../../partials/about.html');

const About = Vue.extend({
    data: function() {
        "use strict";
        return {someMessage: "Hellow from home"}
    },
    template: template
});

export default About;