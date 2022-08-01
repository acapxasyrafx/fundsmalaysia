/* eslint-disable */
<template>
  <div class="">
<div style="">
        <va-input
          :value="term"
          :placeholder="$t('Search')"
          @input="search"
          removable
        >
          <va-icon name="fa fa-search" slot="prepend" />
        </va-input>
      </div>
  </div>
</template>
<script>
import { abstractField } from 'vue-form-generator'
export default {
  mixins: [abstractField]
}
</script>
<style lang="scss">
.color {
  color: red;
}

.bgcolor {
  background-color: white !important;
}
</style>
/* eslint-disable */
