<template>
  <div>
    <div>페이지 타이틀</div>
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '페이지 제목'
    }
  },
  data() {
    return {
      sampleData: ''
    }
  }
}
</script>

<style></style>
