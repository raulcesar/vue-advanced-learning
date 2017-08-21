<template>
    <div>
        <div class="row">
            <form>
                <div class="col-sm-8 col-sm-offset-2 form-group">
                    <label for="idTextQuote">Quote</label>
                    <textarea class="form-control"
                              name="Quote Text"
                              id="idTextQuote"
                              rows="3"
                              v-model.lazy="quote"
                              ref="quoteInput"></textarea>
                </div>
                <div class="col-sm-8 col-sm-offset-2">
                    <label for="idQuoteType">Type</label>
                    <select name="quoteType"
                            id="idQuoteType"
                            class="form-control"
                            v-model="selectedType">
                        <option v-for="type in types"
                                :key="type"
                                :selected="type === 'Normal'">{{type}}</option>
                        <!-- <option v-for="type in types"                                :key="type"                                :selected="type === 'Normal'">{{type}}</option> -->

                    </select>
                </div>

                <div class="col-sm-8 col-sm-offset-2 form-group">
                    <button class="btn btn-primary"
                            @click.prevent="addQuote">
                        Add Quote
                    </button>
                </div>
            </form>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <cust-input v-model="dataSwitch"></cust-input>
            </div>
            
            <div class="col-sm-12">
                {{quote}} -> {{selectedType}} => {{dataSwitch}}
            </div>
        </div>

    </div>
</template>

<script>
    import { eventBus } from '../main';
    import CustomInput from './customInput.vue';

    export default {
        components: {
            custInput: CustomInput
        },
        data: function () {
            return {
                quote: '',
                types: ['Normal', 'Copied', 'Unknown'],
                selectedType: '',
                dataSwitch: true
            }
        },
        methods: {
            addQuote() {
                let quoteObj = {
                    text: this.quote
                }
                this.$emit('newQuote', this.quote);
                eventBus.addQuoteToFirebase(quoteObj);
                this.quote = '';
                this.$refs.quoteInput.focus();
            }
        }
    }
</script>

<style <style lang="scss" scoped>

</style>
