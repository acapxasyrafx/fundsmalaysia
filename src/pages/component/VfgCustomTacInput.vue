  
<template>
  <div class="width">
    <!-- {{ schema.dataValue }} -->
    <label>
      <span class="color" @click="requestTac">
        {{ schema.labels }}
      </span>
    </label>
    <br />
    <input
      type="text"
      v-model="value"
      :placeholder="schema.placeholder"
      class="form-control form-control-md"
    />
  </div>
</template>
<script>
import { abstractField } from "vue-form-generator";
import * as servicesModule0 from "../../app/module0/dayat";
export default {
  mixins: [abstractField],
  methods: {
    async requestTac() {
      alert(this.schema.values);
      var data = {
        phoneNo: "601" + this.model.phoneNo
      };
      const response = await servicesModule0.getTAC(data);
    }
  },

  data() {}
};
</script>
<style lang="scss">
.color {
  color: red;
}

.width {
  width: 175%;
}
</style>