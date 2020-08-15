<template>
  <div class="follow pd-top-bottom">
	  <div class="list">
		  <uc-cell
		    :key="item._id"
		    v-for="(item,index) of follow"
		    :index="index" 
		    :data="item" 
		    :to="{name:'detail',params:{_id:item._id}, query:{collectionName:'follow'}}"
		  />
	  </div>
    
  </div>
</template>

<script>
	import ucCell from '../components/uc-cell.vue'
  export default {
    name:'follow',
    props:{},
    data(){
      return {
        follow:[]
      }
    },
    components:{ucCell},
    mounted(){
		this.$axios({
		  url:'/api/goods/follow',
		  params:{_limit:30}
		}).then(
		  res=>this.follow=res.data.data
		)
	},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .list{padding: 0 .3rem;}
</style>
