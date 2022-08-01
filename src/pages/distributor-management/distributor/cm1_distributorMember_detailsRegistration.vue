<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <va-card>
            <form-wizard @on-complete="onComplete" color="orange" error-color="#a94442" finish-button-text="Submit" ref="wizard">
              <h3 slot="title"></h3>
              <!-- TAB 1 -->
              <tab-content icon="fa fa-user" title="User Profile" :before-change="validateFirstTab" >
                <vue-form-generator
                  :model="model"
                  :schema="firstTabSchema"
                  :options="formOptions"
                  ref="firstTabForm"
                  @model-updated="onModelUpdated"
                >
                </vue-form-generator>
              </tab-content>
              <!-- TAB 2 -->
              <tab-content icon="fa fa-unlock-alt" title="Change Password" :before-change="validateSecondTab" >
                <vue-form-generator
                  :model="model"
                  :schema="secondTabSchema"
                  :options="formOptions"
                  ref="secondTabForm"
                  @model-updated="onModelUpdated"
                >
                </vue-form-generator>
              </tab-content>
              <!-- TAB 3 -->
              <tab-content icon="fa fa-folder-open-o" title="Upload Photo & Document" >
                <div class="col-12">
                  <div style="overflow-x:auto;">
                    <table class="table">
                      <thead>
                        <slot name="columns">
                          <tr>
                            <th></th>
                            <th>Document</th>
                            <th>Choose file</th>
                          </tr>
                        </slot>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in photoUploadList" :key="index">
                          <slot :row="item">
                            <td><base-checkbox class="" v-model="item.selected" disabled="true"></base-checkbox></td>
                            <td>
                              <span class="description">{{item.fileName}} &nbsp; <a target="blank" v-if="item.type == 'file' && item.selected == true" href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">View</a></span>
                            </td>
                            <td v-if="item.type == 'photo'">
                              <form enctype="multipart/form-data">
                                <div v-if="applicantPhoto"><img src ref="applicantPhotoDisplay" class="w-150px" /></div>
                                <br v-if="applicantPhoto" />
                                <input type="file" accept="image/*" ref="applicantPhoto" @change="uploadImage(index, item)" id="file-input1">
                              </form>
                            </td>
                            <td v-if="item.type == 'file'">
                              <form enctype="multipart/form-data">
                                <input type="file" accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" ref="file" @change="uploadImage(index, item)" id="file-input2">
                              </form>
                            </td>
                          </slot>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- </card> -->
                </div>
              </tab-content>
              <!-- TAB 4 -->
              <tab-content icon="fa fa-location-arrow" title="Declaration" :before-change="validateThirdTab" >
                <br>
                <vue-form-generator
                  :model="model"
                  :schema="thirdTabSchema"
                  :options="formOptions"
                  ref="thirdTabForm"
                  @model-updated="onModelUpdated">
                </vue-form-generator>
              </tab-content>

              <template slot="footer" slot-scope="{ activeTabIndex, isLastStep, nextTab, prevTab }">
                <div class="wizard-footer-left">
                  <button
                    v-if="activeTabIndex > 0"
                    @click="prevTab"
                    type="button"
                    class="btn btn-primary btn-fill btn-md"
                  >
                    <i class="fa fa-step-backward" /> &nbsp; Previous
                  </button>

                </div>
                <div class="ml-2 wizard-footer-right">
                  <button
                    v-if="!isLastStep"
                    @click="nextTab"
                    type="button"
                    class="ml-2 btn btn-primary btn-fill btn-md"
                  >
                    Next &nbsp; <i class="fa fa-step-forward" />
                  </button>

                  <b-button
                    v-b-modal.modal-prevent-closing
                    v-if="isLastStep"
                    @click="nextTab"
                    type="button"
                    class="btn btn-primary btn-fill btn-md"
                  >
                    <i class="fa fa-paper-plane" /> &nbsp; Submit
                  </b-button>
                </div>
              </template>
            </form-wizard>
          </va-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-form-generator/dist/vfg-core.css'
import 'bootstrap/dist/css/bootstrap.css'

export default {

  props: {
    value: File,
  },
  data () {
    return {

      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false,
      selected5: false,

      file1: '',
      file2: '',
      file3: '',
      file4: '',

      photoUploadList: [
        { id: '1', fileName: 'Passport Size Photo', type: 'photo', filePath: '', selected: false },
        { id: '2', fileName: 'Supported Document', type: 'file', filePath: '', selected: false },
        // {id: "3",fileName: "Letter of Undertaking for variation due to Merger",type: "file",filePath:"",selected: false},
        // {id: "4",fileName: "Printed online application",type: "file",filePath:"",selected: false},
        // {id: "5",fileName: "Statutory Declaration",type: "file",filePath:"",selected: false }
      ],

      applicantPhoto: '',

      states: [
        { id: 'MY-14', name: 'Wilayah Persekutuan Kuala Lumpur' },
        { id: 'MY-15', name: 'Wilayah Persekutuan Labuan' },
        { id: 'MY-16', name: 'Wilayah Persekutuan Putrajaya' },
        { id: 'MY-01', name: 'Johor' },
        { id: 'MY-02', name: 'Kedah' },
        { id: 'MY-03', name: 'Kelantan' },
        { id: 'MY-04', name: 'Melaka' },
        { id: 'MY-05', name: 'Negeri Sembilan' },
        { id: 'MY-06', name: 'Pahang' },
        { id: 'MY-08', name: 'Perak' },
        { id: 'MY-09', name: 'Perlis' },
        { id: 'MY-07', name: 'Pulau Pinang' },
        { id: 'MY-12', name: 'Sabah' },
        { id: 'MY-13', name: 'Sarawak' },
        { id: 'MY-10', name: 'Selangor' },
        { id: 'MY-11', name: 'Terengganu' },
      ],
      country: [
        { id: 'Malaysia', name: 'Malaysia' },
      ],

      division: [
        { id: 'Finance', name: 'Finance' },
        { id: 'Payroll', name: 'Payroll' },

      ],
      department: [
        { id: 'Human Resource', name: 'Human Resource' },
        { id: 'Sales', name: 'Sales' },
      ],

      model: {
        name: 'Noor Atikah Binti Ramlan',
        nric: '890408-10-3456',
        passportNo: '',
        email: 'atikah@affin.com',
        phoneNumber: '0146578929',
        address: '',
        address2: '',
        city: '',
        postcode: '',
        country: 'Malaysia',
        division: '',
        department: '',
        roles: '',
        username: '',
        confirmPassword: '',
      },

      formOptions: {
        validateAfterChanged: true,
      },

      firstTabSchema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Name',
            model: 'name',
            placeholder: 'Enter Your name',
            required: true,
            validator: 'string',
            disabled: true,
            styleClasses: 'ml-3 col-md-11',
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'NRIC No',
            model: 'nric',
            placeholder: 'Enter Your NRIC No',
            validator: 'string',
            disabled: true,
            styleClasses: 'ml-3 col-md-11',
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Passport No',
            model: 'passportNo',
            placeholder: 'Enter Your passport No',
            validator: 'string',
            disabled: true,
            styleClasses: 'ml-3 col-md-11',
          },
          {
            type: 'input',
            inputType: 'email',
            label: 'Email',
            model: 'email',
            placeholder: 'Enter Your email',
            required: true,
            validator: 'string',
            disabled: true,
            styleClasses: 'ml-3 col-md-11',
          },
          {
            type: 'input',
            inputType: 'number',
            label: 'Phone Number',
            model: 'phoneNumber',
            placeholder: 'Enter Your Phone Number',
            required: true,
            validator: 'number',
            disabled: true,
            styleClasses: 'ml-3 col-md-11',
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Address',
            model: 'address',
            placeholder: 'Enter Your Address',
            hint: 'Street Address',
            required: true,
            validator: 'string',
            styleClasses: 'ml-3 col-md-11',
          },
          {
            type: 'input',
            inputType: 'text',
            model: 'address2',
            placeholder: 'Enter Your Address',
            hint: 'Street Address line 2',
            required: true,
            styleClasses: 'ml-3 col-md-11',
          },

        ],

        groups: [
          {
            legend: '',
            fields: [
              {
                type: 'input',
                inputType: 'text',
                hint: 'City',
                model: 'city',
                placeholder: 'Enter Your City',
                required: true,
                validator: 'string',
                styleClasses: 'ml-3 col-md-5',
              },
              {
                type: 'select',
                model: 'state',
                placeholder: 'Enter Your State',
                hint: 'State',
                required: true,
                validator: 'string',
                values: (model, schema) => { return this.states },
                styleClasses: 'col-md-6',
              },

            ],
          },
          {
            legend: '',
            fields: [
              {
                type: 'input',
                inputType: 'text',
                hint: 'Postcode',
                model: 'postcode',
                required: true,
                validator: 'string',
                styleClasses: 'ml-3 col-md-5',
              },
              {
                type: 'select',
                hint: 'Country',
                model: 'country',
                values: (model, schema) => { return this.country },
                required: true,
                validator: 'string',
                styleClasses: 'col-md-6',
              },
              {
                type: 'select',
                label: 'Department',
                model: 'department',
                values: (model, schema) => { return this.department },
                required: true,
                validator: 'string',
                styleClasses: 'ml-3 col-md-11',
              },
              {
                type: 'select',
                label: 'Division',
                model: 'division',
                values: () => { return this.division },
                required: true,
                validator: 'string',
                styleClasses: 'ml-3 col-md-11',
              },
            ],
          },

        ],

      },

      secondTabSchema: {

        fields: [

          {
            type: 'input',
            inputType: 'text',
            label: 'Username',
            model: 'username',
            placeholder: 'Enter username',
            required: true,
            validator: 'string',
            styleClasses: 'col-md-12',
          },
          {
            type: 'input',
            inputType: 'password',
            label: 'Password',
            model: 'password',
            placeholder: 'Enter password',
            min: 6,
            required: true,
            hint: () => { return this.passwordStrength },
            validator: ['string', this.validatePassword],
            styleClasses: 'col-md-6',
          },
          {
            type: 'input',
            inputType: 'password',
            label: 'Confirm Password',
            model: 'confirmPassword',
            placeholder: 'Enter confirm password',
            reuired: true,
            equals: 'password',
            styleClasses: 'col-md-6',
            // validator: ["string", isEqualTo]
          },

        ],

      },

      thirdTabSchema: {
        fields: [
          {
            type: 'checkbox',
            styleClasses: 'ml-1 col-md-1',
          },
          {
            label: ' I agree to abide by the applicable Terms and Condition of use for this system and relevant laws and rules issued by FIMM',
            styleClasses: 'col-md-10',
          },
          {
            type: 'checkbox',
            styleClasses: 'ml-1 col-md-1',
          },
          {
            label: ' I hereby confirm that the information given herein and in any other document provided for purposes of my application and registration with FIMM is true and accurate',
            styleClasses: 'col-md-10',
          },
        ],

      },
    }
  },

  mounted () {
    // this is needed to unlock step
    this.$refs.wizard.maxStep = 1
    this.$refs.wizard.navigateToTab(1)
  },

  methods: {

    switchView (type) {
      this.viewType = type
    },

    uploadImage (index, item) {
      item.selected = true
      // eslint-disable-next-line eqeqeq
      if (index == 0) {
        // console.log(this.$refs.applicantPhoto[0].files[0]);
        this.applicantPhoto = this.$refs.applicantPhoto[0].files[0]
        const reader = new FileReader()
        reader.addEventListener(
          'load',
          function () {
            this.$refs.applicantPhotoDisplay[0].src = reader.result
          }.bind(this),
          false,
        )

        reader.readAsDataURL(this.applicantPhoto)
        console.log(item.selected)
        // item.selected = true;
      }
      // else if(index == 1){
      //   this.file1 = this.$refs.file[0].files[0];
      //   item.selected = true;
      // }else if(index == 2){
      //   this.file2 = this.$refs.file2[0].files[0];
      //   item.selected = true;
      // }else if(index == 3){
      //   this.file3 = this.$refs.file3[0].files[0];
      //   item.selected = true;
      // }else if(index == 4){
      //   this.file4 = this.$refs.file4[0].files[0];
      //   item.selected = true;
      // }
    },

    handleFileChange (e) {
      this.$emit('input', e.target.files[0])
      this.fileName1 = e.target.files[0].name
      console.log(e.target.files[0].name)
      // if (this.$refs.fileName1.files[0]) {
      //   console.log(this.$refs.fileName1.files[0].name);
      //   this.model.fileName1 = this.$refs.fileName1.files[0].name;
      // }
      // if (this.$refs.fileName2.files[0]) {
      //   console.log(this.$refs.fileName2.files[0].name);
      //   this.model.fileName2 = this.$refs.fileName2.files[0].name;
      // }
      // if (this.$refs.fileName3.files[0]) {
      //   console.log(this.$refs.fileName3.files[0].name);
      //   this.model.fileName3 = this.$refs.fileName3.files[0].name;
      // }
      // if (this.$refs.fileName4.files[0]) {
      //   console.log(this.$refs.fileName4.files[0].name);
      //   this.model.fileName4 = this.$refs.fileName4.files[0].name;
      // }
    },
    onComplete () {
      // alert(JSON.stringify(this.model));

    },
    validatePassword (value) {
      //* * must contain letter only (lowercase and uppercase) */
      const expression1 = /^[a-zA-Z]+$/
      const expression2 = /^[a-zA-Z]*[A-Z]+[a-zA-Z]*$/
      //* * must contain at least one uppercase letter, one lower case letter and one number */
      const expression4 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]+)$/
      //* * must contain at least one uppercase letter, one lower case letter, one number and one character */
      const expression5 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])([a-zA-Z0-9#?!@$%^&*-]+)$/
      //* * must contain at least one uppercase letter, one lower case letter, one number and one character with minimum length*/
      const expression6 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])([a-zA-Z0-9#?!@$%^&*-]+).{8}$/

      console.log(expression1.test(value))
      if (!expression1.test(value)) {
        this.passwordStrength = ''
        return ['Password must contain letter only']
      }
    },
    isEqualTo (value, field, model) {
      if (!_.has(field, 'equals')) return ['Confirm password is required']
      const a = _.get(model, _.get(field, 'equals'))
      const b = value
      if (_.isEqual(a, b)) return []
      return ['Password do not match']
    },

    validateFirstTab () {
      return this.$refs.firstTabForm.validate()
    },
    validateSecondTab () {
      return this.$refs.secondTabForm.validate()
    },
    validateThirdTab: function () {
      return this.$refs.thirdTabForm.validate()
    },

  },
}
</script>

<style lang="scss">

.w-150px {
  width: 150px;
  height: 150px;
}

.vue-form-wizard .wizard-icon-circle .wizard-icon-container {
  border-radius: 50% !important;
  margin: -4px;
}
</style>
