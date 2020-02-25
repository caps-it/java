<template>
  <div class="hello">


        <div class="main" :style="{backgroundImage:'url('+require('../assets/bg1.jpg')+')'}" >
           <div class="min">1111111111111111111</div>
       </div>

    <div class="head_contain">
      <div id="head" v-if="size > 800">

          <div id="left">
             <img src="../assets/logo1.png"/>
          </div>

          <div id="right">

              <li>首页</li>
              <li>关于我们</li>
              <li>服务</li>
              <li>教程视频</li>
              <li>商城</li>
              <li>联系我们</li>

          </div>

      </div>
      <div v-else id="s_head">

      </div>
    </div>



   <div id="down">

     <div id="down_contain">

      <span class="text">
        We Use Various Technologies & Products To
        </br>
          Get The Best Results
        </br>
          我们使用各种技术和产品,得到最好的结果.
      </span>


      <div class="down_item">

          <img src="http://bk.image.styleweb.com.cn/2018/3/15/13039_jesavbsd.png"/>

          <span class="item_text">产品质量</span>

      </div>

      <div class="down_item">

          <img src="http://bk.image.styleweb.com.cn/2018/3/15/13039_jesavbsd.png"/>

          <span class="item_text">产品质量</span>

      </div>

      <div class="down_item">

          <img src="http://bk.image.styleweb.com.cn/2018/3/15/13039_jesavbsd.png"/>

          <span class="item_text">产品质量</span>

      </div>

      <div class="down_item">

          <img src="http://bk.image.styleweb.com.cn/2018/3/15/13039_jesavbsd.png"/>

          <span class="item_text">产品质量</span>

      </div>
    </div>
   </div>




   <div id="down">
     <div class="main" :style="{top:'1145px' ,backgroundImage:'url('+require('../assets/bg2.jpg')+')'}" >
        <div class="min">1111111111111111111</div>
    </div>

     <div id="down_contain">

      <span class="text">
        We Use Various Technologies & Products To
        </br>
          Get The Best Results
        </br>
          我们使用各种技术和产品,得到最好的结果.
      </span>


      <div class="down_item">

          <img src="http://bk.image.styleweb.com.cn/2018/3/15/13039_jesavbsd.png"/>

          <span class="item_text">产品质量</span>

      </div>

      <div class="down_item">

          <img src="http://bk.image.styleweb.com.cn/2018/3/15/13039_jesavbsd.png"/>

          <span class="item_text">产品质量</span>

      </div>

      <div class="down_item">

          <img src="http://bk.image.styleweb.com.cn/2018/3/15/13039_jesavbsd.png"/>

          <span class="item_text">产品质量</span>

      </div>

      <div class="down_item">

          <img src="http://bk.image.styleweb.com.cn/2018/3/15/13039_jesavbsd.png"/>

          <span class="item_text">产品质量</span>

      </div>
    </div>
   </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props : {
    size : {
      type: Number,
      default: 1000
    }

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  padding: 0;
  position: absolute;
  align-content: center;
}
.main {
  position:absolute;
  left:0;
  top:55px;
  width: 100%;
  height: 500px;
  background-size: cover;
  background-attachment: fixed;
  }
.min {
    width: 100%;
    height: 150px;
    background: red;
    margin: 10px auto;
  }
.head_contain{
  background-color: #fff;
  height: 55px;
  width: 100%;
}
#head{

  position: relative;
  top: 0;
  width: 100%;
  height: auto;
  margin: auto;
  max-width: 1200px;
}
#s_head{
  width: 100%;
  height: 71px;
  padding: 0;
  position: fixed;
  z-index: 9999;
  top: 0;
  background-color:rgba(0,0,0,0.8);
}
#left{
  position: absolute;
  top: 0;
  left: 5%;
  line-height: 55px;
}

#left > img{
  margin-top: 12px;
  width: 300px;
  height: auto;
}
#right {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  width: auto;
  right: 0;
  width: 100%;
  text-align: right;
  margin-right: 5%;
}

#right > li{

  padding-left: 1%;
  padding-right: 1%;
  line-height: 55px;
  list-style-type: none;
  display: inline-block;
  height: auto;
}

#down{
  padding-top: 50px;
  padding-bottom: 40px;
  clear: both;
  margin-top: 500px;
  width: 100%;
  height: 500px;
  background-color: #EDEDED;
}
#down_contain{
  max-width: 1200px;
  width: 100%;
  margin: auto;
}
.text{
  font-size: 20px;
  line-height: 35px;
  display: block;
  margin-bottom: 50px;
}
.down_item{
  display: inline-block;
  width: 20%;
}
.down_item > img{
  width: 80px;
  height: 80px;
  overflow: hidden;
  align-content: center;
}
.item_text{
  display: block;
}
</style>
