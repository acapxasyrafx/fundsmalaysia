/* eslint-disable no-debugger, no-console */
/* eslint-disable */
<template>
  <div class="content">
    <div class="container-fluid">
      <div class="">
        <div class="col-12">

          <va-card>
            <h4 slot="header" class="card-title">
              Program Details
            </h4>
            <div>
              <div class="content">
                <div class="ml-4">
                  <br />
                  <table class="table table-striped">
                    <tbody>
                      <tr>
                        <td style="width: 25%;">
                          CPD Code / Reference Number
                        </td>
                        <td>:</td>
                        <td>CPD201812060003</td>
                      </tr>
                      <tr>
                        <td style="width: 20%;">Program Title</td>
                        <td>:</td>
                        <td>Introduction Of Unit Trust Part 2</td>
                      </tr>
                      <tr>
                        <td style="width: 20%;">Application Type</td>
                        <td>:</td>
                        <td>Repeated CPD Program</td>
                      </tr>
                      <tr>
                        <td style="width: 20%;">Start Dates</td>
                        <td>:</td>
                        <td>20-02-2020</td>
                      </tr>
                      <tr>
                        <td style="width: 20%;">End Dates</td>
                        <td>:</td>
                        <td>28-02-2020</td>
                      </tr>
                      <tr>
                        <td style="width: 20%;">Hours</td>
                        <td>:</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td style="width: 20%;">Uploaded Document</td>
                        <td>:</td>
                        <td>
                          <a
                            href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                            class="row"
                          >
                            Document 1.pdf</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 20%;">Participant List</td>
                        <td>:</td>
                        <td>
                          <a
                            href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                            class="row"
                          >
                            View</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 20%;">Feedback</td>
                        <td>:</td>
                        <td>
                          <a
                            href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                            class="row"
                          >
                            View</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 20%;">SLO</td>
                        <td>:</td>
                        <td>
                          <a
                            href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                            class="row"
                          >
                            View</a
                          >
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </va-card>
          <br/>
          <va-card>

            <div class="content">
              <h4 slot="header" class="card-title">
                Revocation Details
              </h4>
              <br />
              <table class="table">
                <tbody>
                  <tr>
                    <td style ="width: 20%;"><b>Document</b></td>
                    <td style ="width: 2%;">:</td>
                    <td><a target="blank" href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">Document 1.pdf</a></td>
                  </tr>
                  <tr>
                    <td style ="width: 20%;"><b>Remark</b></td>
                    <td style ="width: 2%;">:</td>
                    <td>Company Revocation</td>
                  </tr>

                </tbody>
              </table>

            </div>
          </va-card>
          <br/>
          <va-card>

            <div class="content">
              <h4 slot="header" class="card-title">
                Appeal Details
              </h4>
              <br />
              <table class="table">
                <tbody>
                  <tr>
                    <td style ="width: 20%;"><b>Document</b></td>
                    <td style ="width: 2%;">:</td>
                    <td><a target="blank" href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">Document 1.pdf</a></td>
                  </tr>
                  <tr>
                    <td style ="width: 20%;"><b>Appeal Remark</b></td>
                    <td style ="width: 2%;">:</td>
                    <td>Company Appeal</td>
                  </tr>

                </tbody>
              </table>

            </div>
          </va-card>
          <br/>
          <va-card>
            <div>
              <h4 slot="header" class="card-title">
                Appeal Approval
              </h4>
              <br />
              <vue-form-generator
                :model="model"
                :schema="schema"
                :options="formOptions"
              >
              </vue-form-generator>

            </div>

            <button
              type="submit"
              class="btn btn-primary btn-fill float-left btn-md"
            >
              <i class="fa fa-step-backward" /> &nbsp; Back
            </button>
            <div class="float-right">
              <button
                @click="submit"
                type="button"
                class="mr-2 btn btn-danger btn-fill btn-md"
              >
                <i class="fa fa-ban" /> &nbsp; Reject
              </button>
              <button
                @click="submit"
                type="button"
                class="mr-2 btn btn-success btn-fill btn-md"
              >
                <i class="fa fa-paper-plane" /> &nbsp; Approve
              </button>
            </div>
          </va-card>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'
import Tabs from 'vue-tabs-with-active-line'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueFormGenerator)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
const TABS = [{
  title: 'Company Profile',
  value: 'tab1',
}, {
  title: 'Admin Info',
  value: 'tab2',
}]
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Tabs,
  },

  data () {
    return {
      tabs: TABS,
      currentTab: 'tab1',

      docUploadList: [
        {
          id: '1',
          fileName: 'Company Logo',
          type: 'file',
          filePath: '',
          selected: true,
        },
        {
          id: '2',
          fileName: "Board of Directors' Resolution approving the appointment of the AR",
          type: 'file',
          filePath: '',
          selected: true,
        },
        {
          id: '3',
          fileName: 'Certified true copy of relevant CMSL and approval that verify the eligibility of the applicant (if applicable)',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '4',
          fileName: 'Payment of application and annual fees',
          type: 'file',
          filePath: '',
          selected: false,
        },
      ],

      status: [

        {
          id: 'Reviewed',
          name: 'Reviewed',
        },
        {
          id: 'Returned',
          name: 'Returned',
        },
        {
          id: 'Rejected',
          name: 'Rejected',
        },
        {
          id: 'Submit',
          name: 'Submit for GM Recommendation',
        },
      ],

      model: {
        status: '',
        remark: '',
      },

      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'file',
            label: 'Upload Document',
            model: 'documentName',
            required: false,
            validator: 'string',
            hideInput: true,
            preview: false,
            styleClasses: 'col-md-12',
          },

          {
            type: 'textArea',
            label: 'Remark',
            model: 'remark',
            hint: 'Max 500 characters',
            max: 500,
            rows: 4,
            styleClasses: 'col-md-12',
            required: true,
            validator: 'string',
          },
        ],
      },
      formOptions: {
        validateAfterLoad: false,
        validateAfterChanged: true,
        validateAsync: true,
      },
    }
  },

  methods: {
    back () {
      this.$router.go(-1)
    },
    submit () {
      console.log('herree')
    },
    handleClick (newTab) {
      this.currentTab = newTab
    }, // end tab
    onModelUpdated (newVal, schema) {
      console.log(schema)
      if (schema === 'document') {
        console.log(newVal.replace('C:\\fakepath\\', ''))
        this.model.document = newVal.replace('C:\\fakepath\\', '')
      }
    },
  },
  onClick () {
    console.log('jhdfj')
    this.$router.push('/company/company-list')
  },
}

</script>

<style lang="scss">
.default-tabs {
  position: relative;
  margin: 0 auto;

  &__item {
    display: inline-block;
    margin: 0 5px;
    padding: 10px;
    padding-bottom: 8px;
    font-size: 16px;
    letter-spacing: 0.8px;
    color: gray;
    text-decoration: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s;

    &__active {
      color: black;
    }

    &:hover {
      border-bottom: 2px solid gray;
      color: black;
    }

    &:focus {
      outline: none;
      border-bottom: 2px solid gray;
      color: black;
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__active-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: black;
    transition: transform 0.4s ease, width 0.4s ease;
  }
}

.content {
  margin-top: 30px;
  font-size: 20px;
}
</style>
