<template>
  <div>
    <b-card>
      <div class="container-xxl py-5 bg-primary hero-header mb-5">
        <div class="container my-5 py-5 px-lg-5">
          <div class="row g-5 py-5">
            <div class="col-lg-6 text-center text-lg-start">
              <h1 class="text-white mb-4 animated zoomIn">Welcome To Funds Malaysia</h1>
              <p class="text-white pb-3 animated zoomIn">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem</p>
              <a href="" class="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
            </div>
            <div class="col-lg-6 text-center text-lg-start">
              <img class="img-fluid" src="./img/hero.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'
// import * as servicesModule0 from '@/app/module0/services'
import 'vue-form-generator/dist/vfg.css'
import { debounce } from 'lodash'
// import * as servicesModule1 from '../../app/module1/services'
// import * as servicesModule5 from '../../app/module5/services'

// import * as services03Module5 from '../../app/module5/services03'

export default {
  components: {
  },
  name: 'login',
  mounted () {
    this.getNAVlist()
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
  watch: {
    'DISTRIBUTOR_NAME' (value) {
      console.log(value)
      const data = this.DISTRIBUTOR_NAME
      console.log(data)
      getFundProfileFilter(data)
    },
  },
  methods: {
    search: debounce(function (term) {
      this.term = term
      console.log(this.term)
    }, 400),
    onSearch: async function () {
      console.log(this.model.DISTRIBUTOR.DISTRIBUTOR_ID)
      console.log(this.model.FUND_NAME.FUND_PROFILE_ID)
      const data = this.model.DISTRIBUTOR.DISTRIBUTOR_ID
      const data2 = this.model.FUND_NAME.FUND_PROFILE_ID
      const response = await services03Module5.fundDetailsMedia(data, data2)
      console.log(this.details)
      this.details = response[0]
      console.log(this.details)
    },
    onsubmit: async function () {
      console.log(this.email)
      console.log(this.password)

      this.emailErrors = this.email ? [] : ['Email is required']
      this.passwordErrors = this.password ? [] : ['Password is required']
      if (!this.formReady) {
        return
      }

      try {
        const data = {
          LOGIN_ID: this.email,
          USER_PASS_NUM: this.password,
        }
        console.log('start verify')
        const response = await servicesModule5.verifyUser(data)
        console.log(response.TP_USER_ISLOGIN)
        if (response.TP_USER_ISLOGIN === 0) {
          localStorage.setItem('recover-password', response.TP_USER_ID)
          this.$router.push({
            name: 'recover-password',
            params: { TP_USER_ID: response.TP_USER_ID },
          })
        } else {
          // alert(JSON.stringify(response.data));
          if (response.TP_USESR_) console.log(JSON.stringify(response.data))
          servicesModule5.setUser(JSON.stringify(response.data))
          this.$store.commit('change', JSON.stringify(response.data))
          console.log('user store :' + localStorage.getItem('user'))
          this.$router.push({ name: 'fms_website' })
          console.log('first')
        }
      } catch (error) {
        console.log(error)
      }
    },
    async filterNAV () {
      try {
        const response = await servicesModule5.getNAVlistMedia(
          this.model.modelFilter,
        )
        if (response !== 'error') {
          this.navListRecordList = response
        }
      } catch (error) {}
    },
    getNAVlist: async function () {
      const response = await servicesModule5.getNAVlistMedia()
      this.navListRecordList = response
      this.navListRecordCount = this.navListRecordList.length
    },
    getDistributorMedia: async function () {
      const response = await servicesModule1.getDistributorMedia()
      this.distributor = response
    },
    async getFundProfileFilterData (data) {
      console.log(data)
      const response = await services03Module5.getFundProfileFilter(data)
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
  // onChange: {
  //   if (this.distributor.state == 'change') {
  //     getFundProfileFilter (this.distributor);
  //   }
  // },
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
  background: #e8e8e8;
}
</style>
