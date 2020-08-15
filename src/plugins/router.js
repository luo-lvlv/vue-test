import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../pages/home.vue';
import Follow from '../pages/follow.vue';
import Column from '../pages/column.vue';
import User from '../pages/user.vue';
import Login from '../pages/login.vue';
import Reg from '../pages/reg.vue';
import Detail from '../pages/detail.vue';
import Detail1 from '../pages/detail-one.vue';
import Detail2 from '../pages/detail-two.vue';
import News from '../pages/news.vue';
import newsDetail from '../pages/news-detail.vue'
import Nopage from '../pages/no-page.vue';
let routes = [
	{path:'/home',component:Home},
	{path:'/follow',component:Follow},
	{path:'/column',component:Column},
	{path:'/user',component:User},
	{path:'/login',component:Login},
	{path:'/reg',component:Reg},
	{path:'/detail:_id',component:Detail,name:'detail'},
	// {path:'/detail',component:Detail},
	{path:'/question-one',component:Detail1,name:'detail1'},
	{path:'/question-two',component:Detail2,name:'detail2'},
	{path:'/news',component:News,name:'news'},
	{path:'/news-detail:_id',component:newsDetail,name:'news-detail'},
	{path:'/',redirect:'/home'},
	{path:'*',component:Nopage}
]

let router = new VueRouter({
	routes
})

export default router;