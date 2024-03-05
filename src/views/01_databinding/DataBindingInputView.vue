<template>
  <div>
    <input type="text" name="" id="" v-model="userId" />
    <button @click="MyFunction">클릭</button>
    <button @click="chageData">변경</button>
    <br />
    <input type="text" name="" id="" v-model="num1" /> +
    <input type="text" name="" id="" v-model="num2" /> =
    <span>{{ num1 + num2 }}</span>
    <br />
    <input type="text" name="" id="" v-model.number="num3" /> +
    <input type="text" name="" id="" v-model.number="num4" /> =
    <span>{{ num3 + num4 }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: 'znc',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  methods: {
    MyFunction() {
      console.log(this.userId)
    },
    chageData() {
      this.userId = 'jwc'
    }
  }
}
</script>
