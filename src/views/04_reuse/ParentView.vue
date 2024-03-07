<template>
  <div>
    <h1>페어런트 컴퍼넌트</h1>
    <ChildComponent
      :str="strParent"
      :num="numParent"
      :isOK="isOkParent"
      :arr="arrParent"
      :obj="arrObj"
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
      arrObj: { name: 'CZ' }
    }
  },
  methods: {
    callnum() {
      console.log('callnum')
    }
  }
}
</script>

<style></style>
