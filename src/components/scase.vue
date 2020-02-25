<template>
  <div id="scase">

    <v-header :size="size"  :index=3 ></v-header>

    <div class="c_one_layer" :style="{backgroundImage:'url('+require('../assets/bg5.jpg')+')'}">
      <div class="c_one_transparent_layer_context">
        <div class="c_one_layer_context">
          <span style="font-size: 47px; margin-top: 10px;">做最好的企业服</span>
          <span  style="font-size: 14px; margin-top: 10px;">让您不再为企业担心 让您不再为企业烦恼 让您不再为企业操劳</span>
        </div>
      </div>
     </div>

    <div class="contain">
      <li :class="[size > 800 ? 'one_case' : 'one_case_w8']">
        <span class="one_case_img">
           <img src="../assets/bg7.png"/>
        </span>
        <div class="one_case_title">这是标题这是标题</div>
        <div class="one_case_text">这是内容这是内容这是内容这是内</div>

      </li><li :class="[size > 800 ? 'one_case' : 'one_case_w8']">
        <span class="one_case_img">
           <img src="../assets/bg7.png"/>
        </span>
        <div class="one_case_title">这是标题这是标题</div>
        <div class="one_case_text">这是内容这是内容这是内容这是内容这是内容这是内容容这是内容这是内容这是内容这是内容这是内容</div>

      </li><li :class="[size > 800 ? 'one_case' : 'one_case_w8']">
        <span class="one_case_img">
           <img src="../assets/bg7.png"/>
        </span>
        <div class="one_case_title">这是标题这是标题</div>
        <div class="one_case_text">这是内容这是内容这是内容这是内容这是内容这是内容这容这是内容这是内容</div>

      </li><li :class="[size > 800 ? 'one_case' : 'one_case_w8']">
        <span class="one_case_img">
           <img src="../assets/bg7.png"/>
        </span>
        <div class="one_case_title">这是标题这是标题</div>
        <div class="one_case_text">这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内是内容这是内容这是内容</div>

      </li>


    </div>

    <v-footer :size="size"></v-footer>


  </div>
</template>

<script>

import Header from '../components/header'
import Footer from '../components/footer'

export default {
  name: 'scase',
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
      msg: '成功案例',

    }
  },
  mounted() {

  },
  methods:{

  },
  computed: {

  },
  components: {
    "v-header":Header,
    "v-footer":Footer,

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only


position: fixed;
width: 80%;
left: 0;
right: 0;
margin: auto;


-->
<style scoped>
#scase{
  width: 100%;
  background-color: #fff;
  padding: 0;
  position: absolute;
  align-content: center;
}
.c_one_layer{
  height: 350px;
  width: 100%;
  background-position: center;
  background-repeat:no-repeat;
  background-size: cover;
  background-attachment: scroll;
  overflow: hidden;
  position: relative;
}
.c_one_transparent_layer_context{
  width: 100%;
  height: 350px;
  background: rgba(0,0,0,0.5);
  margin: 0 auto;
  color: #fff;
  font-size: 52px;
}
.c_one_layer_context{
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
.c_one_layer_context span{
  display: block;
}
.contain{
  height: auto;
  max-width: 1200px;
  margin: auto;
  text-align: left;
}
.one_case{
  cursor: pointer;
  overflow: hidden;
  width: 31.3%;
  margin: 30px 1% 0 1%;
  height: 300px;
  display: inline-block;
  list-style: none;
}
.one_case_w8{
  cursor: pointer;
  overflow: hidden;
  width: 96%;
  margin: 30px 2% 0 2%;
  height: 300px;
  display: inline-block;
  list-style: none;
  text-align: center;
}
.one_case_title{
  margin-top: 10px;
  font-size: 17px;
  margin-left: 5px;
  color: #000;
}
.one_case_text{
  margin: 5px 3px 0 3px;
  font-size: 15px;
  line-height: 20px;
}
.one_case_img{
  height: 220px;
  width: 100%;
  display: block;
}
.one_case_img img{
  width: auto;
  height: 100%;
}
</style>
