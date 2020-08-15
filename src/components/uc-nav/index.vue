<template>
  <div 
    class="nav"
    :style="{background:bgColor,'border-width':borderWidth+'px'}"
  >
    <ul>
      <!-- <li 
        :class=" arrow === 'gray' ? 'gray' : 'default' "
        @click="$router.go(-1)"
      ></li> -->
	  <li id="hui-back" @click="$router.go(-1)"></li>
	  <span class="ask-docotor">{{text}}</span>
	  <router-link to='/home'>
		<span class="hui-icons hui-icons-home" style="color: rgb(255, 255, 255); font-size: 18px;"></span>
	  </router-link>
	  
    </ul>
  </div>
</template>

<script>
  export default {
    name:'uc-nav',
    props:{
      bgColor:{
        type:String,
        default:'#fff'
      },
      borderWidth:{
        type:Number,
        default:1
      },
	  text:{
		type:String,
		default:'默认值'
	  }
	  
      // arrow:{
      //   type:String,
      //   default:'default' //gray
      // }
    }
  }
</script>

<style scoped>
  #hui-back{margin-left:-0.01rem;}
  .nav{width:100%;height:1rem; position:fixed;top:0;left:0; background:#fff; border-bottom:1px solid #e8eaec; z-index:99;}
  .nav ul{text-align:center;width:6.4rem;height:0.45rem; padding-top:0.3rem; margin:0 auto;}
  .nav ul li{width:0.29rem;height:0.31rem;  margin:0 0 0 0.38rem;}
  /* .nav ul li.default{background:url(./assets/img/history.png);  background-size:100%;}
  .nav ul li.gray{background:url(./assets/img/history1.png); background-size:100%;} */
  .nav ul .ask-docotor{font-size:18px;color:#FFFFFF;}
  .nav ul .hui-icons{float:right;margin-right: 0.3rem;}
</style>
