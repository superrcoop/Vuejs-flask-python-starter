
Vue.component('app-header', {
    template: `
        <div class="container">
          <div class="flux"><router-link class="flux" to="/">Vuejs-stater</router-link></div>
        </div>
    `
});

Vue.component('app-footer', {
    template: `
    <footer>
      <div class="footer">
        <p>&copy; Photogram 2018. All Rights Reserved </p>
      </div>
    </footer>
    `
});
const Home = Vue.component('home',{
  template:`
      
      <div class="agile_ihj">
        <div class="w3l_but">
        HomePage
      <div class="clear"></div>
      </div>

`,
  data: function(){
    return{
    }
  }
});


// Define Routes
const router = new VueRouter({
    routes: [
    { path: "/", component: Home }
    ]
});

// Instantiate our main Vue Instance
let app = new Vue({
    el: "#app",
    router
});