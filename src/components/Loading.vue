<template>
 <van-overlay class="loading">
    <!-- <img  class="loadingGif" src="../assets/img/loading.gif" alt=""> -->
 </van-overlay>

  <!-- <div class="loading" :style="{'height':windowHeight+'px'}">
    <img class="loadingGif" src="../assets/img/loading.gif" alt="">
  </div> -->
</template>

<script>
  import Vue from 'vue';
  import {Loading} from 'vant';
  import { Overlay } from "vant";

  Vue.use(Loading);

  export default {
    name: 'Loading',
    components: {

    [Overlay.name]: Overlay,
  },
    data() {
      return {
        windowHeight:window.innerHeight
      }
    },
  }
</script>
<style  scoped>
  .loading {
    position: fixed;
    z-index: 9999;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.loadingGif{
  margin-top: -130px;
  width: 60px;
  height: 60px;
}
</style>