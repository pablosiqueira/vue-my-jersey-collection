import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/home/Home'
import Not_Found from '@/views/Not-Found'
import List from '@/views/List'
import Manutd_1 from '@/views/manutd/manutd-98-99-home'
import Manutd_2 from '@/views/manutd/Manutd-94-95-Away'
import Borussia_1 from '@/views/borussia/Borussia-17-18-Home'
import France_1 from '@/views/france/France-08-Home'
import Celtic_1 from '@/views/celtic/Celtic-18-19-Home'
import Sampdoria_1 from '@/views/sampdoria/Sampdoria-17-18-Home'
import HJK_1 from '@/views/hjk/HJK-13-14-Home'
import Milan_1 from '@/views/milan/Milan-19-20-Home'
import SPFC_1 from '@/views/spfc/SPFC-12-Away'
import Ajax_1 from '@/views/ajax/Ajax-94-95-Home'

Vue.use(Router)

const routes = [
    {
        name: 'Home',
        path: '/home',
        component: Home,
    },
    {
        name: 'Manchester-98-99-Home',
        path: '/manutd-98-99-home',
        component: Manutd_1,
    },
    {
        name: 'Manchester-94-95-Away',
        path: '/manutd-94-95-away',
        component: Manutd_2,
    },
    {
        name: 'Borussia-Dortmund-17-18-Home',
        path: '/borussiadortmund-17-18-home',
        component: Borussia_1,
    },
    {
        name: 'France-08-Home',
        path: '/france-08-home',
        component: France_1,
    },
    {
        name: 'Celtic-18-19-Home',
        path: '/celtic-18-19-home',
        component: Celtic_1,
    },
    {
        name: 'Sampdoria-17-18-Home',
        path: '/sampdoria-17-18-home',
        component: Sampdoria_1,
    },
    {
        name: 'HJK-13-14-Home',
        path: '/hjk-13-14-home',
        component: HJK_1,
    },
    {
        name: 'Milan-19-20-Home',
        path: '/milan-19-20-home',
        component: Milan_1,
    },
    {
        name: 'SPFC-12-Away',
        path: '/spfc-12-away',
        component: SPFC_1,
    },
    {
        name: 'Ajax-94-95-Home',
        path: '/ajax-94-95-home',
        component: Ajax_1,
    },
    {
        path: '/',
        redirect: '/home',
    },
    {
        name: 'Not-Found',
        path: '/error404',
        component: Not_Found,
    },
    {
        name: 'List',
        path: '/jersey-list',
        component: List,
    },
    {
        path: '*',
        redirect: '/error404',
    }

]

const router = new Router({ routes })



export default router