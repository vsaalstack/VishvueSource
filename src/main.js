import { createApp } from 'vue'
import App from './App.vue'

/* Font Awesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram, faTiktok, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faInstagram, faTiktok, faTwitter, faLinkedin);

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
