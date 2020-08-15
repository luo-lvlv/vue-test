<template>
  <div class="detail-one">
    <uc-nav bgColor="#3388FF" :text="text"></uc-nav>
	<div v-if="detail.name">
		<div class="hui-list detail-list">
			<div style="width: 80px; height: 90px; margin: 10px 0px 10px 25px;">
			    <div style="width: 56px; height: 56px; border-radius: 50%;margin-bottom: 0.1rem;margin-top: 0.2rem;">
					<img :src="detail.auth_icon" />
				</div>
				<!-- <span style="padding: 5px 10px; border-radius: 3px; background-color: rgb(0, 148, 255); color: rgb(255, 255, 255); font-size: 11px;">
			        +关注
			    </span> -->
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
		<div class="hui-list">
			<div class="hui-form-items">选咨询人：</div>
			<div style="padding: 15px 10px;">
				<div class="hui-form-radios" style="line-height: 38px;">
					<ul>
						<input type="radio" name="gender" id="122" checked="checked" value="122"> 
						<label for="122">本人</label>
					</ul>
					<ul>
						<input type="radio" name="gender" id="123" checked="checked" value="123"> 
						<label for="123">子女</label>
					</ul>
					<ul>
						<input type="radio" name="gender" id="124" checked="checked" value="124"> 
						<label for="124">父母</label>
					</ul>
					<ul>
						<input type="radio" name="gender" id="125" checked="checked" value="125"> 
						<label for="125">配偶</label>
					</ul>
				</div> <!---->
			</div> 
			
			<router-link :to="{name:'detail2',
			  params:{_id:this.$route.params._id},
			  query:{collectionName:'home'}}">
					<div v-if="this.$route.params.value" style="width:6rem;border: 1px dashed rgb(237, 237, 237); padding: 10px 20px; text-align: center;">
						{{this.$route.params.value}}
					</div>
					<div v-else style="width:6rem;border: 1px dashed rgb(237, 237, 237); padding: 10px 20px; text-align: center;">
				            添加咨询人 +
							
				    </div>
				
			</router-link>
			<!-- <div class="page__bd page__bd_spacing">
				<div class="hui-form-items">
					<div class="hui-form-items-title">关系</div> 
					<input type="text" id="member_ship" class="hui-input hui-input-clear" style="background-color: rgb(255, 255, 255);">
				</div>
				<div class="hui-form-items">
					<div class="hui-form-items-title">姓名</div> 
					<input type="text" class="hui-input hui-input-clear first" style="background-color: rgb(255, 255, 255);">
				</div> 
				<div class="hui-form-items">
					<div class="hui-form-items-title" style="padding-top: 10px;">出生年月</div> 
					<input type="month" class="hui-button hui-date-picker">
				</div> 
				<div class="hui-form-items">
					<div class="hui-form-items-title" style="padding-top: 6px;">性别</div>
					<div class="hui-form-radios" style="line-height: 38px;">
						<input type="radio" value="2" name="gendercy" id="cyg1" checked="checked">
						<label for="cyg1">女生</label> 
						<input type="radio" value="1" name="gendercy" id="cyg2">
						<label for="cyg2">男生</label>
					</div>
				</div> 
				<div class="hui-form-items">
					<div class="hui-form-items-title">未次经期</div> 
					<input type="date" id="menstruation" class="hui-button hui-date-picker"></div> 
					<div class="hui-form-items">
						<div class="hui-form-items-title" style="padding-top: 6px;">过敏史</div> 
						<div class="hui-form-radios" style="line-height: 38px;">
							<input type="radio" value="1" name="guomin" id="y1" checked="checked">
							<label for="y1">有</label> 
							<input type="radio" value="0" name="guomin" id="y2">
							<label for="y2">无</label>
						</div>
					</div> 
					<div class="hui-form-items">
						<div class="hui-form-items-title" style="padding-top: 10px;">过往病史</div> 
						<div class="hui-form-textarea">
							<textarea placeholder="请输入过往的病史，以便医生做出更准确的医疗意见。" name="note"></textarea>
						</div>
					</div> 
					<div class="hui-form-items">
						<div class="hui-form-items-title" style="padding-top: 10px;">其他说明</div> 
						<div class="hui-form-textarea">
							<textarea placeholder="请输入其他说明，以便医生做出更准确的医疗意见。" name="note"></textarea>
						</div>
					</div>
				</div>
			</div> -->
			
			
			<div class="page__ft" style="text-align: center; padding: 20px;">
				<div class="hui-form-items">
					<div class="hui-form-items-title" style="padding-top: 6px;">可见度</div> 
					<div class="hui-form-radios" style="line-height: 38px;">
						<input type="radio" value="匿名公开" name="level" id="g2" checked="checked">
						<label for="g2">匿名公开</label> 
						<input type="radio" value="不公开" name="level" id="g3">
						<label for="g3">不公开</label>
					</div>
				</div> 
				<div style="width: 100%;">
					<!-- <a href="javascript:;" class="hui-button hui-button-large  hui-primary" >提交</a> -->
					<input
						type="button"
						class="hui-button hui-button-large  hui-primary"	
						value="提交"
						@click = "click"
					/>
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
	// import detailCell from '../components/detail-cell/index.vue'
  export default {
    name:'detail-one',
    props:{
		data:{
			type:Object,
			required:true 
		},
		
	},
    data(){
      return {
        detail:{},
		text:"图片提问"
      }
    },
    components:{
		ucNav,
		// ucToolbar,
		frameScreen
		// detailCell
		
	},
    mounted(){
		let collectionName = this.$route.query.collectionName;
		let _id = this.$route.params._id;
		this.$axios({
			url:`/api/goods/${collectionName}/${_id}`,
		})
		.then(
			res => this.detail = res.data.data
		)
	},
	computed:{
		// cptAuthIcon(){
		// 	if(this.detail.detail.auth_icon.includes('http:')){
		// 		return this.detail.detail.auth_icon
		// 	}else{
		// 		return this.$baseUrl + this.detail.detail.auth_icon
		// 	}
		// }
	},
    updated(){},
    methods:{
		click(){
			alert('提交成功')
			this.$router.push('/home')
		}
	}
  }
</script>

<style scoped>
	.detail-one{
		background:#FFFFFF;
		padding-bottom: 1rem;
	}
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
