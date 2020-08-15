<template>
  <!-- <div class="home pd-top-bottom"> -->
  <div class="home-wrap">
	  <!-- <uc-nav bgColor="#3388FF" :text="text"></uc-nav> -->
	  <Banner/>
	  <div class="hui-common-title">
	      <div class="hui-common-title-line" style="background-color:#a6bdce;"></div>
	      <div class="hui-common-title-txt" style="color: #a6bdce;">推荐名医</div>
	      <div class="hui-common-title-line" style="background-color:#a6bdce;"></div>
	  </div>
	  <div class="list-cell">
		  <list-cell
		  v-for="(item) of home"
		  :key="item._id"
		  :data="item" 
		  :to="{name:'detail',
		  params:{_id:item._id},
		  query:{collectionName:'home'}}"
		  />
	  </div>
	  
  <!--  <Banner 
	:data="banner" 
	collectionName="banner"/>
	<div class="list">
		<uc-cell 
		:key="item._id"
		v-for="(item,index) of home"
		:index="index" 
		:data="item" 
		:to="{name:'detail',
		params:{_id:item._id},
		query:{collectionName:'home'}}"
		/>
	</div> -->
	
  </div>
</template>

<script>
	import Banner from '../components/swiper/index.vue';
	// import ucCell from '../components/uc-cell.vue';
	// import axios from 'axios';
	// import axios from '../plugins/axios.js';//有拦截器
	import ucNav from '../components/uc-nav/index.vue';
	import listCell from '../components/list-cell.vue';
  export default {
    name:'home',
    props:{},
    data(){
      return {
		  text:'首页',
  //       banner:[
		// 	// {_id:1,title:'xx',sub_title:'oo',banner:'/images/img_1.jpg'},
		// 	// {_id:2,title:'xx2',sub_title:'oo2',banner:'/images/img_2.jpg'},
		// 	// {_id:3,title:'xx3',sub_title:'oo3',banner:'/images/img_3.jpg'},
		// ],
		home:[]
      }
    },
    components:{
		Banner,
		// ucCell
		ucNav,
		listCell
	},
    mounted(){
		this.$axios({
			// url:'http://localhost:9001/api/goods/user'
			url:'/api/goods/home',
			params:{_limit:20}
			// headers:{
			// 	token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJ1dGEiLCJfaWQiOiI1ZjJiZWUxODMzOWViNDA0YjRiNWE4YTMiLCJpYXQiOjE1OTY3MTQ1NDAsImV4cCI6MTU5NjgwMDk0MH0.yJBTsy8S71agUZCn6rqPrWgSYbGhUN2ryYKPEuHk2Ag'
			// }
		}).then(
		// res=> console.log('home',res)
			res => 
			{
				this.home = res.data.data;
				console.log('home',res)
				}
		)
		
		// this.$axios({
		// 	url:'/api/goods/banner',
		// 	params:{_limit:3}
		// })
		// .then(
		// 	res => this.banner = res.data.data
		// )
	},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
	.list-cell{
		margin-bottom: 1rem;
	}
	.home-wrap{
		background:#FFFFFF;
	}
  .list{padding: 0 .3rem;}
</style>
