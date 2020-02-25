<template>
  <div id="aboutUs">

    <v-header :size="size"  :index=5 ></v-header>
       <div class="a_one_layer" :style="{backgroundImage:'url('+require('../assets/bg4.jpg')+')'}">
         <div class="a_one_transparent_layer_context">
            <div class="a_one_layer_context">

              <span style="font-size: 40px; margin-top: 10px;">做最好的服务领导者</span>
               <span  style="font-size: 14px; margin-top: 10px;">让您不再为企业担心 让您不再为企业烦恼 让您不再为企业操劳</span>
            </div>
          </div>
    </div>

    <div class="contain">
        <div class="ex_contain">
           <span class="a_contain_text">Our Experience & Measures</span>
           <div style="width:30px; height:1px; background-color: #CD3333; margin: 15px auto;"/>
           <span style="font-size: 14px; display:block">我们的经验和措施</span>
           <div class="a_ex_pic" >
               <div :class="[size > 800 ? 'ex_one_pic' : 'ex_one_pic_w8']" >
                 <span><img src="../assets/ag4.png" style="wight:70px; height:70px; " /></span>
                 <span class="ex_one_text" >满意的客户</span>
                 <span class="ex_two_text" >Everage敏捷框架提供了一个健壮的概要，以提供高水平的俯视无人机驾驶员</span>
               </div><div :class="[size > 800 ? 'ex_one_pic' : 'ex_one_pic_w8']">
                 <span><img src="../assets/ag1.png" style="wight:70px; height:70px; " /></span>
                 <span class="ex_one_text" >项目做完</span>
                 <span class="ex_two_text">通过工作场所多元化的目的，有机地发展颠覆性创新的整体世界观</span>
               </div><div :class="[size > 800 ? 'ex_one_pic' : 'ex_one_pic_w8']">
                 <span><img src="../assets/ag2.png" style="wight:70px; height:70px; " /></span>
                 <span class="ex_one_text" >飞行时间</span>
                 <span class="ex_two_text">采用双赢的生存策略，确保视频的主动控制</span>
               </div><div :class="[size > 800 ? 'ex_one_pic' : 'ex_one_pic_w8']">
                 <span><img src="../assets/ag3.png" style="wight:70px; height:70px; " /></span>
                 <span class="ex_one_text" >4 k的决议</span>
                 <span class="ex_two_text">利用低垂的水果，确定一个球场价值增加的活动，以驾驶考试</span>
               </div>
           </div>
        </div>
        <div class="a_team_contain">
          <div :class="[size > 800 ? 'a_ex_contain' : 'a_ex_contain_w8']">
           <span class="a_contain_text">Our Dedicated Team</span>
           <div style="width:30px; height:1px; background-color: #CD3333; margin: 15px auto;"/>
           <span style="font-size: 14px; display:block">我们的专业团队</span>
           <div class="a_team_pic">
               <div :class="[size > 800 ? 'team_one_pic' : 'team_one_pic_w8']">
                 <span :class="[size > 800 ? 'ex_image' : 'ex_image_w8']"><img src="../assets/p1.jpg" /></span>
                 <span class="ex_one_text" >杰克·科瓦尔斯基</span>
                 <span class="ex_two_text">十年的飞行经验。廉价无人机服务，用于空中无人机检查。</span>
               </div><div :class="[size > 800 ? 'team_one_pic' : 'team_one_pic_w8']">
                 <span :class="[size > 800 ? 'ex_image' : 'ex_image_w8']"><img src="../assets/p1.jpg"  /></span>
                 <span class="ex_one_text" >杰克·科瓦尔斯基</span>
                 <span class="ex_two_text" >十年的飞行经验。廉价无人机服务，用于空中无人机检查。</span>
               </div><div :class="[size > 800 ? 'team_one_pic' : 'team_one_pic_w8']">
                 <span :class="[size > 800 ? 'ex_image' : 'ex_image_w8']"><img src="../assets/p1.jpg" /></span>
                 <span class="ex_one_text" >杰克·科瓦尔斯基</span>
                 <span class="ex_two_text">十年的飞行经验。廉价无人机服务，用于空中无人机检查。</span>
               </div><div :class="[size > 800 ? 'team_one_pic' : 'team_one_pic_w8']">
                 <span :class="[size > 800 ? 'ex_image' : 'ex_image_w8']"><img src="../assets/p1.jpg" /></span>
                 <span class="ex_one_text" >杰克·科瓦尔斯基</span>
                 <span class="ex_two_text">十年的飞行经验。廉价无人机服务，用于空中无人机检查。</span>
               </div>
               </div>
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
  name: 'aboutUs',
  props : {
    size : {
      type: Number,
      default: 1000
    }

  },
  data () {
    return {
      msg: '关于我们'
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
#aboutUs{
  background-color: #fff;
  width: 100%;
  padding: 0;
  position: absolute;
  align-content: center;
}
.a_one_layer{
  height: 300px;
  width: 100%;
  background-position: center;
  background-repeat:no-repeat;
  background-size: cover;
  background-attachment: scroll;
  overflow: hidden;
  position: relative;
}
.a_one_transparent_layer_context{
  width: 100%;
  height: 300px;
  background: rgba(0,0,0,0.5);
  margin: 0 auto;
  color: #fff;
  font-size: 52px;
}
.a_one_layer_context{
  position: absolute;
  max-width: 1200px;
  height: 120px;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
}
.a_one_layer_context span{
  display: block;
}
.contain{
  height: auto;
  max-width: 1200px;
  margin: auto;
}
.ex_contain{

  padding-top: 80px;
  width:100%;
  height:auto;
}
.a_ex_contain{
  padding-top: 80px;
  width:100%;
  height:auto;
}
.a_ex_contain_w8{
  padding-top: 10px;
  width:100%;
  height:auto;
}
.a_team_contain{
  width:100%;
  height: auto;
}
.a_contain_text{
  font-size:30px;
  color: #000;
  display:block;
}
.ex_image{
  position: relative;
 display: inline-block;
 width:180px;
 height:180px;
 border-radius:50%;
 overflow:hidden;
 text-align: center;
}
.ex_image img{
  transition: all 0.6s;
  width: 100%;
  height: 100%;
}
.ex_image:hover img{
  transform:scale(1.2);
}
.ex_image_w8{
  position: relative;
 display: inline-block;
 width:140px;
 height:140px;
 border-radius:50%;
 overflow:hidden;
 text-align: center;
}
.ex_image_w8 img{
  transition: all 0.6s;
  width: 100%;
  height: 100%;
}
.a_ex_pic{
  margin-top: 50px;
  height: auto;
}
.a_team_pic{
  margin-top: 50px;
  height: auto;
}
.ex_one_pic{
  overflow: hidden;
  width:21%;
  margin: 0 1%;
  height: 205px;
  text-align:center;
  display: inline-block;
}
.ex_one_pic_w8{
  overflow: hidden;
  width:46%;
  margin: 0 2%;
  height:280px;
  text-align:center;
  display: inline-block;
}
.team_one_pic{
  overflow: hidden;
  width:21%;
  margin: 0 1%;
  height: 300px;
  text-align:center;
  display: inline-block;
}
.team_one_pic_w8{
  overflow: hidden;
  width:46%;
  margin: 0 2%;
  height: 350px;
  text-align:center;
  display: inline-block;
}
.ex_one_text{
  font-size: 20px;
  padding-top:20px;
  display:block;
  color: #000;
}
.ex_two_text{
  font-size: 14spx;
  padding-top:15px;
  display:block;
  line-height: 25px;
}
</style>
