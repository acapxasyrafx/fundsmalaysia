/* eslint-disable no-unused-expressions */
<template>
  <va-card>
    <!-- Country -->
  <!-- <vudal name="simpleModalEditCountry " class="widthModal">
      <div class="header">Edit Country<i class="close icon">&times;</i></div>
      <div class="content">
        <vue-form-generator
          :model="model"
          :schema="editCountry"
          :options="formOptions" />
      </div>
      <div class="actions">
        <button  type="button" class="cancel vudal-btn mr-2 btn btn-danger btn-fill btn-md"><i class="fa fa-times" /> &nbsp; Close </button>
        <button @click="updateCountryAPI" type="button" class="cancel vudal-btn mr-2 btn btn-primary btn-fill btn-md"><i class="fa fa-edit" /> &nbsp; Update </button>
      </div>
   </vudal> -->

    <h4 slot="header" class="card-title">Address Setting</h4>
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
      <!-- <div class="content"> -->
      <div v-if="currentTab === 'tab1'">
        <div class="ml-5">
          <br />
          <vue-form-generator
            :model="model"
            :schema="Tab1Schema"
            :options="formOptions"
            ref="Tab1Form"
          >
          </vue-form-generator>
          <br />
          <div class="text-center">
            <button
              @click="addCountry"
              type="button"
              class="btn btn-warning btn-fill btn-md"
            >
              <i class="fa fa-plus" /> &nbsp; Add Parameter
            </button>
          </div>
          <br />
          <h4>List of Country</h4>
          <!-- list -->
          <va-card class="mt-2">
            <va-data-table
              :fields="countryfields"
              :data="filteredDataCountry"
              :per-page="parseInt(perPage)"
            >
              <template slot="no" slot-scope="row">
                {{ row.rowIndex + 1 }}
              </template>

              <template slot="actions" slot-scope="props">
                <h4 class="mt-2">
                 <span class="badge badge-primary mr-1" v-on:click="editCountry(props.rowData)">
                   <i class="fa fa-edit"></i></span>
                  <span class="badge badge-danger mr-1" v-on:click="deleteCountry(props.rowData)">
                    <i class="fa fa-trash"></i></span>
                </h4>
              </template>
            </va-data-table>
            <br />
            <!-- <div class="float-left">
              <button
                @click="addPostcode"
                type="button"
                class="btn btn-primary btn-fill btn-md"
              >
                <i class="fa fa-upload" /> &nbsp; Bulk Upload
              </button>
            </div> -->
          </va-card>
        </div>
      </div>

      <!-- State --> 
      <div v-if="currentTab === 'tab2'">
        <!-- <div class="ml-5">
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
              @click="addState"
              type="button"
              class="btn btn-warning btn-fill btn-md"
            >
              <i class="fa fa-plus" /> &nbsp; Add Parameter
            </button>
          </div>
          <br />

          <h4>List of State</h4>
          <va-card class="mt-2">
            <va-data-table
              :fields="statefields"
              :data="filteredDataState"
              :per-page="parseInt(perPage)"
            >
              <template slot="no" slot-scope="row">
                {{ row.rowIndex + 1 }}
              </template>
              <template slot="actions" slot-scope="">
                <h4 class="mt-2">
                  <span class="badge badge-primary mr-1"
                  ><i class="fa fa-edit"></i
                  ></span>
                  <span class="badge badge-danger mr-1">
                    <i class="fa fa-trash"></i
                    ></span>
                </h4>
              </template>
            </va-data-table>
            <div class="float-left">
              <button
                @click="addPostcode"
                type="button"
                class="btn btn-primary btn-fill btn-md"
              >
                <i class="fa fa-upload" /> &nbsp; Bulk Upload
              </button>
            </div>
          </va-card>
        </div> -->
      </div>

<!-- Postcode --> 

      <div v-if="currentTab === 'tab3'">
        <!-- <div class="ml-5">
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
              @click="addPostcode"
              type="button"
              class="btn btn-warning btn-fill btn-md"
            >
              <i class="fa fa-plus" /> &nbsp; Add Parameter
            </button>
          </div>
          <br />
          
          <h4>List of Postcode</h4>
          <va-card class="mt-2">
            <va-data-table
              :fields="postcodefields"
              :data="filteredDataPostcode"
              :per-page="parseInt(perPage)"
            >
              <template slot="no" slot-scope="row">
                {{ row.rowIndex + 1 }}
              </template>
              <template slot="actions" slot-scope="">
                <h4 class="mt-2">
                  <span class="badge badge-primary mr-1"
                  ><i class="fa fa-edit"></i
                  ></span>
                  <span class="badge badge-danger mr-1">
                    <i class="fa fa-trash"></i
                    ></span>
                </h4>
              </template>
            </va-data-table>
            <br />
            <div class="float-left">
              <button
                @click="addPostcode"
                type="button"
                class="btn btn-primary btn-fill btn-md"
              >
                <i class="fa fa-upload" /> &nbsp; Bulk Upload
              </button>
            </div>
          </va-card>
        </div> -->
      </div>
      <!-- </div> -->
    </div>
  </va-card>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import 'vue-form-generator/dist/vfg.css'
import Vudal from 'vudal'
import * as servicesModule0 from "../../../app/module0/services"
import Tabs from 'vue-tabs-with-active-line'
const TABS = [
  { title: 'Setting 1 : Country', value: 'tab1' },
  { title: 'Setting 2 : State', value: 'tab2' },
  { title: 'Setting 3 : Postcode', value: 'tab3' },
]
export default {

  mounted() {
    this.getAllCountry();

  },
  components: {
    Tabs,
    Vudal,
  },

  computed: {
    countryfields () {
      return [
        {
          name: '__slot:marker',
          width: '30px',
          dataClass: 'text-center',
        },
        {
          name: '__slot:no',
          title: 'No',
        },
        {
          name: 'SET_PARAM',
          title: 'Country Name',
        },
        {
          name: 'SET_CODE',
          title: 'Country Code',
        },
        {
          name: '__slot:actions',
          title: 'Action',
          dataClass: 'justify-content-center',
          width: '15%',
        },
      ]
    },
    filteredDataCountry () {
      if (!this.term || this.term.length < 1) {
        return this.CountryList
      }

      return this.CountryList.filter(item => {
        return item.title.toLowerCase().startsWith(this.term.toLowerCase())
      })
    },
 
  },

  data () {
    return {
      term: null,
      perPage: '6',
      perPageOptions: ['4', '6', '10', '20'],
      tabs: TABS,
      currentTab: 'tab1',
      CountryList:[],

    
      model: {
        // TAB 1
        SET_PARAM: '',
        SET_CODE: '',
     
      },

      formOptions: {
        validateAfterChanged: true,
      },

      Tab1Schema: {
        groups: [
          {
            styleClasses: 'row mt-2',
            fields: [
              {
                type: 'input',
                inputType: 'Text',
                model: 'SET_PARAM',
                label: 'Country Name',
                placeholder: 'Enter country Name',
                required: true,
                styleClasses: 'col-md-8',
                hint: 'e.g. Malaysia ',
              },
              {
                type: 'input',
                inputType: 'text',
                model: 'SET_CODE',
                label: 'Country Code',
                placeholder: 'Enter country code',
                styleClasses: 'col-md-2',
                hint: 'e.g. +06 ',
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
 
 //Add Country

    getAllCountry: async function() {
    const response = await servicesModule0.getAllSettingGeneralList('COUNTRY');
    this.CountryList = response;
    },

    async addCountry () {
    if (this.$refs.Tab1Form.validate()) {
      const data = new FormData()
      data.append('SET_PARAM', this.model.SET_PARAM)
	  data.append('SET_CODE', this.model.SET_CODE)
      data.append('SET_TYPE','COUNTRY' )
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await servicesModule0.createSettingGeneral(data)
        this.getAllCountry()
      } catch (error) {
        console.log(error)
      }
    }
    },

  },
}

</script>

<style lang="scss">
.app-layout__main {
  background: #e8e8e8;
}

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

.inline {
  display: inline-flex;
  float: right;
}
</style>
