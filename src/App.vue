<template>
  <div>
    <Loading v-show="LOADING"></Loading>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Loading from "@/components/Loading.vue";

export default {
  name: "app",
  created() {
       // 在页面加载时读取sessionStorage
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }
    // 在页面刷新时将store保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  },
  computed: {
    ...mapState(["LOADING"]),
  },
  components: {
    Loading,
  },
  mounted() {
    // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
    window.onbeforeunload = function (e) {
             this.$store.commit("updateToken", '');
      this.$store.commit("updateTrainType", '');
      this.$store.commit("updateTrainTypeDesc", '');
      this.$store.commit("updateName", '');
    };
  },
};
</script>



