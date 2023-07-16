import { createRouter, createWebHistory } from "vue-router";

import About from "../views/About.vue";
import Contacts from "../views/Contacts.vue";
import Skills from "../views/Skills.vue";
import Projects from "../views/Projects.vue";

const routes = [
    {
        path : '/',
        name : 'about',
        component : About
    },
    {
        path : '/contacts',
        name : 'contacts',
        component : Contacts
    },
    {
        path : '/projects',
        name : 'projects',
        component : Projects
    },
    {
        path : '/skills',
        name : 'skills',
        component : Skills
    },
    {
        path : '/download',
        name : 'download',
        component : Skills
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;