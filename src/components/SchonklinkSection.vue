<template>
	<section>
		<div class="image-content-div">
			<div class="container">
				<div class="image-content-wrap">
					<div class="image">
						<img src="./../assets/images/Schön_Klinik_Verwaltung_logo.png">
					</div>
					<h3> {{ bannerDesc }} </h3>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  name: 'SchonklinkSection',
  data() {
	  return {		
		bannerDesc: 'A product of the leading clinic group for psychosomatic medicine'
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
