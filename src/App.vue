<template>
  <div id="app">
    <h3>app</h3>
    
    <!-- <Loading bg-color="#ff0">漏顶</Loading> -->
    
    <!-- <h3>app</h3> -->
	<!-- <ucCell :data="{title,des}"/>
	<ucCell :data="{title,des}" isAdd :url="url" @click='show'/> -->
    
    <!-- <ucInput type="password"/>
	<ucInput value="你好"/>
	<ucInput @input="show" label="标题"/>
	//双响应绑定
	<ucInput :value="ipt" @input="show"/>
	<ucInput v-model="ipt"/> -->
	
	<!-- <ucNav bgColor="pink" border-width=10 arrow='gray'/> -->
	<!-- <Banner/> -->
	<!-- <frame-screen type="list" v-if="list.length===0"></frame-screen>
	<div v-else>展示真实数据</div> -->
	<uc-toolbar/>
  </div>
</template>

<script>
  // import Loading from './components/loading.vue';
  // import ucCell from './components/uc-cell.vue';
  // import ucInput from './components/uc-input.vue';
  // import ucNav from './components/uc-nav/index.vue';
  // import Banner from './components/swiper/index.vue'
  // import frameScreen from './components/frame-screen/index.vue'
  import ucToolbar from './components/uc-toolbar/uc-toolbar.vue'
export default {
  name: 'App',
  data(){
    return {
      // ipt:'qq'
	  list:[]
	  //ucCell
	  // title:'你好',
	  // des:'再见',
	  // url:'http://www.taobao.com'
    }
  },
  components: {
    // Loading
	// ucCell
	// ucInput
	// ucNav
	// Banner
	// frameScreen
	ucToolbar
  },
  methods:{
    // show(data){this.ipt=data}
	// show(data){
	// 	console.log(data)
	// }
  },
  mounted(){
  //   setTimeout(()=>this.arr=[
  //       {_id:1,title:'xx',sub_title:'oo',banner:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'},
  //       {_id:2,title:'xx2',sub_title:'oo2',banner:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'},
  //       {_id:3,title:'xx3',sub_title:'oo3',banner:'/images/img_1.jpg'},
  //     ],1000)
  }  
}

</script>

<style>

</style>
