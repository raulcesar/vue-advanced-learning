<template>
  <div id="app">
    <app-quote-counter :quotes="quotes" :max="maxQuotes"></app-quote-counter>
    <app-quote-input @newQuote="addQuote"></app-quote-input>
    <app-quote-list :quotes="quotes"></app-quote-list>
  </div>
</template>

<script>
  import { eventBus } from './main';
  import QuoteCounter from './components/QuoteCounter.vue';
  import QuoteInput from './components/QuoteInput.vue';
  import QuoteList from './components/QuoteList.vue';

  


  export default {
    name: 'app',

    components: {
      appQuoteCounter: QuoteCounter,
      appQuoteInput: QuoteInput,
      appQuoteList: QuoteList

    },
    data() {
      return {
        quotes: ['Just testing', 'quote 2'],
        maxQuotes: 10
      }
    },

    created() {
      eventBus.$on('quoteClicked', quote => {
        let i = this.quotes.indexOf(quote);
        this.quotes.splice(i, 1);
      })
      
      // console.log(`eventBus: ${eventBus.test()}`)
    },

    methods: {
      addQuote: function (quote) {
        if (this.quotes.length >= this.maxQuotes) {
          this.quotes.splice(0, 1);
        }
        this.quotes.push(quote);
      }
    }

  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
