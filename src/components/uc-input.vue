<template>
  <div class="uc-input">
	  
    <input
      :type="type"
      :value="value"
      @input="$emit('input',$event.target.value)"
    >
    <span v-show="label">{{label}} :</span>
  </div>
</template>

<script>
  export default {
    name:'uc-input',
    props:{
      label:{
        type:String,
        default:''
      },
      value:{
        type:String,
        default:''
      },
      type:{
        type:String,
        default:'text'
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style>
  .uc-input{border-bottom:1px solid #89BDFF;height:0.95rem; position:relative;}
  .uc-input input{ padding-left:1.24rem;width:4rem;height:100%; font-size:0.4rem;outline-style: none;}
  .uc-input span{font-size:14px;width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;}
</style>
