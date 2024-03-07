<template>
  <div>
    <div>{{ sampleData }}</div>
    <h1>{{ cities }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sampleData: '옴마집',
      cities: [{ code: 2, city: '진주' }],
      fnInterval: null
    }
  },
  // 인스턴스가 초기화되면 props 설정을 처리한 후 data() 또는 computed 같은 다른 옵션을 처리하기 직전에 호출
  beforeCreate() {},
  // data(), watch, computed, methods 이런 정보를 모두 가지고 준비가 끝난 상태
  created() {
    this.getSampleData()
  },
  // 반응 상태 설정을 완료를 했지만, 아직 DOM 노드가 생성되지 않은 상태
  beforeMount() {},
  // 실제 DOM이 랜더링이 끝난 상태
  mounted() {
    // let i = 0
    // this.getCityList()
    // console.log('마운티드')
    // this.fnInterval = window.setInterval(() => {
    //   // console.log('마운티드', i++)
    // }, 1000)
  },
  // data  변경으로 인해 DOM을 업데이트 하기 직전 상태
  beforeUpdate() {},
  // DOM 이 업데이트 된 후에 호출
  updated() {
    console.log('옵데이트')
  },
  // 현재 컴포넌트를 빠져 나가기 직전
  beforeUnmount() {},
  // 현재 컴포넌트를 빠져 나갈때
  unmounted() {
    // window.clearInterval(this.fnInterval)
    // this.fnInterval = null
    // this.cities = null
  },
  methods: {
    getCityList() {
      this.cities = [{ code: 1, city: '서울' }]
    },
    getSampleData() {
      this.sampleData = '우리집'
    }
  }
}
</script>

<style></style>
