<template>
  <div class="detail">
    <uc-nav bgColor="#3388FF" :text="text"></uc-nav>
	<div v-if="detail.name">
		<div class="hui-list detail-list" >
			<div style="width: 80px; height: 90px; margin: 10px 0px 10px 25px;">
			    <div style="width: 56px; height: 56px; border-radius: 50%;margin-bottom: 0.1rem;">
					<img :src="detail.auth_icon" />
				</div>
				<span style="padding: 5px 10px; border-radius: 3px; background-color: rgb(0, 148, 255); color: rgb(255, 255, 255); font-size: 11px;">
			        +关注
			    </span>
			</div>
			<div style="width: 100%; line-height: 1.5em; margin: 10px 0px 10px 20px;">
				<span class="ys_title">{{detail.name}}</span>
				<span class="ys_subtitle">{{detail.position}}</span> <br> 
				<span class="ys_subtitle">{{detail.location}} {{detail.department}}</span> <br> 
				<span class="ys_subtitle">从业 </span>
				<span class="ys_bigtext">{{detail.detail.num}}</span>
				<span class="ys_subtitle2"> 年</span> <br> 
				<span class="ys_subtitle">咨询量：</span>
				<span class="ys_red">{{detail.detail.num1}}</span>
				<span class="ys_subtitle">满意度：</span>
				<span class="ys_red">{{detail.detail.num2}}</span>
			</div>
		</div>
		
		<div class="hui-list" style="margin-top: 5px;">
		    <div class="hui-content" style="padding: 10px;">
		        <div class="underline01" style="padding-bottom:10px;">
		            <h2 style="color: rgb(0, 0, 0);">擅长方向</h2>{{detail.like}}
		        </div>
		    </div>
			<div class="hui-content hui-flex" style="padding:0px 10px 10px 10px;">
			<router-link 
			:to="{name:'detail1',
			  params:{_id:this.$route.params._id},
			  query:{collectionName:'home'}}"
			  >
			    <div class="nav_btn nav_btn_active">
			        图文咨询<br />
			        <span class="hui-icons hui-icons-img" style="color:#4c62ca;padding-right:0px;"></span><br />
			        {{detail.price}}元/次
			    </div>
			</router-link>
			    <div class="nav_btn">
			        套餐服务<br />
			        <span class="hui-icons hui-icons-like" style="color:#4c62ca;padding-right:0px;"></span><br />
			        暂未开通
			    </div>
			    <div class="nav_btn">
			        电话咨询<br />
			        <span class="hui-icons hui-icons-range" style="color:#4c62ca;padding-right:0px;"></span><br />
			        暂未开通
			    </div>
			    <div class="nav_btn">
			        预约看诊<br />
			        <span class="hui-icons hui-icons-check" style="color:#4c62ca;padding-right:0px;"></span><br />
			        暂未开通
			    </div>
			</div>
		</div>
		
		<div class="hui-wrap" style="margin-top: 5px;">
		    <div class="hui-list">
		        <div class="hui-content" style="padding: 10px;">
		            <div class="underline01">
		                <h2 style="color: rgb(0, 0, 0);">患者评价</h2>
		            </div>
					
					<detail-cell :data="detail"/>
				</div>
			</div>
		</div>
	</div>
	<frame-screen v-else />
	<!-- <div class="content" v-if="detail.title">
	  <div class="header clear"><h2><img :src="cptAuthIcon" alt=""/></h2><p>{{detail.detail.auth}}</p></div>
	  <div class="cont">
	    <h3>{{detail.title}} | {{8 | fillzero}}</h3>
	    <div class="time"><p>{{detail.time | date}}<span><img src="../assets/img/zan.png" alt=""/></span></p></div>
	    <div class="text-box" v-html="detail.detail.content"></div>
	  </div>
	</div>
	<frame-screen v-else />
	<uc-toolbar></uc-toolbar> -->
	
  </div>
</template>

<script>
	
	// import '../assets/css/hhealth.css'
	import ucNav from '../components/uc-nav/index.vue';
	// import ucToolbar from '../components/uc-toolbar/uc-toolbar.vue';
	import frameScreen from '../components/frame-screen/index.vue';
	import detailCell from '../components/detail-cell/index.vue'
  export default {
    name:'detail',
    props:{},
    data(){
      return {
        detail:{},
		introduce:[],
		text:"咨询医生"
      }
    },
    components:{
		ucNav,
		// ucToolbar,
		frameScreen,
		detailCell,
		
	},
    mounted(){
		let collectionName = this.$route.query.collectionName;
		let _id = this.$route.params._id;
		this.$axios({
			url:`/api/goods/${collectionName}/${_id}`,
		})
		.then(
			res => {
				// console.log(res);
				this.detail = res.data.data;
				console.log(this.detail)
			}	
		)
		
		// this.$axios({
		// 	url:'/api/goods/detail',
		// 	params:{_limit:2,q:this.detail.name}
		// })
		// .then(
		// 	res => {
		// 		// console.log(res);
		// 		this.introduce = res.data.data;
		// 		console.log(this.introduce)
		// 	}	
		// )
	},
	computed:{
		// cptAuthIcon(){
		// 	console.log(this.detail)
		// 	if(this.detail.auth_icon.includes('https:')){
		// 		return this.detail.auth_icon
		// 	}else{
		// 		return this.$baseUrl + this.detail.auth_icon
		// 	}
		// }
	},
    beforeUpdate(){},
    methods:{}
  }
</script>

<style scoped>
	.detail-list{
		margin-top:1rem;
		display: flex;
	}
	.hui-list img{
		width:100%;
		height:100%;
	}
	.ys_title {
	    margin-left: 10px;
	    font-weight: bold;
	    color: #000;
	    font-size: 15px;
	}
	.ys_subtitle {
	    margin-left:10px;
	    color: #808080;
	    font-size: 12px;
	}
	.ys_subtitle2 {
	    color: #808080;
	    font-size: 12px;
	}
	.ys_bigtext{
	    font-weight:bold;
	    font-size:19px;
	    color:#000;
	}
	.ys_red{
	    margin-left:10px;
	    color:red;
	    font-size:12px;
	}
	.underline01 {
	    border-bottom: 1px solid #E4E3E6;
	}
	.nav_btn {
	    width: 100%;
	    border-radius: 5px;
	    margin: 10px 5px;
	    font-size: 12px;
	    text-align: center;
	    padding: 5px 10px;
	    line-height: 1.5em;
	}
	
	.nav_btn_active {
	    background-color: rgb(196, 233, 255);
	    color: #4c62ca;
	}
 /* .content{max-width:6.4rem; margin:0 auto; margin-top:0.6rem; background:#f2f4f5; padding-bottom:0.85rem;}
  .content .header{ padding:0.39rem 0.28rem 0.15rem 0.28rem; height:auto; background: none}
  .header h2{ float:left; margin-right:0.18rem;}
  .header p{ float:left; margin-top:0.18rem; font-size:0.3rem;}
  
  .content .cont{ padding:0 0.38rem; color:#494d4d;}
  .cont h3{ font-size:0.4rem; line-height:0.6rem; padding-bottom:0.25rem; border-bottom:1px solid #494d4d;}
  .cont .time{height:0.24rem; line-height:0.24rem; margin:0.26rem 0; }
  .time p{ float:left;position:relative;}
  .time span{width:0.33rem;height:0.32rem; position:absolute; top:-0.02rem;right:-0.35rem;}
  .time span img{width:100%;height:100%;}
  
  .cont .text-box{ font-size:0.25rem;}
  .text-box p{ line-height:0.45rem; margin-bottom:0.1rem;} */
</style>
