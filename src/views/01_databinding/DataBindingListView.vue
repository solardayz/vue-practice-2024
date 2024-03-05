<template>
  <div>
    <div>
      <select name="" id="">
        <option value=""></option>
        <option :value="city.code" :key="city.code" v-for="city in cities">
          {{ city.title }}
        </option>
      </select>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>제품번호</th>
            <th>제품명</th>
            <th>제품가격</th>
            <th>제품수량</th>
            <th>합계</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="drink in drinkList" :key="drink.drinkId">
            <td>{{ drink.drinkId }}</td>
            <td>{{ drink.drinkName }}</td>
            <td>{{ drink.price }}</td>
            <td><input type="number" name="" id="" v-model="drink.qty" /></td>
            <td>{{ drink.qty * drink.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cities: [
        { title: '서울', code: '02' },
        { title: '부산', code: '051' },
        { title: '제주', code: '064' }
      ],
      drinkList: [
        { drinkId: 1, drinkName: '코카콜라', price: 700, qty: 1 },
        { drinkId: 2, drinkName: '닥터페퍼', price: 800, qty: 2 },
        { drinkId: 3, drinkName: '칠성사이다', price: 500, qty: 4 },
        { drinkId: 4, drinkName: '보리차', price: 400, qty: 5 },
        { drinkId: 5, drinkName: '생수', price: 900, qty: 6 },
        { drinkId: 6, drinkName: '발사믹소스', price: 700, qty: 7 },
        { drinkId: 7, drinkName: '야쿠르트', price: 1500, qty: 8 }
      ]
    }
  }
}
</script>
