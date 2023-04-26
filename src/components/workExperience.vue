<template>
	<div id="work">
		<div class="container">
			<div class="row" >
				<div class="col-md-6 left-box">
					<div class="title"></div>
					<div class="desc">
						<!-- <h2 class="title-wthree">工作经历</h2> -->
						<div class="detail-box">
							<div class="con">
								<h5><b>恒生电子股份有限公司</b></h5>
								<p>资管运营部 | 高级前端工程师 | 2021.02~2022.05</p>
								<p>
									担任部门高级前端工程师，负责面向银行、证券公司、基金公司等金融机构的XBRL信 息披露系统开发建设工作，服务客户包括花旗银行、国泰君安、中金公司等金融机构。
								</p>
								<ul>
									<li><span class="iconfont icon-yx_icon_right"></span>负责信息披露系统整体架构设计；</li>
									<li><span class="iconfont icon-yx_icon_right"></span>负责事业部内整体产品一体化及UED改造；</li>
									<li><span class="iconfont icon-yx_icon_right"></span>面向客户，解决客户相关系统咨询问题；</li>
									<li><span class="iconfont icon-yx_icon_right"></span>负责部门员工技术培训工作。</li>
								</ul> 
							</div>
							<div class="con">
								<h5><b>杭州融都科技股份有限公司</b></h5>
								<p>网金事业部 | 前端工程师 | 2017.04~2021.01</p>
								<p>
									担任部门前端工程师，负责面向银行、艺术品交易所、担保公司等客户群体的B端和C 端产品开发设计工作，累计服务项目40+，多次获得公司级表彰。
								</p>
								<ul>
									<li><span class="iconfont icon-yx_icon_right"></span>负责多个项目的需求分析设计、架构设计、开发实施工作；</li>
									<li><span class="iconfont icon-yx_icon_right"></span>负责部分项目需求设计、界面设计、开发实施及操作手册编写工作；</li>
									<li><span class="iconfont icon-yx_icon_right"></span>负责跟进相关技术栈发展趋势，结合业务需求完成公司产品的优化升级工作·</li>
									<li><span class="iconfont icon-yx_icon_right"></span>负责跟进客户相关需求，解答客户系统操作及业务咨询问题。</li>
								</ul> 
							</div>
						</div>
						
					</div>
				</div>
				<div class="col-md-6 right-box">
					<div class="mengban">
						工作经历
					</div>
				</div>
		  </div>
		</div>
		
	</div>
</template>
<script setup>
	
</script>
<style scoped>
	#work{
		margin-top: 10vh;
	}
	.left-box{
		box-shadow: 0 0 10px 0px rgba(0,0,0,0.5)
	}
	.right-box{
		background-image: url(../assets/img/1.jpg);
		background-size: cover;
		height: 50vh;
		padding: 0;
		display: table;
		text-align:center; 
	}
	.mengban{
		height: 100%;
		background: rgba(0,0,0,0.5);
		display: table-cell;
		vertical-align: middle;
		font-size: 4em;
		color: #fff
	}
	.desc{
		padding: 55px 20px;
	}
	/*.title-wthree{
		text-align: center;
		font-weight: bold;
	}*/
	.detail-box{
		height: 35vh;
    overflow-y: scroll;
	}
	.con{
		margin: 20px 0;
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