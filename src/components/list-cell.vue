<template>
  <div class="list-cell">
	  <!-- <router-link> -->
    <table width="100%" class="underline01" @click="getDetail">
        <tr>
            <td width="80" height="110" align="center">
                <img :src="data.auth_icon" style="width:60px; margin:0px; border-radius:50%;">
                <p class="label01">可咨询</p>
            </td>
            <td>
                <div style="margin-bottom:4px;"><span style="font-weight:bold;color:#808080;font-size:16px;">{{data.name}}</span><span style="color:#808080;font-size:12px;">{{data.department}} {{data.position}}</span></div>
                <div style="margin-bottom:4px;color:#808080;font-size:11px;">{{data.location}}</div>
                <div style="margin-bottom:8px;color:#c7c7c7;font-size:10px;">擅长：{{data.like}}</div>
                <div style="height:25px"><span class="label03">图文：{{data.price}}元/次</span><span class="label04">语音：{{data.price1}}元/次</span></div>
            </td>
        </tr>
    
    </table>
	<!-- </router-link> -->
  </div>
</template>

<script>
  export default {
    name:'list-cell',
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
  .underline01 {
      border-bottom: 1px solid #f6f6f6;
  }
  .label01 {
      border: 1px solid #00c304;
      color: #00c304;
      font-size: 10px;
      border-radius: 3px;
      width: 50px;
  }
  .label03 {
      background-color: #00c304;
      color: #FFF;
      font-size: 11px;
      border-radius: 5px;
      margin: 2px 10px 2px 0px;
      padding: 3px 8px;
  }
  .label04 {
      background-color:#ff6a00;
      color: #FFF;
      font-size: 11px;
      border-radius: 5px;
      margin: 2px 10px 2px 0px;
      padding: 3px 8px;
  }
</style>
