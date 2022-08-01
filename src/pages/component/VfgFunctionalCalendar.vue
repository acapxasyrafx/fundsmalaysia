/* eslint-disable */
<template>
  <!-- <div class="row col-md-12"> -->
  <!-- <br />
    <label>{{ schema.labels }} <span class="color">*</span></label>
   <datepicker
        placeholder="dd-MM-yyyy"
        :format="schema.format"
        input-class="form-control form-control-md bgcolor"
        v-model="value"
        :typeable="schema.typeable"
        name="uniquename"
      ></datepicker>
  </div> -->
  <div class="width">
    <!-- <div> -->
    <label>{{ schema.labels }} <span class="color">*</span></label>
    <!-- </div> -->
    <div>
      <datepicker
        placeholder="dd-MM-yyyy"
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
import { abstractField } from "vue-form-generator";
export default {
  mixins: [abstractField]
  //   data() {
  //         return {

  //         }
  //     },
};
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
