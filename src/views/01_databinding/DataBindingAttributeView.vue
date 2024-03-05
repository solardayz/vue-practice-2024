<template>
  <div>
    <input type="text" name="" id="" v-bind:value="hudsband" readonly />
    <input type="text" name="" id="" :value="wife" />
    <br />
    <img v-bind:src="imgSrc" alt="" style="width: 300px; height: auto" />
    <input type="search" name="" id="" v-model="txt1" />
    <button :disabled="txt1 != '하온'">첫째 아들 이름은?</button>
    <input type="search" name="" id="" v-model="txt2" />
    <button :disabled="txt2 != '하랑'">둘째 아들 이름은?</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hudsband: '신종훈',
      wife: '이재은',
      imgSrc:
        'https://cdn.huffingtonpost.kr/news/photo/202105/110061_207344.jpg',
      txt1: '',
      txt2: ''
    }
  }
}
</script>
