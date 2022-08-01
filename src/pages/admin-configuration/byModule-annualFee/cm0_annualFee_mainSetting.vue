<template>
  <div class="content">
    <div class="container-fluid">
      <div class="card-body">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <h4 slot="header">Settings by Module</h4>
          </div>

          <!-- 1 -->
          <card class=" ml-4 col-lg-10">

            <h5><i class="fa fa-bank"></i>&nbsp;&nbsp; <b>Annual Fee</b></h5>
            <hr>

            <div class="ml-5">
              <div>
                <span>Freeze Period</span>
                <button v-if="visibleLogin == false" v-b-toggle.collapse-1 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleLogin == true" v-b-toggle.collapse-1 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse v-model="visibleLogin" class="mt-4" id="collapse-1">
                  <b-card style="background-color: #eeeeee;">

                    <div class="row">
                      <div class="ml-4 col-md-5">
                        <span class="col mt-2 description">Date</span>
                        <input type="text" placeholder="Enter Date " class=" float-right col-6 form-control form-control-md"/>
                      </div>
                      <div class="mt-1 col-md-2">
                        <button type="submit" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; save</button>
                      </div>
                      <br>
                    </div>
                  </b-card>
                </b-collapse>
                <hr>
              </div>

            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import 'vue-form-generator/dist/vfg.css'

export default {
  // DATA SCHEMA
  data () {
    return {
      visibleLogin: false,
      visibleBlockDuration: false,
      visibleSessionTimeout: false,

      fields: [
        // A virtual column that doesn't exist in items
        { key: 'index', label: 'No' },
        { key: 'list', label: 'List', sortable: false },
        { key: 'actions', label: 'Actions', sortable: false },

      ],

      items: [
        { no: '1', list: 'UTF' },
        { no: '2', list: 'PRF' },

      ],

      currentPage: 1,
      perPage: 5,
      filter: null,

    }
  },
  methods: {
    // settingPageMaintenance(){
    //     this.$router.push("");

    // }
  },
}
</script>
