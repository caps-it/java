<template>
  <div id="footer">
    <div :class="[size > 800 ? 'four_layer' : 'four_layer_w8']">
      <span style="height:1.5px; width: 100%; background-color: #D9D9D9; display: block"/>
      <div :class="[size > 800 ? 'foot' : 'foot_w8']">
          <div  :class="[size > 800 ? 'foot_left' : 'foot_left_w8']">
            <span :class="[size > 800 ? 'foot_title' : 'foot_title_w8']">成都企业服务管理咨询有限公司</span>
            <span :class="[size > 800 ? 'foot_left_text' : 'foot_left_text_w8']">这里会写下我们公司的一些寄予或者理念，又或者是对我们的自己的一些介绍，这里会写下我们公司的一些寄予或者理念，介绍</span>
            <div class="foot_left_icon">
              <li>
                <img width="20px" src="../assets/wb.png"/>
              </li>
              <li>
                <img width="22px" src="../assets/wx.png"/>
              </li>
              <li>
                <img width="20px" src="../assets/qq.png"/>
              </li>
              <li>
                <img width="20px" src="../assets/yj.png"/>
              </li>
            </div>
          </div>
          <div :class="[size > 800 ? 'foot_middle' : 'foot_middle_w8']">
            <span :class="[size > 800 ? 'foot_title' : 'foot_title_w8']">快捷通道</span>
            <span :class="[size > 800 ? 'foot_middle_text' : 'foot_middle_text_w8']"><router-link to="/business">公司业务</router-link></span>
            <span :class="[size > 800 ? 'foot_middle_text' : 'foot_middle_text_w8']"><router-link to="/scase">成功案例</router-link></span>
            <span :class="[size > 800 ? 'foot_middle_text' : 'foot_middle_text_w8']"><router-link to="/course">教程文档</router-link></span>
            <span :class="[size > 800 ? 'foot_middle_text' : 'foot_middle_text_w8']"><router-link to="/aboutUs">关于我们</router-link></span>
          </div>
          <div :class="[size > 800 ? 'foot_right' : 'foot_right_w8']">
            <span :class="[size > 800 ? 'foot_title' : 'foot_title_w8']">联系我们</span>
            <li>
              <img src="../assets/ewm.png"/>
                <div class="foot_right_text">微信</div>
            </li>
            <li>
              <img src="../assets/ewm.png"/>
                <div class="foot_right_text">公众号</div>
            </li>

          </div>
      </div>

      <div  :class="[size > 800 ? 'copyright' : 'copyright_w8']">
        © 响应式建站 蜀ICP备13004xxx号-4
      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: 'footer',
  props : {
    size : {
      type: Number,
      default: 1000
    }

  },
  data () {
    return {
      msg: 'footer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer{
  background-color: #fff;
  margin-top: 60px;
  max-width: 1300px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}
.foot{
  position: relative;
  margin-top: 60px;
  height: 300px;
  width: 100%;
}
.foot_w8{
  padding-bottom: 20px;
  position: relative;
  margin-top: 30px;
  height: auto;
  width: 100%;
}
.foot_w8 span{
  display: block;
  text-align: left;
}
.foot span{
  display: block;
  text-align: left;
}
.foot_left{
  padding-left: 20px;
  position: absolute;
  left: 0px;
  width: 34%;
  height: 100%;
  display: inline-block;
}
.foot_left_w8{
  padding-left:5%;
  padding-right: 5%;
  left: 0px;
  width: 88%;
  height: auto;
}
.foot_title{
  font-size: 19px;
  font-weight:bold;
  color: #595959;
}
.foot_title_w8{
  font-size: 15px;
  margin-bottom: 20px;
  width: 100%;
  font-weight:bold;
  color: #595959;
}
.foot_left_text{
  margin-top: 30px;
  font-size: 16px;
  color: #808080;
}
.foot_left_text_w8{
  font-size: 13px;
  color: #808080;
}
.foot_left_icon{
  margin-top: 30px;
  list-style: none;
  text-align: left;
}
.foot_left_icon li{
  margin-left: 10px;
  display: inline-block;
}
.foot_middle{
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 10%;
  height: 100%;
  display: inline-block;
}
.foot_middle_w8{
  margin-top: 30px;
  padding-left:5%;
  padding-right: 5%;
  left: 0px;
  width: 88%;
  height: auto;
}
.foot_middle_w8 span{
  display: inline-block;
}
.foot_middle_text{
  padding-top: 4px;
  padding-bottom: 4px;
  margin-top: 2px;
  font-size: 16px;
  color: #404040;
  cursor: pointer;
}
.foot_middle_text a:link{
  text-decoration: none;
  color: #2C3E50;
}
.foot_middle_text a:visited{
  text-decoration:none;
  color: #2C3E50;
}
.foot_middle_text a:hover{
  text-decoration:none;
  color: #CD3333;
}
.foot_middle_text_w8{
  width: 45%;
  height: 50px;
  font-size: 16px;
  color: #404040;
}
.foot_middle_text_w8 a:link{
  text-decoration: none;
  color: #2C3E50;
}
.foot_middle_text_w8 a:visited{
  text-decoration:none;
  color: #2C3E50;
}
.foot_middle_text_w8 a:hover{
  text-decoration:none;
  color: #CD3333;
}
.foot_right{
  position: absolute;
  right: 0;
  width: 30%;
  height: 100%;
  display: inline-block;
  text-align: left;
}
.foot_right_w8{
  margin-top: 10px;
  padding-left:5%;
  padding-right: 5%;
  left: 0px;
  width: 88%;
  height: auto;
}
.foot_right li{
  text-align: center;
  width: 30%;
  list-style: none;
  display: inline-block;
  margin: 15px 10px 0 10px;
}
.foot_right_w8 li{
  text-align: center;
  width: 20%;
  list-style: none;
  display: inline-block;
  margin: 10px 5% 0 5%;
}
.foot_right img{
  margin: auto;
  display: block;
  width: 80%;
}
.foot_right_w8 img{
  margin: auto;
  display: block;
  width: 80%;
}
.foot_right_text{
  margin-top: 20px;
  font-size: 15px;
}
.copyright{
  position: relative;
  color: #808080;
  bottom: 5px;
}
.copyright_w8{
  position: relative;
  color: #808080;
  font-size: 12px;
  bottom: 5px;
}
</style>
