<template>
  <va-card>
    <h4 slot="header" class="card-title">
      Edit Event
    </h4>
    <br />
    <div class="row">
      <div class="col-md-3">
        <b><h5 class="card-title">Title :</h5></b>
      </div>
      <div class="col-md-9">
        <!-- <div class="form-group"> -->
        <input
          type="text"
          v-model="model.EVENT_TITLE"
          class="form-control form-control-md"
        />
        <!-- </div> -->
      </div>
    </div>
    <br />

    <div class="row">
      <div class="col-md-3">
        <b><h5 class="card-title">Content :</h5></b>
      </div>
      <div id="app" class="col-md-9">
        <vue-editor v-model="model.EVENT_CONTENT"></vue-editor>
      </div>
    </div>
    <br />

    <div class="row">
      <div class="col-md-3">
        <b><h5 class="card-title">Document :</h5></b>
      </div>
      <div id="app" class="col-md-9">
        <VueFileAgent
          ref="vueFileAgent"
          :theme="'list'"
          :multiple="true"
          :deletable="true"
          :meta="true"
          :linkable="true"
          :maxSize="'10MB'"
          :helpText="'Choose document'"
          :uploadHeaders="{}"
          :errorText="{
            type: 'Invalid file type. Only pdf or doc, docx or ods Allowed',
            size: 'Files should not exceed 10MB in size'
          }"
          @select="filesSelected($event)"
          @beforedelete="onBeforeDelete($event)"
          @delete="fileDeleted($event)"
          v-model="fileRecords"
        ></VueFileAgent>
      </div>
    </div>
    <br />

    <div class="row">
      <div class="col-md-3">
        <b><h5 class="card-title">Start Date :</h5></b>
      </div>
      <div class="col-md-9">
        <!-- <div class="form-group"> -->
        <!-- <p v-if="id != undefined" class="text-left">{{title}}</p> -->
        <datepicker
          placeholder="dd-MM-yyyy"
          format="dd-MM-yyyy"
          input-class="form-control form-control-md bgcolor"
          v-model="model.EVENT_DATE_START"
          :typeable="false"
          name="uniquename"
        ></datepicker>
        <!-- </div> -->
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-md-3">
        <b><h5 class="card-title">End Date :</h5></b>
      </div>
      <div class="col-md-9">
        <datepicker
          placeholder="dd-MM-yyyy"
          format="dd-MM-yyyy"
          input-class="form-control form-control-md bgcolor"
          v-model="model.EVENT_DATE_END"
          :typeable="false"
          name="uniquename"
        ></datepicker>
        <!-- </div> -->
      </div>
    </div>
    <br />
    <br />

    <div class="row">
      <div class="col-md-3">
        <b><h5 class="card-title">Set Distributor Audience Category :</h5></b>
      </div>
      <div class="col-md-9">
        <div class="row">
          <div class="col-4" v-for="(item, index) in compType" :key="index">
            <div class="row mb-2">
              <va-checkbox class="col-2" v-model="item.selected" />
              <span class="col mt-2 description">
                {{ item.DIST_TYPE_NAME }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />

    <div class="row">
      <div class="col-md-3">
        <b><h5 class="card-title">Set Consultant Audience Category :</h5></b>
      </div>
      <div class="col-md-9">
        <div class="row">
          <div
            class="col-4"
            v-for="(item, index) in consultantType"
            :key="index"
          >
            <div class="row mb-2">
              <va-checkbox class="col-2" v-model="item.selected" />
              <span class="col mt-2 description">
                {{ item.TYPE_NAME }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />

    <div class="row">
      <div class="col-md-3">
        <b><h5 class="card-title">Set Other Audience Category :</h5></b>
      </div>
      <div class="col-md-9">
        <div class="row">
          <div class="col-4" v-for="(item, index) in otherType" :key="index">
            <div class="row mb-2">
              <va-checkbox class="col-2" v-model="item.selected" />
              <span class="col mt-2 description">
                {{ item.SET_PARAM }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <br />
    <button
      @click="back"
      type="button"
      class="float-left btn btn-primary btn-fill btn-md"
    >
      <i class="fa fa-step-backward" /> &nbsp; Back
    </button>
    <div class="ml-2 float-right">
      <button
        @click="saveAsDraft"
        type="button"
        class="mr-2 btn btn-info btn-fill btn-md"
      >
        <i class="fa fa-pencil-square-o" /> &nbsp; Save as draft
      </button>
      <b-button
        @click="submit"
        type="button"
        class="btn btn-primary btn-fill btn-md"
      >
        <i class="fa fa-paper-plane" /> &nbsp; Publish
      </b-button>
    </div>
  </va-card>
</template>

<script>
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { debounce } from "lodash";
import moment from "moment";
import * as servicesModule0 from "../../../app/module0/services";
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.model.MANAGE_EVENT_ID = to.params.MANAGE_EVENT_ID;
      console.log("event id : " + JSON.stringify(vm.model.MANAGE_EVENT_ID));
      vm.getEventById();
      if (vm.id != undefined) {
        vm.cirTitle =
          "Cancellation of FIMM Examination Sessions on 21 November and 12 December 2020 – Kota Bharu";
        vm.content =
          "<h5>The Federation of Investment Managers Malaysia (FIMM) launched of its first ever full-fledged public service awareness campaign which aims to educate the public on FIMM’s role as a self-regulatory organisation (SRO).Investors interest in Unit Trust (UT) and Private Retirement Scheme (PRS) is one of our top priorities. The timing of this campaign is also very pertinent to the public, as we see more and more people do not mind handing over cash for investments and signing incomplete forms for their convenience, which are against standard practice of UT and PRS investments. Hence, this campaign acts as a platform to educate the public on their rights as an investor and to let people know that FIMM is the authorised regulatory body in charge of managing Unit Trust Companies and their consultant’s code of conduct,” said Dato’ Norazharuddin Abu Talib, the newly appointed Chief Executive Officer of FIMM.</h5>";
        vm.startDate = "2020-12-10";
        vm.endDate = "2020-12-30";
        // (vm.fileRecords = [
        //   {
        //     name: "example.pdf",
        //     size: 10,
        //     type: "pdf",
        //     ext: "exe",
        //     url:
        //       "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        //   },
        //   {
        //     name: "example2.pdf",
        //     size: 10,
        //     type: "pdf",
        //     ext: "exe",
        //     url:
        //       "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        //   },
        //   {
        //     name: "example3.pdf",
        //     size: 10,
        //     type: "pdf",
        //     ext: "exe",
        //     url:
        //       "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        //   }
        // ]);
      }
    });
  },

  mounted() {
    // for (let i = 0; i < this.fileRecords.length; i++) {
    //   this.uploadFileOject.push(JSON.stringify(this.fileRecords[i]));
    // }
  },
  methods: {
    async getEventById() {
      //const responses = await servicesModule0.viewDocument("20_Module_1.pdf");
      // const data = new File(["sdfsdfsdf"], { type: "application/pdf" });
      // console.log(data);
      console.log("id event : " + this.model.MANAGE_EVENT_ID);
      const response = await servicesModule0.getEventById(
        this.model.MANAGE_EVENT_ID
      );
      this.model = response.event;
      this.compType = response.distributorAudience;
      this.otherType = response.otherAudience;
      this.consultantType = response.consultantAudience;
      console.log(response.document);
      this.document = response.document;
      const fileArray = [];
      response.document.forEach(element => {
        fileArray.push({
          name:
            element.MANAGE_EVENT_DOCUMENT_ID +
            "_" +
            element.DOCUMENT_FILENAME +
            "." +
            element.DOCUMENT_FILEEXTENSION,
          fileId: element.MANAGE_EVENT_DOCUMENT_ID,
          fileName:
            element.MANAGE_EVENT_DOCUMENT_ID + "_" + element.DOCUMENT_FILENAME,
          size: element.DOCUMENT_FILESIZE,
          type: element.DOCUMENT_FILEEXTENSION,
          ext: "exe",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJXczNqLXJfMzFRcDlyTy1EZk1uR0JWSXFKR0JRNUxqMlZCZThQOVhHTXhZIn0.eyJleHAiOjE2MTQyMzU3OTMsImlhdCI6MTYxNDIzMzk5MywianRpIjoiYmEyY2M3YWQtYzBjMy00MjkyLThjMjgtM2EzYmVjMzhkMWYwIiwiaXNzIjoiaHR0cDovL3YuaXJjLm15OjgwNTcvYXV0aC9yZWFsbXMvbGRhcC1yZWFsbSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJiMGRmZDY0Yy03NGVlLTQ4MzEtYjdlMy04ZmY2NmJhMTljYjEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJyZWctY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6IjdhNjJkNTg2LTM2YTEtNDk4Zi04OGYzLTQ2N2RkZTBlODJhZCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6IkFobWFkIEFsYmFiIiwiZ2l2ZW5fbmFtZSI6IkFobWFkIiwiZmFtaWx5X25hbWUiOiJBbGJhYiIsImVtYWlsIjoiZHVtbXkxMjJAdm4ubXkiLCJ1c2VybmFtZSI6ImR1bW15In0.hTt3snxenDp3vRvWvDHkjePTmvD2qRPl--d6C_rL2wg1Gll5tP8YbfKQbBNvadwCVTXhj-r0FsghisHKqP_smwY1Ag_u11svMWFQfJI6cWJ-_8VkX9qUt3fI43m-4LyjxNz82dPxAGOoNTrG8sqeCx6SSwcMBU-U-_yjl1FtvL2VLlHZjy_CSV9_XLdKErnsPmJIsLqx8DZkFxjE_aRCjiLPJo_9UCs-56HPv9o3rDkys3p0vC3cUu9lMBOziXScejeNMZ8mR6aT8oSCeggS_QzHihClG42vMWFvuGMsYUoDnY5ImOUZFigBrDN_Z3AKcSV9JFgyNT1NDRqffp2n1g"
          },
          url:
            "/api/module0/document/" +
            element.MANAGE_EVENT_DOCUMENT_ID +
            "_" +
            element.DOCUMENT_FILENAME +
            "." +
            element.DOCUMENT_FILEEXTENSION
        });
      });
      this.fileRecords = fileArray;
      console.log("filee : ");
      console.log(this.fileRecords);
    },

    async saveAsDraft() {
      // console.log(this.uploadFileOject);
      const containsKey = (obj, key) => Object.keys(obj).includes(key);
      for (let i = 0; i < this.fileRecords.length; i++) {
        if (containsKey(this.fileRecords[i], "fileName")) {
          this.uploadFileOject.push(JSON.stringify(this.fileRecords[i]));
        } else {
          console.log("no filename");
        }
      }
      console.log(this.uploadFileOject);
      this.model.EVENT_DISTRIBUTOR_AUDIENCE = [];
      this.compType.forEach(item => {
        if (item.selected == true) {
          this.model.EVENT_DISTRIBUTOR_AUDIENCE.push(item.DISTRIBUTOR_TYPE_ID);
        }
      });
      this.model.EVENT_CONSULTANT_AUDIENCE = [];
      this.consultantType.forEach(item => {
        if (item.selected == true) {
          this.model.EVENT_CONSULTANT_AUDIENCE.push(item.CONSULTANT_TYPE_ID);
        }
      });
      this.model.EVENT_OTHER_AUDIENCE = [];
      this.otherType.forEach(item => {
        if (item.selected == true) {
          this.model.EVENT_OTHER_AUDIENCE.push(item.SETTING_GENERAL_ID);
        }
      });
      const data = new FormData();
      // for (let i = 0; i < this.uploadFileOject.length; i++) {
      //   data.append("FILEOBJECT[]", this.uploadFileOject[i]);
      // }
      data.append("FILEOBJECT", JSON.stringify(this.document));
      data.append("MANAGE_ANNOUNCEMENT_ID", this.model.MANAGE_ANNOUNCEMENT_ID);
      data.append("MANAGE_EVENT_ID", this.model.MANAGE_EVENT_ID);
      data.append("ANNOUNCEMENT_STATUS", 1);
      data.append("EVENT_TITLE", this.model.EVENT_TITLE);
      data.append("EVENT_CONTENT", this.model.EVENT_CONTENT);
      data.append(
        "EVENT_DATE_START",
        moment(this.model.EVENT_DATE_START).format("YYYY-MM-DD")
      );
      data.append(
        "EVENT_DATE_END",
        moment(this.model.EVENT_DATE_END).format("YYYY-MM-DD")
      );
      if (this.model.EVENT_DISTRIBUTOR_AUDIENCE.length != 0) {
        data.append(
          "EVENT_DISTRIBUTOR_AUDIENCE",
          JSON.stringify(this.model.EVENT_DISTRIBUTOR_AUDIENCE)
        );
      }
      if (this.model.EVENT_CONSULTANT_AUDIENCE.length != 0) {
        data.append(
          "EVENT_CONSULTANT_AUDIENCE",
          JSON.stringify(this.model.EVENT_CONSULTANT_AUDIENCE)
        );
      }
      if (this.model.EVENT_OTHER_AUDIENCE.length != 0) {
        data.append(
          "EVENT_OTHER_AUDIENCE",
          JSON.stringify(this.model.EVENT_OTHER_AUDIENCE)
        );
      }
      data.append("CREATE_BY", 1);
      data.append("_method", "PUT");

      try {
        const response = await servicesModule0.updateEvent(data);
      } catch (error) {
        console.log(error);
      }
    },

    async submit() {
      console.log("file record : " + fileRecords);
      this.compType.forEach(item => {
        if (item.selected == true) {
          this.selectedAudience.push(item.id);
        }
      });
      console.log(JSON.stringify(this.selectedAudience));
      const data = new FormData();
      data.append("title", this.title);
      data.append("content", this.content);
      data.append("compType", JSON.stringify(this.selectedAudience));
      data.append("startDate", moment(this.startDate).format("YYYY-MM-DD"));
      data.append("endDate", moment(this.endDate).format("YYYY-MM-DD"));

      try {
        const response = await servicesModule0.createEvent(data);
        this.selectedAudience = [];
      } catch (error) {
        console.log(error);
      }
    },
    back() {
      this.$router.go(-1);
    },

    deleteUploadedFile: function(fileRecord) {
      this.uploadFileOject = [];
      this.$refs.vueFileAgent.deleteUpload(
        this.uploadUrl,
        this.uploadHeaders,
        fileRecord
      );
      var i;
      for (i = 0; i < this.fileRecordsForUpload.length; i++) {
        this.uploadFileOject.push(this.fileRecordsForUpload[i].file);
      }
      console.log(this.uploadFileOject);
    },
    filesSelected: function(fileRecordsNewlySelected) {
      console.log("new select");
      console.log(JSON.stringify(fileRecordsNewlySelected));
      this.uploadFileOject = [];

      var validFileRecords = fileRecordsNewlySelected.filter(
        fileRecord => !fileRecord.error
      );
      this.fileRecordsForUpload = this.fileRecordsForUpload.concat(
        validFileRecords
      );
      //this.uploadFileName = this.fileRecordsForUpload[0].file.name;
      //  this.uploadFileOject = this.fileRecordsForUpload[0].file;
      // this.uploadFileOject.push(this.fileRecordsForUpload[0].file);
      var i;
      for (i = 0; i < this.fileRecordsForUpload.length; i++) {
        this.uploadFileOject.push(this.fileRecordsForUpload[i].file);
      }
      console.log("upload file object");
      console.log(this.fileRecordsForUpload);
    },

    onBeforeDelete: function(fileRecord) {
      // console.log("before delete");
      // console.log(fileRecord);
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        // queued file, not yet uploaded. Just remove from the arrays
        this.fileRecordsForUpload.splice(i, 1);
        var k = this.fileRecords.indexOf(fileRecord);
        if (k !== -1) this.fileRecords.splice(k, 1);
        this.uploadFileOject = [];
        for (i = 0; i < this.fileRecordsForUpload.length; i++) {
          this.uploadFileOject.push(this.fileRecordsForUpload[i].file);
        }
        console.log(this.uploadFileOject);
      } else {
        this.$refs.vueFileAgent.deleteFileRecord(fileRecord);
        // if (confirm("Are you sure you want to delete?")) {
        //   this.$refs.vueFileAgent.deleteFileRecord(fileRecord); // will trigger 'delete' event
        // }
      }
    },
    fileDeleted: function(fileRecord) {
      console.log("file delete");
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1);
      } else {
        this.deleteUploadedFile(fileRecord);
      }
    }
  },
  data() {
    return {
      uploadHeaders: {
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJXczNqLXJfMzFRcDlyTy1EZk1uR0JWSXFKR0JRNUxqMlZCZThQOVhHTXhZIn0.eyJleHAiOjE2MTQxNTM2MjQsImlhdCI6MTYxNDE1MTgyNCwianRpIjoiM2JmMGI5N2MtN2YyOS00NDczLTgwOTEtNjlhMmJjNDgzZWRmIiwiaXNzIjoiaHR0cDovL3YuaXJjLm15OjgwNTcvYXV0aC9yZWFsbXMvbGRhcC1yZWFsbSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJiMGRmZDY0Yy03NGVlLTQ4MzEtYjdlMy04ZmY2NmJhMTljYjEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJyZWctY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6ImQ2M2VhNTY1LThhMDMtNDU5Mi1hNTFjLTdlMjA2OGJmYjk5OCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6IkFobWFkIEFsYmFiIiwiZ2l2ZW5fbmFtZSI6IkFobWFkIiwiZmFtaWx5X25hbWUiOiJBbGJhYiIsImVtYWlsIjoiZHVtbXkxMjJAdm4ubXkiLCJ1c2VybmFtZSI6ImR1bW15In0.D2rX5NQwIwg34EfmBRg9FxuYyWzyd1s5EFm4rUF8X63SLm7ypEYInYNx4C-h1FyAqUoVuPf4oVJ29ziKd1deTrEZoFzyajj1OkD5IS3zNTxQLy-kgVuSDkmicXJ6kMW-IVGRIBBBZLFu0E6aHn4-cyds5CAjDXj-7VbIDaMrtJTU4iu1RxaPaBZlsmkT7oHVRueUOymK-1786g8r93fb4TOwZLM38sz8fmwuia8G24dF_v4u4TJr3nfkmegJBNnGXiIvFpuEKlFDJMqDI8D5xN2xLta2myOZzecEAI8ctyv5Muu9M6y32guxVGBaMr3KQfzZwPlwUnMwEkYldR86YQ"
      },
      selected: false,
      document: null,
      fileRecords: [],
      fileRecordsForUpload: [],
      uploadFileOject: [],
      startDate: "",
      endDate: "",
      content: "",
      title: "",
      content: "<h5></h5>",
      selectedAudience: [],

      model: {
        MANAGE_ANNOUNCEMENT_ID: "",
        MANAGE_EVENT_ID: "",
        EVENT_TITLE: "",
        EVENT_CONTENT: "",
        EVENT_DATE_START: "",
        EVENT_DATE_END: "",
        EVENT_DISTRIBUTOR_AUDIENCE: [],
        EVENT_CONSULTANT_AUDIENCE: [],
        EVENT_OTHER_AUDIENCE: [],
        CREATE_BY: ""
      },

      compType: [],
      consultantType: [],
      otherType: []
    };
  }

  // watch: {
  //   compType(value) {
  //     console.log(value);
  //     // this.$emit('onchange', value);
  //     // or generate/simulate a native events (not sure how, but its outside Vue's realm I think
  //   }
  // }
};
</script>
<style lang="scss">
.bgcolor {
  background-color: white !important;
}
</style>
