<template>
  <div id="business">

    <v-header :size="size"  :index=2 ></v-header>
   <div class="b_one_layer" :style="{backgroundImage:'url('+require('../assets/bg5.jpg')+')'}">
     <div class="b_one_transparent_layer_context">
       <div class="b_one_layer_context">
         <span style="font-size: 47px; margin-top: 10px;">做最好的企业服</span>
         <span  style="font-size: 14px; margin-top: 10px;">让您不再为企业担心 让您不再为企业烦恼 让您不再为企业操劳</span>
       </div>
     </div>
    </div>

    <div class="contain">
      <div class="server">
        <div class="b_one_text">
          <span style="font-size: 20px; display:block ;font-weight:bold; color: #000">我们的服务</span>
          <div style="width:30px; height:1px; background-color: #CD3333; margin: 15px auto;"/>
          <span style="font-size: 14px;display:block">齐全快速 三步创造属于你的网站</span>
        </div><div class="server_contain">
          <div  :class="[size > 800 ? 'b_server' : 'b_server_w8']">
            <span class="b_server_img"><img src="../assets/b1.png"  /></span>
            <span style="font-size: 17px; display:block ;font-weight:bold">网络服务器维护</span>
            <div style="width:30px; height:2px; background-color: #CD3333; margin: 15px auto;"/>
            <span style="font-size: 12px; padding-bottom:45px;display:block">让你的网站永不掉线</span>
          </div><div :class="[size > 800 ? 'b_server' : 'b_server_w8']">
            <span class="b_server_img"><img src="../assets/b1.png" /></span>
            <span style="font-size: 17px; display:block ;font-weight:bold">网络服务器维护</span>
            <div style="width:30px; height:2px; background-color: #CD3333; margin: 15px auto;"/>
            <span style="font-size: 12px; padding-bottom:45px;display:block">让你的网站永不掉线</span>
          </div><div :class="[size > 800 ? 'b_server' : 'b_server_w8']">
            <span class="b_server_img"><img src="../assets/b1.png" /></span>
            <span style="font-size: 17px; display:block ;font-weight:bold">网络服务器维护</span>
            <div style="width:30px; height:2px; background-color: #CD3333; margin: 15px auto;"/>
            <span style="font-size: 12px; padding-bottom:45px;display:block">让你的网站永不掉线</span>
          </div>
        </div>
      </div>

      <div class="case">
        <div class="b_one_text">
          <span style="font-size: 20px; display:block ;font-weight:bold; color: #000">我们的案例</span>
          <div style="width:30px; height:1px; background-color: #CD3333; margin: 15px auto;"/>
          <span style="font-size: 14px;display:block">齐全快速 三步创造属于你的网站</span>
        </div>

        <div  :class="[size > 800 ? 'one_case' : 'one_case_w8']">

            <li>
              <span class="one_case_img">
                 <img src="../assets/bg7.png"/>
                 <div class="case_curtain" >
                    <div class="case_curtain_text"> 成功案例 </div>
                 </div>
              </span>
              <div class="one_case_title">这是标题</div>
              <div class="one_case_text">这是内容这是内容这是</div>
            </li>
            <li>
              <span class="one_case_img">
                 <img src="../assets/bg7.png"/>
                 <div class="case_curtain" >
                    <div class="case_curtain_text"> 成功案例 </div>
                 </div>
              </span>
              <div class="one_case_title">这是标题</div>
              <div class="one_case_text">这是内容这是内容这是内容这是内容这是内容</div>
            </li>
            <li>
              <span class="one_case_img">
                 <img src="../assets/bg7.png"/>
                 <div class="case_curtain" >
                    <div class="case_curtain_text"> 成功案例 </div>
                 </div>
              </span>
              <div class="one_case_title">这是标题</div>
              <div class="one_case_text">这是内容这是内容这是内容这是内容这是内容</div>
            </li>
            <li>
              <span class="one_case_img">
                 <img src="../assets/bg7.png"/>
                 <div class="case_curtain" >
                    <div class="case_curtain_text"> 成功案例 </div>
                 </div>
              </span>
              <div class="one_case_title">这是标题</div>
              <div class="one_case_text">这是内容这是内容这是内容这是内容这是内容</div>
            </li>


        </div>

        <div :class="[size > 800 ? 'one_case' : 'one_case_w8']">

          <li>
            <span class="one_case_img">
               <img src="../assets/bg7.png"/>
               <div class="case_curtain" >
                  <div class="case_curtain_text"> 成功案例 </div>
               </div>
            </span>
            <div class="one_case_title">这是标题</div>
            <div class="one_case_text">这是内容这是内容这是</div>
          </li>
          <li>
            <span class="one_case_img">
               <img src="../assets/bg7.png"/>
               <div class="case_curtain" >
                  <div class="case_curtain_text"> 成功案例 </div>
               </div>
            </span>
            <div class="one_case_title">这是标题</div>
            <div class="one_case_text">这是内容这是内容这是内容这是内容这是内容</div>
          </li>
          <li>
            <span class="one_case_img">
               <img src="../assets/bg7.png"/>
               <div class="case_curtain" >
                  <div class="case_curtain_text"> 成功案例 </div>
               </div>
            </span>
            <div class="one_case_title">这是标题</div>
            <div class="one_case_text">这是内容这是内容这是内容这是内容这是内容</div>
          </li>
          <li>
            <span class="one_case_img">
               <img src="../assets/bg7.png"/>
               <div class="case_curtain" >
                  <div class="case_curtain_text"> 成功案例 </div>
               </div>
            </span>
            <div class="one_case_title">这是标题</div>
            <div class="one_case_text">这是内容这是内容这是内容这是内容这是内容</div>
          </li>

        </div>

      </div>

    </div>

    <v-footer :size="size"></v-footer>


  </div>
</template>

<script>

import Header from '../components/header'
import Footer from '../components/footer'

export default {
  name: 'business',
  props : {
    size : {
      type: Number,
      default: 1000
    }

  },
  data () {
    return {
      msg: '公司业务'
    }
  },
  methods:{

  },
  components: {
    "v-header":Header,
    "v-footer":Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#business{
  background-color: #fff;
  width: 100%;
  padding: 0;
  position: absolute;
  align-content: center;
}
.b_one_layer{
  height: 350px;
  width: 100%;
  background-position: center;
  background-repeat:no-repeat;
  background-size: cover;
  background-attachment: scroll;
  overflow: hidden;
  position: relative;
}
.b_one_transparent_layer_context{
  width: 100%;
  height: 350px;
  background: rgba(0,0,0,0.5);
  margin: 0 auto;
  color: #fff;
  font-size: 52px;
}
.b_one_layer_context{
  position: absolute;
  max-width: 1200px;
  height: 200px;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
}
.b_one_layer_context span{
  display: block;
}
.contain{
  height: auto;
  max-width: 1200px;
  margin: auto;
}
.server{
  height: auto;
}
.b_one_text{
  text-align:center;
  margin-top: 80px;
}
.server_contain{
  margin-top: 40px;
  text-align: left;
  max-width: 1200px;
}
.b_server{
 transition: all 0.6s;
 display: inline-block;
 width:29%;
 margin-left: 2%;
 margin-right: 2%;
 height:auto;
 border:1px solid #e6e1e1;
 margin-top: 10px;
 text-align: center;
}
.b_server_w8{
  transition: all 0.6s;
  display: inline-block;
  width:45%;
  margin-left: 2%;
  margin-right: 2%;
  height:auto;
  margin-top: 10px;
  border:1px solid #e6e1e1;
  text-align: center;

}
.b_server:hover img{
  transform:scale(1.2);
}
.b_server:hover{
  border:1px solid #e6e1e1;
  box-shadow:0px 0px 30px 1px #aaa;
}
.b_server_img{
  margin:15px;
  display: block;
  overflow:hidden;
}
.b_server_img img{
  transition: all 0.6s;
  width: 100%;
  height: auto;
}
.case{
  margin-top: 50px;
}
.one_case{
  height: 220px;
  width: 100%;
  margin-top: 30px;
}
.one_case_w8{
  height: 380px;
  width: 100%;
  margin-top: 30px;
}
.one_case li{
  width: 20%;
  margin: 0 1%;
  list-style: none;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  display: inline-block;
  position: relative;
}
.one_case_w8 li{
  width: 46%;
  margin: 0 2%;
  list-style: none;
  height: 200px;
  float: left;
  cursor: pointer;
  display:block;
  position: relative;
}
.one_case_img{
  display: block;
  width: 100%;
  height: 60%;
  overflow: hidden;
}
.one_case_img img{
  width: 100%;
  height: 100%;
}
.one_case_title{
  margin-top: 7px;
  margin-left: 5px;
  color: #000;
}
.one_case_text{
  margin: 3px 3px 0 3px;
  font-size: 15px;

}
.case_curtain{
  width: 100%;
  height: 60%;
  position: absolute;
  top: 0;
  background-color: rgba(0,0,0,0.5);
  transition: all 0.5s;
  transform: translateY(100%);
  opacity: 0;
}
.one_case li:hover .case_curtain {
  transform: translateY(0%);
  opacity: 1
}
.case_curtain_text{
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
  color: #fff;
}
</style>
