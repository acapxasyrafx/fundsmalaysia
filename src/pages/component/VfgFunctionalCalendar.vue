/* eslint-disable */
<template>
  <div class="width">
    <label>{{ schema.labels }} </label>
    <div>
      <datepicker
        :placeholder="schema.placeholder"
        :format="schema.format"
        input-class="form-control bgcolor"
        v-model="value"
        :typeable="schema.typeable"
        name="uniquename"
      ></datepicker>
    </div>
  </div>
</template>
<script>
import { abstractField } from 'vue-form-generator'
export default {
  mixins: [abstractField],
}
</script>
<style lang="scss">
.width {
  width: 175%;
}

.color {
  color: red;
}

.bgcolor {
  background-color: white !important;
}
</style>
/* eslint-disable */
