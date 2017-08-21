<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 form-group">
                <label for="idTextQuote">Quote</label>
                <textarea class="form-control" name="Quote Text" id="idTextQuote"  rows="3" v-model="quote" ref="quoteInput"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 form-group">
                <button class="btn btn-primary" @click.prevent="addQuote">
                    Add Quote
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                quote: ''
            }
        },
        methods: {
            addQuote() {
                this.$emit('newQuote', this.quote);
                this.quote = '';
                this.$refs.quoteInput.focus();
            }
        }
    }
</script>

<style <style lang="scss" scoped>

</style>
