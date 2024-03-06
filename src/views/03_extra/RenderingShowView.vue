<template>
  <div>
    <input type="radio" name="" id="ai" value="AI" v-model="favoriteField" />
    <label for="ai">인공지능</label>
    <input
      type="radio"
      name=""
      id="deep"
      value="DEEP"
      v-model="favoriteField"
    />
    <label for="ai">딥러닝</label>
    <input
      type="radio"
      name=""
      id="block"
      value="BLOCK"
      v-model="favoriteField"
    />
    <label for="ai">블록체인</label>
    <div v-show="favoriteField === 'ETC'">
      <input
        type="radio"
        name=""
        id="etc"
        value="ETC"
        v-model="favoriteField"
      />
      <label for="ai">기타</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favoriteField: ''
    }
  }
}
</script>

<style></style>
