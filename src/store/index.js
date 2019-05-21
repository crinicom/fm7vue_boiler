import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';
import myApp from '../app'

Vue.use(Vuex)

export const store = new Vuex.Store({
   // export default new Vuex.Store({
    state: {
        loadedProjects: [
            //minuto 5.28 video manage state with vuex
        ],
        user: null
    },
    mutations: {
        setUser (state, payload) {
            state.user = payload
        }
    },
    actions: {
        //createmeetup()
        signUserUp ({commit}, payload) {
            const self = this;
            const app = self.$f7;
           // const router = self.$f7router;
            firebase.auth().createUserWithEmailAndPassword(payload.username, payload.password)
            .then(user => { 
                const newUser = {
                    id: user.uid,
                    registeredProjects: []
                }
                commit('setUser',newUser);
                //myApp.$f7.router.navigate('/');
                myApp.$f7ready(($f7) => {$f7.views.main.router.navigate('/');});
                //self.$f7ready(($f7) => {$f7.views.main.router.navigate('/');});
                //app.router.navigate('/');
            })
            .catch(error => {
                console.log(error.message);
               /*  app.dialog.alert(error.message, () => {
                    console.log(error.message);
                    }); */
            })
            }
    },
    getters: {
        loadedProjects (state) {
            return state.loadedProjects.sort();
        },
        loadedProject(state) {
            return (ProjectId) => {
                return state.loadedProjects.find((project) => {
                    return project.id === ProjectId
                })
            }
        },
        user (state) {
            return state.user
        }

    }
})

export default store;