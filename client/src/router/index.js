import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Category from "../views/Category.vue"
import Cart from "../views/Cart.vue"
import Story from "../views/Story.vue"
import OthersProducts from "../views/OthersProducts.vue"
import Process from "../views/Process.vue"
import About from "../views/About.vue"


const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register
    }
    ,
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    }
    ,
    {
        path: '/about',
        name: 'About',
        component: About
    }
    , {
        path: '/process',
        name: 'Process',
        component: Process
    }
    , {
        path: '/othersproducts',
        name: 'OthersProducts',
        component: OthersProducts
    }
    , {
        path: '/story',
        name: 'Story',
        component: Story
    }
    ,
    {
        path: '/:category',
        component: Category
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router