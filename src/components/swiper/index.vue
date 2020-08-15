<template>
  
  <!-- <div class="banner">
    <ul class="clearfix">
      <router-link
        v-for="item of data"
        :key="item._id"
        :to="{name:'detail',params:{_id:item._id},query:{collectionName:collectionName}}"
        tag="li"
      >
        <img :src="item.banner" alt=""/>
        <div class="text-box">
          <h2>{{item.title}}</h2>
          <p>{{item.sub_title}}</p>
        </div>
      </router-link >
      
    </ul>
  </div> -->
  <div class="banner">
    <ul class="clearfix">
      <li><img src="/../assets/img/p1.jpg" alt=""/>
        <div class="text-box">
          <h2>用“心”为您撑起一片生命的天空</h2>
          <p>给予医生最大的信任</p>
        </div>
      </li>
      <li><img src="../../assets/img/hospital1.jpg" alt=""/>
        <div class="text-box">
          <h2>视人民为父母，待病人如亲人</h2>
          <p>给予医生最大的理解</p>
        </div>
      </li>
      <li><img src="../../assets/img/hosipital.jpg" alt=""/>
        <div class="text-box">
          <h2>只要献出一点爱，生命因你而精彩</h2>
          <p>给予医生最大的宽容</p>
        </div>
      </li>
      <li><img src="../../assets/img/hospital2.jpg" alt=""/>
        <div class="text-box">
          <h2>尽职尽责尽全力，全心全意全为您</h2>
          <p>给予医生最大的热情</p>
        </div>
      </li>
    </ul>
  
  </div>
</template>

<script>
  import Swipe from './js/swipe.js';
  // console.log('swiper',Swipe)
  import $ from 'jquery';
  export default {
    name:'banner',
    // props:['data','collectionName'],
    components:{},
    mounted(){
      // console.log('mounted');
      // this.data.length > 0 && this.initSwiper()
	  this.initSwiper()
    },
    updated(){
      // console.log('updated')
      this.initSwiper()
    },
    methods:{
      initSwiper(){
        new Swipe($('.banner')[0],{
          auto:2000,//开始自动幻灯片（以毫秒为单位幻灯片之间的时间）
          continuous:true,//创建一个无限的循环（当滑动到所有动画结束时是否循环滑动）
          stopPropation:true,//阻止事件冒泡
          callback:function (index,element){
            $('.banner ol li').removeClass('active');
            $('.banner ol li').eq(index).addClass('active');
          }
        }) 
      }
    }
  }
</script>

<style scoped>
  .banner{position: relative;overflow: hidden; z-index: 1}
  .banner ul li{width:6.4rem;height:4rem;float:left;position: relative;}
  .banner ul li img{width:100%;height:100%; display:block;}
  .banner ul li .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(255,255,255,0.5);}
  .text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
  .text-box p{ line-height:100%;}
  
  .banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
  .banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
  .banner ol li.active{ background:#fff;}
</style>
