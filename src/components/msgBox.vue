<template>
	<div 
		v-if="isVisible"
		class="modal fade show" 
		id="exampleModalCenter" 
		tabindex="-1" 
		aria-labelledby="exampleModalCenterTitle" 
		aria-modal="true" 
		role="dialog"
		style="display: block;background: rgba(0,0,0,0.8);"
	>
	  <div class="modal-dialog modal-dialog-centered">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h1 class="modal-title fs-5" id="exampleModalCenterTitle">
	        	项目详情
		        <!-- {{data.name}}
		        <span class="title">( {{data.time}} )</span> -->
	        </h1>
	        <button 
		        type="button" 
		        class="btn-close" 
		        data-bs-dismiss="modal" 
		        aria-label="Close"
		        @click="closeFun"
	        ></button>
	      </div>
	      <div class="modal-body">
	      	<div class="title">
	      		<span>{{data.name}}</span>
	      		<span>{{data.time}}</span>
	      	</div>
	        <div class="row textStyle">
	          <span class="col-md-3">项目描述：</span>
	          <p class="col-md-9">{{data.desc}}</p>
	        </div>
	        <div class="row textStyle">
	          <span class="col-md-3">技术栈：</span>
	          <p class="col-md-9">{{data.jsz}}</p>
	        </div>
	        <div class="row textStyle">
	          <span class="col-md-3">项目职责：</span>
	          <ul class="col-md-9">
	            <li v-for="item in data.xmzz.split('；')">
	            	{{item}}
	            </li>
	          </ul>
	        </div>
	        <div class="row textStyle">
	          <span class="col-md-3">项目成果：</span>
	          <ul class="col-md-9">
	            <li v-for="item in data.xmcg.split('；')">
	            	{{item}}
	            </li>
	          </ul>
	        </div>
	      </div>
	    </div>
	  </div>
	</div>

</template>
<script setup>
const props = defineProps({
	isVisible:{
		type: Boolean,
		default: true
	},
	data:{
		type:Object,
		define(){
			return {}
		}
	},
	title:{
		type: String,
		default: ''
	}
})
const emit = defineEmits(['on-close']);
const closeFun =()=>{
	emit('on-close',false)
}

	
</script>
<style scoped>
	.title{
		background: #0dcaf0;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
	}
	
	.textStyle{
		text-align: left;
		padding: 0 1rem;
	}
</style>