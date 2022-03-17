<template>
 	<section>
		<div class="banner-section">
			<div class="container"> 
				<div class="banner-wrap">
					<div class="banner-caption">
						<h1> {{ bannerTitle }} </h1>
						<p> {{ bannerDesc }} </p>
					</div>
					<AppsLogo />
				</div>
			</div>
		</div>
	</section>  
</template>

<script>
import AppsLogo from './AppsLogo.vue'

export default {
  name: 'HeroBanner',
  components: {
	  AppsLogo
  },
  data() {
	  return {
		bannerTitle: 'Mental health starts with you',
		bannerDesc: 'The MindDoc app is your companion on your journey toward better mental health.',
		image: { backgroundImage: "url(./../assets/images/MindDoc-Logo.png)" }
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
  //@import "../assets/sass/herobanner.scss";
</style>
