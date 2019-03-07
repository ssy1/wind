<template>
  <div class="activity">
    <div class="card col-12" v-for="(item,index) in items" :key="index">
      <img class="card-img-top" src="../../../static/热门活动.jpg" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">{{item.title}}</h4>
        <p class="card-text">{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Activity',
  data () {
    return {
      items:[
        {
          title:'热门活动1',
          text:'买pizza，有机会赢得iPhone XS MAX...'
        },
        {
          title:'热门活动2',
          text:'买pizza，有机会赢得iPhone XS MAX...'
        },
        {
          title:'热门活动3',
          text:'买pizza，有机会赢得iPhone XS MAX...'
        }
      ]
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
