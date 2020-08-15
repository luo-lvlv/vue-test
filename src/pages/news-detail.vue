<template>
  <div class="news-detail">
	  <div v-if="news.news.title">
		  <div class="news-detail-nav">
		  	<span id="hui-back"  @click="goBack"></span>
		  	<span class="news-detail-nav-right">正文</span>
		  </div>
		  <div class="report_xq_k">
		      <div class="xq_bt">
		              <h1>{{news.news.title}}</h1>
		              <p class="date">{{news.news.time}}   发布</p> 
		      </div> 
		      <div class="text">
		          <p>{{news.news.title}}</p>
		          <img :src="news.ltimg1">
		          <p>{{news.news.des1}}</p>
		          <p>{{news.news.des2}}</p>
		          <img :src="news.ltimg2" alt="">
		          <p>{{news.news.des3}}</p>
		      </div>
		  </div> 
		  <div class="mianzesm">
		      <h2>免责声明</h2>
		      <p>	用户在本平台发表的观点仅代表个人观点，不代表平台任何观点，本平台不承担任何法律连带责任：
		              本平台发表的信息均为传递、参考之用，不构成投资，实际应用等行为建议。如有侵权，我们将立即整改或者删除相应内容。
		          <br>
		          联系邮箱puange@outlook.com</p>
		  </div>
		  
		  <div class="pl_dibu_dh">
		      <input type="text" value="点击这里评论" onfocus="this.blur();">
		      <ul>
		          <li><a href="javascript:;"><img src="../assets/img/pl.png" alt=""><p>评论</p></a></li>
		          <li><a href="javascript:;" id="img"><img src="../assets/img/sc.png" alt=""><p>收藏</p></a></li>
		          <li><a href="javascript:;"><img src="../assets/img/fx.png" alt=""><p>转发</p></a></li>
		      </ul>
		  </div>
	  </div>
    <frame-screen v-else />
  </div>
</template>

<script>
	import ucNav from '../components/uc-nav/index.vue';
	import frameScreen from '../components/frame-screen/index.vue';
  export default {
    name:'news-detail',
    props:{},
    data(){
      return {
		  news:{},
        // text:'正文',
		
      }
    },
    components:{
		ucNav,
		frameScreen
	},
    mounted(){
		let collectionName = this.$route.query.collectionName;
		let _id = this.$route.params._id;
		console.log(collectionName)
		console.log(_id)
		this.$axios({
			url:`/api/goods/${collectionName}/${_id}`,
		})
		.then(
			res => {
				// console.log(res);
				this.news = res.data.data;
				console.log('news-detail',this.news)
			}	
		)
	},
    updated(){},
    methods:{
		goBack(){
			this.$router.push({name:'news',params:{_id:this.$route.params._id},query:{collectionName:'news'}})
		}
	}
  }
</script>

<style scoped>
	.news-detail-nav{
		height:1rem;
		background:#3388FF;
		display: flex;
		align-items: center;
	}
	.news-detail-nav span{
		color:#FFFFFF;
	}
	#hui-back{
		/* margin-left:0.5rem; */
		/* font-size:22px; */
		margin-top:0.4rem;
	}
	.news-detail-nav-right{
		margin-left:2.1rem;
	}
  .report_xq_k{
	/* margin-top: 1rem; */
	
  }
  .report_xq_k .xq_bt{
  	border-bottom: solid 2px #f3f3f3;
  	background: #fff;
	padding: 0.2rem 0.3rem 0rem 0.2rem;
	
  }	
  
  .report_xq_k .xq_bt .date{
  	color: #828282;
  	line-height: .45rem;
  }
  .mianzesm{
  	border-top: solid 2px #f3f3f3;
  	color: #b4b4b4;
	opacity: 0.6;
  	background: #fff;
  	line-height: .4rem;
  	padding: .2rem;
	height:3.5rem;
  }
  .mianzesm>h2{
	font-weight: 800;
	font-family: Helvetica;
  }
  .mianzesm>p{
	  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
	  font-size:14px;
	  
  }
  .text{
	  background: #fff;
	  line-height: 0.5rem;
	  padding:0.3rem 0.1rem 0rem 0.1rem;
  }
  .report_xq_k .text img {
      text-align: center;
      max-width: 100%;
  }
  .pl_dibu_dh {
      position: fixed;
      bottom: 0px;
      width: 100%;
      left: 0;
      /* overflow: hidden; */
      background: #fff;
      padding: .1rem .3rem;
      border-top: solid 1px #F6F6F9;
      z-index: 999;
	  display: flex;
	  /* justify-content: space-between; */
  }
  .pl_dibu_dh input {
      width: 2rem;
	  height:0.3rem;
      border-radius: .2rem;
      padding: .1rem .2rem;
      background: #f8f8f8;
      border: solid 1px #828282;
      -webkit-appearance: none;
      margin-top: .1rem;
      /* background: url(../i/pl_sos.png) no-repeat center left 6px; */
      background-size: .3rem;
      padding-left: .4rem;
	  line-height: normal;
  }
  .pl_dibu_dh ul li img {
      width: .4rem;
      height: .4rem;
  }
  .pl_dibu_dh ul li a{
	  font-weight: 600;
	  
  }
  .pl_dibu_dh ul li{
	  margin:0 0.3rem;
  }
  .pl_dibu_dh ul{
	  display:flex ;
	  
  }
</style>
