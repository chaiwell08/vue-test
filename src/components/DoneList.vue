<style>

</style>

<template>
  <div @click="salaryDetail">
      工资详情
  </div>
</template>

<script>
import Detail from './Detail'
export default {
  name: 'DoneList',
  components: {
    Detail
  },
  methods:{
    salaryDetail(){
      this.$router.push('/Salary')
    }
  },
  data () {
    return {
    }
  }
}
</script>
