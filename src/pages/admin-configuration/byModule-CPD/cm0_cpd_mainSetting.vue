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

            <h5><i class="fa fa-bank"></i>&nbsp;&nbsp; <b>Continuing Professional Development (CPD)</b></h5>
            <hr>

            <div class="ml-5">
              <div>
                <span>5 Modules CPD Calculation</span>
                <button v-if="visibleLogin == false" v-b-toggle.collapse-1 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleLogin == true" v-b-toggle.collapse-1 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse v-model="visibleLogin" class="mt-4" id="collapse-1">
                  <b-card style="background-color: #eeeeee;">
                    <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-2 description">Module Name</span>
                        <input type="text" placeholder="Enter Module Name" class=" float-right col-10 form-control form-control-md"/>
                      </div>
                    </div>
                    <br>
                    <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">CPD Point</span>
                        <input type="text" placeholder="Enter Maximum Point" class=" float-right col-5 form-control form-control-md"/>
                        <input type="text" placeholder="Enter Minimum Point" class=" float-right col-5 form-control form-control-md"/>

                      </div>
                    </div>
                    <br><br>
                    <div class="row">
                      <div class="ml-3 col-md-2">
                        <button type="submit" class="float-left btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; save</button>
                      </div>
                    </div>

                    <br><br>
                    <card>
                      <div class="row">
                        <div class="ml-5 col-md-11">
                          <b-table
                            hover
                            :items="items"
                            :fields="fields"
                            :current-page="currentPage"
                            :per-page="perPage"
                            :filter="filter"
                            responsive="md">
                            <!-- A virtual column -->
                            <template #cell(index)="data">
                              {{ data.index + 1 }}
                            </template>
                            <template #cell()="data">
                              <span class="description">{{ data.value }}</span>
                            </template>
                            <template #cell(actions)="">
                              <h4 class="mt-2">
                                <span class="badge badge-primary mr-1"><i class="fa fa-edit"></i></span>
                              </h4>
                              <h4 class="mt-2">
                                <span class="badge badge-danger mr-1"><i class="fa fa-trash"></i ></span>
                              </h4>
                            </template>

                          </b-table>
                        </div>
                        <div class="row col ml-2 mt-2">
                          <b-pagination
                            size="md"
                            :total-rows="this.items.length"
                            :per-page="perPage"
                            v-model="currentPage"/>
                          <b-form-fieldset horizontal class="col-1">
                            <b-form-select
                              :options="[
                                { text: 5, value: 5 },
                                { text: 10, value: 10 },
                                { text: 15, value: 15 }
                              ]"
                              v-model="perPage"
                            >
                            </b-form-select>
                          </b-form-fieldset>
                        </div>
                      </div>
                    </card>
                    <br><br>

                  </b-card>
                </b-collapse>
                <hr>
              </div>
              <div>
                <span>CPD Program Hours Calculation</span>
                <button v-if="visibleBlockDuration == false" v-b-toggle.collapse-2 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleBlockDuration == true" v-b-toggle.collapse-2 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse class="mt-4" id="collapse-2" v-model="visibleBlockDuration">
                  <b-card style="background-color: #eeeeee;">

                    <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-2 description">Module Name</span>
                        <input type="text" placeholder="Enter Module Name" class=" float-right col-10 form-control form-control-md"/>
                      </div>
                    </div>
                    <br>
                    <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-3 description">CPD Point</span>
                        <input type="text" placeholder="Enter Maximum Point" class=" float-right col-5 form-control form-control-md"/>
                        <input type="text" placeholder="Enter Minimum Point" class=" float-right col-5 form-control form-control-md"/>

                      </div>
                    </div>
                    <br><br>
                    <div class="row">
                      <div class="ml-3 col-md-2">
                        <button type="submit" class="float-left btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; save</button>
                      </div>
                    </div>
                    <br><br>
                    <card>
                      <div class="row">
                        <div class="ml-5 col-md-11">
                          <b-table
                            hover
                            :items="items2"
                            :fields="fields2"
                            :current-page="currentPage"
                            :per-page="perPage"
                            :filter="filter"
                            responsive="md">
                            <!-- A virtual column -->
                            <template #cell(index)="data">
                              {{ data.index + 1 }}
                            </template>
                            <template #cell()="data">
                              <span class="description">{{ data.value }}</span>
                            </template>
                            <template #cell(actions)="">
                              <h4 class="mt-2">
                                <span class="badge badge-primary mr-1"><i class="fa fa-edit"></i></span>
                              </h4>
                              <h4 class="mt-2">
                                <span class="badge badge-danger mr-1"><i class="fa fa-trash"></i ></span>
                              </h4>
                            </template>

                          </b-table>
                        </div>
                        <div class="row col ml-2 mt-2">
                          <b-pagination
                            size="md"
                            :total-rows="this.items.length"
                            :per-page="perPage"
                            v-model="currentPage"/>
                          <b-form-fieldset horizontal class="col-1">
                            <b-form-select
                              :options="[
                                { text: 5, value: 5 },
                                { text: 10, value: 10 },
                                { text: 15, value: 15 }
                              ]"
                              v-model="perPage"
                            >
                            </b-form-select>
                          </b-form-fieldset>
                        </div>
                      </div>
                    </card>
                    <br><br>

                  </b-card>
                </b-collapse>
                <hr>
              </div>
              <div>
                <span>Renewal CPD Point Calculation</span>
                <button v-if="visibleSessionTimeout == false" v-b-toggle.collapse-3 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleSessionTimeout == true" v-b-toggle.collapse-3 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse id="collapse-3" style="background-color: #eeeeee;" class="mt-4" v-model="visibleSessionTimeout">
                  <b-card style="background-color: #eeeeee;">

                    <div class="row">
                      <div class="ml-1 col-md-10">
                        <span class="col mt-2 description">Joint Month</span>
                        <input type="text" placeholder="Enter month" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                    </div>
                    <br>
                    <div class="row">
                      <div class="ml-1 col-md-10">
                        <span class="col mt-2 description">CPD Calculation</span>
                        <input type="text" placeholder="Enter CPD Calculation" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                    </div>
                    <br>
                    <div class="row">
                      <div class="ml-1 col-md-10">
                        <span class="col mt-2 description">CPD Requirement</span>
                        <input type="text" placeholder="Enter CPD Requirement" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                    </div>

                    <br><br>
                    <div class="row">
                      <div class="ml-3 col-md-2">
                        <button type="submit" class="float-left btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; save</button>
                      </div>
                    </div>
                    <br><br>
                    <card>
                      <div class="row">
                        <div class="ml-5 col-md-11">
                          <b-table
                            hover
                            :items="items3"
                            :fields="fields3"
                            :current-page="currentPage"
                            :per-page="perPage"
                            :filter="filter"
                            responsive="md">
                            <!-- A virtual column -->
                            <template #cell(index)="data">
                              {{ data.index + 1 }}
                            </template>
                            <template #cell()="data">
                              <span class="description">{{ data.value }}</span>
                            </template>
                            <template #cell(actions)="">
                              <h4 class="mt-2">
                                <span class="badge badge-primary mr-1"><i class="fa fa-edit"></i></span>
                              </h4>
                              <h4 class="mt-2">
                                <span class="badge badge-danger mr-1"><i class="fa fa-trash"></i ></span>
                              </h4>
                            </template>

                          </b-table>
                        </div>
                        <div class="row col ml-2 mt-2">
                          <b-pagination
                            size="md"
                            :total-rows="this.items.length"
                            :per-page="perPage"
                            v-model="currentPage"/>
                          <b-form-fieldset horizontal class="col-1">
                            <b-form-select
                              :options="[
                                { text: 5, value: 5 },
                                { text: 10, value: 10 },
                                { text: 15, value: 15 }
                              ]"
                              v-model="perPage"
                            >
                            </b-form-select>
                          </b-form-fieldset>
                        </div>
                      </div>
                    </card>
                    <br><br>

                  </b-card>
                </b-collapse>
                <hr>
              </div>
              <div>
                <span>Waiver Reason</span>
                <button v-if="visibleBlockDuration2 == false" v-b-toggle.collapse-4 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleBlockDuration2 == true" v-b-toggle.collapse-4 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse class="mt-4" id="collapse-4" v-model="visibleBlockDuration2">
                  <b-card style="background-color: #eeeeee;">

                    <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-2 description">Reason</span>
                        <input type="text" placeholder="Enter reason " class=" float-right col-10 form-control form-control-md"/>
                      </div>
                    </div>
                    <br><br>
                    <div class="row">
                      <div class="ml-3 col-md-2">
                        <button type="submit" class="float-left btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; save</button>
                      </div>
                    </div>
                    <br><br>
                    <card>
                      <div class="row">
                        <div class="ml-5 col-md-11">
                          <b-table
                            hover
                            :items="items4"
                            :fields="fields4"
                            :current-page="currentPage"
                            :per-page="perPage"
                            :filter="filter"
                            responsive="md">
                            <!-- A virtual column -->
                            <template #cell(index)="data">
                              {{ data.index + 1 }}
                            </template>
                            <template #cell()="data">
                              <span class="description">{{ data.value }}</span>
                            </template>
                            <template #cell(actions)="">
                              <h4 class="mt-2">
                                <span class="badge badge-primary mr-1"><i class="fa fa-edit"></i></span>
                              </h4>
                              <h4 class="mt-2">
                                <span class="badge badge-danger mr-1"><i class="fa fa-trash"></i ></span>
                              </h4>
                            </template>

                          </b-table>
                        </div>
                        <div class="row col ml-2 mt-2">
                          <b-pagination
                            size="md"
                            :total-rows="this.items4.length"
                            :per-page="perPage"
                            v-model="currentPage"/>
                          <b-form-fieldset horizontal class="col-1">
                            <b-form-select
                              :options="[
                                { text: 5, value: 5 },
                                { text: 10, value: 10 },
                                { text: 15, value: 15 }
                              ]"
                              v-model="perPage"
                            >
                            </b-form-select>
                          </b-form-fieldset>
                        </div>
                      </div>
                    </card>
                    <br><br>

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
  components: { },
  // DATA SCHEMA
  data () {
    return {
      visibleLogin: false,
      visibleBlockDuration: false,
      visibleBlockDuration2: false,
      visibleSessionTimeout: false,

      fields: [
        // A virtual column that doesn't exist in items
        { key: 'index', label: 'No' },
        { key: 'module', label: 'Module', sortable: false },
        { key: 'minimum', label: 'CPD Minimum', sortable: false },
        { key: 'maximum', label: 'CPD Maximum', sortable: false },
        { key: 'actions', label: 'Actions', sortable: false },

      ],

      items: [
        { no: '1', module: 'Writing', minimum: '4', maximum: '8' },
        { no: '2', module: 'Reading', minimum: '4', maximum: '4' },
        { no: '3', module: 'Teaching', minimum: '2', maximum: '8' },
        { no: '4', module: 'Qualification', minimum: '16', maximum: '16' },
        { no: '5', module: 'FPAM', minimum: '5', maximum: '16' },

      ],
      fields2: [
        { key: 'index', label: 'No' },
        { key: 'module', label: 'Module', sortable: false },
        { key: 'minimum', label: 'CPD Minimum', sortable: false },
        { key: 'maximum', label: 'CPD Maximum', sortable: false },
        { key: 'actions', label: 'Actions', sortable: false },

      ],

      items2: [
        { no: '1', module: 'e-Learning', minimum: '1', maximum: '8' },
        { no: '2', module: 'Normal Training', minimum: '1', maximum: '8' },

      ],
      fields3: [
        { key: 'index', label: 'No' },
        { key: 'month', label: 'Module', sortable: false },
        { key: 'calculation', label: 'CPD Calculation', sortable: false },
        { key: 'requirement', label: 'CPD Requirement', sortable: false },
        { key: 'actions', label: 'Actions', sortable: false },

      ],

      items3: [
        { no: '1', month: '1', calculation: '16.00', requirement: '16' },
        { no: '2', month: '2', calculation: '14.67', requirement: '15' },
        { no: '3', month: '3', calculation: '13.33', requirement: '13' },
        { no: '4', month: '4', calculation: '12.00', requirement: '12' },
        { no: '5', month: '5', calculation: '10.67', requirement: '11' },
        { no: '6', month: '6', calculation: '9.33', requirement: '9' },
        { no: '7', month: '7', calculation: '8.00', requirement: '8' },
        { no: '8', month: '8', calculation: '6.67', requirement: '7' },
        { no: '9', month: '9', calculation: '5.33', requirement: '5' },
        { no: '10', month: '10', calculation: '4.00', requirement: '4' },
        { no: '11', month: '11', calculation: '2.67', requirement: '3' },
        { no: '12', month: '12', calculation: '1.33', requirement: '1' },
      ],
      fields4: [
        // A virtual column that doesn't exist in items
        { key: 'index', label: 'No' },
        { key: 'reason', label: 'Reason', sortable: false },
        { key: 'actions', label: 'Actions', sortable: false },

      ],

      items4: [
        { no: '1', reason: 'Tumor' },
        { no: '2', reason: 'Cancer' },
      ],

      currentPage: 1,
      perPage: 5,
      filter: null,

      compType: [
        { id: '1', name: 'UTMC' },
        { id: '2', name: 'IUTA' },
        { id: '3', name: 'CUTA' },
        { id: '4', name: 'IUTA' },
        { id: '5', name: 'CPRA' },
        { id: '6', name: 'PRP' },
      ],
      approachType: [
        { id: '1', name: 'Direct' },
        { id: '2', name: 'Dominee' },
      ],
      structureType: [
        { id: '1', name: 'Single-Tier' },
        { id: '2', name: 'Multi-Tier' },
      ],

    }
  },
  methods: {
    // settingPageMaintenance(){
    //     this.$router.push("");

    // }
  },
}
</script>
