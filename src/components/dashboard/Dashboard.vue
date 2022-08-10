<template>
  <div>
    <div class="container-xxl bg-white p-0">
      <div class="container-xxl py-5 bg-primary hero-header mb-5">
        <div class="container my-5 py-5 px-lg-5">
          <div class="row g-5 py-5">
            <div class="col-lg-6 text-center text-lg-start">
              <h1 class="text-white mb-4 animate__animated animate__zoomIn">Welcome To Funds Malaysia</h1>
              <p class="text-white pb-3 animate__animated animate__zoomIn">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem</p>
              <a href="" class="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animate__animated animate__slideInRight">Contact Us</a>
            </div>
            <div class="col-lg-6 text-center text-lg-start">
              <img class="img-fluid" src="./img/hero.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="container-xxl py-5">
        <div class="container px-lg-5">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="section-title position-relative mb-4 pb-2">
                <h6 class="position-relative text-primary ps-4">Fund Status Check</h6>
              </div>
              <div class="row g-6">
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
                  <!-- <button
                    @click="reset"
                    type="button"
                    class="ml-2 btn btn-sm btn-danger"
                  >
                    Reset
                  </button> -->
                  </div>
                  <va-separator />
                  <div>
                    <div class="col">
                      <div class="row mb-1">
                        <span class="description col-4">STATUS : </span>
                        <span class="description col">
                          <div>
                            {{ this.details.TS_PARAM }}
                          </div>
                        </span>
                      </div>
                    </div>
                    <br/>
                    <div class="col">
                      <div class="row mb-1">
                        <span class="description col-4">LAUNCH DATE : </span>
                        <span class="description col">
                          <div>
                            {{ details.FUND_DATE_LAUNCH }}
                          </div>
                        </span>
                      </div>
                    </div>
                    <br/>
                    <div class="col">
                      <div class="row mb-1">
                        <span class="description col-4">FUND TYPE : </span>
                        <span class="description col">
                          <div
                            v-if="
                              details.FUND_TYPE_FULLNAME != null &&
                                details.FUND_TYPE_FULLNAME != ''
                            "
                          >
                            {{ details.FUND_TYPE_FULLNAME }}
                          </div>
                          <div
                            v-else-if="
                              details.FUND_TYPE_FULLNAME == null ||
                                details.FUND_TYPE_FULLNAME == ''
                            "
                          >
                            -
                          </div>
                        </span>
                      </div>
                    </div>
                    <br/>
                    <div class="col">
                      <div class="row mb-1">
                        <span class="description col-4">FUND CATEGORY : </span>
                        <span class="description col">
                          <div
                            v-if="
                              details.GROUP_ASSET != null &&
                                details.GROUP_ASSET != ''
                            "
                          >
                            {{ details.GROUP_ASSET }}
                          </div>
                          <div
                            v-else-if="
                              details.GROUP_ASSET == null ||
                                details.GROUP_ASSET == ''
                            "
                          >
                            -
                          </div>
                        </span>
                      </div>
                    </div>
                    <br/>
                    <div class="col">
                      <div class="row mb-1">
                        <span class="description col-4">SHARIAH COMPLIANT : </span>
                        <span class="description col">
                          <div v-if="details.FUND_SYARIAH_COMP == 1">Yes</div>
                          <div v-if="details.FUND_SYARIAH_COMP == 2">No</div>
                          <div
                            v-else-if="
                              details.FUND_SYARIAH_COMP == null ||
                                details.FUND_SYARIAH_COMP == ''
                            "
                          >
                            -
                          </div>
                        </span>
                      </div>
                    </div>
                    <br/>
                    <div class="col">
                      <div class="row mb-1">
                        <span class="description col-4">SRI/ESG FUND : </span>
                        <span class="description col">
                          <div v-if="details.FUND_ASEAN_CIS_STATUS == 1">Yes</div>
                          <div v-if="details.FUND_ASEAN_CIS_STATUS == 2">No</div>
                          <div
                            v-else-if="
                              details.FUND_ASEAN_CIS_STATUS == null ||
                                details.FUND_ASEAN_CIS_STATUS == ''
                            "
                          >
                            -
                          </div>
                        </span>
                      </div>
                    </div>
                    <br/>
                    <div class="col">
                      <div class="row mb-1">
                        <span class="description col-4">EPF-MIS : </span>
                        <span class="description col">
                          <div v-if="details.FUND_STATUS_EPF == 1">Yes</div>
                          <div v-if="details.FUND_STATUS_EPF == 2">No</div>
                          <div
                            v-else-if="
                              details.FUND_STATUS_EPF == null ||
                                details.FUND_STATUS_EPF == ''
                            "
                          >
                            -
                          </div>
                        </span>
                      </div>
                    </div>
                    <br/>
                    <div class="col">
                      <div class="row mb-1">
                        <span class="description col-4">SCHEME STRUCTURE : </span>
                        <span class="description col">
                          <div
                            v-if="
                              details.FUND_SCHEME != null &&
                                details.FUND_SCHEME != ''
                            "
                          >
                            {{ details.FMS_SCHEME_NAME }}
                          </div>
                          <div
                            v-else-if="
                              details.FUND_SCHEME == null ||
                                details.FUND_SCHEME == ''
                            "
                          >
                            -
                          </div>
                        </span>
                      </div>
                    </div>
                    <br/>
                    <div class="col">
                      <div class="row mb-1">
                        <span class="description col-4">NAV : </span>
                        <span class="description col">
                          <div>
                            <b-table
                              bordered
                              :head-variant="'light'"
                              :items="items"
                              :fields="fields"
                              show-empty
                            >
                              <template #empty="scope"> No Data Found </template>
                            </b-table>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center mt-4">

              </div>
            </div>
            <div class="col-lg-6">
              <img class="img-fluid wow zoomIn" data-wow-delay="0.5s" src="./img/about.jpg">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import * as servicesModule1 from '../../app/module1/services'

export default {
  name: 'dashboard',
  mounted () {
    this.getDistributorMedia()
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
      fund: [],
      details: [
        {
          FUND_PROFILE_ID: '-',
          FUND_NAME: '-',
          FUND_STATUS_FUND: '-',
          TS_PARAM: '-',
          FUND_DATE_LAUNCH: '-',
          FUND_TYPE: '-',
          FUND_TYPE_FULLNAME: '-',
          FUND_CATEGORY: '-',
          GROUP_ASSET: '-',
          FUND_SYARIAH_COMP: '-',
          FUND_STATUS_SRI_ESG: '-',
          FUND_STATUS_EPF: '-',
          FUND_SCHEME: '-',
          FMS_SCHEME_NAME: '-',
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
              },
              {
                type: 'vueMultiSelect',
                inputType: 'text',
                model: 'FUND_NAME',
                label: 'Fund Name',
                placeholder: 'Select Fund',
                selectOptions: {
                  multiple: false,
                  trackBy: 'FUND_PROFILE_ID',
                  key: 'FUND_PROFILE_ID',
                  label: 'FUND_NAME',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.fund
                },
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
      const data = this.model.DISTRIBUTOR.DISTRIBUTOR_ID
      const data2 = this.model.FUND_NAME.FUND_PROFILE_ID
      const response = await servicesModule1.fundDetailsMedia(data, data2)
      console.log('before in var : ', this.details)
      this.details = response[0]
      console.log('after in var : ', this.details)
    },
    async filterNAV () {
      try {
        const response = await servicesModule1.getNAVlistMedia(
          this.model.modelFilter,
        )
        if (response !== 'error') {
          this.navListRecordList = response
        }
      } catch (error) {}
    },
    getNAVlist: async function () {
      const response = await servicesModule1.getNAVlistMedia()
      this.navListRecordList = response
      this.navListRecordCount = this.navListRecordList.length
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
    onModelUpdated (newVal, schema) {
      if (schema === 'DISTRIBUTOR') {
        this.model.FUND_NAME = ''
        console.log(this.model.DISTRIBUTOR.DISTRIBUTOR_ID)
        this.getFundProfileFilterData(this.model.DISTRIBUTOR.DISTRIBUTOR_ID)
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

<style scoped>
.footer {
  color: black;
  position: absolute;
  padding: 20px;
  right: 0;
  left: 0;
  bottom: 0;
  justify-items: center;
  display: inline-block;
  align-self: flex-end;
  margin-left: 35%;
  font-weight: 800;
}
</style>

<style lang="scss">
.height {
  height: 50%;
}

.row-equal .flex {
  .va-card {
    height: 100%;
  }
}

.dashboard {
  .va-card {
    margin-bottom: 0 !important;
  }
}

.app-layout__main {
  background: transparent;
}
</style>
