<template>
  <div class="contact">
    <div class="card text-center">
      <div class="card-header">
        pizza
      </div>
      <div class="card-body">
        <h5 class="card-title">联系我们</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <router-link to="/contact/address" class="btn btn-primary">地址信息</router-link>
        <router-link to="/contact/person" class="btn btn-primary">法人代表</router-link>
        <router-link to="/contact/tel" class="btn btn-primary">联系我们</router-link>
        <router-view></router-view>
      </div>
      <div class="card-footer text-muted">
        2 days ago
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
