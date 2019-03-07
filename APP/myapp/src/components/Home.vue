<template>
  <div class="home text-center">
    <div class="box">
      <div class="bg">
        <h1>欢迎来品尝pizza!</h1>
        <h2>这里有各种各样好吃的pizza.</h2>
        <button @click="getmenu" class="btn btn-primary">Let's order</button>
      </div>
    </div>
    <h3>快递信息</h3>
    <delivery></delivery>
    <h3>历史记录</h3>
  </div>
</template>

<script>
import Delivery from '@/components/about/Delivery';
export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  methods:{
    getmenu(){
      this.$router.push('/menu')
    }
  },
 components:{
   'delivery':Delivery,
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  width:100%;
  height:600px;
  background:url('../../static/pizza.jpg');
  padding-top:200px;
  padding-left: 25%
}
.bg{
  background: #cccccc;
  opacity: 0.8;
  width: 600px;
  height: 200px;
  padding-top: 20px;
  position: relative;
}
button{
  position: absolute;
  top:65%;
  left:40%
}
</style>
