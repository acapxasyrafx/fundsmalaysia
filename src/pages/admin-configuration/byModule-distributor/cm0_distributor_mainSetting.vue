/* eslint-disable no-trailing-spaces */
<template>
  <div class="content">
    <div class="container-fluid">
      <div class="">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <h4 slot="header">Settings by Module</h4>
          </div>
          <!-- 1 -->
          <va-card class=" ml-4 col-lg-10">

            <h5><i class="fa fa-bank"></i>&nbsp;&nbsp; <b>Distributor</b></h5>
            <hr>

            <div class="ml-5">
              <div>
                <span>Marketing Approach</span>
                <button v-if="visibleLogin == false" v-b-toggle.collapse-1 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleLogin == true" v-b-toggle.collapse-1 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse v-model="visibleLogin" class="mt-4" id="collapse-1">
                  <va-card style="background-color: #eeeeee;">

                    <div class="row">
                      <div class="ml-4 col-md-5">
                        <span class="col mt-2 description">Approach Name</span>
                        <input ref="approachName" type="text" placeholder="Enter Marketing Approach " class=" float-right col-6 form-control form-control-md"/>
                      </div>
                      <div class="mt-1 col-md-2">
                        <button type="saveMarketingApproach" class="float-right btn btn-primary btn-fill btn-md"><i class="fa fa-save" />&nbsp; save</button>
                      </div>
                      <br>
                    </div>

                    <br><br>
                    <va-card>
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
                    </va-card>
                    <br><br>

                  </va-card>
                </b-collapse>
                <hr>
              </div>
              <div>
                <span>Type of Structure</span>
                <button v-if="visibleBlockDuration == false" v-b-toggle.collapse-2 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleBlockDuration == true" v-b-toggle.collapse-2 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse class="mt-4" id="collapse-2" v-model="visibleBlockDuration">
                  <va-card style="background-color: #eeeeee;">

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
                    <va-card>
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
                    </va-card>
                    <br><br>

                  </va-card>
                </b-collapse>
                <hr>
              </div>
              <div>
                <span>DistributorType</span>
                <button v-if="visibleSessionTimeout == false" v-b-toggle.collapse-3 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-edit"></i></button>
                <button v-if="visibleSessionTimeout == true" v-b-toggle.collapse-3 type="button" class="float-right  btn-fill btn-md"><i class="fa fa-times"></i></button>
                <b-collapse id="collapse-3" style="background-color: #eeeeee;" class="mt-4" v-model="visibleSessionTimeout">
                  <va-card style="background-color: #eeeeee;">
                    <va-card class="mt-2">
                      <va-data-table
                        :fields="DistributorTypeFields"
                        :data="distributorTypeFilteredData"
                        :per-page="parseInt(perPage)"
                        clickable>
                        <template slot="no" slot-scope="row">
                          {{ row.rowIndex + 1 }}
                        </template>
                        <template slot="actions">
                          <h4 class="mt-2">
                            <span v-b-tooltip.hover title="edit" class="badge badge-primary mr-2">
                              <i class="fa fa-edit"></i></span>
                            <span v-b-tooltip.hover title="delete" class="badge badge-danger mr-1">
                              <i class="fa fa-trash"></i></span>
                          </h4>
                        </template>
                      </va-data-table>
                    </va-card>
                    <br><br>
                  </va-card>
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
import 'vue-form-generator/dist/vfg.css'
import * as servicesModule0 from '../../../app/module0/acap'

export default {
  mounted () {
    this.getDistributorMarketingApproach()
    this.getDistributorTypeOfStructure()
    this.getDistributorType()
  },
  methods: {
    getDistributorMarketingApproach: async function () {
      const response = await servicesModule0.getDistributorMarketingApproach()
      if (response !== 'error') {

      }
    },
    getDistributorTypeOfStructure: async function () {
      const response = await servicesModule0.getDistributorTypeOfStructure()
      if (response !== 'error') {

      }
    },
    getDistributorType: async function () {
      const response = await servicesModule0.getDistributorType()
      this.disributorTypeList = response
    },
  },
  async saveMarketingApproach () {
    if (this.$refs.approachName.validate()) {
      const data = new FormData()
      // data.append('EMAIL_SMTP_PORT', this.model.EMAIL_SMTP_PORT)
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await servicesModule0.createEmailSetting(data)
        this.getEmailSetting()
        this.$modals.simpleModal.$hide()
      } catch (error) {
        console.log(error)
      }
    }
  },
  async saveTypeOfStructure () {
    if (this.$refs.RegForm.validate()) {
      const data = new FormData()
      data.append('EMAIL_SMTP_PORT', this.model.EMAIL_SMTP_PORT)
      data.append('EMAIL_LOGIN_ID', this.model.EMAIL_LOGIN_ID)
      data.append('EMAIL_SMTP_SERVER', this.model.EMAIL_SMTP_SERVER)
      data.append('EMAIL_FROM', this.model.EMAIL_FROM)
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await servicesModule0.createEmailSetting(data)
        this.getEmailSetting()
        this.$modals.simpleModal.$hide()
      } catch (error) {
        console.log(error)
      }
    }
  },
  async saveDistributorType () {
    if (this.$refs.RegForm.validate()) {
      const data = new FormData()
      data.append('EMAIL_SMTP_PORT', this.model.EMAIL_SMTP_PORT)
      data.append('EMAIL_LOGIN_ID', this.model.EMAIL_LOGIN_ID)
      data.append('EMAIL_SMTP_SERVER', this.model.EMAIL_SMTP_SERVER)
      data.append('EMAIL_FROM', this.model.EMAIL_FROM)
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await servicesModule0.createEmailSetting(data)
        this.getEmailSetting()
        this.$modals.simpleModal.$hide()
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {
    DistributorTypeFields () {
      return [
        {
          name: '__slot:no',
          title: 'No',
        },
        {
          name: 'DIST_TYPE_NAME',
          title: 'Distributor Type',
        },
        {
          name: 'DIST_TYPE_VARIATION',
          title: 'Variation Type',
        },
        {
          name: 'DIST_TYPE_MARKETING',
          title: 'Marketing Type',
        },
        {
          name: 'DIST_TYPE_STRUCTURE',
          title: 'Structure Type',
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
    distributorTypeFilteredData () {
      if (!this.term || this.term.length < 1) {
        return this.distributortypeList
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
      distributortypeList: [],
      currentPage: 1,
      perPage: '6',
      perPageOptions: ['4', '6', '10', '20'],
      filter: null,

      model: {
        DIST_TYPE_NAME: '',
        distributorType: '',

        DIST_TYPE_VARIATION: '',
        variationType: '',

        DIST_TYPE_MARKETING: '',
        marketingType: '',

        DIST_TYPE_STRUCTURE: '',
        structureType: '',
      },

      items: [
        { no: '1', list: 'Direct' },
        { no: '2', list: 'Nominee' },

      ],
      fields2: [
        // A virtual column that doesn't exist in items
        { key: 'index', label: 'No' },
        { key: 'list', label: 'List', sortable: false },
        { key: 'actions', label: 'Actions', sortable: false },

      ],

      items2: [
        { no: '1', list: 'Single-Tier' },
        { no: '2', list: 'Multi-Tier' },

      ],

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
  formOptions: {
    validateAfterLoad: false,
    validateAfterChanged: true,
    validateAsync: true,
  },
}
</script>
