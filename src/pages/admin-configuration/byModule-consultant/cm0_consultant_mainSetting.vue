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

            <h5><i class="fa fa-bank"></i>&nbsp;&nbsp; <b>Consultant</b></h5>
            <hr>

            <div class="ml-5">
              <!-- 1 -->
              <div>
                <span>Qualification</span>
                <button v-if="visibleQualification == false" v-b-toggle.collapse-1 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleQualification == true" v-b-toggle.collapse-1 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse v-model="visibleQualification" class="mt-4" id="collapse-1">
                  <b-card style="background-color: #eeeeee;">

                    <div class="row">
                      <div class="ml-4 col-md-5">
                        <span class="col mt-2 description">Qualification</span>
                        <input type="text" placeholder="Enter Qualification " class=" float-right col-6 form-control form-control-md"/>
                      </div>
                      <div class="mt-1 col-md-2">
                        <button type="submit" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; save</button>
                      </div>
                      <br>
                    </div>

                    <br><br>
                    <card>
                      <div class="row">
                        <div class="ml-5 col-md-11">
                          <b-table
                            hover
                            :items="items1"
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
              <!-- 2 -->
              <div>
                <span>Designation for Exemption </span>
                <button v-if="visibleDesignation == false" v-b-toggle.collapse-2 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleDesignation == true" v-b-toggle.collapse-2 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse class="mt-4" id="collapse-2" v-model="visibleDesignation">
                  <b-card style="background-color: #eeeeee;">

                    <div class="row">
                      <div class="ml-4 col-md-5">
                        <span class="col mt-2 description">Designation</span>
                        <input type="text" placeholder="Enter Designation " class=" float-right col-6 form-control form-control-md"/>
                      </div>
                      <div class="mt-1 col-md-2">
                        <button type="submit" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; save</button>
                      </div>
                      <br>
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
              <!-- 3 -->
              <div>
                <span>Appeal</span>
                <toggle-button class="float-right" :value="true" :labels="{checked: 'ON', uncheked: 'What now?'}"  />
                <b-collapse class="mt-4" id="collapse-4" v-model="visibleAppeal">
                  <b-card style="background-color: #eeeeee;">

                    <!-- <toggle-button :value="true" :labels="{checked: 'ON', uncheked: 'What now?'}"  />-->
                    <div class="row">
                      <div class="ml-4 col-md-5">
                        <span class="col mt-2 description">Days</span>
                        <input type="text" placeholder="Enter Days " class=" float-right col-6 form-control form-control-md"/>
                      </div>
                      <div class="mt-1 col-md-2">
                        <button type="submit" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; save</button>
                      </div>
                      <br>
                    </div>
                    <br><br>

                  </b-card>
                </b-collapse>
                <hr>
              </div>
              <!-- 5 -->
              <div>
                <span>Consultant Type</span>
                <button v-if="visibleConsultantType == false" v-b-toggle.collapse-5 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleConsultantType == true" v-b-toggle.collapse-5 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse v-model="visibleConsultantType" class="mt-4" id="collapse-5">
                  <b-card style="background-color: #eeeeee;">

                    <div class="row">
                      <div class="ml-1 col-md-10">
                        <span class="col mt-2 description">Consultant Type</span>
                        <input type="text" placeholder="Enter Consultant Type" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                    </div>
                    <br>
                    <div class="row">
                      <div class="ml-1 col-md-10">
                        <span class="col mt-2 description">Distributor Dependency</span>
                        <div class=" ml-4 col-md-9">
                          <div class="row">
                            <div class="col-4" v-for="(item, index) in compType" :key="index">
                              <div class="row mb-2">
                                <base-checkbox
                                  class="col-2"
                                  v-model="item.selected"
                                  disabled="true"
                                ></base-checkbox>
                                <span class="col mt-2 description">
                                  {{item.name}}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
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
                            :items="items5"
                            :fields="fields5"
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
              <!-- 7 -->
              <div>
                <span>Bulk Upload for Renewal</span>
                <toggle-button class="float-right" :value="true" :labels="{checked: 'ON', uncheked: 'What now?'}"  />
                <b-collapse class="mt-4" id="collapse-7" v-model="visibleBulkUpload">
                  <b-card style="background-color: #eeeeee;">

                    <div class="row">
                      <div class="ml-4 col-md-5">
                        <span class="col mt-2 description">Type of Structure</span>
                        <input type="text" placeholder="Enter Type " class=" float-right col-6 form-control form-control-md"/>
                      </div>
                      <div class="mt-1 col-md-2">
                        <button type="submit" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; save</button>
                      </div>
                      <br>
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
              <!-- 8 -->
              <div>
                <span>Bankruptcy Check (Day)</span>
                <toggle-button class="float-right" :value="true" :labels="{checked: 'ON', uncheked: 'What now?'}"  />
                <b-collapse id="collapse-8" style="background-color: #eeeeee;" class="mt-4" v-model="visibleBankruptcyCheck">
                  <b-card style="background-color: #eeeeee;">
                    <!-- <div class="row">
                           <div class="ml-4 col-md-5">
                       <toggle-button class="float-right"  :value="true" :labels="{checked: 'ON', uncheked: 'What now?'}"  />
                           </div>
                       </div> -->
                    <div class="row">
                      <div class="ml-4 col-md-5">
                        <span class="col mt-2 description">Days</span>
                        <input type="text" placeholder="Enter Type " class=" float-right col-6 form-control form-control-md"/>
                      </div>
                      <div class="mt-1 col-md-2">
                        <button type="submit" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; save</button>
                      </div>
                      <br>
                    </div>
                    <br><br>

                  </b-card>
                </b-collapse>
                <hr>
              </div>
              <!-- 9 -->
              <div>
                <span>Examination Appeal</span>
                <toggle-button class="float-right" :value="true" :labels="{checked: 'ON', uncheked: 'What now?'}"  />
                <b-collapse v-model="visibleExaminationAppeal" class="mt-4" id="collapse-9">
                  <b-card style="background-color: #eeeeee;">
                    <div class="row">
                      <div class="ml-4 col-md-5">
                        <span class="col mt-2 description">Days</span>
                        <input type="text" placeholder="Enter Days " class=" float-right col-6 form-control form-control-md"/>
                      </div>
                      <div class="mt-1 col-md-2">
                        <button type="submit" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; save</button>
                      </div>
                      <br>
                    </div>
                    <br><br>
                  </b-card>
                </b-collapse>
                <hr>
              </div>
              <!-- 10 -->
              <div>
                <span>PRS Familiarization Program</span>
                <toggle-button class="float-right" :value="true" :labels="{checked: 'ON', uncheked: 'What now?'}"  />
                <b-collapse class="mt-4" id="collapse-10" v-model="visiblePRSFamiliarization">
                  <b-card style="background-color: #eeeeee;">

                    <div class="row">
                      <div class="ml-4 col-md-5">
                        <span class="col mt-2 description">Years</span>
                        <input type="text" placeholder="Enter years " class=" float-right col-6 form-control form-control-md"/>
                      </div>
                      <div class="mt-1 col-md-2">
                        <button type="submit" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; save</button>
                      </div>
                      <br>
                    </div>
                    <br><br>
                  </b-card>
                </b-collapse>
                <hr>
              </div>
              <!-- 11 -->
              <div>
                <span>Active Ceilli License</span>
                <toggle-button class="float-right" :value="true" :labels="{checked: 'ON', uncheked: 'What now?'}"  />
                <b-collapse class="mt-4" id="collapse-11" v-model="visibleCeilliLicense">
                  <b-card style="background-color: #eeeeee;">

                    <div class="row">
                      <div class="ml-4 col-md-5">
                        <span class="col mt-2 description">Years</span>
                        <input type="text" placeholder="Enter years " class=" float-right col-6 form-control form-control-md"/>
                      </div>
                      <div class="mt-1 col-md-2">
                        <button type="submit" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; save</button>
                      </div>
                      <br>
                    </div>
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
  // DATA SCHEMA
  data () {
    return {
      visibleQualification: false,
      visibleDesignation: false,
      visibleAppeal: false,
      visibleConsultantType: false,
      visibleBulkUpload: false,
      visibleBankruptcyCheck: false,
      visibleExaminationAppeal: false,
      visiblePRSFamiliarization: false,
      visibleCeilliLicense: false,

      items: [
        { no: '1', list: 'Direct' },
        { no: '2', list: 'Nominee' },

      ],

      fields: [
        // A virtual column that doesn't exist in items
        { key: 'index', label: 'No' },
        { key: 'list', label: 'List', sortable: false },
        { key: 'actions', label: 'Actions', sortable: false },

      ],

      items1: [
        { no: '1', list: 'SPM' },
        { no: '2', list: 'SPMV' },
        { no: '3', list: 'STPM' },

      ],

      fields2: [
        // A virtual column that doesn't exist in items
        { key: 'index', label: 'No' },
        { key: 'list', label: 'List', sortable: false },
        { key: 'actions', label: 'Actions', sortable: false },

      ],

      items2: [
        { no: '1', list: 'CEO' },
        { no: '2', list: 'AR' },
        { no: '2', list: 'AAR' },

      ],
      fields3: [
        // A virtual column that doesn't exist in items
        { key: 'index', label: 'No' },
        { key: 'type', label: 'Distributor Type', sortable: false },
        { key: 'variation', label: 'Variation Type', sortable: false },
        { key: 'approach', label: 'Marketing Approach', sortable: false },
        { key: 'structure', label: 'Structure Type', sortable: false },
        { key: 'actions', label: 'Actions', sortable: false },

      ],

      items3: [
        { no: '1', type: 'UTMC', variation: 'PRP | IUTA | IPRA', approach: 'Direct', structure: 'Single-Tier' },
        { no: '2', type: 'PRP', variation: 'UTMC | IUTA | IPRA', approach: 'Direct', structure: 'Single-Tier' },
        { no: '3', type: 'IUTA', variation: 'UTMC | PRP | IPRA', approach: 'Direct', structure: 'Single-Tier' },
        { no: '4', type: 'CUTA', variation: 'CPRA', approach: 'Dominee', structure: 'Multi-Tier' },
        { no: '5', type: 'PRP', variation: 'CUTA', approach: 'Dominee', structure: 'Multi-Tier' },

      ],

      fields5: [
        // A virtual column that doesn't exist in items
        { key: 'index', label: 'No' },
        { key: 'type', label: 'Consultant Type', sortable: false },
        { key: 'Dependency', label: 'Distributor Dependency', sortable: false },
        { key: 'actions', label: 'Actions', sortable: false },

      ],

      items5: [
        { no: '1', type: 'UTS', Dependency: 'IUTA | IPRA' },
        { no: '2', type: 'PRS', Dependency: 'PRP' },

      ],

      fields6: [
        // A virtual column that doesn't exist in items
        { key: 'index', label: 'No' },
        { key: 'list', label: 'List', sortable: false },
        { key: 'actions', label: 'Actions', sortable: false },

      ],

      items6: [
        { no: '1', list: 'UTC' },
        { no: '2', list: 'PRP' },

      ],

      fields10: [
        // A virtual column that doesn't exist in items
        { key: 'index', label: 'No' },
        { key: 'list', label: 'List', sortable: false },
        { key: 'actions', label: 'Actions', sortable: false },

      ],

      currentPage: 1,
      perPage: 5,
      filter: null,

      compType: [
        { id: '1', name: 'UTMC' },
        { id: '2', name: 'PRP' },
        { id: '3', name: 'IUTA' },
        { id: '4', name: 'IPRA' },
        { id: '5', name: 'CUTA' },
        { id: '6', name: 'CPRA' },
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
