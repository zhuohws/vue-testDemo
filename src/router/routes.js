import HelloWorld from '../components/HelloWorld.vue';
import main from '../components/main.vue';
import page1 from '../components/page1.vue';
import NotFound from '../components/NotFound.vue';
var routes = [
    {
        name: 'main',
        path: '/',
        component: main,
        rediect: '/home',
        children: [
            {
                name: 'home',
                path: '/home',
                component: HelloWorld,
                meta: {
                    title: '主页'
                }
            },
            {
                name: 'page1',
                path: '/page1/:id',
                component: page1,
                meta: {
                    title: '页面1'
                }
            }
        ]
    },
    {
        name: '404',
        path: '/404',
        component: NotFound,
        meta: {
            title: '404NotFound'
        }
    }
]
export default routes;