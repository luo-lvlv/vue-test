<template>
  <div class="news">
    <uc-nav bgColor="#3388FF" :text="text"></uc-nav>
	<div class="news-middle">
		<newsCell
		:key="item._id"
		v-for="(item) of news" 
		:data="item" 
		:to="{name:'news-detail',
		params:{_id:item._id},
		query:{collectionName:'news'}}"/>
	</div>
	
	
  </div>
</template>

<script>
	import ucNav from '../components/uc-nav/index.vue';
	import newsCell from '../components/news-cell/index.vue';
  export default {
    name:'news',
    props:{},
    data(){
      return {
        text:'新闻中心',
		news:[]
      }
    },
    components:{
		ucNav,
		newsCell
	},
    mounted(){
		this.$axios({
			url:'/api/goods/news',
		}).then(
			res=>
			{
				console.log('news',res)
				this.news = res.data.data
			}
		)
	},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .news-middle{
	  margin-top:1rem;
  }
</style>
