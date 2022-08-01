<template>
  <div class="content">
    <div class="container-fluid">
      <div class="card-body">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <h4 slot="header">Settings by Module</h4>
          </div>
          <vudal name="simpleModalEditFundName" class="widthModal">
            <div class="header">Edit Fund Name<i class="close icon">&times;</i></div>
            <div class="content">
              <vue-form-generator
                :model="model"
                :schema="editFundNameSchema"
                :options="formOptions" />
            </div>
            <div class="actions">
              <button  type="button" class="cancel vudal-btn mr-2 btn btn-danger btn-fill btn-md"><i class="fa fa-times" /> &nbsp; Close </button>
              <button @click="updateFundTypeAPI" type="button" class="cancel vudal-btn mr-2 btn btn-primary btn-fill btn-md"><i class="fa fa-edit" /> &nbsp; Update </button>
            </div>
          </vudal>
          <va-card class=" ml-4 col-lg-10">
            <h5><i class="fa fa-bank"></i>&nbsp;&nbsp; <b>Fund Malaysia</b></h5>
            <hr>
            <div class="ml-5">
              <div>
                <span>Fund Type</span>
                <button v-if="visibleLogin == false" v-b-toggle.collapse-1 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleLogin == true" v-b-toggle.collapse-1 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse id="collapse-1" style="background-color: #eeeeee;" class="mt-4" v-model="visibleLogin">
                  <va-card style="background-color: #eeeeee;">

                    <div class="row">
                      <div class="ml-4 col-md-5">
                        <span class="col mt-2 description">Fund Type Name</span>
                        <input id=fundTypeNameModel type="text" placeholder="Enter Fund Type" class=" float-right col-6 form-control form-control-md"/>
                      </div>
                      <div class="mt-1 col-md-2">
                        <button type="submit" v-on:click="createFundType(model.fundTypeNameModel)" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; save</button>
                      </div>
                      <br>
                    </div>

                    <br><br>b
                    <card class="mt-2">
                      <va-data-table
                        :fields="fundtypeFields"
                        :data="fundtypeFilteredData"
                        :per-page="parseInt(perPage)"
                        clickable>
                        <template slot="no" slot-scope="row">
                          {{ row.rowIndex + 1 }}
                        </template>
                        <template slot="actions" slot-scope="props">
                          <h4 class="mt-2">
                            <span v-b-tooltip.hover title="edit" v-on:click="editFundType(props.rowData)" class="badge badge-primary mr-2">
                              <i class="fa fa-edit"></i></span>
                            <span v-b-tooltip.hover title="delete" v-on:click="deleteFundType(props.rowData)" class="badge badge-danger mr-1">
                              <i class="fa fa-trash"></i></span>
                          </h4>
                        </template>
                      </va-data-table>
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
                    </card>
                    <br><br>
                  </va-card>
                </b-collapse>
                <hr>
              </div>
              <div>
                <span>Sales Charge and Fund Category</span>
                <button v-if="visibleBlockDuration == false" v-b-toggle.collapse-2 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleBlockDuration == true" v-b-toggle.collapse-2 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse class="mt-4" id="collapse-2" v-model="visibleBlockDuration">
                  <b-card style="background-color: #eeeeee;">

                    <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-2 description">Sales Charge(%)</span>
                        <input type="text" placeholder="Enter Range To " class=" float-right col-4 form-control form-control-md"/>
                        <input type="text" placeholder="Enter Range From " class=" float-right col-5 form-control form-control-md"/>
                      </div>
                    </div>
                    <br>
                    <div class="row">
                      <div class="ml-4 col-md-10">
                        <span class="col mt-2 description">Fund Category</span>
                        <input type="text" placeholder="Enter fund category " class=" float-right col-10 form-control form-control-md"/>
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
                          <va-data-table
                            hover
                            :fields="fundcategoryFields"
                            :data="fundcategoryFilteredData"
                            :per-page="parseInt(perPage)"
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

                          </va-data-table>
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
                <span>Asset Group and Fund Group</span>
                <button v-if="visibleSessionTimeout == false" v-b-toggle.collapse-3 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleSessionTimeout == true" v-b-toggle.collapse-3 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse id="collapse-3" style="background-color: #eeeeee;" class="mt-4" v-model="visibleSessionTimeout">
                  <b-card style="background-color: #eeeeee;">

                    <div class="row">
                      <div class="ml-1 col-md-10">
                        <span class="col mt-2 description">Asset Group</span>
                        <input type="text" placeholder="Enter Type" class=" float-right col-8 form-control form-control-md"/>
                      </div>
                    </div>
                    <br>
                    <div class="row">
                      <div class="ml-1 col-md-10">
                        <span class="col mt-2 description">Fund Group</span>
                        <input type="text" placeholder="Enter Fund Group" class=" float-right col-8 form-control form-control-md"/>
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
            </div>
          </va-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import Vudal from 'vudal'
import 'vue-form-generator/dist/vfg.css'
import * as servicesModule0 from '../../../app/module0/acap'

Vue.component(Vudal)
export default {
  mounted () {
    this.getAllFundType()
    this.deleteFundType()
    this.createFundType()
    this.updateFundTypeAPI()

    this.getAllFundCategory()
    this.deleteFundCategory()
    this.createFundCategory()
    this.updateFundCategoryAPI()

    this.getAllFundGroup()
    this.deleteFundGroup()
    this.createFundGroup()
    this.updateFundGroupAPI()
  },
  components: {

  },

  computed: {

    fundtypeFields () {
      return [

        {
          name: '__slot:no',
          title: 'No',

        },
        {
          name: 'FUND_NAME',
          title: 'Fund Type',
        },
        {
          name: '__slot:actions',
          title: 'Action',
          dataClass: 'justify-content-center',
          width: '15%',
        },
      ]
    },

    // eslint-disable-next-line vue/return-in-computed-property
    fundtypeFilteredData () {
      if (!this.term || this.term.length < 1) {
        return this.fundtypelist
      }
    },

    fundtypeFields () {
      return [

        {
          name: '__slot:no',
          title: 'No',

        },
        {
          name: 'FUND_NAME',
          title: 'Fund Type',
        },
        {
          name: '__slot:actions',
          title: 'Action',
          dataClass: 'justify-content-center',
          width: '15%',
        },
      ]
    },

    // eslint-disable-next-line vue/return-in-computed-property
    fundtypeFilteredData () {
      if (!this.term || this.term.length < 1) {
        return this.fundtypelist
      }
    },

    fundtypeFields () {
      return [

        {
          name: '__slot:no',
          title: 'No',

        },
        {
          name: 'FUND_NAME',
          title: 'Fund Type',
        },
        {
          name: '__slot:actions',
          title: 'Action',
          dataClass: 'justify-content-center',
          width: '15%',
        },
      ]
    },

    // eslint-disable-next-line vue/return-in-computed-property
    fundtypeFilteredData () {
      if (!this.term || this.term.length < 1) {
        return this.fundtypelist
      }
    },

  },

  // DATA SCHEMA
  data () {
    return {
      header: '',
      field: [],
      term: null,
      visibleLogin: false,
      visibleBlockDuration: false,
      visibleSessionTimeout: false,
      currentPage: 1,
      perPage: '6',
      perPageOptions: ['4', '6', '10', '20'],
      filter: null,
      fundtypelist: [],

      model: {
        fundtype: '',
        FUND_NAME: '',

        fundtypeSelection: '',
      },

      fields: [
        // A virtual column that doesn't exist in items
        { key: 'index', label: 'No' },
        { key: 'FUND_NAME', label: 'List', sortable: false },
        { key: 'actions', label: 'Actions', sortable: false },

        {
          type: 'input',
          inputType: 'Text',
          model: 'FUND_NAME',
          label: 'Fund Name',
          placeholder: 'Enter fund name',
          required: true,
          styleClasses: 'col-md-12',
        },

      ],

      items: [
        { no: '1', list: 'UTF' },
        { no: '2', list: 'PRF' },

      ],
      fields2: [
        // A virtual column that doesn't exist in items
        { key: 'index', label: 'No' },
        { key: 'from', label: 'Sales Charge (%) From', sortable: false },
        { key: 'to', label: 'Sales Charge(%) To', sortable: false },
        { key: 'category', label: 'Fund Category', sortable: false },
        { key: 'actions', label: 'Actions', sortable: false },

      ],

      items2: [
        { no: '1', from: '0', to: '3', category: 'Normal Load' },
        { no: '2', from: '4', to: '7', category: 'Load' },

      ],
      fields3: [
        // A virtual column that doesn't exist in items
        { key: 'index', label: 'No' },
        { key: 'asset', label: 'Asset Group', sortable: false },
        { key: 'group', label: 'Fund Group', sortable: false },
        { key: 'actions', label: 'Actions', sortable: false },

      ],

      items3: [
        { no: '1', asset: 'Bond', group: 'A' },
        { no: '1', asset: 'Equity', group: 'B' },
      ],
    }
  },
  editFundNameSchema: {
    groups: [
      {
        styleClasses: 'row',
        fields: [
          {
            type: 'input',
            inputType: 'Text',
            model: 'FUND_NAME',
            label: 'Fund Name',
            placeholder: 'Enter Fund Name',
            required: true,
            styleClasses: 'col-md-12',
          },
        ],
      },
    ],
  },
  methods: {
    handleClick (newTab) { this.currentTab = newTab }, // end tab
    back () { this.$router.go(-1) }, // back button

    getAllFundType: async function () {
      const response = await servicesModule0.getAllFundType()
      this.fundtypelist = response
    },
    async addFundType () {
      if (this.$refs.Tab1Form.validate()) {
        const data = new FormData()
        data.append('FUND_NAME', this.model.fundName)
        try {
        // eslint-disable-next-line no-unused-vars
          const response = await servicesModule0.createFundType(data)
          this.getAllFundType()
        } catch (error) {
          console.log(error)
        }
      }
    },
    async deleteFundType (data) {
    // eslint-disable-next-line no-unused-vars
      const response = await servicesModule0.deleteFundType(data.FMS_FUNDTYPE_ID)
      this.getAllFundType()
    },
    async editFundType (data) {
      const response = await servicesModule0.getFundTypeById(data.FMS_FUNDTYPE_ID)
      this.$modals.simpleModalEditFundName.$show()
      this.FMS_FUNDTYPE_ID = response.FMS_FUNDTYPE_ID
      this.model.FUND_NAME = response.FUND_NAME
    },
    async updateFundTypeAPI () {
      try {
        const data = new FormData()
        data.append('FMS_FUNDTYPE_ID', this.FMS_FUNDTYPE_ID)
        data.append('FUND_NAME', this.model.FUND_NAME)

        // console.log("data :" + data);
        // eslint-disable-next-line no-unused-vars
        const response = await servicesModule0.updateFundTypeAPI(data)
        this.getAllFundType()
      } catch (error) {
        console.log(error)
      }
    },

    // settingPageMaintenance(){
    //     this.$router.push("");

    // }
  },
  formOptions: {
    validateAfterLoad: false,
    validateAfterChanged: true,
    validateAsync: true,
  },
}
</script>
