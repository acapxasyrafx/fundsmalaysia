<template>
  <!-- <vue-json-to-csv :json-data="items" :csv-title="title" :labels="labels">
    <b-badge v-b-tooltip.hover title="excel" class="mr-1" variant="success">
      <i class="fa fa-file-excel-o"></i>
    </b-badge>
  </vue-json-to-csv> -->
  <download-excel
    class="btn btn-default"
    :header="header"
    :data="json_data"
    :fields="json_fields"
    worksheet="sheet1"
    name="filename.xls"
  >
    Download Excel (you can customize this with html code!)
  </download-excel>
</template>

<script>
export default {
  props: ["json_fields", "json_data", "header"],
  name: "ExcelToCsv",
  methods: {},
  data() {
    return {};
  }
};
</script>
<style>
</style>
