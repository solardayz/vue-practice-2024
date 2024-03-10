import axios from 'axios'

export default {
  methods: {
    async $get(url) {
      return await axios.get(url).catch((e) => {
        console.log(e)
      }).data
    },
    async $post(url, data) {
      return await axios.$post(url, data).catch((e) => {
        console.log(e)
      })
    },
    async $put(url, data) {
      return await axios.$put(url, data).catch((e) => {
        console.log(e)
      })
    },
    async $delete(url, data) {
      return await axios.$delete(url, data).catch((e) => {
        console.log(e)
      })
    }
  }
}
