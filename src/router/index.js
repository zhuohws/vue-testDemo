import Vue from 'vue';
import routes from './routes';
import VueRouter from 'vue-router';
import { Loading } from 'element-ui';
Vue.use(VueRouter);
const router = new VueRouter({
	mode: 'history',
    routes
})
let loadingInstance;
router.beforeEach((to, from, next) =>{
	console.log(to, from);
	loadingInstance = Loading.service({ fullscreen: true })
	if (to.matched.length > 0) {
		next();
	} else {
		next('/404');
	}
})
router.afterEach((to, from) => {
	console.log(from)
	document.title = to.meta.title
	loadingInstance.close();
})
export default router