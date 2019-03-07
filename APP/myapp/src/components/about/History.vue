<template>
  <div class="history row">
    <div class="card col-4" v-for="(item,index) in items" :key="index">
      <img class="card-img-top" :src='item.img' alt="Card image cap">
      <div class="card-body text-center">
        <h4 class="card-title">{{item.title}}*{{item.num}}</h4>
        <p class="card-text text-success">{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  data () {
    return {
      items:[{
        img:'../../../static/pizza1.jpg',
        title:'意大利pizza',
        num:4,
        text:'已完成支付'
      },
      {
        img:'../../../static/pizza2.jpg',
        title:'培根pizza',
        num:2,
        text:'已完成支付'
      },
      {
        img:'../../../static/pizza3.jpg',
        title:'芝士pizza',
        num:3,
        text:'已完成支付'
      },
      ]
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
