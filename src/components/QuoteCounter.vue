<template>
  <div class="row">
    <h1>Quotes Added</h1>
    <div class="col-sm-8 col-sm-offset-2">
      <div class="progress">
        <div class="progress-bar" :style="{width: progressBarPercentage}">
          <div class="text-center">
            {{quotes.length}}
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>

  export default {
    data: function () {
      return {

      }
    },
    computed: {
      progressBarPercentage: function () {
        var perc = Math.floor(this.quotes.length / this.max * 100);
        return perc + '%';
      }
    },
    props: {
      quotes: Array,
      max: { type: Number, default: 10 }
    }
  }
</script>

<style <style lang="scss" scoped>
  .progress-bar {
    width: 80%;
    height: 20px;
    background-color: #eee;
    margin: auto;
    transition: width 500ms;
    .text-center {
      background-color: green;
      margin: 0;
      color: white;
      height: 100%;
    }
  }
</style>
