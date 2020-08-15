<template>
	<div class="list" v-if="type==='list'">
		<div class="banner">banner</div>
		<div class="cell">cell</div>
	</div>
	<div class="detail" v-else-if="type==='detail'">
		<div>
			<div class="icon">icon</div>
			<div class="author"></div>
		</div>
		<div clss="title">title</div>
		<div class="time">time</div>
		<div class="content">content</div>
		<div class="content">content</div>
		<div class="content">content</div>
	</div>
</template>

<script>
	export default{
		name:'frame-screen',
		props:{
			type:{
				type:String,
				default:'detail'
			}
		}
	}
</script>

<style>
</style>
