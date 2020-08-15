<template>
  <div id="content">
	<div class="hui-wrap underline01" style="background-color:#fff;">
		<div class="user-header-left">
			<img :src="$baseUrl + user.icon" style="width:60px;height:60px; margin:0px; border-radius:50%;">
		</div>
		<div>
			<div style="margin-bottom:4px;">
				<span style="font-weight:bold;color:#808080;">{{user.nikename}} </span>
				<a href="javascript:;" @click="logout" class="logout"> 注销</a>
			</div>
			<div style="margin-bottom:4px;"><span style="color:#808080;font-size:11px;">积分：</span><span style="color:#f00;font-size:11px;">{{user.sorce}}</span></div>
			<div style="margin-bottom:4px;"><span style="color:#808080;font-size:11px;">余额：</span><span style="color:#f00;font-size:11px;">{{user.money}}</span></div>
		</div>
		<!-- <div class="uesr-header-right">
			<a href="doctor_center.html">
			    <img src="../assets/img/change.png" width="20" /><br />
			    <span class="ys_subtitle2">切换为医生</span>
			</a>
		</div> -->
	</div>
	
	<div class="user-message underline01" style="background-color:#fff;padding-bottom:5px;">
		<div class="rightline01">
			<a href="javascript:hui.toast('首页');" id="nav-home" style="position: relative;">
			    <div class="hui-footer-icons hui-icons-msg"></div>
			    <div class="hui-footer-text" style="width:50px">待回复</div>
			    <div class="dot_text">8</div>
			</a>
		</div>
		<div class="rightline01">
			<a href="javascript: window.location.href='_reg.html';" id="nav-my" style="position: relative;">
			    <div class="hui-footer-icons hui-icons-forum"></div>
			    <div class="hui-footer-text" style="width:50px">已回复</div>
			    <div class="dot_text">2</div>
			</a>
		</div>
		<div>
			<a href="javascript: window.location.href='user_center.html';" id="nav-my" style="position: relative;">
			    <div class="hui-footer-icons hui-icons-check"></div>
			    <div class="hui-footer-text" style="width:50px">已结单</div>
			</a>
		</div>
	</div>
	<div class="hui-list" style="background:#FFFFFF; margin-top:10px;">
	    <ul>
	        <li>
	            <a href="my_doctors.html">
	                <div class="hui-list-icons">
	                    <div class="hui-footer-icons hui-icons-register"></div>
	                </div>
	                <div class="hui-list-text">
	                    我的医生
	                    <div class="hui-list-info">
	                        <span class="hui-icons hui-icons-right"></span>
	                    </div>
	                </div>
	            </a>
	        </li>
	        <li>
	            <a href="javascript:void(0);">
	                <div class="hui-list-icons">
	                    <div class="hui-footer-icons hui-icons-news"></div>
	                </div>
	                <div class="hui-list-text">
	                    健康档案
	                    <div class="hui-list-info">
	                        <span class="hui-icons hui-icons-right"></span>
	                    </div>
	                </div>
	            </a>
	        </li>
	        <li>
	            <a href="javascript:void(0);">
	                <div class="hui-list-icons">
	                    <div class="hui-footer-icons hui-icons-home"></div>
	                </div>
	                <div class="hui-list-text">
	                    家庭成员
	                    <div class="hui-list-info">
	                        <span class="hui-icons hui-icons-right"></span>
	                    </div>
	                </div>
	            </a>
	        </li>
	        <li>
	            <a href="javascript:void(0);">
	                <div class="hui-list-icons">
	                    <div class="hui-footer-icons hui-icons-search"></div>
	                </div>
	                <div class="hui-list-text">
	                    积分查询
	                    <div class="hui-list-info">
	                        <span class="hui-icons hui-icons-right"></span>
	                    </div>
	                </div>
	            </a>
	        </li>
	        <li>
	            <a href="javascript:void(0);">
	                <div class="hui-list-icons">
	                    <div class="hui-footer-icons hui-icons-search"></div>
	                </div>
	                <div class="hui-list-text">
	                    支付查询
	                    <div class="hui-list-info">
	                        <span class="hui-icons hui-icons-right"></span>
	                    </div>
	                </div>
	            </a>
	        </li>
	        <li>
	            <a href="javascript:void(0);">
	                <div class="hui-list-icons">
	                    <div class="hui-footer-icons hui-icons-number"></div>
	                </div>
	                <div class="hui-list-text">
	                    绑定手机（绑定后显示手机号码）
	                    <div class="hui-list-info">
	                        <span class="hui-icons hui-icons-right"></span>
	                    </div>
	                </div>
	            </a>
	        </li>
	        <li>
	            <a href="javascript:void(0);">
	                <div class="hui-list-icons">
	                    <div class="hui-footer-icons hui-icons-menu-point"></div>
	                </div>
	                <div class="hui-list-text">
	                    推荐给朋友
	                    <div class="hui-list-info">
	                        <span class="hui-icons hui-icons-right"></span>
	                    </div>
	                </div>
	            </a>
	        </li>
	        <li>
	            <a href="javascript:void(0);">
	                <div class="hui-list-icons">
	                    <div class="hui-footer-icons hui-icons-write"></div>
	                </div>
	                <div class="hui-list-text">
	                    意见反馈
	                    <div class="hui-list-info">
	                        <span class="hui-icons hui-icons-right"></span>
	                    </div>
	                </div>
	            </a>
	        </li>
	    </ul>
	</div>
    <!-- <div id="header">
      <h2><img :src="$baseUrl + user.icon" alt=""/></h2>
      <div class="user-box">
        <a>{{user.nikename}} |</a>
        <a href="javascript:;" @click="logout"> 注销</a>
      </div>
      <ul class="clear">
        <li>
          <span>{{user.follow}}</span>
          <p>关注</p>
        </li>
        <li>
          <span>{{user.fans}}</span>
          <p class="end">粉丝</p>
        </li>
      </ul>
    </div>
    <div class="docList">
      <ul>
        <li class="gk-text">
          <i></i>
          <p>公开博文</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="mm-text">
          <i></i>
          <p>秘密博文</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="cg-text">
          <i></i>
          <p>草稿箱</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="sc-text">
          <i></i>
          <p>收藏夹</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="my_cz">
          <i></i>
          <p>收藏夹</p>
        </li>
      </ul>
    </div> -->
  
  
  
  </div> 
</template>

<script>
	import axios from '../plugins/axios.js'
  export default {
    name:'user',
	beforeRouteEnter(to,from,next) {
		//每次去服务器抓取最新的信息
		axios.get('/api/user')
		.then(
		// res => console.log(res.data)
		res => res.data.err === 0 ? 
		// next(true) :
		next(_this => _this.user = res.data.data) :
		next('/login')
		)
	},
    props:{},
    data(){
      return {
        user:{}
      }
    },
    components:{},
    mounted(){
		console.log(this.user.icon)
	},
    updated(){},
    methods:{
		logout(){
			// alert('logout')
			window.localStorage.removeItem('user');
			this.$router.push('/login');
	}
  },
  }
</script>

<style scoped>
	.user-message{
		display: flex;
		justify-content: space-around;
	}
	.hui-wrap{
		display: flex;
		padding-top:0.4rem;
		height:1.6rem;
	}
	.user-header-left{
		margin-right:0.6rem;
		margin-left:0.3rem;
	}
	.uesr-header-right{
		margin-left:1.6rem;
		margin-top:0.2rem;
		text-align: center;
	}
	.ys_subtitle2 {
	    color: #808080;
	    font-size: 12px;
		
	}
	.underline01 {
	    border-bottom: 1px solid #E4E3E6;
	}
	.rightline01 {
	    border-right: 1px solid #f6f6f6;
	}
	.dot_text {
	    font-size: 11px;
	    background: rgb(237, 45, 34);
	    border-radius: 50%;
	    line-height: 12px;
	    width: 12px;
	    height: 12px;
	    right: 5px;
	    position: absolute;
	    top: -48px;
	    left: 4px;
	    color: #fff;
	    padding: 2px;
	}
	.logout{
		font-size:12px;
		margin-left:0.1rem;
	}
  /* #content{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem;}
  #content #header{width:6.4rem;height:2.84rem; background:#9e9a95; padding-top:0.4rem;}
  #header h2{width:1.02rem;height:1.02rem; border-radius:50%; margin:0 auto;}
  #header h2 img{width:100%;}
  #header .user-box{width:2rem; font-size:0.25rem; color:#fff; margin:0 auto; margin-top:0.2rem;}
  .user-box a{color:#fff;}
  #header ul{ margin-top:0.4rem;}
  #header ul li{width:50%;height:0.7rem; float:left; color:#fff;}
  #header ul li span{height:0.37rem; line-height:0.37rem; text-align:center; display:block; font-size:0.25rem;}
  #header ul li p{ text-align:center; font-size:0.3rem;height:0.32rem; line-height:0.32rem; border-right:1px solid #fff;}
  #header ul li p.end{ border:0;}
  
  #content .docList{width:6.4rem; margin:0 auto; margin-top:0.32rem;}
  .docList ul{ border-top:1px solid #7b7c7c;}
  .docList ul li{ background:#fff;height:0.79rem; border-top:1px solid #bcbbba; border-bottom:1px solid #7b7c7c;}
  .docList ul li span{ float:right;margin-right:0.14rem; margin-top:0.26rem;}
  .docList ul li b{width:0.21rem;height:0.24rem; background:url(../assets/img/next_img.png) no-repeat 0 0; background-size:100%; float:right;margin-right:0.34rem; margin-top:0.28rem;}
  
  
  .docList ul .gk-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/gk_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
  .gk-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
  .docList ul .mm-text i{width:0.29rem;height:0.35rem; background:url(../assets/img/mm_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.32rem; margin-top:0.24rem;}
  .mm-text p{ float:left; font-size:0.25rem;margin-left:0.35rem; margin-top:0.25rem;}
  .docList ul .cg-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/cg_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
  .cg-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
  .docList ul .sc-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/sc_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
  .sc-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
  .docList ul .my_cz{ margin-top:0.45rem;}
  .docList ul .my_cz i{width:0.37rem;height:0.37rem; background:url(../assets/img/my_cz.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
  .my_cz p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;} */
</style>
