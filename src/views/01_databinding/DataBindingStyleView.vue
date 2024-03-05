<template>
  <div>
    <div style="color: green; font-size: 30px">
      스타일 바인딩: 글씨는 레드, 폰트크기 :30px
    </div>
    <div :style="style1">스타일 바인딩: 글씨는 레드, 폰트크기 :30px</div>
    <button @click="style1.color = 'red'">색상 바꾸기</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      style1: {
        color: 'green',
        fontSize: '30px'
      }
    }
  }
}
</script>
