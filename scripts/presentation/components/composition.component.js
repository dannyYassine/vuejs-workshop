/**
 * Created by dannyyassine on 2017-03-07.
 */
import Vue from '../../../vendors/vue';
var template = require('../../../partials/about.html');
import Component1 from './detail/component_1.component';
import Component2 from './detail/component_2.component';

const Compostion = Vue.extend({
    data: function() {
        "use strict";
        return {someMessage: "Hellow from home", total: 0, name: ""}
    },
    template: template,
    methods: {
        buttonPressed(args) {
            var compo2 = this.$refs.compo2;
            console.log(args);
            this.total += 1;
        },
        validateText(inputText) {
            if (inputText.length > 3) {
                this.name = inputText
            } else {
                this.name = "";
            }
        }
    }
});

export default Compostion;