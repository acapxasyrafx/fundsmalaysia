<template>
  <div id="layoutAuthentication_content">
    <main>
      <div class="container">
        <div class="card-body">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <card>
                <h4 slot="header" class="card-title">SMS Setting</h4>
                <form>
                  <vue-form-generator
                    tag="div"
                    :schema="schema"
                    :model="model"
                    :options="formOptions"
                    ref="RegForm"
                  >
                  </vue-form-generator>

                  <br /><br />
                  <button
                    type="submit"
                    class="ml-2 btn btn-primary btn-fill float-left btn-md"
                  >
                    <i class="fa fa-step-backward" /> &nbsp; Back
                  </button>

                  <div class="float-right">
                    <button
                      @click="saveAsDraft"
                      type="button"
                      class="mr-2 btn btn-info btn-fill btn-md"
                    >
                      <i class="fa fa-exchange" /> &nbsp; Send Test SMS
                    </button>

                    <button
                      @click="submit"
                      type="button"
                      class="ml-2 btn btn-primary btn-fill btn-md"
                    >
                      <i class="fa fa-save" /> &nbsp; Save
                    </button>
                  </div>
                </form>
              </card>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import "vue-form-generator/dist/vfg.css";
import * as servicesModule0 from "../../../app/module0/services";

export default {
  mounted() {
    this.getSmsSetting();
  },
  //METHOD
  methods: {
    getSmsSetting: async function() {
      const response = await servicesModule0.getSmsSettingList();
      if (response != "error") {
        // console.log('data : ' + JSON.parse(response.EMAIL_SMTP_PORT))
        // this.model.SMS_ID = response.SMS_OD;
        this.model.SMS_HTTP_URL = response.SMS_HTTP_URL;
        this.model.SMS_HTTP_PARAM = response.SMS_HTTP_PARAM;
        this.model.SMS_REQ_HEADER = response.SMS_REQ_HEADER;
        this.model.SMS_RES_SUCCESS = response.SMS_RES_SUCCESS;
        this.model.SMS_RES_FAILURE = response.SMS_RES_FAILURE;
      }
    },
    async submit() {
      if (this.$refs.RegForm.validate()) {
        const data = new FormData();
        data.append("SMS_HTTP_URL", this.model.SMS_HTTP_URL);
        data.append("SMS_HTTP_PARAM", this.model.SMS_HTTP_PARAM);
        data.append("SMS_REQ_HEADER", this.model.SMS_REQ_HEADER);
        data.append("SMS_RES_SUCCESS", this.model.SMS_RES_SUCCESS);
        data.append("SMS_RES_FAILURE", this.model.SMS_RES_FAILURE);
        try {
          const response = await servicesModule0.createSmsSetting(data);
          this.getSmsSetting();
          this.$modals.simpleModal.$hide();
        } catch (error) {
          console.log(error);
        }
      }
    }
  },

  //DATA SCHEMA
  data() {
    return {
      //DATA MODEL
      model: {
        // SMS_ID: '',
        SMS_HTTP_URL: "",
        SMS_HTTP_PARAM: "",
        SMS_REQ_HEADER: "",
        SMS_RES_SUCCESS: "",
        SMS_RES_FAILURE: ""
      },

      // FORM
      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "SMS URL",
            model: "SMS_HTTP_URL",
            required: true,
            placeholder: "http://www.smsserver.com/sendsms"
          },
          {
            type: "input",
            inputType: "text",
            label: "HTTP Parameters",
            model: "SMS_HTTP_PARAM",
            required: true,
            placeholder: "ApiKey=xxxx&toNumber=$recipient&text=$message"
          },
          {
            type: "input",
            inputType: "text",
            label: "Request Headers",
            model: "SMS_REQ_HEADER",
            placeholder:
              "context-Type: application/jason,Authorization:Basic QWxhZGRpbjpvcGy"
          },
          {
            type: "input",
            inputType: "text",
            label: "Success Responses",
            model: "SMS_RES_SUCCESS",
            styleClasses: "ml-3 col-md-5"
          },
          {
            type: "input",
            inputType: "text",
            label: "Failure Responses",
            model: "SMS_RES_FAILURE",
            styleClasses: "col-md-6"
          }
        ]
      },

      // FORM OPTION
      formOptions: {
        validateAfterLoad: false,
        validateAfterChanged: true,
        validateAsync: true
      }
    };
  }
};
</script>