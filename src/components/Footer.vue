<template>
	<footer>
		<div class="footer-section">
			<div class="container">
				<div class="footer_main_wrap">
					<div class="footer-wrap">
						<div class="footer-logo">
							<img src="./../assets/images/footer-logo.png">
						</div>
						<p> {{ footerDesc }} </p>
					</div>
					<div class="social-media-sec">
						<ul>
							<li><a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
							<li><a href="#"><font-awesome-icon :icon="['fab', 'tiktok']" /></a></li>
							<li><a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
							<li><a href="#"><font-awesome-icon :icon="['fab', 'linkedin']" /></a></li>
						</ul>
					</div>
					<div class="footer-content">
						<p> {{ footerContent }} </p>
					</div>
				</div>
				<div class="footer_main_wrap">
					<h4> {{ mindDocCompanion }} </h4>
					<AppsLogo />
				</div>
				<div class="accordion-container">
				   	<div class="set" v-for="accordionItem in accordionItems" v-bind:key="accordionItem.id">
						<a v-bind:href="accordionItem.itemLink">
				      		{{ accordionItem.itemTitle }}
							<i v-if="accordionItem.isActive" class="fa fa-plus"></i>
							<i v-else class="fa fa-plus"></i>
				      	</a>
				      	<div class="content">
				         <ul>
				         	<li v-for="subitem in accordionItem.subItems" v-bind:key="subitem.id">
								 <a v-bind:href="subitem.subItemlink"> {{ subitem.subItemTitle }} </a>
							</li>				         	
				         </ul>
				      </div>
				   </div>				   
				</div>								
				<div class="copyright-div">
					<p> {{ copyrightText }} </p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import AppsLogo from './AppsLogo.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: 'Footer',
  components: {
	  AppsLogo, FontAwesomeIcon
  },
  data() {
	  return {		
		footerDesc: 'Self-care for your mental health',
		mindDocCompanion : 'MindDoc Companion',
		footerContent: 'If you or someone you know is in a crisis or danger, use these resources to find immediate help. Show Hotlines',
		copyrightText: '© 2022 MindDoc Health GmbH',
		accordionItems: [
		{
			id: 0,
			itemLink: '#',
			itemTitle: 'Partner',
			isActive: false,
			subItems: [
				{
					subItemlink: '#',
					subItemTitle: 'Therapie'
				},
				{
					subItemlink: '#',
					subItemTitle: 'Selbsthilfe'
				}
			],
		},
		{
			id: 1,
			itemLink: '#',
			itemTitle: 'MindDoc',
			isActive: false,
			subItems: [
				{
					subItemlink: '#',
					subItemTitle: 'Für Unternehmen'
				},
				{
					subItemlink: '#',
					subItemTitle: 'Für Universitäten'
				},
				{
					subItemlink: '#',
					subItemTitle: 'Für Versicherungen'
				},
				{
					subItemlink: '#',
					subItemTitle: 'Für Fachkreise'
				}
			],
		},
		{
			id: 2,
			itemLink: '#',
			itemTitle: 'Informationen',
			isActive: false,
			subItems: [
				{
					subItemlink: '#',
					subItemTitle: 'Mission'
				},
				{
					subItemlink: '#',
					subItemTitle: 'Wissenschaft'
				},
				{
					subItemlink: '#',
					subItemTitle: 'Presse'
				},
				{
					subItemlink: '#',
					subItemTitle: 'Karriere'
				}
			],
		},
		{
			id: 3,
			itemLink: '#',
			itemTitle: 'Informations',
			isActive: false,
			subItems: [
				{
					subItemlink: '#',
					subItemTitle: 'Magazine'
				},
				{
					subItemlink: '#',
					subItemTitle: 'FAQs'
				},
				{
					subItemlink: '#',
					subItemTitle: 'Quellen'
				},
				{
					subItemlink: '#',
					subItemTitle: 'Kontakt'
				}
			],
		},
		{
			id: 4,
			itemLink: '#',
			itemTitle: 'Legal',
			isActive: false,
			subItems: [
				{
					subItemlink: '#',
					subItemTitle: 'Impressum'
				},
				{
					subItemlink: '#',
					subItemTitle: 'Datenschutz'
				},
				{
					subItemlink: '#',
					subItemTitle: 'AGBs'
				},
				{
					subItemlink: '#',
					subItemTitle: 'Verwendung von Cookies'
				},					
				{
					subItemlink: '#',
					subItemTitle: 'Medizinprodukt'
				}
			],
		}]
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
