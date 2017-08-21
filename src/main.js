import Vue from 'vue'
// import VueFire from 'vuefire'
import App from './App.vue'
import Firebase from 'firebase';

let config = {
  apiKey: "AIzaSyBOjr3p2p-PdRvJSXUOjRvJurELNMBQ9Q0",
  authDomain: "aureliatodo.firebaseapp.com",
  databaseURL: "https://aureliatodo.firebaseio.com",
  projectId: "aureliatodo",
  storageBucket: "aureliatodo.appspot.com",
  messagingSenderId: "580129879737"
};
let app = Firebase.initializeApp(config)
let db = app.database()
let quoteRef = db.ref('quotes')


export const eventBus = new Vue({

  methods: {
    addQuoteToFirebase(instance) {
      var newQuoteKey = quoteRef.push(instance).key;
      console.log(`newQuoteKey: ${newQuoteKey}`);
      return newQuoteKey;
    }
  }
});

// GLOBAL Directive
// Vue.directive('highlight', {
//   bind(el, binding, vnode) {
//     var delayed = (binding.modifiers['delayed'] && 2000) || 0;
//     console.log('delayed')

//     setTimeout(function () {
//       if (binding.arg === 'back') {
//         el.style.backgroundColor = binding.value || 'green';
//       }
//       el.style.color = 'white';

//     }, delayed);
//   }
// })


new Vue({
  el: '#app',
  render: h => h(App)
});


