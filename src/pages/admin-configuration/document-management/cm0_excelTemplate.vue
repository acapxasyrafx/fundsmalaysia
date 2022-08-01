<template>
  <!-- <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12"> -->
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
          :schema="editTemplateSchema"
          :options="formOptions"
          ref="editTemplateForm"
        />
        <br />
        <div class="row">
          <div id="app">
            <template>
              <VueFileAgent
                ref="vueFileAgentEdit"
                :theme="'grid'"
                :multiple="false"
                :deletable="true"
                :meta="true"
                :accept="'image/*'"
                :maxSize="'10MB'"
                :maxFiles="14"
                :helpText="'Choose excel files'"
                :errorText="{
                  type: 'Invalid file type. Only excel Allowed',
                  size: 'Files should not exceed 10MB in size'
                }"
                @select="editfilesSelected($event)"
                @beforedelete="editonBeforeDelete($event)"
                @delete="editfileDeleted($event)"
                v-model="editFileRecords"
              ></VueFileAgent>
            </template>
          </div>
        </div>
      </div>

      <div class="actions">
        <button
          type="button"
          class="cancel vudal-btn mr-2 btn btn-danger btn-fill btn-md"
        >
          <i class="fa fa-times" /> &nbsp; Close
        </button>
        <button
          @click="editTemplate"
          type="button"
          class="mr-2 btn btn-primary btn-fill btn-md"
        >
          <i class="fa fa-edit" /> &nbsp; Update
        </button>
      </div>
    </vudal>
    <h4 slot="header" class="card-title">Upload Template Form</h4>
    <br />
    <div class="">
      <vue-form-generator
        :model="model"
        :schema="templateSchema"
        :options="formOptions"
        ref="templateForm"
      >
      </vue-form-generator>
    </div>
    <br />

    <div class="row">
      <div id="app" class="col-md-12">
        <template>
          <VueFileAgent
            ref="vueFileAgent"
            :theme="'list'"
            :multiple="false"
            :deletable="true"
            :meta="true"
            :accept="'.xls,.xlsx'"
            :maxSize="'10MB'"
            :maxFiles="14"
            :helpText="'Choose excel files'"
            :errorText="{
              type: 'Invalid file type. Only excel Allowed',
              size: 'Files should not exceed 10MB in size'
            }"
            @select="filesSelected($event)"
            @beforedelete="onBeforeDelete($event)"
            @delete="fileDeleted($event)"
            v-model="fileRecords"
          ></VueFileAgent>
        </template>
      </div>
    </div>
    <!-- <br />
    <div class="row col">
      <div id="app">
        <template>
          <VueFileAgent
            ref="vueFileAgent"
            :theme="'grid'"
            :multiple="false"
            :deletable="true"
            :meta="true"
            :accept="'image/*'"
            :maxSize="'10MB'"
            :maxFiles="14"
            :helpText="'Choose excel files'"
            :errorText="{
              type: 'Invalid file type. Only excel Allowed',
              size: 'Files should not exceed 10MB in size'
            }"
            @select="filesSelected($event)"
            @beforedelete="onBeforeDelete($event)"
            @delete="fileDeleted($event)"
            v-model="fileRecords"
          ></VueFileAgent>
        </template>
      </div>
    </div> -->
    <br />
    <div class="text-center">
      <button
        @click="uploadTemplate"
        type="button"
        class="btn btn-warning btn-fill btn-md"
      >
        <i class="fa fa-plus" /> &nbsp; Upload
      </button>
    </div>
    <br />
    <h4>List of Template</h4>
    <va-card>
      <va-data-table
        :fields="fields"
        :data="filteredData"
        :per-page="parseInt(perPage)"
      >
        <template slot="no" slot-scope="row">
          {{ row.rowIndex + 1 }}
        </template>

        <template slot="filename" slot-scope="props">
          <!-- <router-link v-b-tooltip.hover title="Detail">View </router-link> -->
          <va-button
            flat
            small
            color="blue"
            @click="downloadTemplate(props.rowData)"
            class="ma-0"
          >
            Download
          </va-button>
        </template>

        <template slot="actions" slot-scope="props">
          <h4 class="mt-2">
            <span
              v-b-tooltip.hover
              title="edit"
              v-on:click="showEditModal(props.rowData)"
              class="badge badge-primary mr-2"
            >
              <i class="fa fa-edit"></i
            ></span>
            <span
              v-b-tooltip.hover
              title="delete"
              v-on:click="deleteFile(props.rowData)"
              class="badge badge-danger mr-1"
            >
              <i class="fa fa-trash"></i
            ></span>
          </h4>
        </template>
      </va-data-table>
      <!-- <va-data-table :fields="fields" :data="filteredData" clickable>
        <template slot="marker" slot-scope="props">
          <va-icon
            name="fa fa-circle"
            :color="props.rowData.color"
            size="8px"
          />
        </template>

        <template slot="actions" slot-scope="props">
          <va-button
            flat
            small
            color="gray"
            @click="edit(props.rowData)"
            class="ma-0"
          >
            {{ $t("view") }}
          </va-button>
        </template>
      </va-data-table> -->
    </va-card>
    <br />
    <button @click="back" type="button" class="btn btn-primary btn-fill btn-md">
      <i class="fa fa-step-backward" /> &nbsp; Back
    </button>
  </va-card>
  <!-- </div>
      </div>
    </div>
  </div> -->
</template>

<script>
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// eslint-disable-next-line no-unused-vars
import { debounce } from "lodash";
import * as servicesModule0 from "../../../app/module0/services";
// eslint-disable-next-line no-unused-vars
import * as fileServices from "../../../app/fileServices";
import Vudal from "vudal";
export default {
  components: {
    Vudal
  },
  mounted() {
    this.getModule();
    this.getTemplate();
  },

  methods: {
    async showEditModal(data) {
      const response = await servicesModule0.getExcelTemplateById(
        data.MANAGE_FORM_TEMPLATE_ID
      );
      this.editFileRecords = [
        {
          name: response.MANAGE_FORM_TEMPLATE_ID + "_" + response.TEMP_FILENAME,
          size: response.TEMP_FILESIZE,
          type: response.TEMP_FILEEXTENSION
        }
      ];
      this.model.MODULE = response; //{ MANAGE_MODULE_ID: 1, MOD_NAME: "sadsad" };
      this.model.modelEdit = response;
      this.$modals.simpleModal.$show();
    },

    async editTemplate() {
      console.log("file : " + this.editUploadFileObject);
      if (this.$refs.editTemplateForm.validate()) {
        const data = new FormData();
        data.append(
          "MANAGE_FORM_TEMPLATE_ID",
          this.model.modelEdit.MANAGE_FORM_TEMPLATE_ID
        );
        data.append("FILEOBJECT", this.editUploadFileObject);
        data.append("MANAGE_MODULE_ID", this.model.MODULE.MANAGE_MODULE_ID);
        data.append("TEMP_TITLE", this.model.modelEdit.TEMP_TITLE);
        data.append("TEMP_DESCRIPTION", this.model.modelEdit.TEMP_DESCRIPTION);
        data.append("_method", "PUT");
        try {
          // eslint-disable-next-line no-unused-vars
          const response = await servicesModule0.updateExcelTemplate(data);
          this.getTemplate();
          this.$modals.simpleModal.hide();
        } catch (error) {
          console.log(error);
        }
      }
    },

    async deleteFile(data) {
      // eslint-disable-next-line no-unused-vars
      const response = await servicesModule0.deleteTemplate(
        data.MANAGE_FORM_TEMPLATE_ID
      );
      this.getTemplate();
    },

    async downloadTemplate(data) {
      console.log("data :" + data);

      const response = await servicesModule0.downloadTemplate(
        data.MANAGE_FORM_TEMPLATE_ID
      );
      const blob = new Blob([response.data], { type: "xls,xlsx" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download =
        data.MANAGE_FORM_TEMPLATE_ID + "_" + data.TEMP_TITLE + ".xlsx";
      link.click();
    },

    uploadTemplate: async function() {
      if (this.$refs.templateForm.validate()) {
        const data = new FormData();
        data.append("FILEOBJECT", this.uploadFileOject);
        data.append(
          "MANAGE_MODULE_ID",
          this.model.modelAdd.MODULE.MANAGE_MODULE_ID
        );
        data.append("TEMP_TITLE", this.model.modelAdd.TEMP_TITLE);
        data.append("TEMP_DESCRIPTION", this.model.modelAdd.TEMP_DESCRIPTION);
        try {
          // eslint-disable-next-line no-unused-vars
          const response = await servicesModule0.createExcelTemplate(data);
          this.getTemplate();
        } catch (error) {
          console.log(error);
        }
      }
    },

    async getModule() {
      const response = await servicesModule0.getAllModule();
      this.moduleList = response;
    },

    async getTemplate() {
      const response = await servicesModule0.getAllExcelTemplate();
      this.templateList = response;
    },

    back() {
      this.$router.go(-1);
    },

    uploadFiles: function() {
      console.log(JSON.stringify(this.$refs.vueFileAgent));
    },
    deleteUploadedFile: function(fileRecord) {
      this.$refs.vueFileAgent.deleteUpload(
        this.uploadUrl,
        this.uploadHeaders,
        fileRecord
      );
    },
    filesSelected: function(fileRecordsNewlySelected) {
      var validFileRecords = fileRecordsNewlySelected.filter(
        fileRecord => !fileRecord.error
      );
      this.fileRecordsForUpload = this.fileRecordsForUpload.concat(
        validFileRecords
      );
      this.uploadFileName = this.fileRecordsForUpload[0].file.name;
      this.uploadFileOject = this.fileRecordsForUpload[0].file;
      console.log(this.fileRecordsForUpload[0].file);
    },

    onBeforeDelete: function(fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        // queued file, not yet uploaded. Just remove from the arrays
        this.fileRecordsForUpload.splice(i, 1);
        var k = this.fileRecords.indexOf(fileRecord);
        if (k !== -1) this.fileRecords.splice(k, 1);
      } else {
        this.$refs.vueFileAgent.deleteFileRecord(fileRecord);
        // if (confirm("Are you sure you want to delete?")) {
        //   this.$refs.vueFileAgent.deleteFileRecord(fileRecord); // will trigger 'delete' event
        // }
      }
    },
    fileDeleted: function(fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1);
      } else {
        this.deleteUploadedFile(fileRecord);
      }
    },

    editdeleteUploadedFile: function(fileRecord) {
      this.$refs.vueFileAgent.deleteUpload(
        this.uploadUrl,
        this.uploadHeaders,
        fileRecord
      );
    },

    editfilesSelected: function(fileRecordsNewlySelected) {
      console.log(fileRecordsNewlySelected);
      var validFileRecords = fileRecordsNewlySelected.filter(
        fileRecord => !fileRecord.error
      );
      this.editFileRecordsForUpload = this.editFileRecordsForUpload.concat(
        validFileRecords
      );
      this.editUploadFileName = this.editFileRecordsForUpload[0].file.name;
      this.editUploadFileObject = this.editFileRecordsForUpload[0].file;
      console.log("file");
      console.log(this.editFileRecordsForUpload[0].file);
    },

    editonBeforeDelete: function(fileRecord) {
      var i = this.editFileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        // queued file, not yet uploaded. Just remove from the arrays
        this.editFileRecordsForUpload.splice(i, 1);
        var k = this.editFileRecords.indexOf(fileRecord);
        if (k !== -1) this.editFileRecords.splice(k, 1);
      } else {
        this.$refs.vueFileAgentEdit.deleteFileRecord(fileRecord);
        // if (confirm("Are you sure you want to delete?")) {
        //   this.$refs.vueFileAgent.deleteFileRecord(fileRecord); // will trigger 'delete' event
        // }
      }
    },
    editfileDeleted: function(fileRecord) {
      var i = this.editFileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        this.editFileRecordsForUpload.splice(i, 1);
      } else {
        this.editdeleteUploadedFile(fileRecord);
      }
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
          // width: "30px"
          // height: "45px"
          // dataClass: "text-center"
        },
        {
          name: "MOD_NAME",
          title: "Module Name"
          // width: "30%"
        },
        {
          name: "TEMP_TITLE",
          title: "Template Title"
          // width: "30%"
        },

        {
          name: "TEMP_DESCRIPTION",
          title: "Template Description"
          // width: "40%"
        },
        {
          name: "__slot:filename",
          title: "Document"
          // width: "20%"
        },
        {
          name: "__slot:actions",
          title: "Action",
          dataClass: "justify-content-center",
          width: "15%"
        }
      ];
    },
    // eslint-disable-next-line vue/return-in-computed-property
    filteredData() {
      if (!this.term || this.term.length < 1) {
        return this.templateList;
      }

      // return this.users.filter(item => {
      //   return item.company.toLowerCase().startsWith(this.term.toLowerCase());
      // });
    }
  },
  data() {
    return {
      header: "",
      field: [],
      term: null,
      perPage: "6",
      perPageOptions: ["4", "6", "10", "20"],
      templateList: [],
      uploadFileName: "",
      uploadFileOject: "",
      editUploadFileObject: "",
      editUploadFileName: "",
      moduleList: [],
      currentPage: 1,

      id: "",
      fileRecords: [],
      editFileRecords: [],
      uploadUrl: "https://www.mocky.io/v2/5d4fb20b3000005c111099e3",
      uploadHeaders: {
        "X-Test-Header": "vue-file-agent"
      },
      fileRecordsForUpload: [],
      editFileRecordsForUpload: [],
      content: "<h5></h5>",

      model: {
        modelAdd: {
          MODULE: "",
          TEMP_TITLE: "",
          TEMP_DESCRIPTION: ""
        },
        MODULE: "",
        modelEdit: {
          MANAGE_FORM_TEMPLATE_ID: "",
          TEMP_TITLE: "",
          TEMP_DESCRIPTION: ""
        }
      },

      formOptions: {
        validateAfterChanged: true
      },

      editTemplateSchema: {
        groups: [
          {
            styleClasses: "row",
            fields: [
              {
                type: "vueMultiSelect",
                model: "MODULE",
                label: "Module",
                placeholder: "Select module",
                selectOptions: {
                  multiple: false,
                  key: "MANAGE_MODULE_ID",
                  label: "MOD_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.moduleList;
                },
                styleClasses: "col-md-6",
                required: true,
                validator: "required"
              },
              {
                type: "input",
                inputType: "Text",
                model: "modelEdit.TEMP_TITLE",
                label: "Title",
                placeholder: "Enter title",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "Text",
                model: "modelEdit.TEMP_DESCRIPTION",
                label: "Description",
                placeholder: "Enter description",
                //  required: true,
                styleClasses: "col-md-12"
              }
            ]
          }
        ]
      },

      templateSchema: {
        groups: [
          {
            styleClasses: "row mt-2",
            fields: [
              {
                type: "vueMultiSelect",
                model: "modelAdd.MODULE",
                label: "Module",
                placeholder: "Select module",
                selectOptions: {
                  multiple: false,
                  key: "MOD_NAME",
                  label: "MOD_NAME",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.moduleList;
                },
                styleClasses: "col-md-6",
                required: true,
                validator: "required"
              },
              {
                type: "input",
                inputType: "Text",
                model: "modelAdd.TEMP_TITLE",
                label: "Title",
                placeholder: "Enter title",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "Text",
                model: "modelAdd.TEMP_DESCRIPTION",
                label: "Description",
                placeholder: "Enter description",
                //  required: true,
                styleClasses: "col-md-12"
              }
            ]
          }
        ]
      }
    };
  }
};
</script>
<style lang="scss">
.app-layout__main {
  background: #e8e8e8;
}
</style>
