<template>
  <div class="Footer">
    <div class="foot-btn" >
      <ul>
		<!-- <router-link class="home" to="/home" tag="li" active-class="home-active"><a href="javascript:;"></a></router-link>
		<router-link class="write" to="/no-page" tag="li" active-class="write-active"><a href="javascript:;"></a></router-link>
		<router-link class="my" to="/user" tag="li" active-class="my-active"><a href="javascript:;"></a></router-link> -->
		<router-link id="nav-home" to="/home" tag="li" active-class="home-active"><a href="javascript:;">
			<span class="hui-footer-icons hui-icons-home"></span>
			<span class="hui-footer-text" style="width:50px">首页</span>
		</a></router-link>
		<router-link id="nav-ask" to="/news" tag="li" active-class="write-active"><a href="javascript:;">
			<span class="hui-footer-icons hui-icons-write" style="font-size: 22px;"></span>
			<span class="hui-footer-text" style="width:50px">新闻</span>
		</a></router-link>
		<router-link id="nav-my" to="/user" tag="li" active-class="my-active"><a href="javascript:;">
			<span class="hui-footer-icons hui-icons-my"></span>
			<span class="hui-footer-text" style="width:50px">我的</span>
		</a></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Footer',
    props:{},
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

<style>
	.foot-btn{width:100%;height:1rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
  .foot-btn ul{width:6rem; margin:0 auto;display: flex;}
  .foot-btn ul li{flex-grow: 1;}
  .foot-btn ul li a{ display:block; width:100%;height:100%; display: flex; flex-direction: column; align-items: center;}
  .foot-btn ul #nav-home{width:0.82rem;height:0.81rem; background-size:100%; margin-top: 0.03rem;}
  .foot-btn ul #nav-ask{width:0.82rem;height:0.81rem; background-size:100%; margin-top: 0.03rem;}
  .foot-btn ul #nav-my{width:0.82rem;height:0.81rem; background-size:100%; }
</style>
