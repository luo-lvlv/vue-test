<template>
  <div class="content">
    <uc-nav bgColor="#3388FF" :text="text"></uc-nav>
	<div class="login-main">
		<h1>
			<img src="../assets/img/temp01.jpg" />
		</h1>
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
		  
		</div>
		<div class="footbox">
		  <Button text="登 录" @click="login" class="login-btn" bgColor="skyblue"/>
		  <p>{{errorMess}}</p>
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
    name:'',
    props:{},
    data(){
      return {
        username:'',
		password:'',
		errorMess:'',
		text:'登录'
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
		login(){
			// alert('login')
			this.$axios({
				url:'/api/login',
				method:'post',
				data:{username:this.username,password:this.password}
			}).then(
			res=>{
				console.log('login',res.data)
				if(res.data.err == 0){
					//种token
					window.localStorage.setItem('user',JSON.stringify(res.data))
					
					if(this.$route.query.p){
						this.$router.replace(this.$route.query.p)
					}else{
						this.$router.replace('/user')
					}
				}else{
					this.errorMess = res.data.msg
				}
			})
		}
	}
  }
</script>

<style scoped>
	.login-main{
		margin-top:1rem;
	}
  .content{max-width:6.4rem; margin:0 auto;background:#FFFFFF;}
  .content .fhbtn{ padding-top:0.27rem;}
  .content .fhbtn a{ display:block;width:0.23rem;height:0.25rem; background:url(../assets/img/history1.png) no-repeat 0 0; background-size:100%; margin-left:0.3rem;}
  .content h1{width:2.18rem;height:1.5rem;  margin:0 auto; margin-top:1.22rem;}
  .content h1 img{
	  height:100%;
	  width:100%;
  }
  .content .login{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:0.85rem;}
  .login .btn{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
  .login span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
  .content .login-box{ position:relative;}
  
  .content .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
  .content .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
  .content .user{width:5rem;height:2rem; background:#fff; margin:0 auto; margin-top:0.68rem;}
  
  .content .footbox{width:4.65rem;height:2.65rem;margin:0.5rem auto; }
  .content .footbox p{
	  margin-top:0.1rem;
  }
  .content .login-btn{width:4.65rem;height:0.65rem; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
  .content .tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:block;}
</style>
