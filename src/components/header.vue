<template>
  <div class="banner" id="home">
  <div class="mengban">  
	  	<div class="container">
				<header>
					<div class="header-bottom-agileits" >
						<nav class="navbar navbar-expand-lg bg-body-tertiary" >
						  <div class="container-fluid">
						    <a class="navbar-brand logo" href="#">
						    	<h1>							
										<span >Apt Resume</span>
									</h1>
						    </a>
						    <button 
							    class="navbar-toggler" 
							    type="button" 
							    data-bs-toggle="collapse" 
							    data-bs-target="#navbarText" 
							    aria-controls="navbarText" 
							    aria-expanded="false" 
							    aria-label="Toggle navigation"
							    @click="toggleFun"
						    >
						      <span class="navbar-toggler-icon"></span>
						    </button>
						    <div class="collapse navbar-collapse" id="navbarText">
						      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
						        <li 
						          class="nav-item"
						          v-for="(item,index) in navList"
								      :key="index"
						         >
						          <a 
							          :class="['nav-link', {'active': index === 0}]"  
							          aria-current="page" 
							          :href="item.key"
							        >
							          {{item.name}}
							        </a>
						        </li>
						        
						      </ul>
						    </div>
						  </div>
						</nav>
						
					</div>
					<div class="clearfix"></div>
				</header>
				<div class="desc wow animate__animated animate__backInDown">
					<h3>Hi, 你好</h3>
					<h1>我是  <span class="myname">陶璐璐</span></h1>
					<h5>前端工程师 / 5年</h5>
					<div class="botton">
						<a href="#about" class="scroll">About me <span class="fa fa-caret-right"></span></a>
					</div>
			  </div>
	  	</div>
  	</div>
  </div>
	
</template>
<script setup>
	const navList = [
		{ name:'首页',id:1,key:'#home' },
		{ name:'关于我',id:2,key:'#about'},
		{ name:'工作经历',id:3,key:'#work' },
		{ name:'项目经理',id:4,key:'#project' },
		{ name:'职业技能',id:5,key:'#skills' },
		{ name:'教育经历',id:6,key:'#education'}
	];
	const flag = ref(0);
	const toggleFun = ()=>{	
		if(flag.value==1){
			document.getElementById('navbarText').style.display = 'none';
			flag.value = 0
		}else{
			document.getElementById('navbarText').style.display = 'block';
			flag.value = 1
		}
	}
	

</script>
<style scoped>
	#home{
		background-image: url(../assets/img/bg-mia.jpg) ;;
		background-size: cover;
		height:100vh;
		width: 100vw;
	}
	.logo{
		color: #fff
	}
	.nav-item{
		text-align: center;
	}
	.navbar-nav .nav-link.active, .navbar-nav .show>.nav-link {
    color: #0dcaf0!important;
    border-bottom: 1px solid #0dcaf0;
  }
	.nav-item a{
		color: #fff;
	}
	.navbar-toggler{
		background: #fff
	}
	.mengban{
		height:100vh;
		width: 100vw;
		background: rgba(0,0,0,0.4);
		color:#fff;
	}
	.desc{
    position: absolute;
    transform: translate(-50%, -48%);
    top: 50%;
    left: 48%;
	}
	.desc h1,h2,h5,h3{
		margin-bottom: 1.5rem;
    letter-spacing: 5px;

	}
	.wxBox{
		width: 12rem;
    height: 12rem;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid #fff;
	}
	.cover{
		object-fit: cover;
		width: 100%;
	}
	.scroll{
		color: #0dcaf0;
    text-decoration: none;
    padding: 5px 20px;
    border-radius: 20px;
    border: 1px solid #0dcaf0;
	}
	.myname{
		padding: 5px 10px;
		border-bottom: 2px solid #0dcaf0;
	}
</style>