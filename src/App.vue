<template>
  <div id="app">
    <router-view @test="tes()" :size="myWidth" :mHeight="myHeight"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      myWidth: window.innerWidth,
      myHeight: "1000px"
    }
  },
  methods : {
    tes(){
      console.log("点击事件");
    }
  },
  mounted(){
    const that = this;
     window.addEventListener("resize", function() {
           return (() => {
                window.screenWidth= document.body.clientWidth;
                var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
                that.myHeight= windowHeight - 3 +"px";
                that.myWidth= window.screenWidth;
             })();
         });
  },
  created(){
    this.myHeight= (document.documentElement.clientHeight || document.body.clientHeight) - 3 +"px";
  },
   watch: {
       screenWidth (val) {
           if (!this.timer) {
               this.screenWidth = val
               this.timer = true
               let that = this
               setTimeout(function () {
                   // that.screenWidth = that.$store.state.canvasWidth
                   console.log(that.screenWidth)
                   that.init()
                   that.timer = false
               }, 1000)
           }
       }
   }
}
</script>

<style>
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  position: absolute;
  width: 100%;
  top: 0;
  margin: auto;
}

</style>
