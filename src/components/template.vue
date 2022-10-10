<template>
  <div>
    <!-- 头部导航栏 -->
    <van-nav-bar
      title=""
      left-text=""
      left-arrow
      @click-left="back"
      safe-area-inset-top
      fixed
      placeholder
    >
    </van-nav-bar>

  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
     
    };
  },
  created() {
    
  },
  mounted() {
    this.$router.afterEach((to, from, next) => {
      
    });
  },

  methods: {
   
    //返回
    back(){
      history.back();
    },
  },
};
</script>

<style scoped lang='less'>
/deep/ .van-grid-item__content {
  padding: 0;
}
/deep/ .van-nav-bar{
  background: transparent;
}
/deep/ .van-nav-bar .van-icon{
  color: #fff;
}
/deep/ .van-nav-bar__title{
    color: #fff;
}
</style>
