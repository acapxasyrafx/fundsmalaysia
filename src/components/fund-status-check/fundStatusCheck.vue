<template>
  <div>
    <va-card>
      <div class="container-xxl py-5">
        <div class="container px-lg-5">
          <div class="row g-5">
            <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <div class="section-title position-relative mb-4 pb-2">
                <h6 class="position-relative text-primary ps-4">Advanced Search Fund</h6>
              </div>
              <div class="row g-12">
                <div class="col-sm-12">
                  <div>
                    <vue-form-generator
                      :model="model"
                      :schema="Schema"
                      :options="formOptions"
                      ref="advancedSearchForm"
                      @model-updated="onModelUpdated"
                    >
                    </vue-form-generator>
                    <br />
                    <button
                      @click="onSearch"
                      type="button"
                      class="ml-2 btn btn-sm btn-primary"
                    >
                      Search
                    </button>
                    <button
                      @click="resetValue"
                      type="button"
                      class="ml-2 btn btn-sm btn-danger"
                    >
                      Reset
                    </button>
                  </div>
                  <br/>
                  <va-separator />
                  <br/>
                </div>
              </div>
              <div v-if="this.displayTable == 1">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>FUND NAME</th>
                        <th>DISTRIBUTOR</th>
                        <th>STATUS</th>
                        <th>LAUNCH DATE</th>
                        <th>FUND TYPE</th>
                        <th>FUND CATEGORY</th>
                        <th>SHARIAH COMPLIANT</th>
                        <th>EPF-MIS</th>
                        <th>SCHEME STRUCTURE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="data in fundDetails" :key="data.FUND_PROFILE_ID">
                        <td>{{data.FUND_NAME}}</td>
                        <td>{{data.DISTRIBUTOR_NAME}}</td>
                        <td>
                          {{data.TS_PARAM}}</td>
                        <td>
                          <div v-if="data.FUND_DATE_LAUNCH != null">{{ data.FUND_DATE_LAUNCH }}</div>
                          <div v-if="data.FUND_DATE_LAUNCH == null">-</div>
                        </td>
                        <td>
                          <div v-if="data.FUND_TYPE_FULLNAME != null">{{ data.FUND_TYPE_FULLNAME }}</div>
                          <div v-if="data.FUND_TYPE_FULLNAME == null">-</div>
                        </td>
                        <td>
                          <div v-if="data.GROUP_ASSET != null">{{ data.GROUP_ASSET }}</div>
                          <div v-if="data.GROUP_ASSET == null">-</div>
                        </td>
                        <td>
                          <div v-if="data.FUND_SYARIAH_COMP == 1">YES</div>
                          <div v-if="data.FUND_SYARIAH_COMP == 2">NO</div>
                          <div v-if="data.FUND_SYARIAH_COMP == null">-</div>
                        </td>
                        <td>
                          <div v-if="data.FUND_STATUS_EPF == 1">YES</div>
                          <div v-if="data.FUND_STATUS_EPF == 2">NO</div>
                          <div v-if="data.FUND_STATUS_EPF == null">-</div>
                        </td>
                        <td>
                          <div v-if="data.FMS_SCHEME_NAME != null">{{ data.FMS_SCHEME_NAME }}</div>
                          <div v-if="data.FMS_SCHEME_NAME == null">-</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </va-card>
  </div>
</template>
<script>
import axios from 'axios'
import moment from "moment";
import * as servicesModule1 from '../../app/module1/services'

export default {
  name: 'fundStatusCheck',
  mounted () {
    this.getDistributorMedia()
    this.getAllFundTypeList()
    this.getAllFundCategoryList()
    this.getAllSchemeList()
  },
  data () {
    return {
      showPass: false,
      email: '', // hidayatul@vn.my temporary for testing
      password: '', // @Bcd1234
      keepLoggedIn: false,
      emailErrors: [],
      passwordErrors: [],
      remember: false,
      displayTable: 0,

      header: '',
      field: [],
      term: null,
      perPage: '10',
      perPageOptions: ['50', '100', '150', '200'],
      currentPage: 1,
      navListRecordList: [],
      navListRecordCount: null,
      count: 1,

      distributor: [],
      fundDetails: [],
      details: [],

      FundTypeList: [],
      FundCategoryList: [],
      FundSchemeList: [],

      RADIO_VAL: [
        {
          value: '1',
          name: 'Yes',
        },
        {
          value: '2',
          name: 'No',
        },
      ],

      fields: [
        {
          key: 'date',
          label: 'DATE',
          sortable: false,
          class: 'text-center',
        },
        {
          key: 'NAV',
          label: 'NAV',
          sortable: false,
          class: 'text-center',
        },
      ],

      items: [{ date: '19-5-2022', NAV: '1.005' }],

      model: {
        FUND_NAME: '',
        DISTRIBUTOR: '',
      },

      Schema: {
        groups: [
          {
            styleClasses: 'row',
            fields: [
              {
                type: 'vueMultiSelect',
                inputType: 'text',
                model: 'DISTRIBUTOR',
                label: 'Distributor Name',
                placeholder: 'Select Distributor',
                selectOptions: {
                  multiple: false,
                  trackBy: 'DISTRIBUTOR_ID',
                  key: 'DISTRIBUTOR_ID',
                  label: 'DIST_NAME',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.distributor
                },
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                model: 'FUND_NAME',
                label: 'Fund Name',
                styleClasses: 'col-md-4',
              },
              {
                labels: 'Launch Date',
                type: 'vfg-functional-date',
                placeholder: 'dd-MM-yyyy',
                model: 'LAUNCH_DATE',
                noLabel: true,
                noClearButton: true,
                format: 'dd-MM-yyyy',
                styleClasses: 'col',
                values: (model, schema) => {
                  return this.fund
                },
              },
              {
                type: 'vueMultiSelect',
                inputType: 'text',
                model: 'FUND_TYPE',
                label: 'Fund Type',
                placeholder: 'Select Fund Type',
                selectOptions: {
                  multiple: false,
                  key: 'FMS_FUNDTYPE_ID',
                  label: 'FUND_TYPE_FULLNAME',
                  searchable: false,
                },
                values: (model, schema) => {
                  return this.FundTypeList
                },
                styleClasses: 'col-md-2',
              },
              {
                type: 'vueMultiSelect',
                model: 'FUND_CATEGORY',
                label: 'Fund Category',
                placeholder: 'Select Fund Category',
                selectOptions: {
                  multiple: false,
                  key: 'FMS_FUNDCATEGORY_ID',
                  label: 'GROUP_ASSET',
                  searchable: false,
                },
                values: (model, schema) => {
                  return this.FundCategoryList
                },
                styleClasses: 'col-md-3',
              },
              {
                type: 'vueMultiSelect',
                model: 'FUND_SCHEME',
                label: 'Scheme Structure',
                placeholder: 'Select scheme structure',
                styleClasses: 'col-md-3',
                selectOptions: {
                  multiple: false,
                  key: 'FMS_SCHEME_ID',
                  label: 'FMS_SCHEME_NAME',
                  searchable: false,
                },
                values: (model, schema) => {
                  return this.FundSchemeList
                },
              },
              {
                type: 'radios',
                model: 'SHARIAHCOMPLIANT',
                label: 'Shariah Compliant',
                styleClasses: 'col-md-2',
                values: () => {
                  return this.RADIO_VAL
                },
              },
              {
                type: 'radios',
                model: 'SRIESGFUND',
                label: 'SRI/ESG Fund',
                values: () => {
                  return this.RADIO_VAL
                },
                styleClasses: 'col-md-2',
              },
              {
                type: 'radios',
                model: 'EPFMIS',
                label: 'EPF-MIS',
                values: () => {
                  return this.RADIO_VAL
                },
                styleClasses: 'col-md-2',
              },
            ],
          },
        ],
      },
    }
  },
  methods: {
    // search: debounce (function (term) {
    //   this.term = term
    //   console.log(this.term)
    // }, 400),
    onSearch: async function () {
      var data = null
      var data2 = null
      var data3 = null
      var data4 = null
      var data5 = null
      var data6 = null
      var data7 = null
      var data8 = null
      var data9 = null
      if (this.model.DISTRIBUTOR.DISTRIBUTOR_ID != null) {
        data = this.model.DISTRIBUTOR.DISTRIBUTOR_ID
      }
      if (this.model.FUND_NAME != null) {
        data2 = this.model.FUND_NAME
      }
      if (this.model.LAUNCH_DATE != null) {
        data3 = moment(this.model.LAUNCH_DATE).format('YYYY-MM-DD') ?? ''
      }
      if (this.model.DISTRIBUTOR.FMS_FUNDTYPE_ID != null) {
        data4 = this.model.DISTRIBUTOR.FMS_FUNDTYPE_ID
      }
      if (this.model.FUND_CATEGORY.FMS_FUNDCATEGORY_ID != null) {
        data5 = this.model.FUND_CATEGORY.FMS_FUNDCATEGORY_ID
      }
      // if (this.model.FUND_SCHEME.FMS_SCHEME_ID != null) {
      //   data6 = this.model.FUND_SCHEME.FMS_SCHEME_ID
      // }
      // if (this.model.DISTRIBUTOR.DISTRIBUTOR_ID != null) {
      //   data7 = this.model.DISTRIBUTOR.DISTRIBUTOR_ID
      // }
      // if (this.model.DISTRIBUTOR.DISTRIBUTOR_ID != null) {
      //   data8 = this.model.DISTRIBUTOR.DISTRIBUTOR_ID
      // }
      if (this.model.FUND_SCHEME.FMS_SCHEME_ID != null) {
        data9 = this.model.FUND_SCHEME.FMS_SCHEME_ID
      }

      // const data2 = this.model.FUND_NAME
      // const data3 = this.model.LAUNCH_DATE
      // const data4 = this.model.FUND_TYPE.FMS_FUNDTYPE_ID
      // const data5 = this.model.FUND_CATEGORY.FMS_FUNDCATEGORY_ID
      // const data6 = this.model.SHARIAHCOMPLIANT.value
      // const data7 = this.model.SRIESGFUND.value
      // const data8 = this.model.EPFMIS.value
      // const data9 = this.model.SCHEME_STRUCTURE.
      try {
        const response = await servicesModule1.fundDetailsMediaAdvanced(data, data2, data3, data4, data5, data6, data7, data8, data9)
        console.log('before in var : ', this.fundDetails)
        this.fundDetails = response
        console.log('after in var : ', this.fundDetails)
        this.displayTable = 1
      } catch (error) {
        console.log(error)
      }
    },
    getDistributorMedia: async function () {
      const response = await servicesModule1.getDistributorMedia()
      this.distributor = response
    },
    async getFundProfileFilterData (data) {
      console.log(data)
      const response = await servicesModule1.getFundProfileFilter(data)
      this.fund = response
    },
    getAllFundTypeList: async function () {
      const response = await servicesModule1.getAllFundTypeList()
      this.FundTypeList = response
      console.log(this.FundTypeList)
    },
    getAllFundCategoryList: async function () {
      const response = await servicesModule1.getAllFundGroupList()
      this.FundCategoryList = response
      console.log(this.FundCategoryList)
    },
    getAllSchemeList: async function () {
      const response = await servicesModule1.getAllSchemeList()
      this.FundSchemeList = response
      console.log(this.FundSchemeList)
    },
    resetValue: async function () {
      console.log('clear data input')
      this.model.DISTRIBUTOR = ''
      this.model.LAUNCH_DATE = ''
      this.model.FUND_NAME = ''
      this.model.FUND_TYPE = ''
      this.model.FUND_CATEGORY = ''
      this.model.SHARIAHCOMPLIANT = ''
      this.model.SRIESGFUND = ''
      this.model.EPFMIS = ''
      this.model.SCHEME_STRUCTURE = ''
      this.fundDetails = []
    },
    onModelUpdated (newVal, schema) {
      if (schema === 'DISTRIBUTOR') {
        this.model.FUND_NAME = ''
        console.log(this.model.DISTRIBUTOR.DISTRIBUTOR_ID)
        // this.getFundProfileFilterData(this.model.DISTRIBUTOR.DISTRIBUTOR_ID)
      }
    },
  },
  computed: {
    formReady () {
      return !this.emailErrors.length && !this.passwordErrors.length
    },
    navList () {
      return [
        {
          name: '__slot:no',
          title: 'NO',
        },
        {
          name: 'NAV_CREATE_TIMESTAMP',
          title: 'LAUNCH DATE',
          sortField: 'NAV_CREATE_TIMESTAMP',
        },
        {
          name: 'FUND_NAME',
          title: 'FUND NAME',
          sortField: 'FUND_NAME',
        },
        {
          name: 'DIST_NAME',
          title: 'MANAGEMENT COMPANY',
          sortField: 'DIST_NAME',
        },
        {
          name: 'CURRENCY_NAME',
          title: 'CURRENCY',
          sortField: 'CURRENCY_NAME',
        },
      ]
    },
    // eslint-disable-next-line vue/return-in-computed-property
    onNewTag (newTag, id, options, value) {
      console.log('onNewTag', newTag, id, options, value)
    },
    onChanged: function (model, newVal, oldVal, field) {
      console.log(JSON.stringify(newVal, null, 2))
    },
    navListFilteredData () {
      if (!this.term || this.term.length < 1) {
        return this.navListRecordList
      }
      return this.navListRecordList.filter((item) => {
        return this.term

          .split(' ')
          .every(
            (v) => item.DIST_NAME.includes(v) || item.FUND_NAME.includes(v),
          )
      })
    },

    formOptions: {
      validateAfterLoad: false,
      validateAfterChanged: false,
    },
  },
}
</script>
