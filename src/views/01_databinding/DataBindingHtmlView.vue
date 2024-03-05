<template>
  <div>
    <div>{{ htmlString }}</div>
    <div v-html="htmlString"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      htmlString: '<p style="color:red;">하하하하</p>'
    }
  },
  mounted() {
    console.log('mounted')
  }
}
</script>
