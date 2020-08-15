<template>
  <div class="news-cell" @click="getDetail">
    <div class="mall_class_list_k">
        <ul>
            <li>
                <div class="bt"><a href="#">
                    <img :src="data.touimg" alt="">
                    <p>{{data.name}}<span>{{data.solo}}</span></p>
                </a></div>
                <div class="text">
                    <router-link to='/news-detail'>
                        <p>{{data.des}}<span>全部>></span>
                        </p>
                        <div class="img">
                            <img :src="data.ltimg1">
                            <img :src="data.ltimg2">
                            <img :src="data.ltimg3">
                        </div>
                    </router-link>
                </div>
                <div class="tb_img">
                    <div>
                        <img src="./images/zhan.png" alt="">
                        <span>分享</span>
                    </div>
                    <div>
                        <img src="./images/zhan1.png" alt="">
                        <span>评论</span>
                    </div>
                    <div>
                        <img src="./images/zhan2.png" alt="">
                        <span>{{data.fab}}</span>
                    </div>
                </div>
            </li>
    	</ul>
    </div>
  </div>
</template>

<script>
  export default {
    name:'news-cell',
    props:{
		data:{
			type:Object,
			required:true
		},
		url:{
		  type:String,
		  default:''
		},
		to:{
		  type: Object,
		  default:null
		},
	},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{
		getDetail(){
				if(this.url){
				  window.open(this.url,'_blank');
				}else if(this.to){
				  console.log({name:this.to.name,params:this.to.params,query:this.to.query})
				  this.$router.push({name:this.to.name,params:this.to.params,query:this.to.query})
				}
			}
		}
	}
  
</script>

<style scoped>
  .mall_class_list_k{
  	background: #fff;
  	padding: .2rem 0;
  	/* margin-top:1rem; */
  }
  
  .mall_class_list_k li{
  	border-bottom: solid 1px #f3f3f3;
  	padding: 2%;
  }
  .mall_class_list_k .bt a{
  display: flex;
  }
  
  .mall_class_list_k .bt img{
  	display: inline-block;
  	width:.6rem;
  	height: .6rem;
  	overflow: hidden;
  	border-radius: 50%; 
  }
  .mall_class_list_k .bt p{
  display: inline-block;
  color: #394038;
  font-size: .28rem;
  line-height: .32rem;
  margin-left: .2rem;
  }
  .mall_class_list_k .bt p span{
  font-size: .2rem;
  color: #828282;display:block;
  
  }
  
  .mall_class_list_k .text{
  	padding: .1rem 0;
  }
  .mall_class_list_k .text a{
  	color: #394038;
  }
  
  
  .mall_class_list_k .text p{
  	overflow: hidden;
  	text-overflow: ellipsis;
  	display: -webkit-box;
  	-webkit-line-clamp: 3;
  	-webkit-box-orient: vertical;
  	text-align: justify;
  }
  .mall_class_list_k .text p span{
  	color: #24c516;
  }
  .mall_class_list_k .text .img{
  	/* display: flex; */
  	padding: .1rem 0;
  }
  .mall_class_list_k .text .img img{
  	width: 2rem;
	height:1rem;
  }
  .mall_class_list_k .tb_img{
  	display: flex;
  	padding:0 .5rem;
  	justify-content : space-between;
  }
  
  .mall_class_list_k .tb_img>div img{
  	width: .5rem;
  }
</style>
