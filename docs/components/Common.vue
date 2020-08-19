<template>
  <div>
    <div class="mbtns">
      <a :href="item.href" v-for="item in CardName" :key="item.name">{{item.name}}</a>
      <!-- <a class="active" href="ios.php">iOS</a>
      <a href="android.php">Android</a>
      <a href="webrtc.php">WebRTC</a>
      <a href="common.php">通用问题</a>-->
    </div>
    <!-- <div shadow="hover" v-for="item in CardName" :key="item.name" class="card">
      <a :href="item.href">{{item.name}}</a>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "Common",
  props: {
    CardName: {
      type: Array,
      default() {
        return [];
      },
    }
  }
};
</script>

<style>
.theme-default-content{
  background: #fff;
}
a,
a:hover,
a:focus {
  text-decoration: none;
}
.card {
  margin-bottom: 10px;
}
.mbtns {
  padding: 12px 0 10px;
}
.mbtns a.active,
.mbtns a.active:hover,
.sdkcont .mbtns a.active,
.sdkcont .mbtns a.active:hover,
.mbtns a:hover {
  background: rgba(0, 138, 255, 1);
  color: #fff;
}
.mbtns a {
  display: inline-block;
  margin-right: 10px;
  height: 40px;
  line-height: 40px;
  padding: 0 19px;
  background: #f6f9fa;
  border-radius: 20px;
  color: #68758d;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
}
</style>