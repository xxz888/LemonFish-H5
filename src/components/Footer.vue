




<template>
  <van-tabbar v-model="active" route  fixed	>
    <van-tabbar-item  fixed replace to='/scienceStudy' >
      <span>理论学习</span>
      <template #icon="props">
        <img :src="props.active ? icon1.active : icon1.normal" />
      </template>
    </van-tabbar-item>

    <van-tabbar-item   replace to='/myStudy'>
      <span>我的学习</span>
      <template #icon="props">
        <img :src="props.active ? icon2.active : icon2.normal" />
      </template>
    </van-tabbar-item>

    <van-tabbar-item  replace to='/completeAuth' v-if="trainTimeType==1">
      <span>结业鉴定</span>
      <template #icon="props">
        <img :src="props.active ? icon3.active : icon3.normal" />
      </template>
    </van-tabbar-item>

    <van-tabbar-item  replace to='/appointment'  v-if="trainTimeType==2">
      <span>我要预约</span>
      <template #icon="props">
        <img :src="props.active ? icon3.active : icon3.normal" />
      </template>
    </van-tabbar-item>

  </van-tabbar>
</template>
 
<script>
export default {
  name: "tabbar",
  data() {
    return {
      trainTimeType:"1",
      tabType:false,
      active: 0,
      // icon1: {
      //   normal: require("../assets/img/home_icon_lilunxuexih@2x.png"),
      //   active: require("../assets/img/home_icon_lilunxuexi@2x.png"),
      // },
      // icon2: {
      //   normal: require("../assets/img/home_icon_wodexuexi@2x.png"),
      //   active: require("../assets/img/home_icon_wodexeuxil@2x.png"),
      // },
      // icon3: {
      //   normal: require("../assets/img/home_icon_jieyejianding@2x.png"),
      //   active: require("../assets/img/home_icon_jieyejiandingl@2x.png"),
      // },

    };
  },
   created(){
      this.trainTimeType = this.$store.state.trainTimeType;
   },

};
</script>
 
<style lang="scss" scoped>
.active_tab img {
  width: 50px;
  height: 50px;
}

.active_tab .router-link-active {
  color: #07c160;
}
// van-tabbar{

//         width: 100%;
//         /*height: 60px;*/
//         padding-bottom: env(safe-area-inset-bottom);

//         position: fixed;
//         bottom: 0;
//         background-color: #FFFFFF;
//         box-shadow: 0 0 10px rgba(0,0,0,0.05);
// }
</style>










