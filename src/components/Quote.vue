<template>
    <div class="col-sm-6 col-md-4  col-lg-3 ">
        <div class="panel panel-default" @click="quoteClicked">
            <div class="panel-body quote">
                {{objectifiedQuote.text}}
            </div>

            <i>{{objectifiedQuote.author}}</i>
            <i>{{index}}</i>
        </div>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        props: ['quote', 'index'],
        computed: {
            objectifiedQuote: function () {
                if (!this.quote.text) {
                    return {
                        text: this.quote,
                        author: 'Unknown'
                    };
                }
                return this.quote;
            }
        },
        methods: {
            quoteClicked() {
                eventBus.$emit('quoteClicked', this.quote);
            }
        }
    }

</script>

<style <style lang="scss" scoped>
    .panel-body {
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        color: #5d8eff;
        &:hover {
            cursor: pointer;
        }
        
    }
</style>
