<template>
  <div class="error">
    <!-- <p>404</p>
    <p>404</p>
    <p>404</p>
    <p>404</p>
    <p>404</p>
    <p>404</p>
    <p>404</p> -->
	<img src="../assets/img/panda.jpg"/>
    <router-link to="/home">回到首页</router-link>
  </div>
</template>

<script>
  export default {
    name:'',
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){
		
			this.$root.bLoading = false
		
	},
    updated(){},
    methods:{}
  }
</script>

<style>
  .error{
	  height:10rem;
	  background:#FFFFFF;
  }
  .error img{
	  width:100%;
	  height:100%;
  }
</style>
