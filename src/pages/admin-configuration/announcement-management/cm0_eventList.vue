<template>
  <va-card>
    <template slot="header">
      <br />
      <div class="row">
        <div class="col">
          <h4 class="card-title">List of Event</h4>
        </div>
        <div class="col float-right">
          <div class="float-right">
            <h5>
              <b-badge
                v-b-tooltip.hover
                title="Approval Setting"
                @click.prevent="setting"
                class="mr-1"
                variant="dark"
              >
                <i class="fa fa-cog"></i>
              </b-badge>
              <b-badge
                v-b-tooltip.hover
                title="search"
                v-b-toggle.collapse-1
                class="mr-1"
                variant="secondary"
              >
                <i class="fa fa-search"></i>
              </b-badge>
              <span
                v-b-tooltip.hover
                title="create"
                v-on:click="create"
                class="badge badge-primary"
              >
                <i class="fa fa-plus"></i
              ></span>
            </h5>
          </div>
        </div>
      </div>
    </template>
    <b-collapse id="collapse-1" class="mt-2">
      <b-card>
        <vue-form-generator :model="model" :schema="schema" ref="firstTabForm">
        </vue-form-generator>
        <button type="button" class="ml-2 btn btn-sm btn-primary">
          Search
        </button>
        <button
          @click.prevent="reset"
          type="button"
          class="ml-2 btn btn-sm btn-danger"
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
          :placeholder="$t('Search By Event')"
          @input="search"
          removable
        >
          <va-icon name="fa fa-search" slot="prepend" />
        </va-input>
      </div>
    </div>
    <br />
    <!-- Main table element -->
    <!-- <div class="col-ml-2"> -->
    <va-data-table
      :fields="fields"
      :data="filteredData"
      :per-page="parseInt(perPage)"
    >
      <!-- A virtual column -->
      <template slot="no" slot-scope="row">
        {{ row.rowIndex + 1 }}
      </template>
      <template slot="ANNOUNCEMENT_STATUS" slot-scope="props">
        <div v-if="props.rowData.ANNOUNCEMENT_STATUS == 1">
          Draft
        </div>
        <div v-if="props.rowData.ANNOUNCEMENT_STATUS == 2">
          Publish
        </div>
      </template>
      <template slot="actions" slot-scope="props">
        <h4 class="mt-2">
          <span
            v-if="props.rowData.ANNOUNCEMENT_STATUS == 2"
            v-b-tooltip.hover
            title="detail"
            v-on:click="details(props.rowData)"
            class="badge badge-success mr-2"
          >
            <i class="fa fa-bars"></i
          ></span>
          <span
            v-if="props.rowData.ANNOUNCEMENT_STATUS == 1"
            v-b-tooltip.hover
            title="edit"
            v-on:click="edit(props.rowData)"
            class="badge badge-primary mr-2"
          >
            <i class="fa fa-edit"></i
          ></span>
          <span
            v-b-tooltip.hover
            title="delete"
            v-on:click="deleteItem(props.rowData)"
            class="badge badge-danger mr-1"
          >
            <i class="fa fa-trash"></i
          ></span>
        </h4>
      </template>
    </va-data-table>
    <!-- </div> -->
    <br />
    <div class="flex xs12 md3 left">
      <va-select
        v-model="perPage"
        :label="$t('tables.perPage')"
        :options="perPageOptions"
        noClear
      />
    </div>
  </va-card>
</template>
<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg.css";
import { debounce } from "lodash";
import * as servicesModule0 from "../../../app/module0/services";

Vue.use(VueFormGenerator);

export default {
  mounted() {
    this.getAllEvent();
  },
  methods: {
    async getAllEvent() {
      console.log("get all event : ");
      const response = await servicesModule0.getAllEvent();
      this.items = response;
      //console.log("get all event : " + response);
    },

    search: debounce(function(term) {
      this.term = term;
    }, 400),

    setting() {
      this.$router.push("/admin/approver_setting");
    },

    details() {
      console.log("jhdfj");
      this.$router.push("/admin/notification_detail");
    },

    deleteItem(data) {
      console.log(JSON.stringify(data));
    },

    edit(data) {
      // this.$router.push("/admin/announcement_details");
      this.$router.push({
        name: "update-event",
        params: { MANAGE_EVENT_ID: data.MANAGE_EVENT_ID }
      });
    },

    create() {
      this.$router.push("/fimm/new-event");
    },

    reset() {}
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
          // width: "30px"
          // height: "45px"
          // dataClass: "text-center"
        },
        {
          name: "EVENT_TITLE",
          title: "Event Title"
        },
        // {
        //   name: "EVENT_CONTENT",
        //   title: "Event Content"
        //   // width: "30%"
        // },
        {
          name: "EVENT_DATE_START",
          title: "Start Date"
          // width: "40%"
        },
        {
          name: "EVENT_DATE_END",
          title: "End Date"
          // width: "40%"
        },
        // {
        //   name: "EVENT_DATE_END",
        //   title: "End Date"
        //   // width: "40%"
        // },
        // {
        //   name: "CREATE_BY",
        //   title: "Creation By"
        //   // width: "40%"
        // },
        {
          name: "__slot:ANNOUNCEMENT_STATUS",
          title: "Status"
          // width: "40%"
        },
        // {
        //   name: "__slot:filename",
        //   title: "Document"s
        //   // width: "20%"
        // },
        {
          name: "__slot:actions",
          title: "Action",
          dataClass: "justify-content-center",
          width: "15%"
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
      term: null,
      perPage: "6",
      perPageOptions: ["4", "6", "10", "20"],
      items: [
        {
          no: 1,
          title:
            "Appointment of Chief Executive Officer hgfhfghfghfg dfgdfgdgdfg dfgdfgdfgdgdf sdgsgsdfsdfsdfsdfsdf sdfsdfsdf",
          content:
            "Mr. Kaleon Leong is the newly appointed Chief Executive Officer of the Federation of Investment Managers Malaysia (FIMM) effective 1 October 2018. He comes with over 20 years of experience in various senior management roles in the Malaysian investment management industry, specialising in the fields of unit trust and asset management, regulations and auditing.",
          dateCreated: "24-11-2020",
          createdBy: "Nur Suhaila",
          status: "Draft",
          startDate: "24-11-2020",
          endDate: "24-12-2020"
        },
        {
          no: 2,
          title: "Appointment of Chief Executive Officer",
          content:
            "Mr. Kaleon Leong is the newly appointed Chief Executive Officer of the Federation of Investment Managers Malaysia (FIMM) effective 1 October 2018. He comes with over 20 years of experience in various senior management roles in the Malaysian investment management industry, specialising in the fields of unit trust and asset management, regulations and auditing.",
          dateCreated: "24-11-2020",
          createdBy: "Nur Suhaila",
          status: "Draft",
          startDate: "24-11-2020",
          endDate: "24-12-2020"
        },
        {
          no: 3,
          title: "Appointment of Chief Executive Officer",
          content:
            "Mr. Kaleon Leong is the newly appointed Chief Executive Officer of the Federation of Investment Managers Malaysia (FIMM) effective 1 October 2018. He comes with over 20 years of experience in various senior management roles in the Malaysian investment management industry, specialising in the fields of unit trust and asset management, regulations and auditing.",
          dateCreated: "24-11-2020",
          createdBy: "Nur Suhaila",
          status: "Draft",
          startDate: "24-11-2020",
          endDate: "24-12-2020"
        },
        {
          no: 4,
          title: "Appointment of Chief Executive Officer",
          content:
            "Mr. Kaleon Leong is the newly appointed Chief Executive Officer of the Federation of Investment Managers Malaysia (FIMM) effective 1 October 2018. He comes with over 20 years of experience in various senior management roles in the Malaysian investment management industry, specialising in the fields of unit trust and asset management, regulations and auditing.",
          dateCreated: "24-11-2020",
          createdBy: "Nur Suhaila",
          status: "Draft",
          startDate: "24-11-2020",
          endDate: "24-12-2020"
        },
        {
          no: 5,
          title: "Appointment of Chief Executive Officer",
          content:
            "Mr. Kaleon Leong is the newly appointed Chief Executive Officer of the Federation of Investment Managers Malaysia (FIMM) effective 1 October 2018. He comes with over 20 years of experience in various senior management roles in the Malaysian investment management industry, specialising in the fields of unit trust and asset management, regulations and auditing.",
          dateCreated: "24-11-2020",
          createdBy: "Ahmad",
          status: "Publish",
          startDate: "24-11-2020",
          endDate: "24-12-2020"
        },
        {
          no: 6,
          title: "Appointment of Chief Executive Officer",
          content:
            "Mr. Kaleon Leong is the newly appointed Chief Executive Officer of the Federation of Investment Managers Malaysia (FIMM) effective 1 October 2018. He comes with over 20 years of experience in various senior management roles in the Malaysian investment management industry, specialising in the fields of unit trust and asset management, regulations and auditing.",
          dateCreated: "24-11-2020",
          createdBy: "Ahmad",
          status: "Publish",
          startDate: "24-11-2020",
          endDate: "24-12-2020"
        },
        {
          no: 7,
          title: "Appointment of Chief Executive Officer",
          content:
            "Mr. Kaleon Leong is the newly appointed Chief Executive Officer of the Federation of Investment Managers Malaysia (FIMM) effective 1 October 2018. He comes with over 20 years of experience in various senior management roles in the Malaysian investment management industry, specialising in the fields of unit trust and asset management, regulations and auditing.",
          dateCreated: "24-11-2020",
          createdBy: "Ahmad",
          status: "Publish",
          startDate: "24-11-2020",
          endDate: "24-12-2020"
        }
      ],

      model: {
        title: "",
        dateCreated: "",
        createdBy: "",
        status: ""
      },

      schema: {
        groups: [
          {
            styleClasses: "row",
            fields: [
              {
                type: "input",
                inputType: "text",
                model: "title",
                label: "Title",
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "date",
                label: "Date Created",
                model: "dateCreated",
                format: "YYYY-MM-DD HH:mm:ss",
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "text",
                model: "createdBy",
                label: "Created By",
                styleClasses: "col-md-6"
              },
              {
                type: "select",
                label: "Status",
                model: "status",
                styleClasses: "col-md-6",

                values: (model, schema) => {
                  return this.status;
                }
              }
            ]
          }
        ]
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
          id: "Publish",
          name: "Publish"
        },
        {
          id: "Draft",
          name: "Draft"
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
<style lang="scss">
.va-data-table__pagination {
  margin-top: 1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: inherit;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: flex-end;
}

.alignleft {
  display: flex;
  justify-content: flex-end;
}
</style>
