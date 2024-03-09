export default {
  created() {
    console.log('Fommater의 크리에이티드')
  },
  mounted() {
    console.log(this.$route.path)
  },
  methods: {
    $convertDateFormat(d, f) {
      let year = ''
      let month = ''
      let day = ''
      console.log(typeof d)
      if (typeof d === 'string' && d.length === 8) {
        year = d.substr(0, 4)
        month = d.substr(4, 2)
        day = d.substr(6, 2)
        console.log(year, month, day)
      } else if (d === 'object') {
        year = d.getFullYear()
        month = (d.getMonth() + 1).toString().padStart(2, 0)
        day = (d.getDate() + 1).toString().padStart(2, 0)
      }

      // f = YYYY-MM-DD
      return f.replace('YYYY', year).replace('MM', month).replace('DD', day)
    }
  }
}
