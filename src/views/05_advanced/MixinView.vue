<template>
  <div>믹스인스</div>
</template>

<script>
import Fommater from '@/mixins/Fommater'
import Axios from '@/mixins/axios'
export default {
  mixins: [Fommater, Axios],
  mounted() {
    console.log(this.$convertDateFormat('20240202', 'YYYY----MM-----DD'))
    this.getCustomers()
  },
  methods: {
    async getCustomers() {
      const inflearn = await this.$get('https://www.inflearn.com')
      console.log(inflearn)
    }
  }
}
</script>

<style></style>
