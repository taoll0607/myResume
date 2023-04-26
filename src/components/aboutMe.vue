<template>
	<div id="about">
		<div class="container">
		  <div class="tittle-agileinfo">
				<h2 class="title-wthree">
				  <span>关于我</span>
				</h2>
				
			</div>
		  <div class="row">
		  	<div class="col-md-4">
			  	<div class="list-item">
			  	  <p class="text-title">5年前端开发经验，开发过多款移动和PC端产品</p>
			  	  <p class="text-con">01</p>
			  	</div>
			  	<div class="list-item">
			  		<p class="text-title">具备良好的编程能力和编程习惯</p>
			  		<p class="text-con">02</p>
			  	</div>
			  	<div class="list-item">
			  		<p class="text-title">具备良好的沟通能力和团队协作能力</p>
			  		<p class="text-con">03</p>
			  	</div>
			  	<div class="list-item">
			  		<p class="text-title">具备独立分析并解决问题的能力</p>
			  		<p class="text-con">04</p>
			  	</div>
			  	<div class="list-item">
			  		<p class="text-title">热衷于编程，笃学善思</p>
			  		<p class="text-con">05</p>
			  	</div>
			  </div>
			  <div class="col-md-8 right-box">
		  		<div class="detail">
		  			<div class="con">
			  			<div class="con-detail">
			  				<span>Hi，面试官，你好,我叫陶璐璐!</span>
		  				    <p>我有5年的前端开发经验，来应聘前端开发工程师这一岗位，上一家公司是恒生电子股份有限公司，期间主要负责pc端网站的开发，还有微信小程序和app的维护，开发的技术栈主要就是vue全家桶和uniapp自己平常休息时间也会经常在网络上学习比较前沿的技术栈或是钻研框架的底层源码，抗压能力也挺好，能够适应合理的加班，希望能够加入公司，成为公司的一员.</p>
			  			</div>
		  				
		  			</div>
		  			<div class="info-list">
		  				<p class="info-item">
			  				<span class="info-title">年龄</span>
			  				<span class="info-val">: 28岁</span>
		  				</p>

		  				<p class="info-item">
			  				<span class="info-title">经验</span>
			  				<span class="info-val">: 5年</span>
		  				</p>

		  				<p class="info-item">
			  				<span class="info-title">手机</span>
			  				<span class="info-val">: 15658051395</span>
		  				</p>

		  				<p class="info-item">
			  				<span class="info-title">城市</span>
			  				<span class="info-val">: 杭州</span>
		  				</p>

		  				<p class="info-item">
			  				<span class="info-title">邮箱</span>
			  				<span class="info-val">: taolulu0607@163.com</span>
		  				</p>

		  				<p class="info-item">
			  				<span class="info-title">期望薪资</span>
			  				<span class="info-val">: 16-17k</span>
		  				</p>
		  			</div>

		  		</div>
			  </div>
		  </div>
		</div>
	</div>
</template>
<script setup>
	
</script>
<style scoped>
	#about{
		/*margin-top: 10vh;*/
	}
	.tittle-agileinfo{
		text-align: center;
	}
	/*.title-wthree{
		text-align: center;
    font-weight: bold;
    padding: 1rem 0;
	}
	.title-wthree span{
		padding: 0.5rem 1rem;
    display: inline-block;
    border-bottom: 5px solid #0dcaf0;
	}*/
	.list-item{
		height: 20vh;
		box-shadow: -2px 2px 6px #737373;
		margin-bottom: 20px;
		position: relative;
  }
  .list-item:nth-child(5){
	  margin-bottom: 0px;

  }
  .text-con{
  	margin: 0;
  	position: absolute;
  	bottom: 0;
  	left: 0;
  	color: #fff;
  	width: 100%;
  	height: 3rem;
  	line-height: 3rem;
  	background: black;
  	text-align: center;
  	font-style: italic;
  	border-bottom: 5px solid #0dcaf0;
  }
  .text-title{
  	text-align: center;
  	padding: 3rem;
  	
  }
	.right-box{
		border: 10px solid black;
		padding: 1rem;
	}
	.detail{
		height: 100%;
	    position: relative;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%, -50%);
	    background: #0dcaf0;
	}
	.con{
		padding: 3rem;
	    height: 20rem;
	    overflow: hidden;
	}
	.con-detail{
		overflow-y: scroll;
    	height: 100%;
	}
	.con span{
		color: #fff;
		font-size: 1.5rem;
	}
	.info-list{
		margin: 0 3rem;
	}
	.info-item{
		height: 2rem;
		line-height: 2rem;
	}
	.info-title{
		display: inline-block;
		width: 32%;
	}
	.info-val{
		color: #fff;
	}

</style>