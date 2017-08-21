<template>
    <div>
        <div id="on"
             @click="toggle(true)"
             :class="{active: value}">
            on
        </div>
        <div id="off"
             @click="toggle(false)"
             :class="{active: !value}">
            off
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        data() {
            return {
                isOn: true
            }
        },
        methods: {
            toggle(isOn) {
                this.$emit('input', isOn)
            }
        }
    }
</script>

<style <style lang="scss" scoped>
    #on,
    #off {
        width: 40px;
        height: 20px;
        background-color: lightgray;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #on:hover,
    #on.active {
        background-color: lightgreen;
    }

    #off:hover,
    #off.active {
        background-color: lightcoral;
    }
</style>
