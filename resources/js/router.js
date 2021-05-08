import { createRouter, createWebHistory } from 'vue-router';
import Login from "./views/Login";
import Home from "./components/Home";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: { guestOnly: true }

        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: { guestOnly: true }
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
            meta: { guestOnly: true }
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            meta: { authOnly: true }
        },
    ]
});

function isLoggedIn() {
    return localStorage.getItem("isLoggedIn");
}

router.beforeEach((to, from, next) => {
    if (to.meta.authOnly && !isLoggedIn()) next({ name: 'Login' })
    else next()
})


export default router;
