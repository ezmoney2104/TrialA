<template>
  <v-table class="custom-table">
    <thead>
      <tr>
        <th
          v-show="itemTable.TABLE_HEADER.length != 0"
          v-for="column in itemTable.TABLE_HEADER"
          :key="column.id"
          v-bind="column.directives"
          id="custom-header"
        >
          <common-label :item="column" class="text-h5 font-weight-bold"></common-label>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td
          v-show="itemTable.TABLE_ROW.length != 0"
          v-for="column in itemTable.TABLE_ROW"
          :key="column"
          v-bind="column.directives"
          id="custom-row"
        >
          <common-label :item="column" class="text-subtitle-1 font-weight-rgular"></common-label>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import CommonLabel from './CommonLabel.vue'

export default {
  components: { CommonLabel },
  props: {
    itemTable: {
      type: Array,
      required: true,
    },
  },
  name: 'CommonTable',
}
</script>

<style scoped>
.custom-table th {
  border: 1px solid #ffffff;
  /* font-size: 24px; */
  color: #ffffff;
  background-color: #2e2e2e;
  width: 30rem;
}

.custom-table td {
  color: #ffffff;
  background-color: #3a3a3a;
  border: 1px solid #ffffff;
}

#custom-header {
  height: 2.9rem;
  text-align: center;

  font-weight: bolder;
  border-color: white;
}

#custom-row {
  height: 2.5rem;
  text-align: center;
  font-weight: bolder;
  border-color: white;
}
</style>
