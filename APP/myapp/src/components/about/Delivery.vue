<template>
  <div class="delivery">
    <div class="history row">
     <div class="card col-4" v-for="(item,index) in items" :key="index">
        <img class="card-img-top" :src="item.img" alt="Card image cap">
        <div class="card-body text-center">
          <h4 class="card-title">{{item.title}}</h4>
          <p class="card-text text-success">{{item.text}}</p>
          <button @click='alert' class="btn btn-primary">详情查询</button>
        </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Delivery',
  data () {
    return {
      items:[
        {
          img:'../../../static/del-yt.jpg',
          title:'圆通快递',
          text:'您的快递已到达···'
        },
         {
          img:'../../../static/del-sf.png',
          title:'顺丰速运',
          text:'您的快递已到达···'
        },
         {
          img:'../../../static/del-zt.jpg',
          title:'中通快递',
          text:'您的快递已到达···'
        },
      ]
    }
  },
  methods:{
    alert(){
      alert('快递正在路上，请耐心等待！')
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    width:100%;
    height: 50%;
  }
</style>
