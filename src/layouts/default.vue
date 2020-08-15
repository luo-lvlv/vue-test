<template>
  <div class="default">
	<loading v-show="$root.bLoading" bg-color="#5477b2"/>
    <!-- <Header v-show="$root.bNav"/> -->
	<!-- <Home/> -->
	<!-- <Follow/> -->
	<!-- <Detail/> -->
	<!-- <Detail1/> -->
	<!-- <Detail2/> -->
	<!-- <Column/> -->
	<!-- <User/> -->
	<!-- <User1/> -->
	<!-- <News/> -->
	<!-- <NewsDetail/> -->
	<!-- <Login/> -->
	<!-- <Reg/> -->
	<!-- <Nopage/> -->
	<router-view>展示区</router-view>
	<Footer v-show="$root.bFoot"/>
	
  </div>
</template>

<script>
	import Header from './header.vue';
	import Footer from './footer.vue';
	// import Home from '../pages/home.vue';
	// import Follow from '../pages/follow.vue'
	// import Column from '../pages/column.vue'
	// import Detail from '../pages/detail.vue'
	// import Detail1 from '../pages/detail1.vue';
	// import Detail2 from '../pages/detail2.vue';
	// import User from '../pages/user.vue';
	// import User1 from '../pages/user1.vue';
	// import Login from '../pages/login.vue';
	import Reg from '../pages/reg.vue';
	// import Nopage from '../pages/no-page.vue'
	// import News from '../pages/news.vue'
	// import NewsDetail from '../pages/news-detail.vue';
	import loading from '../components/loading.vue'
  export default {
    name:'default',
    props:{},
    data(){
      return {
        
      }
    },
    components:{
		Header,
		Footer,
		// Home,
		// Follow
		// Column
		// Detail,
		// Detail1,
		// Detail2,
		// User,
		// News,
		// User1,
		// Login,
		Reg,
		// Nopage
		// NewsDetail,
		loading
		},
    mounted(){},
    updated(){},
    methods:{
		checkRootData(path){
			if(/home|follow|column|user|news/.test(path)){
				this.$root.bNav = this.$root.bFoot = true
			}
			if(/login|reg|detail|/.test(path)){
				this.$root.bNav = this.$root.bFoot = false
			}
			
			// if(path.includes('user')){
			// 	this.$root.bNav = false;
			// 	this.$root.bFoot = true;
			// }
		}
	},
	watch:{
		$route:{
			handler(nextValue){
				let path = nextValue.path;
				this.checkRootData(path)
			}
		}
	}
  }
</script>

<style>
  
</style>
