<template>
  <div id="header">

    <div class="head_contain">
      <div id="head" v-if="size > 800">

          <div id="left">
             <img src="../assets/logo1.png"/>
          </div>

          <div id="right">

              <li><router-link :style="getColor(1)"  to="/">首页</router-link></li>
              <li><router-link :style="getColor(2)"  to="/business">公司业务</router-link></li>
              <li><router-link :style="getColor(3)"  to="/scase">成功案例</router-link></li>
              <li><router-link :style="getColor(4)"  to="/course">教程文档</router-link></li>
              <li><router-link :style="getColor(5)"  to="/aboutUs">关于我们</router-link></li>

          </div>

      </div>
      <div v-else id="s_head">
        <div id="s_head_left">
           <img src="../assets/logo1.png"/>
        </div>
        <div id="s_head_right" @click="showMenu">
           <img src="../assets/menu.png" v-if="!isShowMenu"/>
           <img src="../assets/close.png" v-else/>
        </div>
      </div>
    </div>
    <div :class="['menu_contain',{ active: isShowMenu }]">
      <div class="menu">
        <li :style="getColor(1)" @click="clickMeun(1)">
          首页
        </li>
        <li :style="getColor(2)" @click="clickMeun(2)">
          公司业务
        </li>
        <li :style="getColor(3)" @click="clickMeun(3)">
          成功案例
        </li>
        <li :style="getColor(4)" @click="clickMeun(4)">
          教程文档
        </li>
        <li :style="getColor(5)" @click="clickMeun(5)">
          关于我们
        </li>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'header',
  props : {
    size : {
      type: Number,
      default: 1000
    },
    index : {
      type: Number,
      default: 1
    }

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShowMenu : false
    }
  },
  methods: {
    clickMeun(index){
      if(this.index != index ){
        if(index ==1){
          this.$router.push({path: '/'})
        }else if(index ==2){
          this.$router.push({path: '/business'})
        }else if(index ==3){
          this.$router.push({path: '/scase'})
        }else if(index ==4){
          this.$router.push({path: '/course'})
        }else if(index ==5){
          this.$router.push({path: '/aboutUs'})
        }
      }
    },
    showMenu(){
      if(this.isShowMenu){
        this.isShowMenu = false
      }else{
        this.isShowMenu = true
      }
    },
    getColor(i){
      if( this.index == i ){
        return "color: #CD3333"
      }else{
        return "color: #2C3E50"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.head_contain{
  background-color: #fff;
  height: 55px;
  width: 100%;
}
#head{
  background-color: #fff;
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  max-width: 1200px;
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
  cursor: pointer;

}
.text_active{
  color: red;
}
#right a:link{
  text-decoration: none;
  color: #2C3E50;
}
#right a:visited{
  text-decoration:none;
  color: #2C3E50;
}
#right a:hover{
  text-decoration:none;
  color: #CD3333;
}
#s_head{
  width: 100%;
  height: 55px;
  padding: 0;
  position: fixed;
  text-align: left;
  z-index: 9999;
  top: 0;
  background-color: #fff;
  box-shadow:0px 0px 3px 1px #aaa;
}
#s_head_left{
  position: absolute;
  top: 25%;
  height: 50%;
}

#s_head img{
  height: 100%;
  width: auto;
}
#s_head_right{
  position: absolute;
  cursor: pointer;
  top: 25%;
  right: 2%;
  height: 50%;
}
.menu_contain{
  position: fixed;
  top: 55px;
  background-color: #fff;
  height: 100%;
  width: 100%;
  z-index: 100;
  display: none;
  transition: all 0.5s;
}
.menu{
  color: #000;
  list-style: none;
  width: 60%;
  margin: auto;
}
.menu li{
  cursor: pointer;
  padding: 15px 0;
  border-bottom:1px solid #8a8a8a;
}
.active{
  opacity: 1;
  display: block;
}

</style>
