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

new Vue({
  el: '#app',
  render: h => h(App)
});


