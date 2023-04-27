<template>
	<div>
		<div class="progress-list" v-for="item in props.listCon">
			<div class="row justify-content-between">
				<div class="col left-text">{{item.name}}</div>
				<div class="col right-text">{{item.pre}}%</div>
		  </div>
		  
			<div class="progress" role="progressbar" aria-label="Animated striped example" :aria-valuenow="item.pre" aria-valuemin="0" aria-valuemax="100">
			  <div class="progress-bar progress-bar-striped bg-info" :style="{'width': item.pre+'%'}"></div>
			</div>
			
		</div>


		
	</div>	
</template>
<script setup>
const props = defineProps({
    listCon:{
    	type:Array,
    	default() {
	      return []
	    }
    }
})
console.log(props.listCon,'props')
</script>
<style scoped>
  .progress-list{
  	margin-bottom: 1rem;
  }
	.right-text{
		text-align: right;
	}

</style>
