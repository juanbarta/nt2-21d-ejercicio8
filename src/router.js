import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)
import Formulario from './componentes/Formulario/index.vue'
import Http from './componentes/Http.vue'
import Inicio from './componentes/Inicio.vue'

export const router = new VueRouter({
    mode: 'history',
    routes : [
        {path: '/', component: Inicio},
        {path: '/formulario', component: Formulario},
        {path: '/http', component: Http}


    ]
})