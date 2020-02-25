<template>
  <div id="index">

    <v-header :size="size" :index=1 ></v-header>

    <div :class="[size > 800 ? 'one_layer' : 'one_layer_w8']">
      <div class="one_transparent_layer" :style="{backgroundImage:'url('+require('../assets/bg1.jpg')+')'}" v-if="size > 800" >
         <div class="one_transparent_layer_context">

           <div class="one_layer_context">
             <span>DO THE BEST ENTERPRISE SERVICE</span>
             <span style="font-size: 47px; margin-top: 10px;">做最好的企业服</span>
              <span  style="font-size: 14px; margin-top: 10px;">让您不再为企业担心 让您不再为企业烦恼 让您不再为企业操劳</span>
           </div>

         </div>
      </div>
      <div v-else  class="one_transparent_layer_w8" :style="{backgroundImage:'url('+require('../assets/bg1.jpg')+')'}"  >

         <div class="one_transparent_layer_context_w8">

           <div class="one_layer_context_w8">
             <span>DO THE BEST ENTERPRISE SERVICE</span>
             <span style="font-size: 20px; margin-top: 10px;">做最好的企业服</span>
              <span  style="font-size: 12px; margin-top: 10px;">让您不再为企业担心 让您不再为企业烦恼 让您不再为企业操劳</span>
           </div>

         </div>
      </div>


      <div class="one_layer_confirm"  v-if="size > 800"  >
        <div class="one_layer_confirm_img">
            <img src="../assets/bg3.jpg" />
        </div>

        <div class="one_layer_confirm_context">
          <div class="confirm_context">
              <span style="font-size: 30px; margin-top: 30px">企业介绍</span>
              <span style="width:30px; height:1px; background-color: #CD3333; margin: 10px 0;"/>
              <span style="font-size: 15px;">做最好的企业服务商工商注册</span>
              <span style="font-size: 15px; margin-top: 50px; line-height: 25px;">企业服务网是一站式商业服务平台。诞生于2000年，总部位于成都，经历了17年发展历程。目前集团人数2000人。经营了100多项企业服务项目，其中包括工商注册、资质注册、会计代理、办公装修、企业上市辅导、争做最好的企业服务商工商注册。</span>
          </div>
          <span class="more_btn">more</span>
        </div>

      </div>
      <div class="one_layer_confirm_w8"  v-else >
          <div class="one_layer_confirm_img_w8">
              <img src="../assets/bg3.jpg" />
          </div>

        <div class="one_layer_confirm_context_w8">
          <div class="confirm_context_w8">
              <span style="font-size: 18px; margin-top: 30px; color: #000">企业介绍</span>
              <span style="width:30px; height:1px; background-color: #CD3333; margin: 10px 0;"/>
              <span style="font-size: 10px;">做最好的企业服务商工商注册</span>
              <span style="font-size: 11px; margin-top: 30px; line-height: 16px;">企业服务网是一站式商业服务平台。诞生于2000年，总部位于成都，经历了17年发展历程。目前集团人数2000人。经营了100多项企业服务项目，其中包括工商注册、资质注册、会计代理、办公装修、企业上市辅导、争做最好的企业服务商工商注册。</span>
          </div>
          <span class="more_btn more_btn_w8">more</span>
        </div>

      </div>

    </div>

    <div  :class="[size > 800 ? 'id_two_layer' : 'id_two_layer_w8']" >
         <div :class="[size > 800 ? 'id_two_layer_title' : 'id_two_layer_title_w8']">公司的优势</div>
         <div style="width:30px; height:1px; background-color: #CD3333; margin: 15px auto;"/>
         <div :class="[size > 800 ? 'id_two_layer_text' : 'id_two_layer_text_w8']">客户至上，服务周到，质量第一，科技领先</div>
         <div :class="[size > 800 ? 'two_layer' : 'two_layer_w8']">
            <li>
              <img  src="../assets/ag1.png"/>
              <div class="two_layer_text">
                <span :class="[size > 800 ? 'two_layer_text_title' : 'two_layer_text_title_w8']">实力雄厚</span>
                <span :class="[size > 800 ? 'two_layer_text_text' : 'two_layer_text_text_w8']">提供企业一条龙服务，完成百万家企业服务</span>
              </div>
            </li>

            <li>
              <img  src="../assets/ag2.png"/>
              <div class="two_layer_text">
                <span :class="[size > 800 ? 'two_layer_text_title' : 'two_layer_text_title_w8']">有担当</span>
                <span :class="[size > 800 ? 'two_layer_text_text' : 'two_layer_text_text_w8']">多渠道互联网在线免费咨询服务</span>
              </div>
            </li>

            <li>
              <img  src="../assets/ag3.png"/>
              <div class="two_layer_text">
                <span :class="[size > 800 ? 'two_layer_text_title' : 'two_layer_text_title_w8']">专业团队</span>
                <span :class="[size > 800 ? 'two_layer_text_text' : 'two_layer_text_text_w8']">100余人的专业化的服务精英团队</span>
              </div>
            </li>
         </div>

         <div :class="[size > 800 ? 'two_layer' : 'two_layer_w8']">
            <li>
              <img  src="../assets/ag4.png"/>
              <div class="two_layer_text">
                <span :class="[size > 800 ? 'two_layer_text_title' : 'two_layer_text_title_w8']">安全保障</span>
                <span :class="[size > 800 ? 'two_layer_text_text' : 'two_layer_text_text_w8']">签订合同，真实可靠的保障企业利益</span>
              </div>
            </li>

            <li>
              <img  src="../assets/ag5.png"/>
              <div class="two_layer_text">
                <span :class="[size > 800 ? 'two_layer_text_title' : 'two_layer_text_title_w8']">快速响应</span>
                <span :class="[size > 800 ? 'two_layer_text_text' : 'two_layer_text_text_w8']">24小时全面服务，及时解决您的问题</span>
              </div>
            </li>

            <li>
              <img  src="../assets/ag6.png"/>
              <div class="two_layer_text">
                <span :class="[size > 800 ? 'two_layer_text_title' : 'two_layer_text_title_w8']">服务周到</span>
                <span :class="[size > 800 ? 'two_layer_text_text' : 'two_layer_text_text_w8']">提供专业的一对一服务顾问</span>
              </div>
            </li>
         </div>

    </div>

    <div  :class="[size > 800 ? 'id_three_layer' : 'id_three_layer_w8']">
         <div :class="[size > 800 ? 'id_two_layer_title' : 'id_two_layer_title_w8']">案例展示</div>
         <div style="width:30px; height:1px; background-color: #CD3333; margin: 15px auto;"/>
         <div :class="[size > 800 ? 'id_two_layer_text' : 'id_two_layer_text_w8']">客户至上，服务周到，质量第一，科技领先</div>
         <div :class="[size > 800 ? 'three_layer_contain' : 'three_layer_contain_w8']">
           <li >
             <img src="../assets/a1.jpg"/>
             <div class="three_layer_contain_curtain" >
                <div class="three_layer_contain_curtain_text"> 成功案例 </div>
             </div>
           </li>

           <li>
             <img src="../assets/a1.jpg"/>
             <div class="three_layer_contain_curtain" >
                <div class="three_layer_contain_curtain_text"> 成功案例 </div>
             </div>
           </li>

           <li>
             <img src="../assets/a1.jpg"/>
             <div class="three_layer_contain_curtain" >
                <div class="three_layer_contain_curtain_text"> 成功案例 </div>
             </div>
           </li>

           <li>
             <img src="../assets/a1.jpg"/>
             <div class="three_layer_contain_curtain" >
                <div class="three_layer_contain_curtain_text"> 成功案例 </div>
             </div>
           </li>

         </div>
         <span :class="[size > 800 ? 'three_layer_contain_more_btn' : 'three_layer_contain_more_btn_w8']">more</span>
    </div>

    <v-footer :size="size"></v-footer>


  </div>
</template>

<script>

import Header from '../components/header'
import Footer from '../components/footer'

export default {
  name: 'index',
  props : {
    size : {
      type: Number,
      default: 1000
    }

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isOverIndex : 0
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
#index{
  background-color: #fff;
  width: 100%;
  padding: 0;
  position: absolute;
  align-content: center;
}
.one_layer{
  padding-top: 90px;
  clear: both;
  margin-top: 510px;
  width: 100%;
  height: auto;
  background-color: #fff;
}
.one_layer_w8{
  padding-top: 15px;
  clear: both;
  margin-top: 250px;
  width: 100%;
  height: auto;
  background-color: #fff;
}
.one_transparent_layer{
  position:absolute;
  left:0;
  top:55px;
  background-position:0 -100px;
  background-repeat:no-repeat;
  width: 100%;
  height: 510px;
  background-size: cover;
  background-attachment: fixed;
}
.one_transparent_layer_w8{
  position:absolute;
  left:0;
  top:55px;
  background-position:center;
  background-repeat:no-repeat;
  width: 100%;
  height: 250px;
  background-size: cover;
  background-attachment: scroll;
  background-clip:content-box;
}
.one_transparent_layer_context {
  width: 100%;
  height: 510px;
  background: rgba(0,0,0,0.2);
  margin: 0 auto;
  color: #fff;
  font-size: 52px;
}
.one_transparent_layer_context_w8 {
  width: 100%;
  height: 250px;
  background: rgba(0,0,0,0.2);
  margin: 0 auto;
  color: #fff;
  overflow: hidden;
  font-size: 20px;
}
.one_transparent_layer_context span{
  display: block;
}
.one_transparent_layer_context_w8 span{
  display: block;
}
.one_layer_context{
  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  width: 100%;
  height: 220px;
}
.one_layer_context_w8{
  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  width: 100%;
  height: 100px;
}
.one_layer_confirm{
  max-width: 1200px;
  height: 390px;
  overflow: hidden;
  margin: auto;
  text-align: left;
}
.one_layer_confirm_w8{
  max-width: 1200px;
  height: 100%;
  overflow: hidden;
  position: relative;
  margin: auto;
  text-align: left;
}
.one_layer_confirm_img{
  width: 50%;
  height: 100%;
  overflow: hidden;
  display: inline-block;
}
.one_layer_confirm_img_w8{
  width: 95%;
  height: auto;
  margin: auto;
  overflow: hidden;
  text-align: center;
}
.one_layer_confirm img{
  width: auto;
  height: 100%;
}
.one_layer_confirm_img_w8 img{
  width: 100%;
  height: 100%;
}
.one_layer_confirm_context{
  display: inline-block;
  width: 49%;
  position: relative;
  height: 390px;
}
.one_layer_confirm_context_w8{
  display: inline-block;
  width: 100%;
  position: relative;
  height: 280px;
}
.confirm_context{
  left: 40px;
  position: absolute;
  display: block;
}
.confirm_context_w8{
  left: 5%;
  right: 5%;
  position: absolute;
  display: block;
}
.confirm_context span{
  display: block;
}
.confirm_context_w8 span{
  display: block;
}
.more_btn{
  position: absolute;
  display: block;
  left: 40px;
  bottom: 20px;
  padding: 10px 30px;
  color: #fff;
  background-color: #CD3333;
  border:3px solid #CD3333;
  cursor: pointer;
  transition: all 0.6s;
}
.more_btn_w8{
  left: 5%;
  padding: 6px 20px;
  color: #fff;
  font-size: 11px;
  background-color: #CD3333;
  border:1px solid #CD3333;
  cursor: pointer;
  transition: all 0.6s;
}
.more_btn:hover{
  color: #CD3333;
  background-color: #fff;
}
.id_two_layer{
  max-width: 1300px;
  height: auto;
  margin: auto;
  margin-top: 120px;
}
.id_two_layer_w8{
  max-width: 1300px;
  height: auto;
  margin: auto;
  margin-top: 0;
}
.id_two_layer_title{
  color: #000;
  font-size: 34px;
  margin-top: 30px;
}
.id_two_layer_title_w8{
  color: #000;
  font-size: 18px;
  margin-top: 10px;
}
.id_two_layer_text_w8{
  font-size: 10px;
  margin-bottom:30px;
}
.id_two_layer_text{
  font-size: 15px;
}
.two_layer{
  margin-top: 30px;
  height: 100px;
}
.two_layer_w8{
  margin-top: 0px;
  height: auto;
}
.two_layer li{
  margin: 0 3%;
  height: 100px;
  width: 25%;
  position: relative;
  overflow: hidden;
  display: inline-block;
  list-style: none;
}
.two_layer_w8 li{
  margin: 0 0;
  height: 100px;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: block;
  list-style: none;
}
.two_layer img{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 60px;
  width: 60px;
  text-align: left;
  display: inline-block;
}
.two_layer_w8 img{
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 50px;
  width: 50px;
  text-align: left;
  display: inline-block;
}
.two_layer_text{
  height: 70px;
  left: 100px;
  position: absolute;
  display: inline-block;
}
.two_layer_text span{
  text-align: left;
  display: block;
}
.two_layer_text_title{
  font-size: 20px;
  margin-top:2px;
  line-height: 42px;
}
.two_layer_text_title_w8{
  font-size: 16px;
  margin-top:2px;
  line-height: 42px;
  margin-left: 20px;
}
.two_layer_text_text{
  font-size: 15px;
  line-height: 28px;
}
.two_layer_text_text_w8{
  font-size: 12px;
  line-height: 28px;
  margin-left: 20px;
}
.id_three_layer{
  max-width: 1200px;
  height: auto;
  margin: auto;
  margin-top: 120px;
}
.id_three_layer_w8{
  max-width: 1200px;
  height: auto;
  margin: auto;
  margin-top: 20px;
}
.three_layer_contain{
  margin-top: 40px;
}
.three_layer_contain_w8{
  margin-top: 40px;
}
.three_layer_contain li{
  list-style: none;
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-left: 2%;
  margin-right: 2%;
  width: 20%;
  height: 300px;
}
.three_layer_contain_w8 li{
  list-style: none;
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-left: 2%;
  margin-right: 2%;
  width: 45%;
  height: 200px;
}
.three_layer_contain img{
  height: 100%;
}
.three_layer_contain_w8 img{
  height: 100%;
}
.three_layer_contain_curtain{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(0,0,0,0.5);
  transition: all 0.6s;
  transform: translateY(100%);
}
.three_layer_contain li:hover .three_layer_contain_curtain {
  transform: translateY(0%);
}
.three_layer_contain_w8 li:hover .three_layer_contain_curtain{
  transform: translateY(0%);
}
.three_layer_contain_more_btn{
  display: block;
  width: 50px;
  padding: 10px 30px;
  color: #fff;
  margin: 40px auto 0 auto;
  background-color: #CD3333;
  border:3px solid #CD3333;
  cursor:pointer;
  transition: all 0.6s;
}
.three_layer_contain_more_btn_w8{
  display: block;
  width: 50px;
  padding: 8px 20px;
  font-size: 10px;
  color: #fff;
  margin: 40px auto 0 auto;
  background-color: #CD3333;
  border:1px solid #CD3333;
  cursor:pointer;
  transition: all 0.6s;
}
.three_layer_contain_more_btn_w8:hover{
  color: #CD3333;
  background-color: #fff;
  position: relative;
}
.three_layer_contain_more_btn :hover{
  color: #CD3333;
  background-color: #fff;
  position: relative;
}
.three_layer_contain_curtain_text{
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
  color: #fff;
}
.four_layer{
  max-width: 1200px;
  height: 280px;
  margin: auto;
  padding-top: 80px;
}
.four_layer_w8{
  max-width: 1200px;
  height: 280px;
  margin: auto;
  padding-top: 50px;
}

</style>
