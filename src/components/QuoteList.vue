<template>
    <div class="row">
        <app-quote v-for="(q, index) in quotes" :key="q" :quote="q" :index="index" @click.native="testing(index)"></app-quote>
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
        methods: {
            testing(data) {
                console.log(`Clicked in parent: index: ${data}`);
            }
        },
        // created() {
        //     eventBus.$on('quoteClicked', quote => {
        //         let i = this.quotes.indexOf(quote);
        //         this.quotes.splice(i, 1);

        //         // console.log(`i: ${i}`);
        //     })
            
        // }
    }
</script>

<style <style lang="scss" scoped>

</style>
