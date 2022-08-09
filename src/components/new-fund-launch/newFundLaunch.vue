<template>
  <div>
    <div class="container-xxl bg-primary testimonial py-5 my-5 fadeInUp">
      <h1 class="text-white mb-1">New Fund Launch</h1>
      <br/>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="owl-carousel testimonial-carousel">
              <div v-for="navLists in navListRecordList" :key="navLists.FUND_PROFILE_ID">
                <div class="testimonial-item bg-transparent border rounded text-white p-4">
                  <p>{{ navLists.FUND_NAME }}</p>
                  <div class="d-flex align-items-center">
                    <div class="ps-3">
                      <h6 class="text-white mb-1">{{ navLists.DIST_NAME }}</h6>
                      <small> {{ navLists.CURRENCY_NAME }}</small>
                      <br/>
                      <small>{{ navLists.NAV_CREATE_TIMESTAMP }}</small>
                    </div>
                  </div>
                </div>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="owl-carousel testimonial-carousel">
              <div class="testimonial-item bg-transparent border rounded text-white p-4">
                <p>FUND MAYBANK B</p>
                <div class="d-flex align-items-center">
                  <div class="ps-3">
                    <h6 class="text-white mb-1">Principal Asset Management</h6>
                    <small>MYR</small>
                    <br/>
                    <small>22 Jul 2022</small>
                  </div>
                </div>
              </div>
              <br/>
              <div class="testimonial-item bg-transparent border rounded text-white p-4">
                <p>FUND MAYBANK B</p>
                <div class="d-flex align-items-center">
                  <div class="ps-3">
                    <h6 class="text-white mb-1">Principal Asset Management</h6>
                    <small>MYR</small>
                    <br/>
                    <small>22 Jul 2022</small>
                  </div>
                </div>
              </div>
              <br/>
              <div class="testimonial-item bg-transparent border rounded text-white p-4">
                <p>FUND MAYBANK B</p>
                <div class="d-flex align-items-center">
                  <div class="ps-3">
                    <h6 class="text-white mb-1">Principal Asset Management</h6>
                    <small>MYR</small>
                    <br/>
                    <small>22 Jul 2022</small>
                  </div>
                </div>
              </div>
              <br/>
              <div class="testimonial-item bg-transparent border rounded text-white p-4">
                <p>FUND MAYBANK B</p>
                <div class="d-flex align-items-center">
                  <div class="ps-3">
                    <h6 class="text-white mb-1">Principal Asset Management</h6>
                    <small>MYR</small>
                    <br/>
                    <small>22 Jul 2022</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="owl-carousel testimonial-carousel">
              <div class="testimonial-item bg-white border rounded text-black p-4">
                <p>FUND MAYBANK C</p>
                <div class="d-flex align-items-center">
                  <div class="ps-3">
                    <h6 class="text-black mb-1">Principal Asset Management</h6>
                    <small class="text-black">MYR</small>
                    <br/>
                    <small class="text-black">22 Jul 2022</small>
                  </div>
                </div>
              </div>
              <br/>
              <div class="testimonial-item bg-white border rounded text-black p-4">
                <p>FUND MAYBANK C</p>
                <div class="d-flex align-items-center">
                  <div class="ps-3">
                    <h6 class="text-black mb-1">Principal Asset Management</h6>
                    <small class="text-black">MYR</small>
                    <br/>
                    <small class="text-black">22 Jul 2022</small>
                  </div>
                </div>
              </div>
              <br/>
              <div class="testimonial-item bg-white border rounded text-black p-4">
                <p>FUND CIMB A</p>
                <div class="d-flex align-items-center">
                  <div class="ps-3">
                    <h6 class="text-black mb-1">Principal Asset Management</h6>
                    <small class="text-black">MYR</small>
                    <br/>
                    <small class="text-black">22 Jul 2022</small>
                  </div>
                </div>
              </div>
              <br/>
              <div class="testimonial-item bg-white border rounded text-black p-4">
                <p>FUND CIMB A</p>
                <div class="d-flex align-items-center">
                  <div class="ps-3">
                    <h6 class="text-black mb-1">Principal Asset Management</h6>
                    <small class="text-black">MYR</small>
                    <br/>
                    <small class="text-black">22 Jul 2022</small>
                  </div>
                </div>
              </div>
              <br/>
              <div class="testimonial-item bg-white border rounded text-black p-4">
                <p>FUND CIMB A</p>
                <div class="d-flex align-items-center">
                  <div class="ps-3">
                    <h6 class="text-black mb-1">Principal Asset Management</h6>
                    <small class="text-black">MYR</small>
                    <br/>
                    <small class="text-black">22 Jul 2022</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="owl-carousel testimonial-carousel">
              <div class="testimonial-item bg-transparent border rounded text-white p-4">
                <p>FUND MAYBANK B</p>
                <div class="d-flex align-items-center">
                  <div class="ps-3">
                    <h6 class="text-white mb-1">Principal Asset Management</h6>
                    <small>MYR</small>
                    <br/>
                    <small>22 Jul 2022</small>
                  </div>
                </div>
              </div>
              <br/>
              <div class="testimonial-item bg-transparent border rounded text-white p-4">
                <p>FUND MAYBANK B</p>
                <div class="d-flex align-items-center">
                  <div class="ps-3">
                    <h6 class="text-white mb-1">Principal Asset Management</h6>
                    <small>MYR</small>
                    <br/>
                    <small>22 Jul 2022</small>
                  </div>
                </div>
              </div>
              <br/>
              <div class="testimonial-item bg-transparent border rounded text-white p-4">
                <p>FUND MAYBANK B</p>
                <div class="d-flex align-items-center">
                  <div class="ps-3">
                    <h6 class="text-white mb-1">Principal Asset Management</h6>
                    <small>MYR</small>
                    <br/>
                    <small>22 Jul 2022</small>
                  </div>
                </div>
              </div>
              <br/>
              <div class="testimonial-item bg-transparent border rounded text-white p-4">
                <p>FUND MAYBANK B</p>
                <div class="d-flex align-items-center">
                  <div class="ps-3">
                    <h6 class="text-white mb-1">Principal Asset Management</h6>
                    <small>MYR</small>
                    <br/>
                    <small>22 Jul 2022</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <br/>
      <div>
        <va-card>
          <div>
            <h4 slot="header" class="card-title">New Fund Launch</h4>
          </div>
          <br />
          <va-data-table
            clickable
            no-data-label="No data found"
            :fields="navList"
            :data="navListFilteredData"
            :per-page="parseInt(perPage)"
            :datacount="navListRecordCount"
            :dataperpage="parseInt(perPage)"
          >
            <template slot="no" slot-scope="row">
              {{ row.rowIndex + 1 }}
            </template>
          </va-data-table>
        </va-card>
      </div> -->
    </div>
  </div>
</template>
<script>
import * as servicesModule1 from '../../app/module1/services'
export default {
  name: 'newFundLaunch',
  mounted () {
    this.getNAVlist()
  },
  data () {
    return {
      header: '',
      field: [],
      term: null,
      perPage: '10',
      perPageOptions: ['50', '100', '150', '200'],
      currentPage: 1,
      navListRecordList: [],
      navListRecordCount: null,
      count: 1,
    }
  },
  methods: {

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
  },
  computed: {
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
  },
}
</script>
