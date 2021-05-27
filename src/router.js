import Vue from 'vue'
import VueRouter from 'vue-router'
import Formulario from './componentes/Formulario.vue'
import Http from './componentes/Http.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/formulario', component: Formulario },
        { path: '/http', component: Http }
    ]
})