<template>
	<Header />
	<AboutMe />
	<EduExperience />
	<WorkExperience />
	<ProjectExperience />
	<Skills />
	

</template>

<script setup>
import Header from '../components/header.vue'
import AboutMe from '../components/aboutMe.vue'
import EduExperience from '../components/eduExperience.vue'
import ProjectExperience from '../components/projectExperience.vue'
import Skills from '../components/skills.vue'
import WorkExperience from '../components/workExperience.vue'

import WOW from "wow.js";

onMounted(() => {
　　new WOW({
	  boxClass: "wow", // animated element css class (default is wow)
	  animateClass: "animated", // animation css class (default is animated)
	  offset: 0, // distance to the element when triggering the animation (default is 0)
	  mobile: true, // trigger animations on mobile devices (default is true)
	  live: false, // act on asynchronously loaded content (default is true)
	  callback: function (box) {
	    // the callback is fired every time an animation is started
	    // the argument that is passed in is the DOM node being animated
	  },
	  scrollContainer: null, // optional scroll container selector, otherwise use window,
	  resetAnimation: true, // reset animation on end (default is true)

   }).init();
})
</script>