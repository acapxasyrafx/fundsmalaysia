<template>
  <div class="">
    <!-- <div class="container-fluid"> -->
    <vudal name="simpleModal" class="widthModal">
      <div class="header">
        Add Exception
        <i class="close icon">&times;</i>
        <br />
      </div>
      <div class="content">
        <vue-form-generator
          :model="model"
          :schema="addExceptionSchema"
          :options="formOptions"
          ref="exceptionForm"
        />
      </div>
      <div class="actions">
        <button
          type="button"
          class="cancel vudal-btn mr-2 btn btn-danger btn-fill btn-md"
        >
          <i class="fa fa-times" /> &nbsp; Close
        </button>
        <button
          @click="add"
          type="button"
          class="mr-2 btn btn-primary btn-fill btn-md"
        >
          <i class="fa fa-plus" /> &nbsp; Add
        </button>
      </div>
    </vudal>
    <vudal name="simpleModalEdit" class="widthModal">
      <div class="header">
        Edit Exception
        <i class="close icon">&times;</i>
        <br />
      </div>
      <div class="content">
        <vue-form-generator
          :model="model"
          :schema="editExceptionSchema"
          :options="formOptions"
        />
      </div>
      <div class="actions">
        <button
          type="button"
          class="cancel vudal-btn mr-2 btn btn-danger btn-fill btn-md"
        >
          <i class="fa fa-times" /> &nbsp; Close
        </button>
        <button
          @click="editExceptionAPI"
          type="button"
          class="cancel vudal-btn mr-2 btn btn-primary btn-fill btn-md"
        >
          <i class="fa fa-edit" /> &nbsp; Edit
        </button>
      </div>
    </vudal>
    <div class="row">
      <div class="col-12">
        <va-card>
          <h3 class="card-title">Calendar Management</h3>
          <br />
          <div class="row justify-content-center">
            <div class="widthCalendar">
              <FullCalendar :options="calendarOptions" />
            </div>
          </div>
          <br /><br />
          <div class="float-right">
            <input
              ref="excelFile"
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              @change="uploadExcel($event)"
              id="fileUpload"
              type="file"
              hidden
            />
            <button
              class="mr-2 btn btn-success btn-fill btn-md"
              @click="chooseFiles()"
            >
              <i class="fa fa-file-excel-o" /> &nbsp;Upload Excel
            </button>
            <button
              @click="addException"
              type="button"
              class="btn btn-primary btn-fill btn-md"
            >
              <i class="fa fa-plus" /> &nbsp; Add Exception
            </button>
          </div>
          <br /><br /><br />
          <!-- <div class="col float-right"> -->
          <div class="float-right">
            <h5>
              <b-badge
                v-b-tooltip.hover
                title="search"
                v-b-toggle.collapse-1
                class="mr-1"
                variant="secondary"
              >
                <i class="fa fa-search"></i>
              </b-badge>
            </h5>
          </div>
          <!-- </div> -->

          <!-- <br /> -->
          <!-- <div class="col float-left"> -->
          <div class="float-left">
            <va-input
              :value="term"
              :placeholder="$t('Search')"
              @input="search"
              removable
            >
              <va-icon name="fa fa-search" slot="prepend" />
            </va-input>
          </div>
          <b-collapse id="collapse-1" class="mt-2">
            <br /><br /><br />
            <b-card>
              <vue-form-generator
                :model="model"
                :schema="schema"
                ref="firstTabForm"
              >
              </vue-form-generator>
              <br />
              <button
                @click="filterException"
                type="button"
                class="ml-2 btn btn-sm btn-primary"
              >
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
          <!-- </div> -->
          <br /><br /><br />
          <va-card>
            <div class=" justify-content-center">
              <va-data-table
                :fields="fields"
                :data="filteredData"
                :per-page="parseInt(perPage)"
                clickable
              >
                <template slot="no" slot-scope="row">
                  {{ row.rowIndex + 1 }}
                </template>
                <template slot="actions" slot-scope="props">
                  <h4 class="mt-2">
                    <span
                      v-b-tooltip.hover
                      title="edit"
                      @click="editException(props.rowData)"
                      class="badge badge-primary mr-2"
                    >
                      <i class="fa fa-edit"></i
                    ></span>
                  </h4>
                  <h4 class="mt-2">
                    <span
                      v-b-tooltip.hover
                      title="delete"
                      @click="deleteException(props.rowData)"
                      class="badge badge-danger mr-1"
                    >
                      <i class="fa fa-minus-circle"></i
                    ></span>
                  </h4>
                </template>
              </va-data-table>
              <!-- <div class="flex xs12 md float-right"> -->
              <va-select
                class="col-md-4 float-right"
                v-model="perPage"
                :label="$t('tables.perPage')"
                :options="perPageOptions"
                noClear
              />
              <!-- </div> -->
            </div>
          </va-card>
        </va-card>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Vudal from "vudal";
import VfgFunctionalDate from "../../component/VfgFunctionalCalendar.vue";
import Vue from "vue";
import * as servicesModule0 from "../../../app/module0/services";
import moment from "moment";
import { debounce } from "lodash";
Vue.component("field-vfg-functional-date", VfgFunctionalDate);
export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
    Vudal
  },

  mounted() {
    this.getAllException();
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
          name: "CALENDAR_NAME",
          title: "Name"
          // width: "30%"
        },
        {
          name: "CALENDAR_DATE_START",
          title: "Start Date"
          // title: this.$t('tables.headings.date'),
          // width: "30%"
        },
        {
          name: "CALENDAR_DATE_END",
          title: "Finish Date"
          // width: "40%"
        },
        {
          name: "CALENDAR_DESCRIPTION",
          title: "Description"
          // width: "40%"
        },
        {
          name: "__slot:actions",
          title: "Action",
          dataClass: "inline"
        }
      ];
    },
    filteredData() {
      if (!this.term || this.term.length < 1) {
        return this.holidayList;
      }

      // return this.holidayList.filter(item => {
      //   return item.CALENDAR_NAME.toLowerCase().startsWith(
      //     this.term.toLowerCase()
      //   );
      // });
      return this.holidayList.filter(item => {
        return this.term
          .toLowerCase()
          .split(" ")
          .every(
            v =>
              item.CALENDAR_NAME.toLowerCase().includes(v) ||
              item.CALENDAR_DATE_START.toLowerCase().includes(v) ||
              item.CALENDAR_DATE_END.toLowerCase().includes(v) ||
              item.CALENDAR_DESCRIPTION.toLowerCase().includes(v)
          );
      });
    }
  },
  data() {
    return {
      id: null,
      excelFile: "",
      term: null,
      perPage: "6",
      perPageOptions: ["4", "6", "10", "20"],
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        backgroundColor: "#ff0000",
        eventColor: "red",
        dateClick: this.handleDateClick,
        eventClick: this.handleDateClick,
        events: [
          { title: "cuti 1", date: "2020-12-21", display: "background" }
          // { title: 'Available', date: '2020-12-12', display: 'background', },
        ],
        dayRender: function(date, cell) {
          var today = new Date();
          if (date.getDate() === today.getDate()) {
            cell.css("background-color", "red");
          }
        }
      },
      holidayList: [],
      filter: "",
      currentPage: 1,
      perPageSelected: 5,

      editExceptionSchema: {
        groups: [
          {
            styleClasses: "row",
            fields: [
              {
                type: "input",
                inputType: "text",
                label: "Name",
                model: "modelEdit.CALENDAR_NAME",
                placeholder: "Enter name",
                required: true,
                validator: "string",
                styleClasses: "col-md-12"
              },
              {
                labels: "Start Date",
                type: "vfg-functional-date",
                placeholder: "Start Date",
                model: "modelEdit.CALENDAR_DATE_START",
                noLabel: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-12"
                // required: true,
                // validator: "string"
              },
              {
                labels: "Finish Date",
                type: "vfg-functional-date",
                placeholder: "Finish Date",
                model: "modelEdit.CALENDAR_DATE_END",
                noLabel: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-12"
                // required: true,
                // validator: "string"
              },
              {
                type: "input",
                inputType: "text",
                label: "Description",
                model: "modelEdit.CALENDAR_DESCRIPTION",
                placeholder: "Enter discription",
                required: true,
                validator: "string",
                styleClasses: "col-md-12"
              }
            ]
          }
        ]
      },
      addExceptionSchema: {
        groups: [
          {
            styleClasses: "row",
            fields: [
              {
                type: "input",
                inputType: "text",
                label: "Name",
                model: "modelAdd.CALENDAR_NAME",
                placeholder: "Enter name",
                required: true,
                validator: "string",
                styleClasses: "col-md-12"
              },
              {
                labels: "Start Date",
                type: "vfg-functional-date",
                placeholder: "Start Date",
                model: "modelAdd.CALENDAR_DATE_START",
                typeable: false,
                noClearButton: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-12"
                // required: true,
                // validator: "string"
              },
              {
                labels: "Finish Date",
                type: "vfg-functional-date",
                placeholder: "Finish Date",
                model: "modelAdd.CALENDAR_DATE_END",
                typeable: false,
                noClearButton: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-12"
                //   required: true,
                //   validator: "string"
              },
              {
                type: "input",
                inputType: "text",
                label: "Description",
                model: "modelAdd.CALENDAR_DESCRIPTION",
                placeholder: "Enter discription",
                required: true,
                validator: "string",
                styleClasses: "col-md-12"
              }
            ]
          }
        ]
      },

      schema: {
        groups: [
          {
            styleClasses: "row",
            fields: [
              {
                type: "input",
                inputType: "text",
                model: "modelFilter.CALENDAR_NAME",
                label: "Name",
                styleClasses: "col-md-6"
              },
              {
                labels: "Start Date",
                type: "vfg-functional-date",
                placeholder: "Start Date",
                model: "modelFilter.CALENDAR_DATE_START",
                noLabel: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-6"
              },
              {
                labels: "Finish Date",
                type: "vfg-functional-date",
                placeholder: "Finish Date",
                model: "modelFilter.CALENDAR_DATE_END",
                noLabel: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "text",
                model: "modelFilter.CALENDAR_DESCRIPTION",
                label: "Description",
                styleClasses: "col-md-6"
              }
            ]
          }
        ]
      },

      formOptions: {
        // validationErrorClass: "has-error",
        // validationSuccessClass: "has-`success`",
        validateAfterChanged: true
      },

      model: {
        modelAdd: {
          CALENDAR_NAME: "",
          CALENDAR_DATE_START: null,
          CALENDAR_DATE_END: null,
          CALENDAR_DESCRIPTION: ""
        },

        modelEdit: {
          SETTING_CALENDAR_ID: null,
          CALENDAR_NAME: "",
          CALENDAR_DATE_START: null,
          CALENDAR_DATE_END: null,
          CALENDAR_DESCRIPTION: ""
        },

        modelFilter: {
          CALENDAR_NAME: "",
          CALENDAR_DATE_START: null,
          CALENDAR_DATE_END: null,
          CALENDAR_DESCRIPTION: ""
        }
      },

      dataExcel: []
    };
  },

  methods: {
    search: debounce(function(term) {
      this.term = term;
    }, 400),
    async filterException() {
      try {
        //**** format date if date not null */
        if (this.model.modelFilter.CALENDAR_DATE_START != null) {
          this.model.modelFilter.CALENDAR_DATE_START = moment(
            this.model.modelFilter.CALENDAR_DATE_START
          ).format("YYYY-MM-DD");
        }
        if (this.model.modelFilter.CALENDAR_DATE_END != null) {
          this.model.modelFilter.CALENDAR_DATE_END = moment(
            this.model.modelFilter.CALENDAR_DATE_END
          ).format("YYYY-MM-DD");
        }

        const response = await servicesModule0.filterException(
          this.model.modelFilter
        );
        if (response != "error") {
          this.holidayList = response;
        }
      } catch (error) {}
    },
    async getAllException() {
      const response = await servicesModule0.getAllExceptionList();
      if (response != "error") {
        this.holidayList = response;
      }
    },

    handleDateClick: function(calEvent, jsEvent, view) {
      // alert("testClick");
    },

    addException() {
      this.$modals.simpleModal.$show();
    },

    async add() {
      if (this.$refs.exceptionForm.validate()) {
        const data = new FormData();
        data.append("CALENDAR_NAME", this.model.modelAdd.CALENDAR_NAME);
        data.append(
          "CALENDAR_DATE_START",
          moment(this.model.modelAdd.CALENDAR_DATE_START).format("YYYY-MM-DD")
        );
        data.append(
          "CALENDAR_DATE_END",
          moment(this.model.modelAdd.CALENDAR_DATE_END).format("YYYY-MM-DD")
        );
        data.append(
          "CALENDAR_DESCRIPTION",
          this.model.modelAdd.CALENDAR_DESCRIPTION
        );
        data.append("CREATE_BY", 1);
        try {
          console.log(data);
          const response = await servicesModule0.createException(data);
          this.getAllException();
          this.$modals.simpleModal.$hide();
        } catch (error) {
          console.log(error);
        }
      }
    },

    async deleteException(data) {
      const response = await servicesModule0.deleteException(
        data.SETTING_CALENDAR_ID
      );
      this.getAllException();
    },

    uploadExcel(event) {
      this.holidayList = [
        {
          name: "name 1",
          startDate: "22/11/2020",
          finishDate: "22/11/2020"
        },
        {
          name: "name 1",
          startDate: "22/11/2020",
          finishDate: "22/11/2020"
        },
        {
          name: "name 1",
          startDate: "22/11/2020",
          finishDate: "22/11/2020"
        },
        {
          name: "name 1",
          startDate: "22/11/2020",
          finishDate: "22/11/2020"
        },
        {
          name: "name 1",
          startDate: "22/11/2020",
          finishDate: "22/11/2020"
        },
        {
          name: "name 1",
          startDate: "22/11/2020",
          finishDate: "22/11/2020"
        },
        {
          name: "name 1",
          startDate: "22/11/2020",
          finishDate: "22/11/2020"
        },
        {
          name: "name 1",
          startDate: "22/11/2020",
          finishDate: "22/11/2020"
        }
      ];
      window.scrollTo(0, document.body.scrollHeight);
      console.log("file excel : " + this.$refs.excelFile.files);
    },

    chooseFiles: function() {
      document.getElementById("fileUpload").click();
      console.log("filee");
      console.log(this.$refs.excelFile[0]);
    },

    async editException(data) {
      const response = await servicesModule0.getExceptionById(
        data.SETTING_CALENDAR_ID
      );
      this.$modals.simpleModalEdit.$show();
      this.model.modelEdit = response;
      // this.id = response.id;
      // this.model.editName = response.calendar_set_name;
      // this.model.editStartDate = response.calendar_set_start;
      // this.model.editFinishDate = response.calendar_set_end;
      // this.model.editDescription = response.calendar_set_desc;
    },

    async editExceptionAPI() {
      try {
        alert(this.model.modelEdit.CALENDAR_NAME);
        const data = new FormData();
        data.append(
          "SETTING_CALENDAR_ID",
          this.model.modelEdit.SETTING_CALENDAR_ID
        );
        data.append("CALENDAR_NAME", this.model.modelEdit.CALENDAR_NAME);
        data.append(
          "CALENDAR_DATE_START",
          moment(this.model.modelEdit.CALENDAR_DATE_START).format("YYYY-MM-DD")
        );
        data.append(
          "CALENDAR_DATE_END",
          moment(this.model.modelEdit.CALENDAR_DATE_END).format("YYYY-MM-DD")
        );
        data.append(
          "CALENDAR_DESCRIPTION",
          this.model.modelEdit.CALENDAR_DESCRIPTION
        );
        data.append("CREATE_BY", 1);
        data.append("_method", "PUT");

        const response = await servicesModule0.updateException(data);
        this.getAllException();
        // this.$modals.simpleModal.$hide();
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss">
.app-layout__main {
  background: #e8e8e8;
}

.widthCalendar {
  width: 50%;
  // height: 50%;
}

.fc-sat,
.fc-sun {
  background-color: red !important;
}

.weekend {
  color: #0000ff;
}

.inline {
  display: inline-flex;
}

.va-data-table__pagination {
  margin-top: 1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: inherit;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: flex-end;
}
</style>
