<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      @on-cell-click="onCellClick"
      :search-options="{
        enabled: true,
        searchFn: myFunc
      }"
      :select-options="{ enabled: true }"
      :pagination-options="{
        enabled: true,
        perPage: 2
      }"
    >
      >
      <div slot="table-actions">
        This will show up on the top right of the table.
      </div>
    </vue-good-table>
  </div>
</template>

<script>
export default {
  methods: {
    rowStyleClassFn(row) {
      return row.age > 18 ? 'green' : 'red'
    },
    onCellClick(params) {
      // params.row - row object
      // params.column - column object
      // params.rowIndex - index of this row on the current page.
      // params.event - click event
      console.log(params)
      alert(params.row.age)
    },
    myFunc(row, col, cellValue, searchTerm) {
      return cellValue === 'my value'
    }
  },
  name: 'my-component',
  data() {
    return {
      columns: [
        {
          label: 'Name',
          field: 'name'
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number'
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy'
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage'
        }
      ],
      rows: [
        { id: 1, name: 'John', age: 20, createdAt: '', score: 0.03343 },
        {
          id: 2,
          name: 'Jane',
          age: 24,
          createdAt: '2011-10-31',
          score: 0.03343
        },
        {
          id: 3,
          name: 'Susan',
          age: 16,
          createdAt: '2011-10-30',
          score: 0.03343
        },
        {
          id: 4,
          name: 'Chris',
          age: 55,
          createdAt: '2011-10-11',
          score: 0.03343
        },
        {
          id: 5,
          name: 'Dan',
          age: 40,
          createdAt: '2011-10-21',
          score: 0.03343
        },
        {
          id: 6,
          name: 'John',
          age: 20,
          createdAt: '2011-10-31',
          score: 0.03343
        }
      ]
    }
  }
}
</script>

<style>
.green {
  background-color: green;
}

.red {
  background-color: red;
}
</style>
