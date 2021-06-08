<template>
  <div>
    <p>page1</p>
    <btn1></btn1>
  </div>
</template>

<script>
import btn1 from '../../components/btn1/index.vue'

export default {
  name: "page1",
  components: {
    'btn1': btn1,
  },
  mounted() {
    console.log('page1')
  }
}
</script>

<style scoped lang="scss">
</style>
