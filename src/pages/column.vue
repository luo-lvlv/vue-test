<template>
  <div class="column pd-top-bottom">
  	  <div class="list">
  		  <uc-cell
  		    :key="item._id"
  		    v-for="(item,index) of column"
  		    :data="item" 
  		    :to="{name:'detail',params:{_id:item._id}, query:{collectionName:'column'}}"
  		  />
  	  </div>
    
  </div>
</template>

<script>
	import ucCell from '../components/uc-cell.vue'
  export default {
    name:'column',
    props:{},
    data(){
      return {
        column:[]
      }
    },
    components:{ucCell},
    mounted(){
		this.$axios({
		  url:'/api/goods/column',
		  params:{_limit:10}
		}).then(
		  res=>this.column=res.data.data
		)
	},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .list{padding: 0 .3rem;}
</style>
