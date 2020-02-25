<template>
  <div id="item_file">
      <div class="left">
        <div :class="[size > 800 ? 'title' : 'title_w8']">这是视频标题</div>
        <div :class="[size > 800 ? 'text' : 'text_w8']">我觉得题主提出的问题，不幼稚，已经极大的反应出大多数人民眼睛是雪亮的知道律师收入高，但是对待法律还在暧昧人情界限不明的老思维中。</div>
      </div>
      <div class="right">
        <div class="title">&nbsp</div>
        <div class="text">

          <span class="check" @click="file_check">查看</span>
          <span class="download" @click="file_download">下载</span>
        </div>
      </div>
      <div class="line"></div>
  </div>
</template>

<script>

export default {
  name: 'item_file',
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
    file_check(){
      this.$emit("FileCheckClick")
    },
    file_download(){
      this.$emit("FileDownloadClick")
    }
  },
  computed: {

  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#item_file{
  background-color: #fff;
  padding: 20px 20px 30px 20px;
  height: 150px;
  position: relative;
  cursor: pointer;
}
.left{
  text-align: left;
  left: 0;
  position: absolute;
  display: inline-block;
  width: 70%;
  overflow: hidden;
  height: auto;
}
.left img{
  width: 100%;
}
.right{
  text-align: left;
  position: absolute;
  left: 72%;
  display: inline-block;
  width: 20%;
  height: 100%;
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
.left .text:hover{
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
.check{
  display: block;
}
.check:hover{
  color: #CD3333;
}
.download{
  display: block;
}
.download:hover{
  color: #CD3333;
}
</style>
