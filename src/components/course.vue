<template>
  <div id="course">

    <div  :class="[isPlay ? 'show_video_p': 'hide_video_p']"  @click="curtain">

      <div :class="[size > 800 ? 'video_contain_p' : 'video_contain_p_w8']" @click.stop>

        <video-player  class="video-player-box"
                       ref="videoPlayer"
                       :options="playerOptions"
                       :playsinline="true"
                       customEventName="customstatechangedeventname">
        </video-player>
      </div>

    </div>

    <v-header :size="size"  :index=4 ></v-header>

    <div  class="c_one_layer" :style="{backgroundImage:'url('+require('../assets/bg2.jpg')+')'}">

    </div>

    <div class="contain">
      <div class="tab_title">
        <div  :class="[{ 'tab_active': indexc== 1 }, 'tab_all','video_tab']" @click="changeI(1)">视频教程</div><div :class="[{ 'tab_active': indexc== 2  }, 'tab_all']"  @click="changeI(2)">文档下载</div>
      </div>
      <span class="v_line"/>
      <div class="tab_contain">
        <div :class="[{ 'hide_contain': indexc!= 1 }, 'video_contain']" >
          <item_video :size="size" v-for="(item, index) in videoList" :key="index" @videoClick="Video_click"></item_video>
        </div>
        <div :class="[{ 'hide_contain': indexc!= 2 }, 'file_contain']">
          <item_file :size="size" v-for="(item, index) in fileList" :key="index" @FileCheckClick="file_check_click" @FileDownloadClick="file_download_click"></item_file>
        </div>
      </div>
      <div class="end" v-if="(indexc==1 && isVideoLoading && !isVideoLast) || (indexc==2 && isFileLoading && !isFileLast)" ><span class="logo"><img  src="../assets/loading.png" style="width: 100%; height: 100%" ></img></span>正在加载</div>
      <div class="end" v-else >暂无数据</div>
    </div>
    <div  ref="foot1">
      <v-footer :size="size"></v-footer>
    </div>

  </div>
</template>

<script>

import Header from '../components/header'
import Footer from '../components/footer'

import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'

import item_video from '../components/item_video'
import item_file from '../components/item_file'

export default {
  name: 'course',
  props : {
    size : {
      type: Number,
      default: 1000
    }

  },
  data () {
    return {
      msg: '教程文档',
      videoList:[1, 2, 3],
      fileList:[1, 2, 3],
      indexc : 1,
      isVideoLast: false,
      isFileLast: false,
      isVideoLoading: false,
      isFileLoading: false,
      isPlay: false,
      playerOptions: {
          // videojs options
          muted: false, // 默认情况下将会消除任何音频
          language: 'zh-CN',
          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          loop: false, // 导致视频一结束就重新开始。
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          //sources: [{
          //  type: "video/mp4",
          //  src: "https://video.pearvideo.com/mp4/adshort/20190405/cont-1539350-13774725_adpkg-ad_hd.mp4"
          //}],
          poster: "/static/images/author.jpg",
        }
    }
  },
  methods:{
    file_check_click(){
      this.$router.push({path: '/fileDetail'})
    },
    file_download_click(){

    },
    Video_click(){
      this.isPlay = true
      this.player.src({ type: "video/mp4", src: "https://video.pearvideo.com/mp4/adshort/20190403/cont-1538354-13765786_adpkg-ad_hd.mp4" });
      this.player.play()
    },
    curtain(){
       this.player.pause()
       //this.player.dispose()
       this.isPlay = false
       //this.player.src({ type: "video/mp4", src: "https://video.pearvideo.com/mp4/adshort/20190403/cont-1538354-13765786_adpkg-ad_hd.mp4" });
       //this.player.play()
    },
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    },
    changeI(index){
      console.log("aa+"+index);
      this.indexc = index
      console.log("aa+"+index);
    },
    loadVideo(){

      var that = this;
      var t;
      clearTimeout(t)
      t = setTimeout(function (){

        var l = [5,6,7]
        that.videoList.push.apply(that.videoList, l);
        console.log(that.videoList.length);
        that.isVideoLast = true
        that.isVideoLoading = false
      }, 1000);



    },
    loadFile(){

      var that = this;
      var t;
      clearTimeout(t)
      t = setTimeout(function (){
        var l = [5,6,7]
        that.fileList.push.apply(that.fileList, l);
        console.log(that.fileList.length);
        that.isFileLast = true
        that.isFileLoading = false
      }, 1000);

    }
  },
  components: {
    "v-header":Header,
    "v-footer":Footer,
    item_video,
    item_file,
    videoPlayer
  },
  computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
  },
  created(){
    var that = this;
    window.onscroll = function(){
          //变量scrollTop是滚动条滚动时，距离顶部的距离
          var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
          //变量windowHeight是可视区的高度
          var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
          //变量scrollHeight是滚动条的总高度
          var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
             //滚动条到底部的条件
             if(scrollTop+windowHeight>=scrollHeight-that.$refs.foot1.offsetHeight){
               if(that.indexc ==1 ){

                 if(!that.isVideoLoading  && !that.isVideoLast){
                   //写后台加载数据的函数
                   console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
                   that.isVideoLoading = true
                   that.loadVideo()
                 }else{
                   that.isVideoLoading = true

                 }
               }else if(that.indexc == 2 ){
                 if(!that.isFileLoading  && !that.isFileLast){
                   //写后台加载数据的函数
                   console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
                   that.isFileLoading = true
                   that.loadFile()
                 }else{
                    that.isFileLoading = true

                 }
               }


            }
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#course{
  background-color: #fff;
  width: 100%;
  padding: 0;
  position: absolute;
  align-content: center;
}
.c_one_layer{
  height: 300px;
  width: 100%;
  background-position:center;
  background-repeat:no-repeat;
  background-size: cover;
  background-attachment: scroll;
  overflow: hidden;
  position: relative;
}
.c_one_layer_context{
  position: absolute;
  max-width: 1200px;
  height: auto;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
}
.c_one_layer_context span{
  display: block;
}
.contain{
  position: relative;
  height: auto;
  max-width: 1200px;
  margin: 30px auto;
  background-color: #fff;
  border-radius: 3px;
}
.tab_title{
  margin-bottom: 20px;
  height: 50px;
  line-height: 18px;
  overflow: hidden;

}
.tab_active{
  color: #CD3333;
}
.tab_all{
  display:inline-block;
  height: 10px;
  width: auto;
  padding: 20px 21px 20px 20px;
  font-size: 18px;
  cursor: pointer;
}
.video_tab{
  border-right:1px solid #CD3333;
}
.tab_contain{
  padding: 0 1%;
}
.end{
  position: relative;
  font-size: 15px;
  margin: auto;
  width: 60px;
  padding-top: 30px;
}
.tab_all:hover{
  color: #CD3333;
}
.v_line{
  display: block;
  margin: auto;
  width: 100%;
  height: 1px;
  background-color: #D9D9D9;
}
.video_contain{

}
.hide_contain{
  display: none;
}
.file_contain{


}

.logo{
  position: absolute;
  left: -30px;
  display: inline-block;
  margin-right: 10px;
	width:20px;
	height: 20px;

	-webkit-animation:rotate 2s linear infinite;

}


@-webkit-keyframes rotate{

	from{-webkit-transform:rotate(0deg)}

	to{-webkit-transform:rotate(360deg)}

	}

@-moz-keyframes rotate{

	from{-moz-transform:rotate(0deg)}

	to{-moz-transform:rotate(360deg)}

	}

@-ms-keyframes rotate{

	from{-ms-transform:rotate(0deg)}

	to{-ms-transform:rotate(360deg)}

	}

@-o-keyframes rotate{

	from{-o-transform:rotate(0deg)}

	to{-o-transform:rotate(360deg)}

	}



.show_video_p{
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0,0,0,0.5);
  z-index: 9990
}
.hide_video_p{
  display: none;
}

.video_contain_p{
  position: fixed;
  width: 80%;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.video_contain_p_w8{
  position: fixed;
  width: 100%;
  top: 57px;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
