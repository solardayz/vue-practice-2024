<template>
  <div>
    <div>
      <input type="text" name="" id="" v-model="firstName" />
      <input type="text" name="" id="" v-model="lastName" />
      <h1>{{ fullName }}</h1>
      <p>{{ title }} {{ firstName }} {{ lastName }}</p>
      <p>{{ title }} {{ firstName }} {{ lastName }}</p>
      <p>{{ title }} {{ firstName }} {{ lastName }}</p>
    </div>
    <select name="" id="" v-model="selected">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'CZ',
      lastName: 'J',
      title: 'Mr.',
      fullName: '',
      selected: '',
      changeHisroty: []
    }
  },
  watch: {
    firstName(newValue, oldValue) {
      console.log(newValue + ' , ' + oldValue)
    },
    lastName(newValue, oldValue) {
      console.log(newValue + ' , ' + oldValue)
    },
    selected(newValue, oldValue) {
      this.changeHisroty.push(newValue)
      console.log(this.changeHisroty)
    }
  }
}
</script>

<style></style>
