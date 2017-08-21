<template>
    <div class="row">
        <app-quote v-for="q in quotes" :key="q" :quote="q"></app-quote>
    </div>
</template>

<script>
    import Quote from './Quote.vue';
    import { eventBus } from '../main';

    export default {
        props: ['quotes'],
        components: {
            appQuote: Quote
        },
        created() {
            eventBus.$on('quoteClicked', quote => {
                let i = this.quotes.indexOf(quote);
                this.quotes.splice(i, 1);

                // console.log(`i: ${i}`);
            })
            
        }
    }
</script>

<style <style lang="scss" scoped>

</style>
