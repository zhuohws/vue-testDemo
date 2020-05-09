<template>
  <div class="hello">
    {{msg}}
    <input v-model="test"/>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>深入响应式原理</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  },
  data () {
    return  {
      msg: 'Hello World',
      test: '222'
    }
  },
  mounted () {
    console.log(this)
  },
  beforeRouteEnter (to, from, next) {
    console.log(to, from)
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to, from)
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next()
  },
  // 页面离开时提示
  beforeRouteLeave (to, from, next) {
    console.log(to, from)
    console.log(this.test)
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    if (this.test < 123) {
      next(false)
    } else {
      next()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
