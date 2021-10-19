import Vue from 'vue'
import App from './App.vue'
import Example from './components/example.vue'

const app = new Vue({
	render(h){
        return h(App)
    }
}).$mount('#app');