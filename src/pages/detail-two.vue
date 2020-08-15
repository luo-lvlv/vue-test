<template>
  <div class="detail-two">
    <!-- <uc-nav bgColor="#3388FF" :text="text"></uc-nav> -->
	<div v-if="detail.name">
		<div class="page__bd page__bd_spacing">
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
			<div class="page__ft" style="text-align: center; padding: 20px;"><div style="margin-bottom: 10px; width: 100%;">
				<!-- <a href="javascript:;" class="hui-button hui-primary hui-button-large" >确认添加  </a> -->
				<input
					type="button"
					class="hui-button hui-primary hui-button-large"	
					value="确认添加"
					@click = "click"
				/>
			</div>
		</div>
	</div>
	
	<frame-screen v-else />
  </div>
</template>

<script>
	
	import ucNav from '../components/uc-nav/index.vue';
	import frameScreen from '../components/frame-screen/index.vue';
  export default {
    name:'detail-two',
    props:{},
    data(){
      return {
        text:'图文提问',
		
      }
    },
    components:{
		ucNav,
		frameScreen
	},
    mounted(){},
    updated(){},
    methods:{
		
		click(){
			alert('添加成功')
			let Inp = document.querySelector(".first");
			let content = Inp.value;
			this.$router.push({name:'detail1',params:{_id:this.$route.params._id,value:content},query:{collectionName:'home'}})
		}
		
		
	}
  }
</script>

<style>
  .detail{
	  background:#FFFFFF;
  }
  .page__ft{
	  height:2rem;
  }
</style>
