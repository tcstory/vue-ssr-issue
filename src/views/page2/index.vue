<template>
  <div>
    <p>page2</p>
    <btn1></btn1>
  </div>
</template>

<script>
import btn1 from '../../components/btn1/index.vue';

export default {
  name: "page2",
  components: {
    'btn1': btn1,
  },
  mounted() {
    console.log('page2')
  }
}
</script>

<style scoped lang="scss">
</style>
