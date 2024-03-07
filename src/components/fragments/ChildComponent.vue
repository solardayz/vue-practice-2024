<template>
  <div>
    <h1>차일드</h1>
    <p>{{ str }}</p>
    <p>{{ num }}</p>
    <p>{{ isOK }}</p>
    <p>{{ arr }}</p>
    <p>{{ obj }}</p>
    <select name="" id="" @change="callParent" v-model="selectedNum">
      <option v-for="num in arr" :key="num" :value="num">
        {{ num }}
      </option>
    </select>
    <button @click="callParent">부모로 데이터 전달</button>
  </div>
</template>

<script>
export default {
  props: {
    str: {
      type: String,
      default: ''
    },
    num: {
      type: Number,
      default: 1
    },
    isOK: {
      type: Boolean,
      default: false
    },
    arr: {
      type: Array,
      default: function () {
        return []
      }
    },
    obj: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data() {
    return { selectedNum: 1 }
  },
  methods: {
    callParent() {
      this.$emit('click-num', this.selectedNum)
      //   console.log(this.selectedNum)
    },
    printstr() {
      console.log('printstr')
    }
  }
}
</script>

<style></style>
