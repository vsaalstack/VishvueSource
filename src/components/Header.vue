<template>
  <header>
		<div class="header-main">
			<div class="container">
		    	<div class="header-section">
		        	<div class="logo-section">
		                <div class="logo">
		                   <a href="javascript:void(0)"><img src="./../assets/images/MindDoc-Logo.png" alt=""></a>
		                </div>
		            </div>
		            <div class="menu-section">
		            	<NavMenu />
		            </div>
		        </div>    
	    	</div>
		</div>
	</header>
</template>

<script>
/* import "../assets/js/header.js"; */
import NavMenu from './NavMenu.vue'

export default {
  name: 'Header',
  components: {
    NavMenu
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700');
	@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
  	//@import "../assets/sass/header.scss";
 /*  @import "../assets/sass/herobanner.scss"; */ 
  
</style>