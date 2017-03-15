/**
 * Created by dannyyassine on 2017-03-10.
 */
import Vue from './../../../vendors/vue';
import template from './../../../partials/sendPush.html';

const SendPush = Vue.extend({
    template: template,
    data: function () {
        let data = {
            message: {
                greeting: ""
            },
            outputMessage: ""
        };
        return data;
    },
    computed: {
        formattedMessage() {
            return this.message.greeting + ' ' + "copy";
        },
        inputMessage() {
            "use strict";
            return `${this.outputMessage} was entered`;
        }
    },
    watch: {
        'message.greeting': function(newMsg) {
          console.log(newMsg);
      },
        outputMessage(newValue) {
            console.log(newValue);
        }
    },
    methods: {
        buttonClicked() {
            this.outputMessage = this.message.greeting;
        }
    }
});

export default SendPush;