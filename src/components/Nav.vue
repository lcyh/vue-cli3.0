<template>
  <div class="navbar-component">
        <ul class="nav">
            <li>
                <router-link to="/mainPage">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'navLeft',
  data () {
    return {

    }
  },
  watch: {
    $route (route) { /* 实时监听路由 */

    }
  },
  components: {
  },
  created () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.navbar-component {
  .nav {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      height: 50px;
      line-height: 50px;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        font-weight: bold;
        color: #fff;
        text-decoration: none;
        transition: all .3s;
        &.router-link-exact-active {
          color: #fff;
          background-color: #558FFB;
        }
      }
    }
  }
}
</style>
