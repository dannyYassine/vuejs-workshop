/**
 * Created by dannyyassine on 2017-03-14.
 */
import Vue from '../../../vendors/vue';
var template = require('../../../partials/sign-in.html');
import SignInFactory from './../../application/factories/signIn.factory';
import DetailShot from './detailShot.component.js';
import {EventBus} from './../../application/eventBus';

/**
 * @props presenter: RandomShotPresenter
 * @props shot: Shot (initially null)
 */
const SignIn = Vue.extend({
    data: function() {
        var data = SignInFactory.data();
        data.email = "";
        data.password = "";
        return data;
    },
    template: template,
    methods: {
        formDidSubmitted(event) {
            if (this.email.length > 5 && this.password.length > 0) {
                localStorage.setItem('user_token', "1234");
                EventBus.$emit('user-sign-in', this.$route);
            } else {
                
            }
        }
    },
    created() {
        this.presenter.bind(this);
    },
    mounted() {
        //this.presenter.onLoad();
    }
});

export default SignIn;