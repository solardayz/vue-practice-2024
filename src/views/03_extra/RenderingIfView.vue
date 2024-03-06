<template>
  <div>
    <div v-if="userRole === 'M'">
      <button>조회</button>
      <button>생성</button>
    </div>
    <div v-if="userRole === 'A'">
      <button>조회</button>
      <button>생성</button>
      <button>삭제</button>
    </div>
    <div v-if="userRole === 'G'">
      <button>조회</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userRole: 'G' // Admin, Manager, General
    }
  }
}
</script>

<style></style>
