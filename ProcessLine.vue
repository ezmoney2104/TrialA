<template>
  <v-container fluid>
    <v-row><common-label :item="productionLineTitle" /></v-row>
    <v-row><common-table :item-table="TABLE_PROPERTIES"></common-table></v-row>
  </v-container>
</template>

<script>
import { PRODUCTION_LINE_LABEL } from '@/common/recipe/rLabels'
import CommonLabel from '@/components/common/CommonLabel.vue'
import CommonTable from '@/components/common/CommonTable.vue'
import { PROUDUCT_LINE_TABLE } from '@/common/recipe/rTables'

export default {
  name: 'ProcessLine',
  components: {
    CommonLabel,
    CommonTable,
  },
  data() {
    return {
      TABLE_PROPERTIES: { ...PROUDUCT_LINE_TABLE },
      productionLineTitle: PRODUCTION_LINE_LABEL,
    }
  },
}
</script>
