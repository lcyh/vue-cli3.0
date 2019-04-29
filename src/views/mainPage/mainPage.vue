<template>
  <div class="hello">
    <h1>HelloWorld component</h1>
    <h4>{{this.getUserName}}</h4>
    <h4>{{this.getUserId}}</h4>
  </div>
</template>

<script>
import { handleGetList } from '@/api/index'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['getToken', 'getUserName', 'getUserId'])
  },
  created () {
    this.getList()
  },
  watch: {

  },
  methods: {
    async getList () {
      const data = await handleGetList({})
      console.log('list', data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .hello{
        color:green;
    }
</style>
