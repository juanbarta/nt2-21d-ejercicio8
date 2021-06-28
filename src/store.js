import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex,VueAxios,axios)

export default new Vuex.Store({
    state: {
        url: 'https://60ad4f1680a61f0017330b61.mockapi.io/usuariosDos',
        users: [],

    },
    actions: {
        getUsuarios({commit}){
            commit('getUsuarios');
        },
        postUsuario({commit}, formData){
            commit('postUsuario', formData)
        }
    },
    getters:{
        getCols: state =>{
                return Object.keys(state.users[0])
              }
        },
    mutations: {
        async getUsuarios(state) {
            try {
              let response = await axios(state.url)
              console.log('GET USUARIOS - ASYNC AWAIT', response.data)
              state.users = response.data
            }
            catch(error) {
              console.error(error)
            }
          },
          async postUsuario(state, formData){
            try {
              let response = await axios.post(state.url,{...formData},{'content-type':'application/json'})
              console.log('POST USUARIO - ASYNC AWAIT', response.data)
            }
            catch(error) {
              console.error(error)
            }
          },
    }
})