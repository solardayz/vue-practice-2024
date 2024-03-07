<template>
  <div class="container">
    <button class="btn btn-danger" @click="callChild">자식에게 전달</button>
    <h1>페어런트 컴퍼넌트</h1>
    <ChildComponent
      :str="strParent"
      :num="numParent"
      :isOK="isOkParent"
      :arr="arrParent"
      :obj="objParent"
      @click-num="callnum"
      ref="child11"
    ></ChildComponent>
  </div>
</template>

<script>
import ChildComponent from '@/components/fragments/ChildComponent.vue'
export default {
  components: { ChildComponent },
  data() {
    return {
      strParent: 'CZ',
      numParent: 40,
      isOkParent: true,
      arrParent: [1, 2, 3, 4, 5],
      objParent: { name: 'CZ' }
    }
  },
  methods: {
    callnum(data) {
      console.log('callnum', data)
    },
    callChild() {
      this.$refs.child11.printstr()
    }
  }
}
</script>

<style></style>
