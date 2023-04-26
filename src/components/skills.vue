<template>
	<div id="skills">
		<div class="container">
			<div class="row">
				<div class="col-md-6 left-box">
					<h2 class="title-wthree">SKILLS</h2>
					<ul class="describe-box">
						<li class="describe-item">1. 熟练使用HTML, CSS和JavaScript,了解js中闭包，作用域，es6新特性，掌握使用TypeScript开发；</li>
						<li class="describe-item">2.熟悉VUE、React以及uniapp等主流前端框架；</li>
						<li class="describe-item">3.熟悉svn、git等资源版本管理系统；</li>
						<li class="describe-item">4.熟悉前后端分离和微前端开发；</li>
						<li class="describe-item">5.了解gulp、webpack等前端构建工具，熟悉其配置及打包过程。</li>
						<li class="describe-item">6.了解nodejs；</li>
						<li class="describe-item">7.了解mysql和oracle等数据库。</li>
					</ul>
				</div>
				<div class="col-md-6 right-box">
					<Progress  :listCon="listCon"/>
				</div>
			</div>
			
		</div>
	</div>
</template>
<script setup>
import Progress from '../components/progress.vue'
const listCon = reactive([
	{ name:'vue',pre:'90%' },
	{ name:'react',pre:'80%' },
	{ name:'typescript',pre:'80%' },
	{ name:'webpack',pre:'75%'  },
	{ name:'sql',pre:'50%'  },
	{ name:'node',pre:'30%' }
])
	
</script>
<style scoped>
	#skills{
		margin-top: 10vh;
		background-image: url(../assets/img/award.jpg);
		background-size: cover;
		color: #fff;
		padding: 5rem 0;
	}
	.describe-box{
		padding: 1rem;
	}
	.describe-item{
		padding: 5px 0;
	}
	.right-box{
		padding: 20px;
	}
	/*.title-wthree{
		text-align: center;
		font-weight: bold;
	}*/
	
</style>