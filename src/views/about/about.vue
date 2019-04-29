<template>
  <div class="about">
    <h1>
        This is an about page
    </h1>
    <div class="test">vue-cli3.0测试</div>
  </div>
</template>
<script>
//   import Api from '../../utils/api';
export default {
  data () {
    return {
      formBusy: false
    }
  },
  created () {
  },
  watch: {

  },
  methods: {

  }
}
</script>

<style lang='scss'>
    .page{
        border: 1px solid #62d335;
    }
    .about{
        text-align: center;
        color:red;
        .test{
        color:blueviolet;
        border: 1px solid black;
        }
    }

</style>
