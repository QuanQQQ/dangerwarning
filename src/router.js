import Router from 'vue-router'

import Welcome from './routes/Welcome'
import Home from './routes/Home'
export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            component:Welcome,
            redirect: '/Home'
        },
        {
            path: '/Home', 
            component:Home,
            children:[
            ]
        }
    ]
})