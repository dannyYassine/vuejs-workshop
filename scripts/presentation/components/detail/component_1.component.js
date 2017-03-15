/**
 * Created by dannyyassine on 2017-03-11.
 */
import Vue from './../../../../vendors/vue';
import template from './../../../../partials/sub-components/component-1.html';
import {EventBus} from './../../../application/eventBus';

const Component1 = Vue.component('component-1', {
    data() {
        return {
            inputText: ""
        }
    },
    template: template,
    methods: {
        buttonPressed() {
            this.$emit('buttonPressed', "hello");
        },
        inputTextDidChange(event) {
            this.$emit('inputTextDidChange', event.target.value);
            EventBus.$emit('INPUT_TEXT_DID_CHANGE', event.target.value);
        }
    },
    mounted() {
    }
});

Component1.INPUT_TEXT_DID_CHANGE = 'INPUT_TEXT_DID_CHANGE';

export default Component1;