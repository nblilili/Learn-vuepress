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
            url:'https://developer.juphoon.com/cn/document/V2.1/o2o_video/quick_start/iOS/run_demo.php'
          },
          {
            type:'多方通话',
            url:'https://developer.juphoon.com/cn/document/V2.1/mult_video/quick_start/iOS/run_demo.php'
          },{
            type:'互动直播',
            url:'https://developer.juphoon.com/cn/document/V2.1/video_live/quick_start/iOS/run_demo.php'
          }]
        },{
          type:"Android",
          img:"https://developer.juphoon.com/style/images/download/developer_android@2x.png",
          child:[{
            type:'1-1通话',
            url:'https://developer.juphoon.com/cn/document/V2.1/o2o_video/quick_start/Android/run_demo.php'
          },
          {
            type:'多方通话',
            url:'https://developer.juphoon.com/cn/document/V2.1/mult_video/quick_start/Android/run_demo.php'
          },{
            type:'互动直播',
            url:'https://developer.juphoon.com/cn/document/V2.1/video_live/quick_start/Android/run_demo.php'
          }]
        }]
      }
    },
    mounted () {
        console.log(this.list)
    },
  }
</script>
