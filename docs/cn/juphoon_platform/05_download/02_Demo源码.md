---
title:  Demo 源码
---
# Demo 源码


<template>
    <demo :list="list"/>
</template>

<script>
import Demo from '../../../components/Demo';
  export default {
    components: {
        Demo
    },
    data() {
      return {
        list:[{
          type:"iOS",
          img:"https://developer.juphoon.com/style/images/download/developer_ios@2x.png",
          child:[{
            type:'1-1通话',
            url:'/cn/00_o2o_audio/03_quick_start/00_run_demo/iOS.html'
          },
          {
            type:'多方通话',
            url:'/cn/03_mult_video/03_quick_start/00_run_demo/iOS.html'
          },{
            type:'互动直播',
            url:'/cn/05_video_live/03_quick_start/00_run_demo/iOS.html'
          }]
        },{
          type:"Android",
          img:"https://developer.juphoon.com/style/images/download/developer_android@2x.png",
          child:[{
            type:'1-1通话',
            url:'/cn/00_o2o_audio/03_quick_start/00_run_demo/Android.html'
          },
          {
            type:'多方通话',
            url:'/cn/03_mult_video/03_quick_start/00_run_demo/Android.html'
          },{
            type:'互动直播',
            url:'/cn/05_video_live/03_quick_start/00_run_demo/Android.html'
          }]
        }]
      }
    },
    mounted () {
        console.log(this.list)
    },
  }
</script>
