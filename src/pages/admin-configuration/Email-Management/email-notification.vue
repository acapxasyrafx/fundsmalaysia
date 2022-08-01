<template>
  <div id="layoutAuthentication_content">
    <main>
      <div class="container">
        <div class="card-body">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <va-card>
                <h4 slot="header" class="card-title">Email Notification</h4>
                <div class="ml-3">
                  <form>
                    <vue-form-generator
                      tag="div"
                      :schema="schema"
                      :model="model"
                      :options="formOptions"
                      ref="RegForm" >
                    </vue-form-generator>

                    <br><br>
                    <button type="submit" class="ml-2 btn btn-primary btn-fill float-left btn-md">
                      <!-- @click.prevent="submit"> -->
                      <i class="fa fa-step-backward" /> &nbsp; Back
                    </button>

                    <div class="float-right">
                      <button @click="saveAsDraft"
                        type="button" class="mr-2 btn btn-info btn-fill btn-md">
                        <i class="fa fa-exchange" /> &nbsp; Test Connection
                      </button>

                      <button @click="submit" type="button" class="ml-2 btn btn-primary btn-fill btn-md">
                        <i class="fa fa-save" /> &nbsp; Save
                      </button>
                    </div>

                  </form>
                </div>
              </va-card>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import 'vue-form-generator/dist/vfg.css'
import * as servicesModule0 from '../../../app/module0/services'
export default {

  mounted () {
    this.getEmailSetting()
  },
  // METHOD
  methods: {
    getEmailSetting: async function () {
      const response = await servicesModule0.getEmailSettingList()
      if (response !== 'error') {
        // console.log('data : ' + JSON.parse(response.EMAIL_SMTP_PORT))
        this.model.EMAIL_SMTP_PORT = response.EMAIL_SMTP_PORT
        this.model.EMAIL_LOGIN_ID = response.EMAIL_LOGIN_ID
        this.model.EMAIL_SMTP_SERVER = response.EMAIL_SMTP_SERVER
        this.model.EMAIL_FROM = response.EMAIL_FROM
      }
    },

    async submit () {
      if (this.$refs.RegForm.validate()) {
        const data = new FormData()
        data.append('EMAIL_SMTP_PORT', this.model.EMAIL_SMTP_PORT)
        data.append('EMAIL_LOGIN_ID', this.model.EMAIL_LOGIN_ID)
        data.append('EMAIL_SMTP_SERVER', this.model.EMAIL_SMTP_SERVER)
        data.append('EMAIL_FROM', this.model.EMAIL_FROM)
        try {
          // eslint-disable-next-line no-unused-vars
          const response = await servicesModule0.createEmailSetting(data)
          this.getEmailSetting()
          this.$modals.simpleModal.$hide()
        } catch (error) {
          console.log(error)
        }
      }
    },
  },

  // DATA SCHEMA
  data () {
    return {

      // DATA MODEL
      model: {
        EMAIL_LOGIN_PASS: '',
        EMAIL_LOGIN_ID: '',
        EMAIL_SMTP_SERVER: '',
        EMAIL_FROM: '',
        EMAIL_SMTP_PORT: '',
        EMAIL_SECURITY: 'TSL',
      },

      // FORM
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'email',
            label: 'Send Email From',
            model: 'EMAIL_FROM',
            placeholder: 'Account@example.com',

          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Outgoing SMTP Server',
            model: 'EMAIL_SMTP_SERVER',
            placeholder: 'smtp.example.com',

          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Login User ID',
            model: 'EMAIL_LOGIN_ID',

          },
          {
            type: 'input',
            inputType: 'Password',
            label: 'Login Password',
            model: 'EMAIL_LOGIN_PASS',
          },
          {
            type: 'input',
            inputType: 'Password',
            label: 'Verify Password',
            model: 'EMAIL_LOGIN_PASS_VER1',
          },
          {
            type: 'input',
            inputType: 'number',
            label: 'SMTP Port Number',
            model: 'EMAIL_SMTP_PORT',
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Security',
            model: 'EMAIL_SECURITY',
          },

        ],

      },

      // FORM OPTION
      formOptions: {
        validateAfterLoad: false,
        validateAfterChanged: true,
        validateAsync: true,
      },

    }
  },
}
</script>
