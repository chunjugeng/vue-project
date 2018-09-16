import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './app.vue';
import cfgRouter from './routes/routes';


new Vue({
    el: '#app',
    router: cfgRouter,
    template: '<App />',
    components: { App },
    render: h => h(App)
});

