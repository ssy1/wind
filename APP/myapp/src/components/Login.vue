<template>
  <div class="login container text-center mt-5 ">
    <form>
      <div class="form-group">
        
        <input type="email" class="form-control" placeholder="请输入您的用户名/邮箱号">
      </div>
      <div class="form-group">
        
        <input type="password" class="form-control" placeholder="请输入您的密码">
      </div>
      <!-- <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div> -->
      <button type="submit" class="btn btn-primary btn-block">login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-control,button{
  width:400px;
  margin:0 auto;
}
</style>
