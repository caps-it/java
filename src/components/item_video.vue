<template>
  <div :class="[size > 800 ? 'item_video' : 'item_video_w8']" @click="Video_click()">
      <div class="left">
        <img src="../assets/bg2.jpg"/>
      </div>
      <div class="right">
        <div :class="[size > 800 ? 'title' : 'title_w8']">这是视频标题</div>
        <div :class="[size > 800 ? 'text' : 'text_w8']" >我觉得题主提出的问题，不幼稚，已经极大的反应出大多数人民眼睛是雪亮的知道律师收入高，但是对待法律还在暧昧人情界限不明的老思维中。</div>
      </div>
      <div class="line"></div>
  </div>
</template>

<script>

export default {
  name: 'item_video',
  props : {
    size : {
      type: Number,
      default: 1000
    },
    mHeight : {
      type: String,
      default: "1000px"
    }

  },
  data () {
    return {
      msg: '视频项'

    }
  },
  methods:{
    Video_click(index){
      this.$emit("videoClick")
    },
  },
  computed: {

  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item_video{
  padding: 30px;
  background-color: #fff;
  height: 230px;
  position: relative;
  cursor: pointer;
}
.item_video_w8{
  padding: 30px;
  height: 160px;
  position: relative;
  cursor: pointer;
}
.left{
  left: 0;
  position: absolute;
  display: inline-block;
  width: 28%;
  overflow: hidden;
  height: auto;
}
.left img{
  width: 100%;
}
.right{
  text-align: left;
  position: absolute;
  left: 30%;
  display: inline-block;
  width: 70%;
}
.title{
  margin-left: 15px;
  margin-top: 5px;
  font-size: 22px;
}
.title_w8{
  margin-left: 15px;
  font-size: 20px;
}
.text{
  border-left: 1px solid #CD3333;
  margin-left: 10px;
  margin-top: 20px;
  padding: 10px 0 10px 20px;
  font-size: 16px;
  line-height: 30px;
}
.text_w8{
  border-left: 1px solid #CD3333;
  margin-left: 10px;
  margin-top: 10px;
  padding: 0px 0 10px 20px;
  font-size: 12px;
  line-height: 30px;
}
.text:hover{
  padding-left: 30px;
  transition: all 0.2s;
}
.line{
  bottom: 0;
  height: 1.2px;
  width: 100%;
  left: 0;
  position: absolute;
  background-color: #F2F2F2;
}

</style>
