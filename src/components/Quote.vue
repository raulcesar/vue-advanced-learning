<template>
    <div class="col-sm-6 col-md-4  col-lg-3 ">
        <i v-myOn:click="clicked">{{objectifiedQuote.author}} - {{index}}</i>

        <div class="panel panel-default"
             @click="quoteClicked">
            <div class="panel-body quote">
                {{objectifiedQuote.text}}
            </div>

            <i v-highlight:back.delayed="'blue'">{{objectifiedQuote.author}} - {{index}}</i>
            <hr>
            <i v-highlight:back.blink="'red'">{{objectifiedQuote.author}} - {{index}}</i>
            <hr>
            <i v-highlight:back.blink="highlightColors">{{objectifiedQuote.author}} - {{index}}</i>

            <hr>
        </div>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        data: () => {
            return {
                highlightColors: {
                    backcolor: '#b42bdc',
                    colors: ['black', '#d9b5fe']
                }
            }
        },
        directives: {
            'myOn': {
                bind(el, binding, vnode) {
                    console.log('binding');
                    const type = binding.arg;
                    const fn = function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        binding.value();
                    };
                    el.addEventListener(type, fn);

                    // if (binding.arg === 'click') {
                    //     console.log('elonclick');
                    //     el.onclick = function (e) {
                    //         e.preventDefault();
                    //         e.stopPropagation();
                    //         binding.value();
                    //     }


                    // }

                }

            },
            'highlight': {
                bind(el, binding, vnode) {
                    var delayed = (binding.modifiers['delayed'] && 2000) || 0;
                    console.log('delayed')

                    var colors = ['white', 'black'];
                    let index = 0;
                    console.log('hey');
                    var funcForChangeColor = function (el) {
                        el.style.color = colors[index];
                    }
                    if (binding.modifiers['blink']) {
                        console.log('funcforchange has setinterval');
                        funcForChangeColor = function (el) {
                            setInterval(function () {
                                index = index ^ 1;
                                el.style.color = colors[index];
                            }, 1000)
                        }
                    }

                    setTimeout(function () {
                        if (binding.arg === 'back') {
                            el.style.backgroundColor = binding.value || 'green';
                        }
                    }, delayed);

                    if (binding.value) {
                        if (binding.value.backcolor) {
                            el.style.backgroundColor = binding.value.backcolor
                        }
                        if (binding.value.colors) {
                            colors = binding.value.colors
                        }
                    }

                    funcForChangeColor(el);
                }
            }
        },
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
            clicked() {
                console.log('yo');

            },
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
