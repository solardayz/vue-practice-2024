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
      //   //   this.$emit('change-num')
      console.log(this.selectedNum)
    }
  }
}
</script>

<style></style>
