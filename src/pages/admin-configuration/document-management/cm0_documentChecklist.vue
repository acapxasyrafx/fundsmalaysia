/* eslint-disable no-unused-vars */
<template>
  <va-card>
    <vudal name="simpleModal" class="widthModal">
      <div class="header">
        Edit Template
        <i class="close icon">&times;</i>
        <br />
      </div>
      <div class="content">
        <vue-form-generator
          :model="model"
          :schema="editReqDocumentSchema"
          :options="formOptions"
          ref="editReqDocForm"
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
          @click="updateRequiredDocument"
          type="button"
          class="mr-2 btn btn-primary btn-fill btn-md"
        >
          <i class="fa fa-edit" /> &nbsp; Update
        </button>
      </div>
    </vudal>
    <h4 slot="header" class="card-title">Add Required Document</h4>
    <div class="">
      <br />
      <vue-form-generator
        :model="model"
        :schema="schema"
        :options="formOptions"
        ref="docForm"
      >
      </vue-form-generator>
      <br />
      <div class="text-center">
        <button
          @click="addDoc"
          type="button"
          class="btn btn-warning btn-fill btn-md"
        >
          <i class="fa fa-plus" /> &nbsp; Add Document
        </button>
      </div>
      <br />

      <!-- list -->
      <h4>List of Document</h4>
      <br />
      <vue-form-generator
        :model="model"
        :schema="filterSchema"
        :options="formOptions"
        ref="docForm"
        @model-updated="onModelUpdated"
      >
      </vue-form-generator>
      <br />
      <div class="float-right">
        <button
          @click="filterRequiredDocument"
          type="button"
          class="ml-2 btn btn-primary"
        >
          Search
        </button>
      </div>
      <br /><br />
      <va-card class="mt-2">
        <va-data-table
          :fields="fields"
          :data="filteredData"
          :per-page="parseInt(perPage)"
          clickable
        >
          <template slot="no" slot-scope="row">
            {{ row.rowIndex + 1 }}
          </template>
          <template slot="status" slot-scope="props">
            <div v-if="props.rowData.REQ_DOCU_STATUS == 1">
              Enabled
            </div>
            <div v-if="props.rowData.REQ_DOCU_STATUS == 0">
              Disabled
            </div>
          </template>
          <template slot="actions" slot-scope="props">
            <h4 class="mt-2">
              <span
                @click="showEditModal(props.rowData)"
                class="badge badge-primary mr-1"
              >
                <i class="fa fa-edit"></i
              ></span>
              <span
                @click="deleteRequiredDocument(props.rowData)"
                class="badge badge-danger mr-1"
                ><i class="fa fa-trash"></i
              ></span>
            </h4>
          </template>
        </va-data-table>
      </va-card>
    </div>
    <br />
    <button @click="back" type="button" class="btn btn-primary btn-fill btn-md">
      <i class="fa fa-step-backward" /> &nbsp; Back
    </button>
  </va-card>
</template>
<script>
import Vue from "vue";
import "vue-form-generator/dist/vfg.css";
// import Tabs from "vue-tabs-with-active-line";
import * as servicesModule0 from "../../../app/module0/services";
import Vudal from "vudal";
export default {
  components: {
    Vudal
  },
  mounted() {
    this.getAllSubmoduleList();
    this.getSubmoduleByRequiredDocument();
    this.getDocument();
    this.getDocType();
  },

  data() {
    return {
      term: null,
      perPage: "6",
      perPageOptions: ["4", "6", "10", "20"],
      selectedIcon: "",
      //   tabs: TABS,
      //   currentTab: "tab1",

      currentPageSub: 1,
      documentList: [],
      documentFields: [
        { key: "index", label: "No" },
        { key: "subModule", label: "Sub Module" },
        { key: "docType", label: "Document Type" },
        { key: "docName", label: "Document Name" },
        { key: "docDescription", label: "Document Description" },
        { key: "index", label: "Index" },
        { key: "status", label: "Status" },
        { key: "actions", label: "Action" }
      ],
      subModuleList: [],
      filterSubModuleList: [],
      docType: [],
      status: [
        { value: 1, name: "Enabled" },
        { value: 0, name: "Disabled" }
      ],

      formOptions: {
        validationErrorClass: "has-error",
        validateAfterChanged: true
      },
      model: {
        modelAdd: {
          SUBMODULE: "",
          REQ_DOCU_TYPE: "",
          REQ_DOCU_NAME: "",
          REQ_DOCU_DESCRIPTION: "",
          REQ_DOCU_STATUS: 1,
          REQ_DOCU_INDEX: "",
          CREATE_BY: 1
        },
        modelFilter: {
          SUBMODULE: "",
          REQ_DOCU_TYPE: ""
        },
        SUBMODULE: "",
        REQ_DOCU_TYPE: "",
        modelEdit: {
          // SUBMODULE: "",
          MANAGE_FORM_TEMPLATE_ID: "",
          REQ_DOCU_NAME: "",
          REQ_DOCU_DESCRIPTION: "",
          REQ_DOCU_STATUS: 1,
          REQ_DOCU_INDEX: "",
          CREATE_BY: 1
        }
      },

      filterSchema: {
        groups: [
          {
            styleClasses: "row",
            fields: [
              {
                type: "vueMultiSelect",
                label: "Sub Module",
                model: "modelFilter.SUBMODULE",
                selectOptions: {
                  multiple: false,
                  key: "MANAGE_SUBMODULE_ID",
                  label: "SUBMOD_NAME",
                  searchable: true,
                  allowEmpty: false
                },
                values: (model, schema) => {
                  return this.filterSubModuleList;
                },
                styleClasses: "col-md-6",
                placeholder: "Select Sub Module"
              },
              {
                type: "vueMultiSelect",
                label: "Type of Document",
                model: "modelFilter.REQ_DOCU_TYPE",
                selectOptions: {
                  multiple: false,
                  key: "SETTING_GENERAL_ID",
                  label: "SET_PARAM",
                  searchable: true,
                  allowEmpty: false
                },
                values: (model, schema) => {
                  return this.docType;
                },
                styleClasses: "col-md-6",
                placeholder: "Select Document Type"
              }
            ]
          }
        ]
      },

      schema: {
        groups: [
          {
            styleClasses: "row mt-2",
            fields: [
              {
                type: "vueMultiSelect",
                model: "modelAdd.SUBMODULE",
                label: "Sub Module",
                selectOptions: {
                  multiple: false,
                  key: "MANAGE_SUBMODULE_ID",
                  label: "SUBMOD_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.subModuleList;
                },
                required: true,
                styleClasses: "col-md-6",
                placeholder: "Select Sub Module"
              },
              {
                type: "vueMultiSelect",
                model: "modelAdd.REQ_DOCU_TYPE",
                label: "Type of Document",
                selectOptions: {
                  multiple: false,
                  key: "SETTING_GENERAL_ID",
                  label: "SET_PARAM",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.docType;
                },
                required: true,
                styleClasses: "col-md-6",
                placeholder: "Select Document Type"
              },
              {
                type: "input",
                inputType: "text",
                model: "modelAdd.REQ_DOCU_NAME",
                label: "Document Name",
                placeholder: "Enter document name",
                required: true,
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "text",
                model: "modelAdd.REQ_DOCU_DESCRIPTION",
                label: "Document Description",
                placeholder: "Enter document description",
                styleClasses: "col-md-6"
              },
              {
                type: "radios",
                label: "Status",
                model: "modelAdd.REQ_DOCU_STATUS",
                required: true,
                //  validator: "string",
                styleClasses: "col-md-6 display-inline",
                values: () => {
                  return this.status;
                }
              },
              {
                type: "input",
                inputType: "number",
                model: "modelAdd.REQ_DOCU_INDEX",
                label: "Index",
                placeholder: "Enter Index",
                styleClasses: "col-md-2",
                required: true
              }
            ]
          }
        ]
      },

      editReqDocumentSchema: {
        groups: [
          {
            styleClasses: "row mt-2",
            fields: [
              {
                type: "vueMultiSelect",
                model: "SUBMODULE",
                label: "Sub Module",
                selectOptions: {
                  multiple: false,
                  key: "MANAGE_SUBMODULE_ID",
                  label: "SUBMOD_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.subModuleList;
                },
                required: true,
                styleClasses: "col-md-6",
                placeholder: "Select Sub Module"
              },
              {
                type: "vueMultiSelect",
                model: "REQ_DOCU_TYPE",
                label: "Type of Document",
                selectOptions: {
                  multiple: false,
                  key: "SETTING_GENERAL_ID",
                  label: "SET_PARAM",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.docType;
                },
                required: true,
                styleClasses: "col-md-6",
                placeholder: "Select Document Type"
              },
              {
                type: "input",
                inputType: "text",
                model: "modelEdit.REQ_DOCU_NAME",
                label: "Document Name",
                placeholder: "Enter document name",
                required: true,
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "text",
                model: "modelEdit.REQ_DOCU_DESCRIPTION",
                label: "Document Description",
                placeholder: "Enter document description",
                styleClasses: "col-md-6"
              },
              {
                type: "radios",
                label: "Status",
                model: "modelEdit.REQ_DOCU_STATUS",
                required: true,
                //  validator: "string",
                styleClasses: "col-md-6 display-inline",
                values: () => {
                  return this.status;
                }
              },
              {
                type: "input",
                inputType: "number",
                model: "modelEdit.REQ_DOCU_INDEX",
                label: "Index",
                placeholder: "Enter Index",
                styleClasses: "col-md-2",
                required: true
              }
            ]
          }
        ]
      }
    };
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
        // {
        //   name: "subModule",
        //   title: "Sub Module"
        //   // width: "30%"
        // },
        // {
        //   name: "docType",
        //   title: "Document Type"
        //   // width: "30%"
        // },

        {
          name: "REQ_DOCU_NAME",
          title: "Document Name"
          // width: "40%"
        },
        {
          name: "REQ_DOCU_DESCRIPTION",
          title: "Document Description"
          // width: "40%"
        },
        {
          name: "REQ_DOCU_INDEX",
          title: "Index"
          // width: "40%"
        },
        {
          name: "__slot:status",
          title: "Status"
          // width: "40%"
        },
        // {
        //   name: "__slot:filename",
        //   title: "Document"
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
        return this.documentList;
      }

      // return this.users.filter(item => {
      //   return item.company.toLowerCase().startsWith(this.term.toLowerCase());
      // });
    }
  },

  methods: {
    async getAllSubmoduleList() {
      const response = await servicesModule0.getAllSubmoduleList();
      this.subModuleList = response;
    },
    async getSubmoduleByRequiredDocument() {
      const response = await servicesModule0.getSubmoduleByRequiredDocument();
      this.filterSubModuleList = response;
    },
    async getDocument() {
      const response = await servicesModule0.getDocument();
      console.log("response list : " + JSON.stringify(response.list));
      this.getSubmoduleByRequiredDocument();
      if (response.list.length != 0) {
        this.documentList = response.list;
        this.model.modelFilter.SUBMODULE = response.dataFilter;
        this.model.modelFilter.REQ_DOCU_TYPE = response.dataFilter;
      } else {
        this.documentList = response.list;
        this.model.modelFilter.SUBMODULE = "";
        this.model.modelFilter.REQ_DOCU_TYPE = "";
      }
    },
    async getDocType() {
      const response = await servicesModule0.getDocType();
      this.docType = response;
    },
    async filterRequiredDocument(data) {
      const filterData = {
        MANAGE_SUBMODULE_ID: this.model.modelFilter.SUBMODULE
          .MANAGE_SUBMODULE_ID,
        REQ_DOCU_TYPE: this.model.modelFilter.REQ_DOCU_TYPE.SETTING_GENERAL_ID
      };
      const response = await servicesModule0.filterRequiredDocument(filterData);
      this.documentList = response;
    },
    async deleteRequiredDocument(data) {
      const response = await servicesModule0.deleteRequiredDocument(
        data.MANAGE_REQUIRED_DOCUMENT_ID
      );
      this.getDocument();
    },
    async showEditModal(data) {
      console.log(JSON.stringify(data));
      this.model.modelEdit = data;
      this.model.SUBMODULE = this.model.modelFilter.SUBMODULE;
      this.model.REQ_DOCU_TYPE = this.model.modelFilter.REQ_DOCU_TYPE;
      this.$modals.simpleModal.$show();
    },
    async updateRequiredDocument() {
      console.log(
        "edit doc type : " + JSON.stringify(this.model.REQ_DOCU_TYPE)
      );
      if (this.$refs.docForm.validate()) {
        const data = new FormData();
        data.append(
          "MANAGE_REQUIRED_DOCUMENT_ID",
          this.model.modelEdit.MANAGE_REQUIRED_DOCUMENT_ID
        );
        data.append(
          "MANAGE_SUBMODULE_ID",
          this.model.SUBMODULE.MANAGE_SUBMODULE_ID
        );
        data.append(
          "REQ_DOCU_TYPE",
          this.model.REQ_DOCU_TYPE.SETTING_GENERAL_ID
        );
        data.append("REQ_DOCU_NAME", this.model.modelEdit.REQ_DOCU_NAME);
        data.append(
          "REQ_DOCU_DESCRIPTION",
          this.model.modelEdit.REQ_DOCU_DESCRIPTION
        );
        data.append("REQ_DOCU_STATUS", this.model.modelEdit.REQ_DOCU_STATUS);
        data.append("REQ_DOCU_INDEX", this.model.modelEdit.REQ_DOCU_INDEX);
        data.append("CREATE_BY", 1);
        data.append("_method", "PUT");
        const response = await servicesModule0.updateRequiredDocument(data);
        this.$modals.simpleModal.$hide();
        this.getDocument();
      }
    },
    onModelUpdated(newVal, schema) {
      if (
        schema == "modelFilter.SUBMODULE" ||
        schema == "modelFilter.REQ_DOCU_TYPE"
      ) {
        console.log("submodule filter " + JSON.stringify(newVal));

        this.filterRequiredDocument();
      }
    },
    back() {
      this.$router.go(-1);
    },
    handleClick(newTab) {
      this.currentTab = newTab;
    }, // end tab

    async addDoc() {
      console.log(
        "doc type : " +
          JSON.stringify(this.model.modelAdd.REQ_DOCU_TYPE.SETTING_GENERAL_ID)
      );
      if (this.$refs.docForm.validate()) {
        const data = new FormData();
        data.append(
          "MANAGE_SUBMODULE_ID",
          this.model.modelAdd.SUBMODULE.MANAGE_SUBMODULE_ID
        );
        data.append(
          "REQ_DOCU_TYPE",
          this.model.modelAdd.REQ_DOCU_TYPE.SETTING_GENERAL_ID
        );
        data.append("REQ_DOCU_NAME", this.model.modelAdd.REQ_DOCU_NAME);
        data.append(
          "REQ_DOCU_DESCRIPTION",
          this.model.modelAdd.REQ_DOCU_DESCRIPTION
        );
        data.append("REQ_DOCU_STATUS", this.model.modelAdd.REQ_DOCU_STATUS);
        data.append("REQ_DOCU_INDEX", this.model.modelAdd.REQ_DOCU_INDEX);
        data.append("CREATE_BY", 1);
        try {
          const response = await servicesModule0.createDocument(data);
          this.getDocument();
          (this.model.modelAdd.REQ_DOCU_NAME = ""),
            (this.model.modelAdd.REQ_DOCU_DESCRIPTION = ""),
            (this.model.modelAdd.REQ_DOCU_STATUS = 1),
            (this.model.modelAdd.REQ_DOCU_INDEX = "");
        } catch (error) {
          console.log(error);
        }
      }
    },
    addSub() {
      if (this.$refs.docForm.validate()) {
        var subModuleInfo = {
          sModule: this.model.sModule.name,
          subModuleName: this.model.subModuleName,
          subModuleCode: this.model.subModuleCode
        };

        this.subModuleList.unshift(subModuleInfo);
        console.log(JSON.stringify(this.subModuleList));

        (this.model.subModuleName = ""),
          (this.model.sModule = ""),
          (this.model.subModuleCode = "");
      }
    },
    addScreen() {
      if (this.$refs.Tab2Form.validate()) {
        var screenInfo = {
          screenModule: this.model.screenModule.name,
          screenName: this.model.screenName,
          screenCode: this.model.screenCode,
          screenRoute: this.model.screenRoute,
          screenIdx: this.model.screenIdx,
          screenSubModule: this.model.screenSubModule.name,
          description: this.model.description,
          processFlow: this.model.processFlow
        };

        this.screenList.unshift(screenInfo);
        console.log(JSON.stringify(this.screenList));

        // this.model.screenCompany={id:"1",name:"FIMM"},
        (this.model.screenModule = ""),
          (this.model.screenName = ""),
          (this.model.screenCode = ""),
          (this.model.screenRoute = ""),
          (this.model.screenIdx = ""),
          (this.model.screenSubModule = ""),
          (this.model.description = ""),
          (this.model.processFlow = "");
      }
    }
  }
};
</script>
