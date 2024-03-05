<template>
  <div>
    <h1>{{ userName }}</h1>
    <p>{{ message }}</p>
    <p>{{ arr }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: 'chacha',
      message: 'chaleecha',
      arr: [1, 2, 3, 4, 5]
    }
  }
}
</script>
