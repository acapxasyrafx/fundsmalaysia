<template>
  <va-card>
    <h4 slot="header" class="card-title">Consultant Profile</h4>
    <br />
    <vue-form-generator
      :model="model"
      :schema="secondTabSchema"
      :options="formOptions"
      ref="regForm"
      @model-updated="onModelUpdated"
    >
    </vue-form-generator>
    <!-- <br />
    <div class="row col-md-4">
      <a v-b-tooltip.hover title="Click here to request TAC no" href=""
        >Request TAC</a
      >
      <input
        type="text"
        v-model="title"
        placeholder="Enter TAC Number"
        class="form-control form-control-md"
      />
    </div> -->
    <br />
    <div v-if="visibleOldIc == true" class="row m-2">
      <!-- <base-checkbox class="col-1" v-model="selected"></base-checkbox> -->
      <va-checkbox class="col-1" v-model="selected" />
      <small class="col mt-2">
        <i
          >I declare that i don't have an Old NRIC Number and all information is
          correct</i
        >
      </small>
    </div>
    <br />
    <div class="float-right">
      <button
        @click="submit"
        type="button"
        class="btn btn-primary btn-fill btn-md"
      >
        <i class="fa fa-paper-plane" /> &nbsp; Submit
      </button>
    </div>
  </va-card>
</template>
<script>
import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg-core.css";
import "bootstrap/dist/css/bootstrap.css";
import Vue from "vue";
Vue.use(VueFormGenerator);
export default {
  watch: {
    "model.icNo": function(val) {
      console.log("dob :" + this.model.dateOfBirth);
      if (val.substr(11, 1) != "") {
        console.log("last character :" + val.substr(11, 1));
        var Year = val.substring(0, 2);
        var Month = val.substring(2, 4);
        var Day = val.substring(4, 6);

        var cutoff = new Date().getFullYear() - 2000;
        console.log("year :" + cutoff);

        var dob =
          (Year > cutoff ? "19" : "20") + Year + "-" + Month + "-" + Day;
        this.model.dateOfBirth = dob;
        console.log("dob :" + dob);
        console.log((Year > cutoff ? "19" : "20") + Year);
        const yearBirth = (Year > cutoff ? "19" : "20") + Year;
        if (parseInt(yearBirth) <= 1970) {
          console.log("1970 and below");
          this.visibleOldIc = true;
        } else {
          console.log("above");
          this.visibleOldIc = false;
        }
        if (parseInt(val.substr(11, 1)) % 2 == 0) {
          console.log("The number is even. f");
          this.model.gender = "1";
        } else {
          console.log("The number is odd. l");
          this.model.gender = "2";
        }
      }

      // if(val == 1) {
      //             this.visiblePassport = false;
      //             this.visibleIc = true;
      // } else {
      //             this.visiblePassport = true;
      //             this.visibleIc = false;
      // }
    }
  },
  props: {
    value: File
  },
  data() {
    return {
      data: "assadsa",
      calendarData: "",
      calendarConfigs: {
        sundayStart: false,
        dateFormat: "dd/mm/yyyy",
        isDatePicker: false,
        isDateRange: false
      },
      gender: [
        {
          name: "Female",
          value: "1",
          selected: true
        },
        {
          name: "Male",
          value: "2"
        }
      ],
      citizenship: [
        {
          name: "Malaysian",
          value: "1",
          selected: true
        },
        {
          name: "Non Malaysian",
          value: "2"
        }
      ],
      states: [
        {
          id: "MY-14",
          name: "Wilayah Persekutuan Kuala Lumpur"
        },
        {
          id: "MY-15",
          name: "Wilayah Persekutuan Labuan"
        },
        {
          id: "MY-16",
          name: "Wilayah Persekutuan Putrajaya"
        },
        {
          id: "MY-01",
          name: "Johor"
        },
        {
          id: "MY-02",
          name: "Kedah"
        },
        {
          id: "MY-03",
          name: "Kelantan"
        },
        {
          id: "MY-04",
          name: "Melaka"
        },
        {
          id: "MY-05",
          name: "Negeri Sembilan"
        },
        {
          id: "MY-06",
          name: "Pahang"
        },
        {
          name: "Perak",
          id: "MY-08"
        },
        {
          id: "MY-09",
          name: "Perlis"
        },
        {
          id: "MY-07",
          name: "Pulau Pinang"
        },
        {
          id: "MY-12",
          name: "Sabah"
        },
        {
          id: "MY-13",
          name: "Sarawak"
        },
        {
          id: "MY-10",
          name: "Selangor"
        },
        {
          id: "MY-11",
          name: "Terengganu"
        }
      ],
      applicationType: [
        {
          name: "Computerized Private Retirement Scheme Examination (CPRE)",
          value: "1"
        },
        { name: "Exemption for CPRE", value: "2" }
        // { name: "CUTA", value: "3" }
      ],
      race: [
        { name: "Malay", id: "1" },
        { name: "Chinese", id: "2" },
        { name: "Indian", id: "3" },
        { name: "Others", id: "4" }
        //{ name: "Former PRS Consultant / Vary Registration", id: "5" },
      ],
      catExemption: [
        { name: "CEO", id: "1" },
        { name: "Director", id: "2" },
        { name: "Fund Manager", id: "3" },
        { name: "Financial Planner", id: "4" },
        { name: "Former PRS Consultant / Vary Registration", id: "5" }
      ],

      qualification: [
        {
          name: "SPM",
          id: "1",
          selected: true
        },
        { name: "STPM", id: "2" },
        { name: "Diploma", id: "3" },
        { name: "Degree", id: "4" },
        { name: "Post-graduate", id: "5" },
        { name: "Others", id: "6" }
      ],

      catConsultant: [
        {
          name: "Agent",
          value: "1",
          selected: true
        },
        { name: "Employee", value: "2" }
      ],

      apprenticeshipProg: [
        {
          name: "Yes",
          value: "1",
          selected: true
        },
        { name: "No", value: "2" }
      ],
      icTypes: [
        { name: "New NRIC", value: "1" },
        { name: "Old NRIC", value: "2" },
        { name: "Passport", value: "3" }
      ],
      nameOptions: [
        { name: "Name of CEO", value: "1" },
        { name: "Director", value: "2" }
      ],
      visibleOldIc: false,
      visible: false,
      visibleDepartment: false,
      visibleCatExemption: false,
      department: [
        { name: "Sales and Marketing", id: "1" },
        { name: "Training", id: "2" },
        { name: "Customer Service", id: "3" },
        { name: "Compliance", id: "4" },
        { name: "Others", id: "5" }
      ],
      applicantPhoto: "",
      model: {
        firstName: "",
        middleName: "",
        LastName: "",

        applicationType: "",
        catExemption: "",
        qualification: "",

        applicantName: "",
        icNo: "",
        passportNo: "",
        expdate: "",
        nationality: "1",
        dateOfBirth: "",
        gender: "",
        otherRace: "",
        applicantAddress: "",
        applicantAddress2: "",
        applicantPostcode: "",
        applicantCity: "",
        applicantState: "",
        phoneNo: "",
        applicantHouseNo: "",
        applicantEmail: "",
        otherQua: "",
        applicantTAC: "",

        catConsultant: "",
        ApprenticeProg: "",
        namePrpIpraCpra: "",
        distCode: "",

        department: "",
        othersDepartment: "",
        distApprenticeProg: "",
        distDistPointCode: "",
        distPointName: "",
        distaddress: "",
        distaddress2: "",
        distpostcode: "",
        distcity: "",
        distState: ""
      },
      formOptions: {
        // validationErrorClass: "has-error",
        // validationSuccessClass: "has-`success`",
        validateAfterChanged: true
      },
      firstTabSchema: {
        fields: [
          {
            type: "radios",
            label: "Application Type",
            model: "applicationType",
            required: true,
            validator: "string",
            // styleClasses: "display-inline",
            values: () => {
              return this.applicationType;
            }
          },
          {
            type: "select",
            label: "Category of Exemption",
            model: "catExemption",

            values: () => {
              return this.catExemption;
            },
            required: true,
            validator: "string",
            visible: (model, field, form) => {
              return this.visibleCatExemption;
            }
          }
        ]
      },
      secondTabSchema: {
        groups: [
          {
            styleClasses: "row",
            // legend: "A. Authorised Representative",
            fields: [
              {
                type: "input",
                inputType: "text",
                label: "First Name",
                model: "firstName",
                placeholder: "Please enter name as per NRIC",
                required: true,
                validator: "string",
                styleClasses: "col-md-4"
              },
              {
                type: "input",
                inputType: "text",
                label: "Middle Name",
                model: "middleName",
                placeholder: "Please enter name as per NRIC",
                required: true,
                validator: "string",
                styleClasses: "col-md-4"
              },
              {
                type: "input",
                inputType: "text",
                label: "Last Name",
                model: "LastName",
                placeholder: "Please enter name as per NRIC",
                required: true,
                validator: "string",
                styleClasses: "col-md-4"
              },
              {
                type: "radios",
                label: "Nationality",
                model: "nationality",
                values: () => {
                  return this.citizenship;
                },
                styleClasses: "col-md-3 display-inline"
              },
              {
                labels: "NRIC No.",
                model: "icNo",
                type: "vfg-the-mask",
                placeholder: "Enter NRIC No",
                mask: "######-##-####",
                styleClasses: "col-md-5",
                visible: (model, field, form) => {
                  return this.visibleOldIc == false && model.nationality == "1";
                },
                required: true,
                validator: "string"
              },
              {
                labels: "NRIC No.",
                model: "icNo",
                type: "vfg-the-mask",
                placeholder: "Enter NRIC No",
                mask: "######-##-####",
                styleClasses: "col-md-5",
                visible: (model, field, form) => {
                  return this.visibleOldIc == true && model.nationality == "1";
                },
                required: true,
                validator: "string"
              },
              {
                type: "input",
                inputType: "text",
                label: "Old NRIC No",
                model: "oldICNo",
                placeholder: "Enter old NRIC No.",
                // required: true,
                // validator: "string",
                styleClasses: "col-md-4",
                visible: (model, field, form) => {
                  return this.visibleOldIc == true && model.nationality == "1";
                }
              },

              {
                type: "input",
                inputType: "text",
                label: "Passport No.",
                model: "passportNo",
                placeholder: "Enter Passport No.",
                required: true,
                validator: "string",
                styleClasses: "col-md-5",
                visible: (model, field, form) => {
                  return model.nationality == "2";
                }
              },
              {
                type: "vfg-functional-date",
                placeholder: "Enter passport expiry date",
                labels: "Passport Expiry Date",
                model: "expDate",
                noLabel: true,
                noClearButton: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-4",
                visible: (model, field, form) => {
                  return model.nationality == "2";
                },
                required: true,
                validator: "required"
              },
              {
                type: "vfg-functional-date",
                placeholder: "Enter date of birth",
                labels: "Date of Birth",
                model: "dateOfBirth",
                noLabel: true,
                noClearButton: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-4",
                required: true,
                validator: "required"
              },

              // {
              //   type: "input",
              //   inputType: "date",
              //   label: "Date of Birth",
              //   model: "dateOfBirth",
              //   format: "YYYY-MM-DD HH:mm:ss",
              //   required: true,
              //   validator: "string",
              //   styleClasses: "col-md-4"
              // },
              {
                type: "radios",
                label: "Gender",
                model: "gender",
                values: () => {
                  return this.gender;
                },
                styleClasses: "col-md-3 display-inline"
              },
              {
                type: "vueMultiSelect",
                model: "race",
                label: "Race",
                placeholder: "Enter Your Race",
                required: true,
                validator: "required",
                styleClasses: "col-md-5",
                selectOptions: {
                  multiple: false,
                  key: "name",
                  label: "name",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.race;
                }
              },

              {
                label: "",
                type: "input",
                inputType: "text",
                model: "otherRace",
                placeholder: "Others (please specify)",
                required: true,
                validator: "string",
                styleClasses: "col-md-4",
                visible: (model, field, form) => {
                  return this.otherRace == true && model.race != null;
                }
              },
              {
                type: "input",
                inputType: "email",
                label: "Email Address",
                model: "applicantEmail",
                placeholder: "Enter email address",
                required: true,
                validator: "string",
                styleClasses: "col-md-4"
              },
              {
                labels: "Telephone Number",
                model: "phoneNo",
                type: "vfg-the-mask",
                placeholder: "Enter telephone number",
                mask: "######-##-####",
                mask: "01#-########",
                styleClasses: "col-md-6",
                // visible: (model, field, form) => {
                //   return this.model.applicantPhoneno.length == 10;
                // },
                required: true,
                validator: "string"
              },
              {
                labels: "Request TAC",
                model: "applicantTAC",
                type: "vfg-custom-Tacinput",
                placeholder: "Enter TAC number",
                styleClasses: "col-md-6",
                required: true,
                validator: "string"
              }
              // {
              //   type: "input",
              //   inputType: "number",
              //   label: "House Number",
              //   model: "applicantHouseNo",
              //   placeholder: "Enter telephone number",
              //   required: true,
              //   validator: "number",
              //   styleClasses: "col-md-4"
              // },

              // {
              //   type: "select",
              //   label: "Highest Educational Qualification",
              //   model: "qualification",

              //   values: () => {
              //     return this.qualification;
              //   },
              //   required: true,
              //   validator: "string",
              //   styleClasses: "col-md-6"
              // },
              // {
              //   type: "input",
              //   inputType: "text",
              //   model: "otherQua",
              //   placeholder: "Others (please specify)",
              //   required: true,
              //   validator: "string",
              //   visible: (model, field, form) => {
              //     return this.visible;
              //   },
              // },
            ]
          }
        ]
      },
      thirdTabSchema: {
        groups: [
          {
            styleClasses: "row",
            // legend: "4. Additional Information",
            fields: [
              {
                type: "radios",
                label: "Category of Consultant",
                model: "catConsultant",
                values: () => {
                  return this.catConsultant;
                },
                styleClasses: "display-inline",
                required: true,
                validator: "string"
              },
              {
                type: "radios",
                label: "Apprenticeship Program",
                model: "ApprenticeProg",
                values: () => {
                  return this.apprenticeshipProg;
                },
                styleClasses: "display-inline",
                required: true,
                validator: "string"
              },
              {
                type: "input",
                inputType: "text",
                label: "Name of PRP/IPRA/CPRA",
                model: "namePrpIpraCpra",
                placeholder: "Enter name of PRP/IPRA/CPRA",
                required: true,
                validator: "string"
              },
              {
                type: "input",
                inputType: "text",
                label: "FiMM Distributor Code",
                model: "distCode",
                placeholder: "Enter distributor code",
                required: true,
                validator: "string"
              }
            ]
          }
        ]
      },

      fourthTabSchema: {
        groups: [
          {
            styleClasses: "row",
            // legend: "4. Additional Information",
            fields: [
              {
                type: "select",
                label: "Department",
                model: "department",

                values: () => {
                  return this.department;
                },
                required: true,
                validator: "string",
                styleClasses: "ml-1 col-md-5"
              },
              {
                type: "input",
                inputType: "text",
                model: "othersDepartment",
                placeholder: "Others (please specify)",
                required: true,
                validator: "string",
                visible: (model, field, form) => {
                  return this.visibleDepartment;
                }
              },
              {
                type: "radios",
                label: "Apprenticeship Program",
                model: "distApprenticeProg",
                values: () => {
                  return this.apprenticeshipProg;
                },
                required: true,
                validator: "string",
                styleClasses: "col-md-6 display-inline"
              },
              {
                type: "input",
                inputType: "text",
                label: "Distribution Point Code",
                model: "distDistPointCode",
                placeholder: "Enter distribution point code",
                required: true,
                validator: "string",
                styleClasses: "ml-1 col-md-5"
              },
              {
                type: "input",
                inputType: "text",
                label: "Distribution Point Name",
                model: "distPointName",
                placeholder: "Enter distribution point name",
                required: true,
                validator: "string",
                styleClasses: "col-md-6"
              },
              {
                type: "input",
                inputType: "text",
                label: "Address",
                model: "distaddress",
                placeholder: "Enter street address",
                hint: "Street Address",
                required: true,
                validator: "string"
              },
              {
                type: "input",
                inputType: "text",
                model: "distaddress2",
                placeholder: "Enter street address",
                hint: "Street Address line 2"
              },
              {
                type: "input",
                inputType: "text",
                label: "Postcode",
                model: "distpostcode",
                placeholder: "Enter postcode",
                required: true,
                validator: "string"
              },
              {
                type: "input",
                inputType: "text",
                model: "distcity",
                placeholder: "Enter Your City",
                label: "distcity",
                required: true,
                validator: "string",
                styleClasses: "ml-1 col-md-5"
              },
              {
                type: "select",
                model: "distState",
                placeholder: "Enter Your State",
                label: "State",
                required: true,
                validator: "string",
                values: (model, schema) => {
                  return this.states;
                },
                styleClasses: "mr-1 col-md-5"
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    validateIC(value) {
      //** must contain letter only (lowercase and uppercase) */
      let expression1 = /^[0-9]+$/;
      // let expression2 = /^[a-zA-Z]*[A-Z]+[a-zA-Z]*$/;
      // //** must contain at least one uppercase letter, one lower case letter and one number */
      // let expression4 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]+)$/;
      // //** must contain at least one uppercase letter, one lower case letter, one number and one character */
      // let expression5 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])([a-zA-Z0-9#?!@$%^&*-]+)$/;
      // //** must contain at least one uppercase letter, one lower case letter, one number and one character with minimum length*/
      // let expression6 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])([a-zA-Z0-9#?!@$%^&*-]+).{8}$/;

      console.log(expression1.test(value));
      if (!expression1.test(value)) {
        // this.passwordStrength = "";
        return ["Ic must contain number only"];
      }
    },
    uploadImage(e) {
      this.applicantPhoto = this.$refs.applicantPhoto.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function() {
          this.$refs.applicantPhotoDisplay.src = reader.result;
        }.bind(this),
        false
      );

      reader.readAsDataURL(this.applicantPhoto);
    },
    onModelUpdated(newVal, schema) {
      console.log("value :" + JSON.stringify(this.model.race.name));
      if (schema == "applicationType") {
        this.model.applicationType = newVal;
        if (newVal == "2") {
          this.visibleCatExemption = true;
        } else {
          this.visibleCatExemption = false;
        }
      } else if (schema == "qualification") {
        if (newVal == "6") {
          this.visible = true;
        } else {
          this.visible = false;
        }
      } else if (schema == "department") {
        if (newVal == "5") {
          this.visibleDepartment = true;
        } else {
          this.visibleDepartment = false;
        }
      } else if (schema == "icNo") {
        console.log(newVal.substr(-1));
      } else if (schema == "race") {
        if (newVal.name == "Others") {
          this.otherRace = true;
        } else {
          this.otherRace = false;
        }
      }
    },
    handleFileChange(e) {
      this.$emit("input", e.target.files[0]);
      this.fileName1 = e.target.files[0].name;
      console.log(e.target.files[0].name);
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
    validateRegisterForm() {
      return this.$refs.regForm.validate();
    },

    submit: async function() {
      const response = await this.validateRegisterForm();
      if (response) {
        // this.$router.push("company-detail");
      } else {
      }
    },
    validatePassword(value) {
      //** must contain letter only (lowercase and uppercase) */
      let expression1 = /^[a-zA-Z]+$/;
      let expression2 = /^[a-zA-Z]*[A-Z]+[a-zA-Z]*$/;
      //** must contain at least one uppercase letter, one lower case letter and one number */
      let expression4 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]+)$/;
      //** must contain at least one uppercase letter, one lower case letter, one number and one character */
      let expression5 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])([a-zA-Z0-9#?!@$%^&*-]+)$/;
      //** must contain at least one uppercase letter, one lower case letter, one number and one character with minimum length*/
      let expression6 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])([a-zA-Z0-9#?!@$%^&*-]+).{8}$/;

      console.log(expression1.test(value));
      if (!expression1.test(value)) {
        this.passwordStrength = "";
        return ["Password must contain letter only"];
      }
    },
    isEqualTo(value, field, model) {
      if (!_.has(field, "equals")) return ["Confirm password is required"];
      let a = _.get(model, _.get(field, "equals"));
      let b = value;
      if (_.isEqual(a, b)) return [];
      return ["Password do not match"];
    },
    validateFirstTab() {
      return this.$refs.firstTabForm.validate();
    },
    validateSecondTab: function() {
      return this.$refs.secondTabForm.validate();
    },
    validateThirdTab: function() {
      return this.$refs.thirdTabForm.validate();
    },
    validateFourthTab() {
      return this.$refs.fourthTabForm.validate();
    }
  }
};
</script>
<style>
.display-inline label {
  display: inline !important;
  padding: 5px;
}

.w-150px {
  width: 150px;
  height: 150px;
}

.vue-form-wizard .wizard-icon-circle .wizard-icon-container {
  border-radius: 50% !important;
  margin: -4px;
}
</style>