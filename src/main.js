import Vue from 'vue'
import App from './App.vue' 
// Importazione a livello globale come suggerische la Documentation   
import LangFlag from 'vue-lang-code-flags'; 
Vue.component('lang-flag', LangFlag); 

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { faStar } from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* add font awesome icon component */ 
Vue.component("font-awesome-icon", FontAwesomeIcon); 
library.add(faStar);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
