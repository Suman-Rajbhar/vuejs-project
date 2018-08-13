import Vue from 'vue';
import Router from 'vue-router';
import Skills from './components/Skills.vue';
import Coded from './components/Coded.vue';
import About from './components/About.vue';

Vue.use(Router);

export default new Router({
    routes :[
    {        
        path : '/',
        name : 'skills',
        component : Skills
    },
    {        
        path : '/about/:skill',
        name : 'about',
        component : About
        },
    {        
        path : '/coded',
        name : 'coded',
        component : Coded
    },
]
})