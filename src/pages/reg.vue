<template>
  <div class="content">
    <uc-nav bgColor="#3388FF" :text="text"></uc-nav>
	
	<div class="reg-main">
		
			<h1 @click="upload"></h1>
		
		<input type="file" id="icon" style="display: none;"/>
		<div class="login-box">
		  <p class="lsolid"></p>
		  <div class="login">
		    <router-link to="/login" class="btn">登录</router-link>
		    <span></span>
		    <router-link to="/reg" class="btn">注册</router-link>
		  </div>
		  <p class="rsolid"></p>
		</div>
		<div class="user">
		  
		  <uc-input v-model="username" label="用户"/>
		  <uc-input v-model="password" label="密码" type="password"/>
		  <uc-input v-model="nikename" label="昵称"/>
		  
		</div>
		<div class="footbox">
		  <Button text="注 册" @click="reg" class="login-btn" bgColor="skyblue"/>
		  {{errorMess}}
		  <a href="javascript:;" class="tishi">忘记密码？</a>
		</div>
	</div>
    
  </div>
</template>

<script>
	import ucInput from '../components/uc-input.vue';
	import Button from '../components/Button.vue';
	import ucNav from '../components/uc-nav/index.vue';
  export default {
    name:'reg',
    props:{},
    data(){
      return {
        username:'',
		password:'',
		nikename:'',
		
		errorMess:'',
		text:'注册'
      }
    },
    components:{
		ucInput,
		Button,
		ucNav
	},
    mounted(){},
    updated(){},
    methods:{
		reg(){
			alert('reg')
			let formData = new FormData();
			formData.append('username',this.username);
			formData.append('password',this.password);
			formData.append('nikename',this.nikename);
			let iconInputFile = document.getElementById('icon');
			formData.append('icon',iconInputFile.files[0]);//取出input file的文件体
			console.log('reg-formdata',this.username);
			console.log('reg-formdata',this.password);
			console.log('reg-formdata',this.nikename);
			console.log('reg-formdata',iconInputFile.files[0]);
			
			this.$axios({
				url:'/api/reg',
				method:'post',
				data:formData
			}).then(
				res=>{
					if(res.data.err === 0){
						console.log('reg',res.data);
						this.$router.push('/login');
					}else{
						this.errorMess = res.data.msg
					}
				}
				// res=>console.log('reg',res.data)
			)
			
		},
		upload(){
			let iconInputFile = document.getElementById('icon');
			iconInputFile.click();//模拟input file点击
		}
	}
  }
</script>

<style scoped>
	.reg-main{
		margin-top:1rem;
	}
  .content{max-width:6.4rem; margin:0 auto;background:#FFFFFF;}
  .content .fhbtn{ padding-top:0.27rem;}
  .content .fhbtn a{ display:block;width:0.23rem;height:0.25rem; background:url(../assets/img/history1.png) no-repeat 0 0; background-size:100%; margin-left:0.3rem;}
  .content h1{width:2.18rem;height:1.35rem; background:url(../assets/img/temp01.jpg) no-repeat 0 0; background-size:100%; margin:0 auto; margin-top:1.22rem;}
  .content .login{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:0.85rem;}
  .login .btn{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
  .login span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
  .content .login-box{ position:relative;}
  
  .content .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
  .content .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
  .content .user{width:5.78rem;height:auto; background:#fff; margin:0 auto; margin-top:0.68rem;}
  
  .content .footbox{width:4.65rem;height:2.65rem;margin:0 auto; }
  .content .footbox p{
  	  margin-top:0.1rem;
  }
  .content .login-btn{width:4.65rem;height:0.65rem; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
  .content .tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:block;}
</style>
