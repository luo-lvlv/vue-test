<template>
  <div class="detail-cell">
    <div 
	v-for="item of introduce"
	:key="item._id">
        <div class="hui-flex" style="margin-top:10px;">
            <div style="width:60%">
                <span class="feedback">{{item.phone}}</span>
                <img src="./img/ico_jinqi.jpg" style="width:20px;height:22px;vertical-align:middle;" /> <span class="feedback">赠送{{item.num3}}面锦旗</span>
            </div>
            <div class="feedback" style="width:40%;text-align:right;color:#C7C7C7;">{{item.time}}</div>
    
        </div>
        <div style="margin-bottom:10px;">
            <span class="getflag">妙手仁心</span><span class="getflag">妙手仁心</span><span class="getflag">妙手仁心</span><span class="getflag">妙手仁心</span><span class="getflag">妙手仁心</span><span class="getflag">妙手仁心</span>
        </div>
        <div class="evaluate">
            {{item.evaluate}}
        </div>
        <div class="question">
            {{item.question}}
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'detail-cell',
    props:{
		data:{
			type:Object,
			required:true
		}
	},
    data(){
      return {
        introduce:[]
      }
    },
    components:{},
    mounted(){
		this.$axios({
			url:'/api/goods/detail',
			params:{_limit:2,q:this.data.name}
		})
		.then(
			res => {
				console.log(res);
				this.introduce = res.data.data;
				console.log(this.introduce)
			}	
		)
	},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
	.detail-cell{
		height:7rem;
	}
  .feedback {
      font-size: 12px !important;
  }
  .getflag {
      padding: 0px 5px;
      border-radius: 3px;
      border: 1px solid rgb(0, 148, 255);
      margin: 10px 10px 0px 0px;
      font-size: 12px !important;
      color: rgb(0, 148, 255);
      float:left;
  }
  .question {
      font-size: 12px !important;
      margin-top: 5px;
      background-color: #e6e6e6;
      border-radius: 5px;
      padding: 5px 10px;
  }
  .evaluate {
      font-size: 12px !important;
	  margin-bottom: 0.2rem;
  }
</style>
