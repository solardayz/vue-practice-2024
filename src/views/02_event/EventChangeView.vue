<template>
  <div>
    <select name="" id="" @change="changeCity($event)" v-model="selectedCity">
      <option value=""></option>
      <option v-for="city in cites" :key="city.code" :value="city.code">
        {{ city.dosi }}
      </option>
    </select>
    <select name="" id="">
      <option value=""></option>
      <option
        v-for="dong in selectedDongList"
        :key="dong.dongCode"
        :value="dong.dongCode"
      >
        {{ dong.dongName }}
      </option>
    </select>
    <select name="" id="">
      <option value=""></option>
      <option
        v-for="dong in dongs.filter((d) => d.code === selectedCity)"
        :key="dong.dongCode"
        :value="dong.dongCode"
      >
        {{ dong.dongName }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedCity: '',
      selectedDongList: [],
      cites: [
        { code: '01', dosi: '서울' },
        { code: '02', dosi: '대전' },
        { code: '03', dosi: '대구' }
      ],
      dongs: [
        { code: '01', dongCode: '01', dongName: '서울1동' },
        { code: '01', dongCode: '03', dongName: '서울2동' },
        { code: '01', dongCode: '03', dongName: '서울3동' },
        { code: '02', dongCode: '01', dongName: '대전1동' },
        { code: '02', dongCode: '02', dongName: '대전2동' },
        { code: '03', dongCode: '01', dongName: '대구1동' },
        { code: '03', dongCode: '02', dongName: '대구2동' }
      ]
    }
  },
  methods: {
    changeCity(event) {
      console.log(event.target.tagName)
      this.selectedDongList = this.dongs.filter(
        (d) => d.code === this.selectedCity
      )

      console.log(
        this.selectedCity,
        this.dongs.filter((d) => d.code === this.selectedCity)
      )
    }
  }
}
</script>
