<template>
	<div id="project">
		<div class="container">
			<h2  class="animated animate__pulse title-wthree">
			  <span>项目经历</span>
			</h2>
			<div class="row justify-content-between list">
				<template  v-for="(item,index) in projectList">
					<div class="col-md-3 list-item" @click="showProjectInfo(item)">
						<img class="cover" :src="getAssetsImages(item.imgUrl)" :alt="item.name">
						<div class="mengban">
							<p>{{item.name}}</p>
						</div>
					</div>
					<div class="col-md-1 showBox"></div>
				</template>
			</div>
			<MsgBox 
			:isVisible="isVisible" 
			:data="projectArr.arr"
			@on-close="closeFun"/>
		</div>
	</div>
</template>
<script setup>
  import msgBox from '../components/msgBox.vue'
	const getAssetsImages =(name)=> {
	    return new URL(`/src/assets/img/${name}`, import.meta.url).href; //本地文件路径
	}
	const projectList = reactive([
		{
			name:'XBRL信息披露系统',
			time:'2021.02~2022.05',
			desc:'XBRL信息披露系统是恒生自主研发的用于证券投资基金行业信息披露的报表系统，其 服务对象包括：银行、证券公司、基金公司等金融机构。该系统能够与资产管理系统和 资产托管系统实现底层数据共享，可以快速的将财务基础数据转化成信息披露报表，快 速生成标准化XBRL实例文档。',
			jsz:'vue+es6+hui+Nginx+webpack+Oracle+Mysql',
			xmzz:'1)负责项目整体框架升级；2)参与增值模块的评估与设计；3)负责项目核心功能(报告管理、报送管理、基础数据等模块)的研发工作；4)负责为客户编写系统操作使用手册；',
			xmcg:'1)该系统落地服务于花旗银行、国泰君安以及中金公司等120余家金融机构，并得到了大部分客户的认可；2)通过技术升级，实现将系统由3.0版本到6.0版本的升级，采用vue代替delphi技术重构了系统代码，实现系统微服务化，极大程度的提高了用户体验，同时也提升了系统定制化开发的效率。',
			imgUrl:'1.jpg',

		},
		{
			name:'南宁担保小贷',
			time:'020.08-2021.02',
			desc:'该项目是为南宁金融集团开发的一款担保业务管理系统，通过业务系统来提升担保机构的规范化管理能力、风险控制能力、市场扩张能力、市场响应及低成本运营能力、协同作业能力和资源共享能力，从而提升公司的综合竞争实力，包含商机管理、项目管理、诉讼管理、资产管理、档案管理、授信管理、保 证措施、上会管理、费用管理、产品管理以及流程监控和代偿管理等功能模块。',
			jsz:'vue+elementUi+es6+webpack',
			xmzz:'1)主导团队完成项目从 0 到 1 建设并落地，负责整体系统设计（方案，选型等）；2)个人主导开发核心模块——资产管理、档案管理和产品管理等功能模块；3)负责需求迭代的开发和维护。',
			xmcg:'1)该系统为融都科技的金融科技解决方案——小贷业务的首次落地，实现公司小贷业务的零突破。',
			imgUrl:"2.jpg"
		},
		{
			name:'运营活动管理平台',
			time:'2019.08-2020.05',
			desc:'该项目为一款集成多款运营活动如：签到领金币，积分大转盘，九宫格、砸金蛋，刮刮乐等等，并且可以在微信，支付宝等多个平台运行，支持自定义抽奖活动，后台管理系统可以统计活动数据。',
			jsz:'Uniapp+vue+es6+antdesignpro',
			xmzz:'1)设想活动场景，搜集活动方案，并落实方案的开发；2)调试多平台的兼容效果，优化性能；3)活动后端管理平台的开发。',
			xmcg:'1)运用于多家合作银行项目，对于吸引客户，进而得到更多的现金流，进而转向投资起到积极作用。',
			imgUrl:"3.jpg"
		},
		{
			name:'银行信用卡网申系统',
			time:'2020.05-2021.01',
			desc:'该系统是融都科技面向银行机构获客类系统产品，其主要服务于银行网申信用卡办理、 提额办理和用户分析业务，可提供身份识别、地址定位、级别划分、电子签名、营销管 理、权益对接等服务，结合大数据、人工智能等科技手段助力银行更加高效进行业务推 广，精准化获客。',
			jsz:' vue+es6+mintUi+elementUi+H5+webpack',
			xmzz:'该系统是融都科技面向银行机构获客类系统产品，其主要服务于银行网申信用卡办理、 提额办理和用户分析业务，可提供身份识别、地址定位、级别划分、电子签名、营销管 理、权益对接等服务，结合大数据、人工智能等科技手段助力银行更加高效进行业务推 广，精准化获客。',
			xmcg:'1)该系统为融都科技首次在银行机构落地的平台，实现公司银行业务的零突破，服 务于漓江农村合作银行，为客户带来了巨大的业务价值；2)漓江农村合作银行项目在半个月时间完成开发部署及联调测试工作，客户服务满 意度极高。',
			imgUrl:"4.jpg"
		},
		{
			name:'和氏璧艺术交易所',
			time:'2019.08-2020.05',
			desc:'该项目是建设集艺术品资产通证发行、交易、存管、流通、投票于一体的艺术品交易平 台，主要包括工作台、用户管理、藏品管理、交易管理、财务管理、统计管理、交割管 理、内容管理、系统管理以及安全管理等功能模块。',
			jsz:'react+ant design+es6+webpack',
			xmzz:'1)搭建项目环境，设计开发流程；2)负责开发官网前端业务系统及后台管理系统。',
			xmcg:'1)该系统以区块链为底层技术，实现艺术品采集、备案等信息的上链，解决了艺术品信息防伪的难题；2)该系统提供数字藏品上链、发行、营销、展示以及管理平台等一站式解决方案，帮助企业构建专属的数字藏品营销平台，让品牌方更简单地发行属于自己的数字藏品。',
			imgUrl:"5.jpg"
		},
		{
			name:'添银宝',
			time:'2017.09-2018.05',
			desc:'该项目是一款互联网借贷信息中介系统，借助云计算、移动支付、大数据和人工智能等手段，实现出借者和融资者的资金融通，满足双方的投融资需求，最终实现多方共赢；主要模块有登录注册， 投资还款，充值提现，安全保护，账户中心，以及信息披露等。',
			jsz:'react+ant design+es6+webpack',
			xmzz:'1)负责技术选型，搭建项目环境；2)负责该产品B端相关业务和C端相关页面的开发；3)跟进项目业务需求迭代；4)优化页面性能。',
			xmcg:'1)该项目自完成落地，一直稳健运行，服务于广大投融资用户，获得客',
			imgUrl:"6.jpg"
		},
	])

	const isVisible = ref(false);
  const closeFun = (val)=>{
  	isVisible.value = val
  }
  const projectArr = reactive({
  	arr:[]
  })
  const showProjectInfo=(item)=>{
  	isVisible.value= true;
  	projectArr.arr = item
  	console.log(projectArr.arr,'projectArr')
  }
	
</script>
<style scoped>
	#project{
		/*margin-top: 10vh;*/
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
		border: 1px solid black;
		height: 40vh;
		margin-bottom: 5vh;
		padding: 0;
		position: relative;
	}
	.list-item:hover .mengban{
		display: block;
		cursor: pointer;
	}
	.cover{
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
	.showBox:nth-child(3n){
		display: none;
	}
	.mengban{
		position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    line-height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.5);
    display: none;
    color: #fff;
	}
	.mengban p{
		position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10rem;
	}
</style>