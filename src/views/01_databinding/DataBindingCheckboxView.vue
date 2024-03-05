<template>
  <div>
    <div>
      <input
        type="checkbox"
        name=""
        id="html"
        value="HTML"
        v-model="favoriteLang"
      />
      <label for="html">HTML</label>
      <input
        type="checkbox"
        name=""
        id="js"
        value="JS"
        v-model="favoriteLang"
      />
      <label for="js">JS</label>
      <input
        type="checkbox"
        name=""
        id="css"
        value="CSS"
        v-model="favoriteLang"
      />
      <label for="css">CSS</label>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      favoriteLang: ['CSS']
    }
  }
}
</script>
