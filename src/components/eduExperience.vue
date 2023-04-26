<template>
	<div id="education">
		<div class="container">
			<div class="row">
				<div class="col-md-6 left-box">
					<div class="mengban">
						教育经历
					</div>
				</div>
				<div class="col-md-6 right-box">
					<div class="con">
						<h5><b>浙江理工大学</b></h5>
					    <p>计算机科学与技术 | 本科 | 2023.02-2025.07</p>
			            <p>主修课程：计算机科学导论、C程序设计、数据结构与算法、面向对象程序设计、计算机组成原理、数据库原理与应用、操作系统、计算机网络、编译原理、软件工程等。</p>
			            <p>（成考在读）</p>

			            <h5><b>安徽城市管理学院</b></h5>
			            <p>计算机网络｜专科 | 2014.09-2017.07</p>
			            <p>主修课程：数据库管理、计算机网络、网络操作系统、静态网页设计(HTML+css+js +dom)、c++、数据结构等。</p>
					</div>
				    
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	
</script>
<style scoped>
	#education{
		margin-top: 10vh;
	}
	.right-box{
		height: 50vh;
		overflow: hidden;
		padding: 27px 30px;
		box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5)
	}
	.con{
		height: 100%;
		overflow-y: scroll;
	}

	/*.title-wthree{
		text-align: center;
		font-weight: bold;
	}*/
	.left-box{
		background-image: url(../assets/img/2.jpg);
		background-size: cover;
		height: 50vh;
		text-align: center;
		display: table;
		padding: 0
	}
	.mengban{
		height: 100%;
		background: rgba(0,0,0,0.5);
		display: table-cell;
		vertical-align: middle;
		font-size: 4em;
		color: #fff
	}
	::-webkit-scrollbar {
		width: 8px;
		height: 10px;
	}

	::-webkit-scrollbar-button {
		background-color: red;
	}

	::-webkit-scrollbar-track-piece {
		background: black;
	}

	::-webkit-scrollbar-thumb {
		background: #0dcaf0;
		border-radius: 4px;
	}

</style>