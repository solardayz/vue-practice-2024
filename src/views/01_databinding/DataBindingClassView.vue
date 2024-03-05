<template>
  <div>
    <div :class="{ 'text-red': hasError, active: isActive }">클래스 바인딩</div>
    <div :class="class2">클래스 바인딩2</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      hasError: false,
      class2: ['active', 'hasError']
    }
  }
}
</script>
<style scoped>
.active {
  background-color: green;
  font-weight: bold;
}
.hasError {
  color: red;
}
</style>
