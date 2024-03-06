<template>
  <div>
    <input
      type="search"
      name=""
      id=""
      @keyup="checkEnter($event)"
      v-model="selected"
    />
    <button @click="doSearch">조회</button>
    <button type="submit" @click.prevent="doSearch">조회</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    doSearch() {
      console.log(this.selected)
    },
    checkEnter(event) {
      if (event.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>

<style></style>
