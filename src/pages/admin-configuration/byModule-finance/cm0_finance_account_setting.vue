<template>
  <div class="content">
    <div class="container-fluid">
      <div class="card-body">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <card
              class="strpied-tabled-with-hover"
              body-classes="table-full-width table-responsive"
            >
              <h4 slot="header" class="card-title">Finance Setting</h4>
              <br />

              <div>
                <tabs
                  :tabs="tabs"
                  :currentTab="currentTab"
                  :wrapper-class="'default-tabs'"
                  :tab-class="'default-tabs__item'"
                  :tab-active-class="'default-tabs__item_active'"
                  :line-class="'default-tabs__active-line'"
                  @onClick="handleClick"
                />

                <div class="content">
                  <div v-if="currentTab === 'tab1'">
                    <div class="ml-5">
                      <br />
                      <vue-form-generator
                        :model="model"
                        :schema="Tab2Schema"
                        :options="formOptions"
                        ref="Tab2Form"
                      >
                      </vue-form-generator>
                      <br />
                      <div class="text-center">
                        <button
                          @click="addDepartment"
                          type="button"
                          class="btn btn-warning btn-fill btn-md"
                        >
                          <i class="fa fa-plus" /> &nbsp; Add Parameter
                        </button>
                      </div>
                      <br />

                      <!-- list -->
                      <h4>List of Account Code</h4>
                      <card class="mt-2">
                        <b-table
                          hover
                          :items="departmentList"
                          :fields="departmentFields"
                          :current-page="currentPageDepartment"
                          responsive="md"
                        >
                          <template #cell(index)="data">
                            {{ data.index + 1 }}
                          </template>
                          <template #cell()="data">
                            <span class="description">{{ data.value }}</span>
                          </template>
                          <template #cell(actions)="">
                            <h4 class="mt-2">
                              <span class="badge badge-danger mr-1">
                                <i class="fa fa-trash"></i
                                ></span>
                            </h4>
                          </template>
                        </b-table>
                      </card>
                    </div>
                  </div>
                  <div v-if="currentTab === 'tab2'">
                    <div class="ml-5">
                      <br />
                      <vue-form-generator
                        :model="model"
                        :schema="Tab3Schema"
                        :options="formOptions"
                        ref="Tab3Form"
                      >
                      </vue-form-generator>
                      <br />
                      <div class="text-center">
                        <button
                          @click="addPosition"
                          type="button"
                          class="btn btn-warning btn-fill btn-md"
                        >
                          <i class="fa fa-plus" /> &nbsp; Add Parameter
                        </button>
                      </div>
                      <br />
                      <!-- list -->
                      <h4>List of Cost Center</h4>
                      <card class="mt-2">
                        <b-table
                          hover
                          :items="positionList"
                          :fields="positionFields"
                          :current-page="currentPagePosition"
                          responsive="md"
                        >
                          <template #cell(index)="data">
                            {{ data.index + 1 }}
                          </template>
                          <template #cell()="data">
                            <span class="description">{{ data.value }}</span>
                          </template>
                          <template #cell(actions)="">
                            <h4 class="mt-2">
                              <span class="badge badge-danger mr-1">
                                <i class="fa fa-trash"></i
                                ></span>
                            </h4>
                          </template>
                        </b-table>
                      </card>
                    </div>
                  </div>
                </div>
              </div>
            </card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'vue-form-generator/dist/vfg.css'
// import Tabs from 'src/VueTabsWithActiveLine.vue';
const TABS = [
  { title: 'Setting 1 : Account Code', value: 'tab1' },
  { title: 'Setting 2 : Cost Center', value: 'tab2' },
]
export default {
  components: {
    Tabs,
  },

  data () {
    return {
      tabs: TABS,
      currentTab: 'tab1',

      currentPageDivision: 1,
      divisionList: [],
      divisionfields: [
        // A virtual column that doesn't exist in items
        { key: 'index', label: 'No' },
        // A column that needs custom formatting
        { key: 'divisionName', label: 'Division Name' },
        { key: 'divisionCompany', label: 'Company Name' },
        { key: 'actions', label: 'Action' },
      ],
      companyList: [
        { id: '1', name: '3001: Receivable' },
        { id: '2', name: '' },
        { id: '3', name: '' },
        { id: '4', name: '' },
      ],
      allowableList: [{ id: '1', name: 'Public Mutual Berhad' }],
      divisionList: [
        { id: '1', name: 'INTERNAL AUDIT & RISK MANAGEMENT' },
        { id: '2', name: 'SECRETARIAL' },
        { id: '3', name: 'REGULATORY SERVICES DIVISION' },
        { id: '4', name: 'INDUSTRY SERVICES DIVISION' },
        { id: '5', name: 'CORPORATE SERVICES DIVISION' },
      ],
      departmentNameList: [
        { id: '1', name: 'Legal & Regulatory Affairs' },
        { id: '2', name: 'Supervision' },
        { id: '3', name: 'Registration' },
      ],

      currentPageDepartment: 1,
      departmentList: [],
      departmentFields: [
        // A virtual column that doesn't exist in items
        { key: 'index', label: 'No' },
        // A column that needs custom formatting
        { key: 'code', label: 'Account Code' },
        { key: 'accountName', label: 'Account Name' },
        { key: 'actions', label: 'Action' },
      ],

      currentPagePosition: 1,
      positionList: [],
      positionFields: [
        // A virtual column that doesn't exist in items
        { key: 'index', label: 'No' },
        // A column that needs custom formatting
        { key: 'code', label: 'Account Code' },
        { key: 'DistributorName', label: 'Distributor Name' },
        { key: 'GLcode', label: 'GL Code' },
        { key: 'actions', label: 'Action' },
      ],

      model: {
        // TAB 1
        divisionCompany: { id: '1', name: 'FIMM' },
        divisionName: '',

        // TAB 2
        departmentCompany: '',
        departmentDivision: '',
        departmentName: '',
        accountName: '',

        // TAB 3
        code: '',
        DistributorName: '',
        GLcode: '',
        positionName: '',
      },

      formOptions: {
        validationErrorClass: 'has-error',
        validateAfterChanged: true,
      },

      Tab2Schema: {
        groups: [
          {
            styleClasses: 'row mt-2',
            fields: [
              {
                type: 'input',
                inputType: 'text',
                model: 'code',
                label: 'Code Table',
                placeholder: 'Enter Account Code',
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                model: 'accountName',
                label: 'Account Name',
                placeholder: 'Enter Account Name',
                styleClasses: 'col-md-4',
              },
            ],
          },
        ],
      },

      Tab3Schema: {
        groups: [
          {
            styleClasses: 'row mt-2',
            fields: [
              {
                type: 'vueMultiSelect',
                model: 'code',
                label: 'Account Code',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.companyList
                },
                styleClasses: 'col-md-4',
              },
              {
                type: 'vueMultiSelect',
                model: 'DistributorName',
                label: 'Distributor Name',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.allowableList
                },
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                model: 'GLcode',
                label: 'GL Code',
                placeholder: 'Enter GL Code',
                styleClasses: 'col-md-4',
              },
            ],
          },
        ],
      },
    }
  },

  methods: {
    handleClick (newTab) {
      this.currentTab = newTab
    }, // end tab

    addDivision () {
      if (this.$refs.Tab1Form.validate()) {
        var divisionInfo = {
          divisionCompany: this.model.divisionCompany.name,
          divisionName: this.model.divisionName,
        }

        this.divisionList.unshift(divisionInfo)
        console.log(JSON.stringify(this.divisionList));

        // eslint-disable-next-line no-unused-expressions
        (this.model.divisionCompany = { id: '1', name: 'FIMM' }),
        (this.model.divisionName = '')
      }
    },
    addDepartment () {
      if (this.$refs.Tab2Form.validate()) {
        var departmentInfo = {
          departmentCompany: this.model.departmentCompany.name,
          departmentDivision: this.model.departmentDivision.name,
          code: this.model.code,
          accountName: this.model.accountName,
        }

        this.departmentList.unshift(departmentInfo)
        console.log(JSON.stringify(this.departmentList));

        // eslint-disable-next-line no-unused-expressions
        (this.model.departmentCompany = ''),
        (this.model.departmentDivision = ''),
        (this.model.code = ''),
        (this.model.accountName = '')
      }
    },

    addPosition () {
      if (this.$refs.Tab3Form.validate()) {
        var positionInfo = {
          code: this.model.code.name,
          DistributorName: this.model.DistributorName.name,
          GLcode: this.model.GLcode.name,
          positionName: this.model.positionName,
        }

        this.positionList.unshift(positionInfo)
        console.log(JSON.stringify(this.positionList));

        // eslint-disable-next-line no-unused-expressions
        (this.model.code = ''),
        (this.model.DistributorName = ''),
        (this.model.GLcode = '')
      }
    },
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

    &_active {
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
      margin-left: 20px;
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
</style>
