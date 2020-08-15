<template>
  <div class="Button">
    <input 
      type="button"
      :value="text"
      :style="{background:bgColor}"
      @click="$emit('click')"
      class="login-btn"
    >
  </div>
</template>

<script>
  export default {
    name:'Button',
    props:{
      text:{
        type:String,
        default:'按 钮'
      },
      bgColor:{
        type:String,
        default:'#4C4F50'
      }
    },
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .Button{}
  .login-btn{width:4.65rem;height:0.65rem; background:#4c4f50; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; /* margin-top:0.62rem; */ font-size:0.28rem;}
  .login-btn:active{
    opacity: .8;
  }
</style>
