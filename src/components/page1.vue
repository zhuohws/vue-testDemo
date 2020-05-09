<template>
  <div class="hello">
    <p>233333</p>
    <div class="block">
        <span class="demonstration">有默认值</span>
        <el-color-picker v-model="color1"></el-color-picker>
    </div>
    <div class="block">
        <span class="demonstration">无默认值</span>
        <el-color-picker v-model="color2"></el-color-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page1',
  data () {
      return {
          color1: '#fff',
          color2: '#eee'
      }
  },
  mounted () {
      console.log(this.$route['params'].id);
  }
}
</script>

<style scoped>
    h3 {
      margin: 40px 0 0;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 10px;
    }
    a {
      color: #42b983;
    }
</style>
