<template>
  <va-card>
    <template slot="header">
      <br />
      <div class="row">
        <div class="col">
          <h4 class="card-title">Page Maintenance List</h4>
        </div>
        <div class="col float-right">
          <div class="float-right">
            <h5>
              <b-badge @click="addMaintenance" class="mr-1" variant="primary">
                <i class="fa fa-plus"></i>
              </b-badge>
              <b-badge v-b-toggle.collapse-1 class="mr-1" variant="secondary">
                <i class="fa fa-search"></i>
              </b-badge>
            </h5>
          </div>
        </div>
      </div>
    </template>
    <b-collapse id="collapse-1" class="mt-2">
      <b-card>
        <vue-form-generator :model="model" :schema="schema" ref="firstTabForm">
        </vue-form-generator>
        <button type="button" class="ml-2 btn btn-fill btn-sm btn-primary">
          Search
        </button>
        <button
          @click.prevent="reset"
          type="button"
          class="ml-2 btn btn-fill btn-sm btn-danger"
        >
          Reset
        </button>
      </b-card>
    </b-collapse>
    <br />
    <div class="alignleft">
      <div class="flex xs12 md3 left">
        <va-input
          :value="term"
          :placeholder="$t('Search')"
          @input="search"
          removable
        >
          <va-icon name="fa fa-search" slot="prepend" />
        </va-input>
      </div>
    </div>

    <!-- Main table element -->
    <div class="col-ml-2">
      <va-data-table
        :fields="fields"
        :data="filteredData"
        :per-page="parseInt(perPage)"
      >
        <!-- A virtual column -->
        <template slot="no" slot-scope="row">
          {{ row.rowIndex + 1 }}
        </template>
        <template #cell(actions)="row">
          <h4>
            <span v-on:click="edit(row)" class="badge badge-primary mr-1">
              <i class="fa fa-edit"></i
            ></span>
          </h4>
        </template>
      </va-data-table>
    </div>
    <div class="row col ml-2 mt-2">
      <b-pagination
        size="md"
        :total-rows="this.items.length"
        :per-page="perPage"
        v-model="currentPage"
      />
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
    <button
      @click="back"
      type="button"
      class="float-left btn btn-primary btn-fill btn-md"
    >
      <i class="fa fa-step-backward" /> &nbsp; Back
    </button>
  </va-card>
</template>
<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg.css";

Vue.use(VueFormGenerator);

export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
    addMaintenance() {
      this.$router.push("/admin/setting-pageMaintenance");
    },
    companyDetail() {
      this.$router.push("/company/company-detail");
    },
    onClick() {
      console.log("jhdfj");
      this.$router.push("/admin/company-registration");
    },
    details(item) {
      console.log(item);
      this.$router.push("/admin/company-details");
    },

    reset() {
      this.model.companyName = "";
      this.model.regno = "";
      this.model.phoneno = "";
      this.model.status = "";
    },

    edit(item) {
      console.log(item);
      // this.$router.push("/admin/setting-pageMaintenance");
      this.$router.push({
        name: "Setting Page Maintenance edit",
        params: { id: "2" }
      });
    }
  },

  computed: {
    fields() {
      return [
        {
          name: "__slot:marker",
          width: "30px",
          dataClass: "text-center"
        },
        {
          name: "__slot:no",
          title: "No"
        },
        {
          name: "dateCreated",
          title: "Date Creation"
          // width: "30%"
        },
        {
          name: "title",
          // title: this.$t('tables.headings.date'),
          width: "20%"
        },
        {
          name: "startDate",
          title: "Start Date"
          // width: "40%"
        },
        {
          name: "endDate",
          title: "End Date"
          // width: "40%"
        },
        {
          name: "createdBy",
          title: "Creation By"
          // width: "40%"
        },
        {
          name: "status",
          title: "Status"
          // width: "40%"
        },
        {
          name: "__slot:actions",
          title: "Action",
          dataClass: "text-right"
        }
      ];
    },
    filteredData() {
      if (!this.term || this.term.length < 1) {
        return this.items;
      }

      return this.items.filter(item => {
        return item.title.toLowerCase().startsWith(this.term.toLowerCase());
      });
    }
  },
  data() {
    return {
      moduleList: [
        {
          module: "All",
          id: "0",
          selected: false
        },
        {
          module: "Administration",
          id: "1",
          selected: false
        },
        {
          module: "Distributor Management",
          id: "2",
          selected: false
        },
        {
          module: "Consultant Management",
          id: "3",
          selected: false
        },
        {
          module: "Consultant Alert Management",
          id: "4",
          selected: false
        },
        {
          module: "Fund Management",
          id: "5",
          selected: false
        },
        {
          module: "CPD Management",
          id: "6",
          selected: false
        },
        {
          module: "Finance Management",
          id: "7",
          selected: false
        },
        {
          module: "AMSF Management",
          id: "7",
          selected: false
        }
      ],
      audienceList: [
        {
          name: "FIMM",
          id: "1",
          selected: false
        },
        {
          name: "3rd Party",
          id: "2",
          selected: false
        },
        {
          name: "Training Provider",
          id: "3",
          selected: false
        },
        {
          name: "Distributor",
          id: "4",
          selected: false
        },
        {
          name: "Consultant",
          id: "4",
          selected: false
        }
      ],
      fields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "No" },
        { key: "date", label: "Date", sortable: true },
        { key: "startDate", label: "Start Date", sortable: false },
        { key: "endDate", label: "End Date", sortable: false },
        { key: "audience", label: "Audience", sortable: false },
        { key: "module", label: "Module", sortable: false },
        { key: "creationBy", label: "Creation By", sortable: false },
        { key: "actions", label: "Actions" }
      ],
      items: [
        {
          no: 1,
          date: "31-12-2020",
          startDate: "01-01-2021",
          endDate: "10-01-2021",
          audience: "FIMM",
          module: "Consultant Management | Distributor Management",
          creationBy: "Sazali Bin Abu"
        },
        {
          no: 2,
          date: "31-12-2020",
          startDate: "01-01-2021",
          endDate: "10-01-2021",
          audience: "FIMM",
          module: "Consultant Management | Distributor Management",
          creationBy: "Sazali Bin Abu"
        },
        {
          no: 3,
          date: "31-12-2020",
          startDate: "01-01-2021",
          endDate: "10-01-2021",
          audience: "FIMM",
          module: "Consultant Management | Distributor Management",
          creationBy: "Sazali Bin Abu"
        }
      ],
      tableVariants: [
        "primary",
        "secondary",
        "info",
        "danger",
        "warning",
        "success",
        "light",
        "dark"
      ],
      currentPage: 1,
      perPage: 5,
      filter: null,

      model: {
        startDate: "",
        endDate: "",
        audience: "",
        module: ""
      },

      schema: {
        groups: [
          {
            styleClasses: "row",
            fields: [
              {
                type: "input",
                inputType: "text",
                model: "startDate",
                label: "Start Date",
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "text",
                model: "endDate",
                label: "End Date",
                styleClasses: "col-md-6"
              },
              {
                type: "vueMultiSelect",
                model: "audience",
                label: "Audience",
                placeholder: "Enter Audience",
                required: true,
                validator: "required",
                styleClasses: "col-md-6",
                selectOptions: {
                  multiple: true,
                  key: "name",
                  label: "name",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.audienceList;
                }
              },
              {
                type: "vueMultiSelect",
                model: "module",
                label: "Module",
                placeholder: "Enter Your Module",
                required: true,
                validator: "required",
                styleClasses: "col-md-6",
                selectOptions: {
                  multiple: true,
                  key: "module",
                  label: "module",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.moduleList;
                }
              }
              //   {
              //     type: "select",
              //     label: "module",
              //     model: "module",
              //     styleClasses: "col-md-6",

              //     values: (model, schema) => {
              //       return this.status;
              //     }
              //   }
            ]
          }
        ]
        // groups: [
        //   {
        //     fields: [
        //       {
        //         type: "submit",
        //         buttonText: "Search",
        //         onSubmit(model) {
        //           console.log(model);
        //         },
        //         label: "Search",
        //         styleClasses: "col-1"
        //         // validateBeforeSubmit: true
        //       },
        //       {
        //         type: "submit",
        //         buttonText: "Reset",
        //         onSubmit(model) {
        //           console.log(model);
        //           model.companyName = "";
        //           model.regno = "";
        //           model.phoneno = "";
        //           model.status = "";
        //         },
        //         label: "Search",
        //         styleClasses: "col-1"
        //         // validateBeforeSubmit: true
        //       }
        //     ]
        //   }
        // ]
      },

      type: [
        {
          id: "UTMC",
          name: "UTMC"
        },
        {
          id: "IUTA",
          name: "IUTA"
        },
        {
          id: "CUTA",
          name: "CUTA"
        }
      ],
      status: [
        {
          id: "Pending",
          name: "Pending"
        },
        {
          id: "Reviewed",
          name: "Reviewed"
        },
        {
          id: "Returned",
          name: "Returned"
        },
        {
          id: "Approved",
          name: "Approved"
        },
        {
          id: "Rejected",
          name: "Rejected"
        },
        {
          id: "Registered",
          name: "Registered"
        }
      ],
      category: [
        {
          id: "Agent",
          name: "Agent"
        },
        {
          id: "Employee",
          name: "Employee"
        }
      ]
    };
  }
};
</script>
<style>
</style>
