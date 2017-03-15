/**
 * Created by dannyyassine on 2017-03-11.
 */
import Vue from './../../../../vendors/vue';
import template from './../../../../partials/sub-components/component-2.html';
import {EventBus} from './../../../application/eventBus';

const Component2 = Vue.component('component-2', {
    data() {
        var data =  {
            nameText: ""
        };
        return data;
    },
    template: template,
    props: ['count', 'inputText'],
    methods: {
        description() {

        },
        increment() {
            "use strict";
            this.count += 1;
        },
        inputTextDidChance(text) {
            this.nameText = text;
        }
    },
    ready() {

    },
    mounted() {
        this.$on('compo-1', (args) => {
            console.log(args);
        });
        EventBus.$on('INPUT_TEXT_DID_CHANGE', this.inputTextDidChance)
    },
    destroyed() {
        EventBus.$off('INPUT_TEXT_DID_CHANGE', this.inputTextDidChance)
    }
});

export default Component2;