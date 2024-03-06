<template>
  <div>
    <button @click="plusNumber">클릭</button>
    <p>{{ counter }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    plusNumber() {
      this.counter += 1
    }
  }
}
</script>
