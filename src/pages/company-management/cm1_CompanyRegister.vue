/* eslint-disable no-debugger, no-console */
<template>
  <div class="content">
    <div class="container-fluid">
      <vudal name="simpleModal" class="widthModal">
        <div class="header">
          <i class="close icon">&times;</i>
          <br />
        </div>
        <div class="content">
          <va-card>
            <b-tabs content-class="mt-3">
              <b-tab title="Distributor Profile" active>
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="width: 20%;"><b>Distributor Name</b></td>
                      <td style="width: 2%;">:</td>
                      <td>A.D.Fincancial Sdn. Bhd.</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Registration No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>871180-W</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>New Registration No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>20190123152</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Address</b></td>
                      <td style="width: 2%;">:</td>
                      <td>
                        3, Jalan Dato Abdul Aziz, Seksyen 14,{{ model.address }}
                        {{ model.address2 }}
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Postcode</b></td>
                      <td style="width: 2%;">:</td>
                      <td>51200{{ model.postcode }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>City</b></td>
                      <td style="width: 2%;">:</td>
                      <td>Shah Alam{{ model.city.name }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>State</b></td>
                      <td style="width: 2%;">:</td>
                      <td>Selangor{{ model.state.name }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Country</b></td>
                      <td style="width: 2%;">:</td>
                      <td>Malaysia{{ model.country.name }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Telephone Number</b></td>
                      <td style="width: 2%;">:</td>
                      <td>03-7956 8833</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Fax Number</b></td>
                      <td style="width: 2%;">:</td>
                      <td>03-7956 8853</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Email</b></td>
                      <td style="width: 2%;">:</td>
                      <td>info@financial.com{{ model.email }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Application Type</b></td>
                      <td style="width: 2%;">:</td>
                      <td>IUTA</td>
                    </tr>
                  </tbody>
                </table>
              </b-tab>
              <b-tab title="Details Information"> </b-tab>
              <b-tab title="AR and AAR">
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="width: 20%;"><b>Name</b></td>
                      <td style="width: 2%;">:</td>
                      <td>
                        {{ model.salutation.name }} {{ model.firstName }}
                        {{ model.middleName }} {{ model.LastName }}
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Position</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.position }}</td>
                    </tr>
                    <tr v-if="model.AR_citizenship == '1'">
                      <td style="width: 20%;"><b>NRIC No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AR_icNo }}</td>
                    </tr>
                    <tr v-if="model.AR_citizenship == '2'">
                      <td style="width: 20%;"><b>Passport No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AR_passport }}</td>
                    </tr>
                    <tr v-if="model.AR_citizenship == '2'">
                      <td style="width: 20%;"><b>Passport Expiry Date</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.passportExpiryDate }}</td>
                    </tr>
                    <!-- <tr>
                                    <td style="width: 20%;"><b>Address</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AR_address}} {{model.AR_address2}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>Postcode</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AR_postcode}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>City</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AR_city.name}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>State</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AR_state.name}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>Country</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AR_country.name}}</td>
                                </tr> -->
                    <tr>
                      <td style="width: 20%;"><b>Telephone Number</b></td>
                      <td style="width: 2%;">:</td>
                      <td>03-7956 8853</td>
                    </tr>
                    <!-- <tr>
                                    <td style="width: 20%;"><b>Fax Number</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>03-7956 8853</td>
                                </tr> -->
                    <tr>
                      <td style="width: 20%;"><b>Email</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AR_email }}</td>
                    </tr>
                  </tbody>
                </table>
              </b-tab>
              <b-tab title="Alternate Authorised Representative">
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="width: 20%;"><b>Name</b></td>
                      <td style="width: 2%;">:</td>
                      <td>
                        {{ model.AAR_salutation.name }}
                        {{ model.AAR_firstName }} {{ model.AAR_middleName }}
                        {{ model.AAR_LastName }}
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Position</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AAR_position }}</td>
                    </tr>
                    <tr v-if="model.AAR_citizenship == '1'">
                      <td style="width: 20%;"><b>NRIC No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AAR_icNo }}</td>
                    </tr>
                    <tr v-if="model.AAR_citizenship == '2'">
                      <td style="width: 20%;"><b>Passport No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AAR_passport }}</td>
                    </tr>
                    <tr v-if="model.AAR_citizenship == '2'">
                      <td style="width: 20%;"><b>Passport Expiry Date</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AAR_passportExpiryDate }}</td>
                    </tr>
                    <!-- <tr>
                                    <td style="width: 20%;"><b>Address</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AAR_address}} {{model.AAR_address2}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>Postcode</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AAR_postcode}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>City</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AAR_city.name}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>State</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AAR_state.name}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>Country</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AAR_country.name}}</td>
                                </tr> -->
                    <tr>
                      <td style="width: 20%;"><b>Telephone Number</b></td>
                      <td style="width: 2%;">:</td>
                      <td>03-7956 8853</td>
                    </tr>
                    <!-- <tr>
                                    <td style="width: 20%;"><b>Fax Number</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>03-7956 8853</td>
                                </tr> -->
                    <tr>
                      <td style="width: 20%;"><b>Email</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AAR_email }}</td>
                    </tr>
                  </tbody>
                </table>
              </b-tab>
              <b-tab title="CEO and Director">
                <h4>CEO Profile</h4>
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="width: 20%;"><b>Name</b></td>
                      <td style="width: 2%;">:</td>
                      <td>
                        {{ model.CEO_salutation.name }}
                        {{ model.CEO_firstName }} {{ model.CEO_middleName }}
                        {{ model.CEO_LastName }}
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Position</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.CEO_position }}</td>
                    </tr>
                    <tr v-if="model.CEO_citizenship == '1'">
                      <td style="width: 20%;"><b>NRIC No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.CEO_icNo }}</td>
                    </tr>
                    <tr v-if="model.CEO_citizenship == '2'">
                      <td style="width: 20%;"><b>Passport No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.CEO_passport }}</td>
                    </tr>
                    <tr v-if="model.CEO_citizenship == '2'">
                      <td style="width: 20%;"><b>Passport Expiry Date</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.CEO_passportExpiryDate }}</td>
                    </tr>
                    <!-- <tr>
                                    <td style="width: 20%;"><b>Address</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AAR_address}} {{model.AAR_address2}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>Postcode</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.CEO_postcode}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>City</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.CEO_city.name}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>State</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.CEO_state.name}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>Country</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.CEO_country.name}}</td>
                                </tr> -->
                    <tr>
                      <td style="width: 20%;"><b>Telephone Number</b></td>
                      <td style="width: 2%;">:</td>
                      <td>03-7956 8853</td>
                    </tr>
                    <!-- <tr>
                                    <td style="width: 20%;"><b>Fax Number</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>03-7956 8853</td>
                                </tr> -->
                    <tr>
                      <td style="width: 20%;"><b>Email</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.CEO_email }}</td>
                    </tr>
                  </tbody>
                </table>
                <h4>List of Director</h4>
                <card>
                  <b-table
                    hover
                    :items="directorList"
                    :fields="fieldsDirList"
                    :current-page="currentPage"
                    responsive="md"
                  >
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>
                    <template #cell(name)="data">
                      {{ data.item.DIR_firstName }}
                      {{ data.item.DIR_middleName }}
                      {{ data.item.DIR_LastName }}
                    </template>
                    <template #cell()="data">
                      <span class="description">{{ data.value }}</span>
                    </template>
                  </b-table>
                </card>
              </b-tab>
              <b-tab title="Additional Information">
                <h4>Contact Person</h4>
                <table v-if="contactPersonValue == '3'" class="table">
                  <tbody>
                    <tr>
                      <td style="width: 20%;"><b>Name</b></td>
                      <td style="width: 2%;">:</td>
                      <td>
                        {{ model.CEO_salutation.name }}
                        {{ model.CEO_firstName }} {{ model.CEO_middleName }}
                        {{ model.CEO_LastName }}
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Position</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.CEO_position }}</td>
                    </tr>
                    <tr v-if="model.CEO_citizenship == '1'">
                      <td style="width: 20%;"><b>NRIC No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.CEO_icNo }}</td>
                    </tr>
                    <tr v-if="model.CEO_citizenship == '2'">
                      <td style="width: 20%;"><b>Passport No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.CEO_passport }}</td>
                    </tr>
                    <tr v-if="model.CEO_citizenship == '2'">
                      <td style="width: 20%;"><b>Passport Expiry Date</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.CEO_passportExpiryDate }}</td>
                    </tr>
                    <!-- <tr>
                                    <td style="width: 20%;"><b>Address</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AAR_address}} {{model.AAR_address2}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>Postcode</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.CEO_postcode}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>City</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.CEO_city.name}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>State</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.CEO_state.name}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>Country</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.CEO_country.name}}</td>
                                </tr> -->
                    <tr>
                      <td style="width: 20%;"><b>Telephone Number</b></td>
                      <td style="width: 2%;">:</td>
                      <td>03-7956 8853</td>
                    </tr>
                    <!-- <tr>
                                    <td style="width: 20%;"><b>Fax Number</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>03-7956 8853</td>
                                </tr> -->
                    <tr>
                      <td style="width: 20%;"><b>Email</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.CEO_email }}</td>
                    </tr>
                  </tbody>
                </table>
                <table v-if="contactPersonValue == '1'" class="table">
                  <tbody>
                    <tr>
                      <td style="width: 20%;"><b>Name</b></td>
                      <td style="width: 2%;">:</td>
                      <td>
                        {{ model.salutation.name }} {{ model.firstName }}
                        {{ model.middleName }} {{ model.LastName }}
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Position</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.position }}</td>
                    </tr>
                    <tr v-if="model.AR_citizenship == '1'">
                      <td style="width: 20%;"><b>NRIC No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AR_icNo }}</td>
                    </tr>
                    <tr v-if="model.AR_citizenship == '2'">
                      <td style="width: 20%;"><b>Passport No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AR_passport }}</td>
                    </tr>
                    <tr v-if="model.AR_citizenship == '2'">
                      <td style="width: 20%;"><b>Passport Expiry Date</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.passportExpiryDate }}</td>
                    </tr>
                    <!-- <tr>
                                    <td style="width: 20%;"><b>Address</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AR_address}} {{model.AR_address2}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>Postcode</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AR_postcode}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>City</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AR_city.name}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>State</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AR_state.name}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>Country</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AR_country.name}}</td>
                                </tr> -->
                    <tr>
                      <td style="width: 20%;"><b>Telephone Number</b></td>
                      <td style="width: 2%;">:</td>
                      <td>03-7956 8853</td>
                    </tr>
                    <!-- <tr>
                                    <td style="width: 20%;"><b>Fax Number</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>03-7956 8853</td>
                                </tr> -->
                    <tr>
                      <td style="width: 20%;"><b>Email</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AR_email }}</td>
                    </tr>
                  </tbody>
                </table>

                <table v-if="contactPersonValue == '2'" class="table">
                  <tbody>
                    <tr>
                      <td style="width: 20%;"><b>Name</b></td>
                      <td style="width: 2%;">:</td>
                      <td>
                        {{ model.AAR_salutation.name }}
                        {{ model.AAR_firstName }} {{ model.AAR_middleName }}
                        {{ model.AAR_LastName }}
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Position</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AAR_position }}</td>
                    </tr>
                    <tr v-if="model.AAR_citizenship == '1'">
                      <td style="width: 20%;"><b>NRIC No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AAR_icNo }}</td>
                    </tr>
                    <tr v-if="model.AAR_citizenship == '2'">
                      <td style="width: 20%;"><b>Passport No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AAR_passport }}</td>
                    </tr>
                    <tr v-if="model.AAR_citizenship == '2'">
                      <td style="width: 20%;"><b>Passport Expiry Date</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AAR_passportExpiryDate }}</td>
                    </tr>
                    <!-- <tr>
                                    <td style="width: 20%;"><b>Address</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AAR_address}} {{model.AAR_address2}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>Postcode</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AAR_postcode}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>City</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AAR_city.name}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>State</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AAR_state.name}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>Country</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.AAR_country.name}}</td>
                                </tr> -->
                    <tr>
                      <td style="width: 20%;"><b>Telephone Number</b></td>
                      <td style="width: 2%;">:</td>
                      <td>03-7956 8853</td>
                    </tr>
                    <!-- <tr>
                                    <td style="width: 20%;"><b>Fax Number</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>03-7956 8853</td>
                                </tr> -->
                    <tr>
                      <td style="width: 20%;"><b>Email</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.AAR_email }}</td>
                    </tr>
                  </tbody>
                </table>

                <table v-if="contactPersonValue == '4'" class="table">
                  <tbody>
                    <tr>
                      <td style="width: 20%;"><b>Name</b></td>
                      <td style="width: 2%;">:</td>
                      <td>
                        {{ model.Other_salutation.name }}
                        {{ model.Other_firstName }}
                        {{ model.Other_middleName }} {{ model.Other_LastName }}
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Position</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.Other_position }}</td>
                    </tr>
                    <tr v-if="model.Other_citizenship == '1'">
                      <td style="width: 20%;"><b>NRIC No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.Other_icNo }}</td>
                    </tr>
                    <tr v-if="model.Other_citizenship == '2'">
                      <td style="width: 20%;"><b>Passport No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.Other_passport }}</td>
                    </tr>
                    <tr v-if="model.Other_citizenship == '2'">
                      <td style="width: 20%;"><b>Passport Expiry Date</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.Other_passportExpiryDate }}</td>
                    </tr>
                    <!-- <tr>
                                    <td style="width: 20%;"><b>Address</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.Other_address}} {{model.Other_address2}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>Postcode</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.Other_postcode}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>City</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.Other_city.name}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>State</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.Other_state.name}}</td>
                                </tr>
                                <tr>
                                    <td style="width: 20%;"><b>Country</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>{{model.Other_country.name}}</td>
                                </tr> -->
                    <tr>
                      <td style="width: 20%;"><b>Telephone Number</b></td>
                      <td style="width: 2%;">:</td>
                      <td>03-7956 8853</td>
                    </tr>
                    <!-- <tr>
                                    <td style="width: 20%;"><b>Fax Number</b></td>
                                    <td style="width: 2%;">:</td>
                                    <td>03-7956 8853</td>
                                </tr> -->
                    <tr>
                      <td style="width: 20%;"><b>Email</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.Other_email }}</td>
                    </tr>
                  </tbody>
                </table>
              </b-tab>
              <b-tab title="Payment Detail">
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="width: 20%;"><b>Reference No</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.refNo }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Transaction Type</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.transType.name }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Transaction Date</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.transDate }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Account Type</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.accType }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Beneficiary Name</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.beneficiaryName }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Beneficiary Bank</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.beneficiaryBank.name }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;">
                        <b>Beneficiary Account No.</b>
                      </td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.beneficiaryAccNo }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Receipent Reference</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.receipientRef }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Other Payment Details</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.otherPaymentDetails }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Amount</b></td>
                      <td style="width: 2%;">:</td>
                      <td>{{ model.amount }}</td>
                    </tr>
                    <tr>
                      <td style="width: 20%;"><b>Uploaded Receipt</b></td>
                      <td style="width: 2%;">:</td>
                      <td>
                        <a
                          target="blank"
                          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                          class="row"
                        >Document 1.pdf</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </b-tab>
              <b-tab title="Uploaded Document">
                <b-table
                  hover
                  :items="uploadFileItems"
                  :fields="uploadedFileFields"
                  responsive="sm"
                >
                  <!-- A virtual column -->
                  <template #cell(actions)="data">
                    <!-- {{data.index}} -->
                    <base-checkbox
                      class=""
                      v-model="data.item.selected"
                      disabled="true"
                    ></base-checkbox>
                  </template>
                  <template #cell()="data">
                    <span class="description">{{ data.value }}</span> &nbsp;
                    <!-- <a target="blank" v-if="data.item.selected == true" href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">View</a> -->
                  </template>
                  <template #cell(file)="data">
                    <a
                      target="blank"
                      v-if="data.item.selected == true"
                      href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    >View</a
                    >
                  </template>
                </b-table>
              </b-tab>
              <b-tab title="Proposal"> </b-tab>
            </b-tabs>
          </va-card>
        </div>
        <div class="actions">
          <div class="cancel vudal-btn">Close</div>
        </div>
      </vudal>
      <br />
      <div class="row">
        <div class="col-12">
          <va-card>
            <form-wizard
              @on-complete="onComplete"
              color="#FF5050"
              error-color="#a94442"
              finish-button-text="Submit"
              ref="wizard"
            >
              <h3 slot="title"></h3>
              <tab-content
                icon="fa fa-university"
                title="1. Create Distributor Profile"
                :before-change="validateFirstTab"
              >
                <vue-form-generator
                  :model="model"
                  :schema="firstTabSchema"
                  :options="formOptions"
                  ref="firstTabForm"
                >
                </vue-form-generator>
                <br />
                <div class="">
                  <div class=" ml-2 col-md-9">
                    <div class="row">
                      <div
                        class="col-4"
                        v-for="(item, index) in compType"
                        :key="index"
                      >
                        <div class="row mb-2">
                          <va-checkbox
                            class="col-2"
                            v-model="item.selected"
                          ></va-checkbox>
                          <span class="col mt-2 description">
                            {{ item.name }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </tab-content>
              <tab-content icon="fa fa-navicon" title="2. Details information">
                <vue-form-generator
                  :model="model"
                  :schema="firstTabAddSchema"
                  :options="formOptions"
                  ref="firstTabAddForm"
                >
                </vue-form-generator>
              </tab-content>

              <tab-content
                icon="fa fa-user"
                title="3. AR and AAR"
                :before-change="validateSecondTab"
              >
                <vue-form-generator
                  :model="model"
                  :schema="secondTabSchema"
                  :options="formOptions"
                  ref="secondTabForm"
                  @model-updated="onModelUpdated"
                >
                </vue-form-generator>
              </tab-content>
              <tab-content
                icon="fa fa-user-circle-o"
                title="4. CEO and Director"
                :before-change="validateThirdTab"
              >
                <vue-form-generator
                  :model="model"
                  :schema="thirdTabSchemaCEO"
                  :options="formOptions"
                  ref="thirdTabFormCEO"
                  @model-updated="onModelUpdated"
                >
                </vue-form-generator>
                <vue-form-generator
                  :model="model"
                  :schema="thirdTabSchemaDIR"
                  :options="formOptions"
                  ref="thirdTabFormDIR"
                >
                </vue-form-generator>
                <br />
                <div class="text-center">
                  <button
                    @click="addDirector"
                    type="button"
                    class="btn btn-warning btn-fill btn-md"
                  >
                    <i class="fa fa-plus" /> &nbsp; Add
                  </button>
                </div>
                <br />
                <card>
                  <b-table
                    hover
                    :items="directorList"
                    :fields="fields"
                    :current-page="currentPage"
                    responsive="md"
                  >
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>
                    <template #cell(name)="data">
                      {{ data.item.DIR_firstName }}
                      {{ data.item.DIR_middleName }}
                      {{ data.item.DIR_LastName }}
                    </template>
                    <template #cell()="data">
                      <span class="description">{{ data.value }}</span>
                    </template>
                    <template #cell(actions)="">
                      <h4 class="mt-2">
                        <span class="badge badge-danger mr-1">
                          <i class="fa fa-trash"></i
                          ></span>
                      </h4>
                    </template>
                  </b-table>
                </card>
                <br /><br /><br />
              </tab-content>
              <tab-content
                icon="fa fa-info"
                title="5. Additional Information"
                :before-change="validateFourthTab"
              >
                <vue-form-generator
                  :model="model"
                  :schema="fourthTabSchema"
                  :options="formOptions"
                  ref="fourthTabForm"
                  @model-updated="onModelUpdated"
                >
                </vue-form-generator>
                <vue-form-generator
                  v-if="contactPersonValue == '1'"
                  :model="model"
                  :schema="ARSchema"
                  :options="formOptions"
                >
                </vue-form-generator>
                <vue-form-generator
                  v-if="contactPersonValue == '2'"
                  :model="model"
                  :schema="AARSchema"
                  :options="formOptions"
                >
                </vue-form-generator>
                <vue-form-generator
                  v-if="contactPersonValue == '3'"
                  :model="model"
                  :schema="CEOSchema"
                  :options="formOptions"
                >
                </vue-form-generator>
                <vue-form-generator
                  v-if="contactPersonValue == '4'"
                  :model="model"
                  :schema="OtherSchema"
                  :options="formOptions"
                  @model-updated="onModelUpdated"
                >
                </vue-form-generator>
              </tab-content>
              <tab-content
                icon="fa fa-usd"
                title="6. Payment Detail"
                :before-change="validateFifthTab"
              >
                <vue-form-generator
                  :model="model"
                  :schema="fifthTabSchema"
                  :options="formOptions"
                  ref="fifthTabForm"
                  @model-updated="onModelUpdated"
                >
                </vue-form-generator
                ><br />
                <label>Upload Receipt</label><br />
                <input
                  type="file"
                  accept="application/pdf,application/msword,
                    application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  @change="uploadFile()"
                  ref="file"
                  id="file-input2"
                />
                <br />
                <br />
                <p class="ml-4">
                  <a
                    v-if="showView"
                    href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    target="blank"
                    class="row"
                  >View File</a
                  >
                </p>
                <br />
                <br />
              </tab-content>
              <tab-content icon="fa fa-file-text" title="7. Upload Document">
                <div>
                  <div class="table-sm col-ml-2">
                    <b-table
                      hover
                      :items="uploadFileItems"
                      :fields="uploadFileFields"
                      responsive="sm"
                    >
                      <!-- A virtual column -->
                      <template #cell(actions)="data">
                        <!-- {{data.index}} -->
                        <base-checkbox
                          class=""
                          v-model="data.item.selected"
                          disabled="true"
                        ></base-checkbox>
                      </template>
                      <template #cell()="data">
                        <span class="description">{{ data.value }}</span> &nbsp;
                        <a
                          target="blank"
                          v-if="data.item.selected == true"
                          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                        >View</a
                        >
                      </template>
                      <template #cell(chooseFile)="data">
                        <form
                          v-if="data.item.type == 'file'"
                          enctype="multipart/form-data"
                        >
                          <input
                            type="file"
                            accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            ref="files"
                            @change="uploadImage(data.item)"
                            :id="'file-input' + data.index"
                          />
                        </form>

                        <form
                          v-if="data.item.type == 'photo'"
                          enctype="multipart/form-data"
                        >
                          <div v-if="applicantPhoto">
                            <img
                              src
                              ref="applicantPhotoDisplay"
                              class="w-150px"
                            />
                          </div>
                          <br v-if="applicantPhoto" />
                          <input
                            type="file"
                            accept="image/*"
                            ref="applicantPhoto"
                            @change="uploadImage(data.item)"
                            :id="'file-input' + data.index"
                          />
                        </form>
                      </template>
                    </b-table>
                  </div>
                </div>
              </tab-content>
              <tab-content icon="fa fa-file-pdf-o" title="8. Proposal">
                <br />
                <h4 class="card-title">
                  Part 1 :Governance on marketing and distribution activities
                </h4>
                <br />
                <div style="overflow-x: auto;">
                  <div class="table-sm col-ml-2">
                    <b-table
                      hover
                      :items="uploadFileItems1"
                      :fields="uploadFileFields"
                      responsive="sm"
                    >
                      <!-- A virtual column -->
                      <template #cell(actions)="data">
                        <!-- {{data.index}} -->
                        <base-checkbox
                          class=""
                          v-model="data.item.selected"
                          disabled="true"
                        ></base-checkbox>
                      </template>
                      <template #cell()="data">
                        <span class="description">{{ data.value }}</span> &nbsp;
                        <a
                          target="blank"
                          v-if="data.item.selected == true"
                          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                        >View</a
                        >
                      </template>
                      <template #cell(chooseFile)="data">
                        <form
                          v-if="data.item.type == 'file'"
                          enctype="multipart/form-data"
                        >
                          <input
                            type="file"
                            accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            ref="files"
                            @change="uploadImage(data.item)"
                            :id="'file-input' + data.index"
                          />
                        </form>

                        <form
                          v-if="data.item.type == 'photo'"
                          enctype="multipart/form-data"
                        >
                          <div v-if="applicantPhoto">
                            <img
                              src
                              ref="applicantPhotoDisplay"
                              class="w-150px"
                            />
                          </div>
                          <br v-if="applicantPhoto" />
                          <input
                            type="file"
                            accept="image/*"
                            ref="applicantPhoto"
                            @change="uploadImage(data.item)"
                            :id="'file-input' + data.index"
                          />
                        </form>
                      </template>
                    </b-table>
                  </div>
                </div>
                <br />
                <h4 class="card-title">Part 2 :Management of Unitholders</h4>
                <br />
                <div style="overflow-x: auto;">
                  <div class="table-sm col-ml-2">
                    <b-table
                      hover
                      :items="uploadFileItems2"
                      :fields="uploadFileFields"
                      responsive="sm"
                    >
                      <!-- A virtual column -->
                      <template #cell(actions)="data">
                        <!-- {{data.index}} -->
                        <base-checkbox
                          class=""
                          v-model="data.item.selected"
                          disabled="true"
                        ></base-checkbox>
                      </template>
                      <template #cell()="data">
                        <span class="description">{{ data.value }}</span> &nbsp;
                        <a
                          target="blank"
                          v-if="data.item.selected == true"
                          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                        >View</a
                        >
                      </template>
                      <template #cell(chooseFile)="data">
                        <form
                          v-if="data.item.type == 'file'"
                          enctype="multipart/form-data"
                        >
                          <input
                            type="file"
                            accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            ref="files"
                            @change="uploadImage(data.item)"
                            :id="'file-input' + data.index"
                          />
                        </form>

                        <form
                          v-if="data.item.type == 'photo'"
                          enctype="multipart/form-data"
                        >
                          <div v-if="applicantPhoto">
                            <img
                              src
                              ref="applicantPhotoDisplay"
                              class="w-150px"
                            />
                          </div>
                          <br v-if="applicantPhoto" />
                          <input
                            type="file"
                            accept="image/*"
                            ref="applicantPhoto"
                            @change="uploadImage(data.item)"
                            :id="'file-input' + data.index"
                          />
                        </form>
                      </template>
                    </b-table>
                  </div>
                </div>
                <br />
                <h4 class="card-title">Part 3 :Management of Consultants</h4>
                <br />
                <div style="overflow-x: auto;">
                  <div class="table-sm col-ml-2">
                    <b-table
                      hover
                      :items="uploadFileItems3"
                      :fields="uploadFileFields"
                      responsive="sm"
                    >
                      <!-- A virtual column -->
                      <template #cell(actions)="data">
                        <!-- {{data.index}} -->
                        <base-checkbox
                          class=""
                          v-model="data.item.selected"
                          disabled="true"
                        ></base-checkbox>
                      </template>
                      <template #cell()="data">
                        <span class="description">{{ data.value }}</span> &nbsp;
                        <a
                          target="blank"
                          v-if="data.item.selected == true"
                          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                        >View</a
                        >
                      </template>
                      <template #cell(chooseFile)="data">
                        <form
                          v-if="data.item.type == 'file'"
                          enctype="multipart/form-data"
                        >
                          <input
                            type="file"
                            accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            ref="files"
                            @change="uploadImage(data.item)"
                            :id="'file-input' + data.index"
                          />
                        </form>

                        <form
                          v-if="data.item.type == 'photo'"
                          enctype="multipart/form-data"
                        >
                          <div v-if="applicantPhoto">
                            <img
                              src
                              ref="applicantPhotoDisplay"
                              class="w-150px"
                            />
                          </div>
                          <br v-if="applicantPhoto" />
                          <input
                            type="file"
                            accept="image/*"
                            ref="applicantPhoto"
                            @change="uploadImage(data.item)"
                            :id="'file-input' + data.index"
                          />
                        </form>
                      </template>
                    </b-table>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <vue-form-generator
                    :model="model"
                    :schema="declarationSchema"
                    :options="formOptions"
                  >
                  </vue-form-generator>
                </div>
              </tab-content>
              <template
                slot="footer"
                slot-scope="{ activeTabIndex, isLastStep, nextTab, prevTab }"
              >
                <div class="float-left">
                  <button
                    v-if="activeTabIndex > 0"
                    @click="prevTab"
                    type="button"
                    class="btn btn-primary btn-fill btn-md"
                  >
                    <i class="fa fa-step-backward" /> &nbsp; Previous
                  </button>
                </div>
                <div class="float-right">
                  <button
                    @click="nextTab"
                    type="button"
                    class="btn btn-info btn-fill btn-md"
                  >
                    <i class="fa fa-edit" /> &nbsp;Save as Draft
                  </button>
                  <button
                    v-if="isLastStep"
                    @click="showmodal"
                    type="button"
                    class="ml-2 btn btn-warning btn-fill btn-md"
                  >
                    <i class="fa fa-play-circle" /> &nbsp;Preview
                  </button>
                  <button
                    v-if="!isLastStep"
                    @click="nextTab"
                    type="button"
                    class="ml-2 btn btn-primary btn-fill btn-md"
                  >
                    Next &nbsp; <i class="fa fa-step-forward" />
                  </button>
                  <button
                    v-if="isLastStep"
                    @click="nextTab"
                    type="button"
                    class="ml-2 btn btn-primary btn-fill btn-md"
                  >
                    Submit
                  </button>
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
import Multiselect from 'vue-multiselect'
import Vudal from 'vudal'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg-core.css'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueFormGenerator)
Vue.use(VueFormWizard)
Vue.component(Vudal)
// register globally
Vue.component('multiselect', Multiselect)
export default {
  components: {
    Vudal,
  },
  mounted () {
    // this.$refs.wizard.maxStep = 5
    // this.$refs.wizard.navigateToTab(5)
  },
  props: {
    value: File,
  },
  data () {
    return {
      applicantPhoto: '',
      show: false,
      show_second: false,
      show_third: false,
      modalClass: 'modal-90per',
      uploadedFileFields: [
        {
          key: 'actions',
          label: '',
        },
        // A column that needs custom formatting
        {
          key: 'fileName',
          label: 'Document',
        },
        {
          key: 'file',
          label: 'Action',
        },
      ],
      uploadFileFields: [
        // A virtual column that doesn't exist in items
        {
          key: 'actions',
          label: '',
        },
        // A column that needs custom formatting
        {
          key: 'fileName',
          label: 'Document',
        },
        {
          key: 'chooseFile',
          label: 'Choose File',
        },
      ],

      uploadFileItems: [
        {
          id: '1',
          fileName: 'Distributor Logo',
          type: 'photo',
          filePath: '',
          selected: false,
        },
        {
          id: '2',
          fileName:
            "Board of Directors' Resolution approving the appointment of the AR",
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '3',
          fileName:
            ' Certified true copy of relevant CMSL and approval that verify the eligibility of the applicant (if applicable)',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '4',
          fileName: 'Payment of application and annual fees',
          type: 'file',
          filePath: '',
          selected: false,
        },
      ],
      uploadFileItems1: [
        {
          id: '1',
          fileName: 'Policy governing Sales Conduct / Activities ',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '2',
          fileName: 'Policy on promotional Materials ',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '3',
          fileName: 'Policy on Unitholder’s Rights and Protection ',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '4',
          fileName: 'Conflict of Interest Management',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '5',
          fileName: 'Conflict of Interest Management',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '6',
          fileName: 'Risk Management ',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '7',
          fileName: 'Complaint Handling and Disciplinary matrix ',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '8',
          fileName:
            'Other Policies – upload related policy available (i.e. AMLCFT, PDPA, etc.) ',
          type: 'file',
          filePath: '',
          selected: false,
        },
      ],
      uploadFileItems2: [
        {
          id: '1',
          fileName: 'Unitholder’s KYC process, records and system ',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '2',
          fileName:
            'Redemption process - upload related policy (checking, verification & turnaround)',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '3',
          fileName: 'Switching process ',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '4',
          fileName: 'Transfer process & policy ',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '5',
          fileName: 'Reconciliation of subscriptions/ redemptions/ transfers',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '6',
          fileName: 'Management of Statements to investors',
          type: 'file',
          filePath: '',
          selected: false,
        },
      ],
      uploadFileItems3: [
        {
          id: '1',
          fileName: 'Recruitment of Consultants ',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '2',
          fileName: 'Promotion of Consultants ',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '3',
          fileName: 'Consultant Record Management and Maintenance System',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '4',
          fileName: 'Termination of Consultants ',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '5',
          fileName: 'Training & CPD Record Management ',
          type: 'file',
          filePath: '',
          selected: false,
        },
        {
          id: '6',
          fileName: 'Apprenticeship Management / Management of agency',
          type: 'file',
          filePath: '',
          selected: false,
        },
      ],
      currentPage: 1,
      filter: null,
      directorList: [],
      fieldsDirList: [
        {
          key: 'index',
          label: 'No',
        },
        // A column that needs custom formatting
        {
          key: 'name',
          label: 'Name',
        },
        {
          key: 'DIR_icNo',
          label: 'IC No.',
        },
        {
          key: 'DIR_effectiveDate',
          label: 'Effective Date',
        },
        {
          key: 'DIR_endDate',
          label: 'End Date',
        },
      ],
      fields: [
        // A virtual column that doesn't exist in items
        {
          key: 'index',
          label: 'No',
        },
        // A column that needs custom formatting
        {
          key: 'name',
          label: 'Name',
        },
        {
          key: 'DIR_icNo',
          label: 'IC No.',
        },
        {
          key: 'DIR_effectiveDate',
          label: 'Effective Date',
        },
        {
          key: 'DIR_endDate',
          label: 'End Date',
        },
        {
          key: 'actions',
          label: 'Action',
        },
      ],
      showView: false,
      contactPersonValue: null,
      visibleIc: true,
      visiblePassport: false,
      visibleIcAAR: true,
      visiblePassportAAR: false,
      visiblePassportCEO: false,
      visibleIcCEO: true,
      visiblePassportOther: false,
      visibleIcOther: true,
      // transType:[
      //   {
      //     name: "Malaysian",
      //     value: "1",
      //     selected: true
      //   },
      // ],
      citizenship: [
        {
          name: 'Malaysian',
          value: '1',
          selected: true,
        },
        {
          name: 'Non Malaysian',
          value: '2',
        },
      ],

      country: [
        {
          id: '1',
          name: 'Malaysia',
          selected: true,
        },
      ],
      postcode: [
        '40000',
        '40100',
        '40150',
        '40160',
        '40170',
        '40200',
        '40300',
        '40400',
        '40450',
        '40460',
        '40470',
        '40500',
        '40502',
        '40503',
        '40505',
        '40512',
        '40517',
        '40520',
        '40529',
        '40542',
        '40548',
        '40550',
        '40551',
        '40560',
        '40564',
        '40570',
        '40572',
        '40576',
        '40578',
        '40582',
        '40590',
        '40592',
        '40594',
        '40596',
        '40598',
        '40604',
        '40607',
        '40608',
        '40610',
        '40612',
        '40620',
        '40622',
        '40626',
        '40632',
        '40646',
        '40648',
        '40660',
        '40664',
        '40670',
        '40672',
        '40673',
        '40674',
        '40675',
        '40676',
        '40680',
        '40690',
        '40700',
        '40702',
        '40704',
        '40706',
        '40708',
        '40710',
        '40712',
        '40714',
        '40716',
        '40718',
        '40720',
        '40722',
        '40724',
        '40726',
        '40728',
        '40730',
        '40732',
        '40800',
        '40802',
        '40804',
        '40806',
        '40808',
        '40810',
        '40990',
        '41000',
        '41050',
        '41100',
        '41150',
        '41200',
        '41250',
        '41300',
        '41400',
        '41506',
        '41560',
        '41586',
        '41672',
        '41700',
        '41710',
        '41720',
        '41900',
        '41902',
        '41904',
        '41906',
        '41908',
        '41910',
        '41912',
        '41914',
        '41916',
        '41918',
        '41990',
        '42000',
        '42009',
        '42100',
        '42200',
        '42300',
        '42500',
        '42507',
        '42509',
        '42600',
        '42610',
        '42700',
        '42800',
        '42920',
        '42940',
        '42960',
        '43000',
        '43007',
        '43009',
        '43100',
        '43200',
        '43207',
        '43300',
        '43400',
        '43500',
        '43558',
        '43600',
        '43650',
        '43700',
        '43800',
        '43807',
        '43809',
        '43900',
        '43950',
        '44000',
        '44010',
        '44020',
        '44100',
        '44110',
        '44200',
        '44300',
        '45000',
        '45100',
        '45200',
        '45207',
        '45209',
        '45300',
        '45400',
        '45500',
        '45600',
        '45607',
        '45609',
        '45620',
        '45700',
        '45800',
        '46000',
        '46050',
        '46100',
        '46150',
        '46200',
        '46300',
        '46350',
        '46400',
        '46506',
        '46547',
        '46549',
        '46551',
        '46564',
        '46582',
        '46598',
        '46662',
        '46668',
        '46672',
        '46675',
        '46700',
        '46710',
        '46720',
        '46730',
        '46740',
        '46750',
        '46760',
        '46770',
        '46780',
        '46781',
        '46782',
        '46783',
        '46784',
        '46785',
        '46786',
        '46787',
        '46788',
        '46789',
        '46790',
        '46791',
        '46792',
        '46793',
        '46794',
        '46795',
        '46796',
        '46797',
        '46798',
        '46799',
        '46800',
        '46801',
        '46802',
        '46803',
        '46804',
        '46805',
        '46806',
        '46860',
        '46870',
        '46960',
        '46962',
        '46964',
        '46966',
        '46968',
        '46970',
        '46972',
        '46974',
        '46976',
        '46978',
        '47000',
        '47100',
        '47110',
        '47120',
        '47130',
        '47140',
        '47150',
        '47160',
        '47170',
        '47180',
        '47190',
        '47200',
        '47300',
        '47301',
        '47307',
        '47308',
        '47400',
        '47410',
        '47500',
        '47507',
        '47509',
        '47600',
        '47610',
        '47620',
        '47630',
        '47640',
        '47650',
        '47800',
        '47810',
        '47820',
        '47830',
        '48000',
        '48010',
        '48020',
        '48050',
        '48100',
        '48200',
        '48300',
        '53100',
        '55100',
        '56000',
        '56100',
        '63000',
        '63100',
        '63200',
        '63300',
        '64000',
        '68000',
        '68100',
      ],
      city: [
        {
          id: '1',
          name: 'Subang Jaya',
        },
        {
          id: '2',
          name: 'Klang',
        },
        {
          id: '3',
          name: 'Ampang Jaya',
        },
        {
          id: '3',
          name: 'Shah Alam',
        },
        {
          id: '3',
          name: 'Petaling Jaya',
        },
        {
          id: '3',
          name: 'Cheras',
        },
        {
          id: '3',
          name: 'Kajang',
        },
        {
          id: '3',
          name: 'Selayang Baru',
        },
        {
          id: '3',
          name: 'Rawang',
        },
        {
          id: '3',
          name: 'Taman Greenwood',
        },
        {
          id: '3',
          name: 'Semenyih',
        },
        {
          id: '3',
          name: 'Serdang',
        },
        // "Banting",
        // "Balakong",
        // "Gombak Setia",
        // "Kuala Selangor",
        // "Serendah",
        // "Bukit Beruntung",
        // "Pengkalan Kundang",
        // "Jenjarom",
        // "Sungai Besar",
        // "Batu Arang",
        // "Tanjung Sepat",
        // "Kuang",
        // "Kuala Kubu Baharu",
        // "Batang Berjuntai",
        // "Bandar Baru Salak Tinggi",
        // "Sekinchan",
        // "Sabak",
        // "Tanjung Karang",
        // "Beranang",
        // "Sungai Pelek"
      ],
      states: [
        {
          id: 'MY-14',
          name: 'Wilayah Persekutuan Kuala Lumpur',
        },
        {
          id: 'MY-15',
          name: 'Wilayah Persekutuan Labuan',
        },
        {
          id: 'MY-16',
          name: 'Wilayah Persekutuan Putrajaya',
        },
        {
          id: 'MY-01',
          name: 'Johor',
        },
        {
          id: 'MY-02',
          name: 'Kedah',
        },
        {
          id: 'MY-03',
          name: 'Kelantan',
        },
        {
          id: 'MY-04',
          name: 'Melaka',
        },
        {
          id: 'MY-05',
          name: 'Negeri Sembilan',
        },
        {
          id: 'MY-06',
          name: 'Pahang',
        },
        {
          name: 'Perak',
          id: 'MY-08',
        },
        {
          id: 'MY-09',
          name: 'Perlis',
        },
        {
          id: 'MY-07',
          name: 'Pulau Pinang',
        },
        {
          id: 'MY-12',
          name: 'Sabah',
        },
        {
          id: 'MY-13',
          name: 'Sarawak',
        },
        {
          id: 'MY-10',
          name: 'Selangor',
        },
        {
          id: 'MY-11',
          name: 'Terengganu',
        },
      ],
      applicationType: [
        {
          name: 'Member',
          value: '1',
        },
        {
          name: 'IUTA',
          value: '2',
        },
        {
          name: 'CUTA',
          value: '3',
        },
      ],
      setupType: [
        { value: '1', name: 'Public Listed Company / Berhad ' },
        { value: '2', name: 'Private Listed Company / Sendirian Berhad ' },
      ],
      salutations: [
        {
          name: 'BRIG. GEN. (B)',
          id: '1',
        },
        {
          name: 'CIK',
          id: '2',
        },
        {
          name: 'DATIN',
          id: '3',
        },
        {
          name: 'DATIN SERI',
          id: '4',
        },
        {
          name: 'DATO',
          id: '5',
        },
        {
          name: 'DATUK',
          id: '6',
        },
        {
          name: 'DATUK SERI',
          id: '7',
        },
        {
          name: 'DR',
          id: '8',
        },
        {
          name: 'EN',
          id: '9',
        },
        {
          name: 'MR.',
          id: '11',
        },
        {
          name: 'MS.',
          id: '12',
        },
        {
          name: 'PN.',
          id: '13',
        },
        {
          name: 'PROF.',
          id: '14',
        },
        {
          name: 'PUAN SRI',
          id: '15',
        },
        {
          name: 'TAN SRI',
          id: '16',
        },
        {
          name: 'TENGKU',
          id: '17',
        },
        {
          name: 'TUAN',
          id: '18',
        },
        {
          name: 'TUAN HAJI',
          id: '19',
        },
        {
          name: 'TUNKU',
          id: '20',
        },
        {
          name: 'Y.A.B',
          id: '21',
        },
        {
          name: 'Y.B',
          id: '22',
        },
        {
          name: 'Y.BHG.',
          id: '23',
        },
        {
          name: 'Y.M.TUNKU DATO',
          id: '24',
        },
      ],
      icTypes: [
        {
          name: 'New NRIC',
          value: '1',
        },
        {
          name: 'Old NRIC',
          value: '2',
        },
        {
          name: 'Passport',
          value: '3',
        },
      ],
      contactPerson: [
        {
          name: 'Authorised Representative(s)',
          value: '1',
        },
        {
          name: 'Alternate Authorised Representative(s)',
          value: '2',
        },
        {
          name: 'CEO',
          value: '3',
        },
        {
          name: 'Other',
          value: '4',
        },
      ],
      bank: [
        {
          name: 'Maybank',
          code: '27',
        },
        {
          name: 'CIMB Bank',
          code: '35',
        },
        {
          name: 'RHB Bank',
          code: '18',
        },
        {
          name: 'Bank Islam',
          code: '45',
        },
        {
          name: 'Bank Muamalat',
          code: '41',
        },
        {
          name: 'Bank Rakyat',
          code: '02',
        },
        {
          name: 'Bank Simpanan Nasional',
          code: '10',
        },
        {
          name: 'Citibank',
          code: '17',
        },
        {
          name: 'Hong Leong Bank',
          code: '24',
        },
        {
          name: 'HSBC Bank',
          code: '22',
        },
        {
          name: 'OCBC Bank',
          code: '29',
        },
        {
          name: 'Public Bank',
          code: '33',
        },
        {
          name: 'Affin Bank',
          code: '32',
        },
        {
          name: 'AmBank',
          code: '08',
        },
        {
          name: 'Agro Bank',
          code: '49',
        },
        {
          name: 'Alliance Bank',
          code: '12',
        },
        {
          name: 'Al-Rajhi Bank',
          code: '53',
        },
        {
          name: 'Bank of China',
          code: '42',
        },
        {
          name: 'Bank of America',
          code: '07',
        },
        {
          name: 'Bank of Tokyo-Mitsubishi UFJ',
          code: '52',
        },
        {
          name: 'BNP Paribas',
          code: '60',
        },
        {
          name: 'Deutsche Bank',
          code: '19',
        },
        {
          name: 'Industrial & Commercial Bank of China',
          code: '59',
        },
        {
          name: 'JP Morgan Chase Bank',
          code: '48',
        },
        {
          name: 'Kuwait Finance House',
          code: '47',
        },
        {
          name: 'Mizuho Bank',
          code: '73',
        },
        {
          name: 'Standard Chartered Bank',
          code: '14',
        },
        {
          name: 'Sumitomo Mitsui Banking Corporation',
          code: '51',
        },
        {
          name: 'The Royal Bank of Scotland',
          code: '46',
        },
        {
          name: 'United Overseas Bank',
          code: '26',
        },
      ],
      transType: [
        {
          name: 'online transaction',
          value: '1',
        },
        {
          name: 'cash deposit',
          value: '2',
        },
      ],
      department: [],
      compType: [
        { id: '1', name: 'UTMC', selected: false },
        { id: '2', name: 'IUTA', selected: false },
        { id: '3', name: 'CUTA', selected: false },
        { id: '4', name: 'IUTA', selected: false },
        { id: '5', name: 'CPRA', selected: false },
        { id: '6', name: 'PRP', selected: false },
      ],
      structureType: [
        { value: '1', name: 'Single-tier' },
        { value: '2', name: 'Multi-tier' },
      ],
      approachType: [
        { value: '1', name: 'Direct' },
        { value: '2', name: 'Nominee' },
      ],
      model: {
        show1: true,
        //* *Particulars of Applicant (Corporate)*/

        companyName: '',
        coRegNo: '',
        newCoRegNo: '',
        address: '',
        address2: '',
        address3: '',
        postcode: '',
        country: '',
        city: '',
        state: '',
        telNo: '',
        faxNo: '',
        email: '',
        applicationType: '',
        incorporateDate: '',
        setupType: '',

        structureType: '',
        approachType: '',
        dpNumber: '',
        consultantNumber: '',
        //* *Authorised Representative(s) */
        salutation: '',
        firstName: '',
        middleName: '',
        LastName: '',
        position: '',
        AR_icNo: '',
        AR_passport: '',
        passportExpiryDate: '',
        AR_citizenship: '1',
        AR_address: '',
        AR_address2: '',
        AR_postcode: '',
        AR_country: '',
        AR_city: '',
        AR_state: '',
        AR_telNo: '',
        AR_faxNo: '',
        AR_email: '',
        //* *Alternate Authorised Representative(s) */
        AAR_salutation: '',
        AAR_firstName: '',
        AAR_middleName: '',
        AAR_LastName: '',
        AAR_position: '',
        AAR_icNo: '',
        AAR_passport: '',
        AAR_passportExpiryDate: null,
        AAR_citizenship: '1',
        AAR_address: '',
        AAR_address2: '',
        AAR_postcode: '',
        AAR_city: '',
        AAR_state: '',
        AAR_country: '',
        AAR_telNo: '',
        AAR_faxNo: '',
        AAR_email: '',
        //* *Login Info Authorised Representative(s) */
        LI_AR_memberId: '',
        LI_AR_password: '',
        LI_AR_confirmPassword: '',
        //* *Login Info Alternate Authorised Representative(s) */
        LI_AAR_memberId: '',
        LI_AAR_password: '',
        LI_AAR_confirmPassword: '',
        //* *Additional Information */
        AI_contactPerson: '',
        AI_name: '',
        AI_nameContactPerson: '',
        AI_nameAuthorisedRep: '',
        AI_nameAlternateAuthorisedRep: '',
        AI_term1: '',
        AI_term2: '',
        AI_term3: '',

        //* *Director detail */
        DIR_salutation: '',
        DIR_firstName: '',
        DIR_middleName: '',
        DIR_LastName: '',
        DIR_icNo: '',
        DIR_effectiveDate: '',
        DIR_endDate: '',

        //* * Ceo Detail */
        CEO_salutation: '',
        CEO_firstName: '',
        CEO_middleName: '',
        CEO_LastName: '',
        CEO_position: '',
        CEO_icNo: '',
        CEO_passport: '',
        CEO_passportExpiryDate: '',
        CEO_citizenship: '1',
        CEO_address: '',
        CEO_address2: '',
        CEO_postcode: '',
        CEO_country: '',
        CEO_city: '',
        CEO_state: '',
        CEO_telNo: '',
        CEO_faxNo: '',
        CEO_email: '',

        //* * Other Detail */
        Other_salutation: '',
        Other_firstName: '',
        Other_middleName: '',
        Other_LastName: '',
        Other_position: '',
        Other_icNo: '',
        Other_passport: '',
        Other_passportExpiryDate: null,
        Other_citizenship: '1',
        Other_address: '',
        Other_address2: '',
        Other_postcode: '',
        Other_country: '',
        Other_city: '',
        Other_state: '',
        Other_telNo: '',
        Other_faxNo: '',
        Other_email: '',

        //* * payment detail */
        refNo: '',
        transType: '',
        transDate: '',
        accType: '',
        beneficiaryName: '',
        beneficiaryBank: '',
        beneficiaryAccNo: '',
        receipientRef: '',
        otherPaymentDetails: '',
        amount: '',
      },
      formOptions: {
        // validationErrorClass: "has-error",
        // validationSuccessClass: "has-`success`",
        validateAfterChanged: true,
      },
      firstTabSchema: {
        groups: [
          {
            styleClasses: 'row',
            // legend: "Create Company Profile",
            fields: [
              {
                type: 'input',
                inputType: 'text',
                label: 'Distributor Name',
                model: 'companyName',
                placeholder: 'Enter distributoe name',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-12',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Registration No',
                model: 'coRegNo',
                placeholder: 'Enter distributor registration number',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'New Registration No',
                model: 'newCoRegNo',
                placeholder: 'Enter new distributor registration number',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'date',
                label: 'Date of Incorporation ',
                model: 'incorporationDate',
                placeholder: 'Enter date',
                required: true,
                styleClasses: 'col-md-4',
              },
              {
                type: 'radios',
                label: 'Type of Setup',
                model: 'setupType',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-8 display-inline',
                values: () => {
                  return this.setupType
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Address',
                model: 'address',
                placeholder: 'Enter street address',
                hint: 'Street Address',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-12',
              },
              {
                type: 'input',
                inputType: 'text',
                model: 'address2',
                placeholder: 'Enter street address',
                hint: 'Street Address line 2',
                styleClasses: 'col-md-12',
              },
              {
                type: 'input',
                inputType: 'text',
                model: 'address3',
                placeholder: 'Enter street address',
                hint: 'Street Address line 3',
                styleClasses: 'col-md-12',
              },
              {
                type: 'vueMultiSelect',
                model: 'country',
                label: 'Country',
                placeholder: 'Enter Your Country',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-6',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.country
                },
              },
              {
                type: 'vueMultiSelect',
                model: 'postcode',
                label: 'Postcode',
                placeholder: 'Enter Your Postcode',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-6',
                selectOptions: {
                  multiple: false,
                  // key: "name",
                  // label: "name",
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.postcode
                },
              },
              {
                type: 'vueMultiSelect',
                model: 'city',
                label: 'City',
                placeholder: 'Enter Your City',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-6',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.city
                },
              },
              {
                type: 'vueMultiSelect',
                model: 'state',
                label: 'State',
                placeholder: 'Enter Your State',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-6',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.states
                },
              },
              {
                type: 'input',
                inputType: 'number',
                label: 'Telephone Number',
                model: 'telNo',
                placeholder: 'Enter telephone number',
                required: true,
                validator: 'number',
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'number',
                label: 'Fax Number',
                model: 'faxNo',
                placeholder: 'Enter fax number',
                required: true,
                validator: 'number',
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'email',
                label: 'Email Address',
                model: 'email',
                placeholder: 'Enter email address',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-12',
              },
            ],
          },
        ],
      },
      firstTabAddSchema: {
        groups: [
          {
            styleClasses: 'row',
            // legend: "company details",
            fields: [
              {
                type: 'input',
                inputType: 'text',
                label: 'Financial Status (Total Paid-Up Capital (RM))',
                model: 'financialStatus',
                placeholder: 'Enter Paid-Up Capital (RM)',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-12',
              },
              {
                type: 'radios',
                label: 'Type of Structure',
                model: 'structureType',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-8 display-inline',
                values: () => {
                  return this.structureType
                },
              },
              {
                type: 'radios',
                label: 'Marketing Approach',
                model: 'marketingApproach',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-8 display-inline',
                values: () => {
                  return this.approachType
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Proposed number of Distribution Points ',
                model: 'dpNumber',
                placeholder: 'Enter Proposed number of Distribution Points',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-12',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Proposed number of Consultants ',
                model: 'consultantNumber',
                placeholder: 'Enter Proposed number of Consultants',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-12',
              },
            ],
          },
        ],
      },
      secondTabSchema: {
        groups: [
          {
            styleClasses: 'row',
            legend: 'A. Authorised Representative',
            fields: [
              {
                type: 'vueMultiSelect',
                model: 'salutation',
                label: 'Salutation',
                placeholder: 'Enter Your Salutation',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-12',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.salutations
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'First Name',
                model: 'firstName',
                placeholder: 'Please enter name',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Middle Name',
                model: 'middleName',
                placeholder: 'Please enter name',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Last Name',
                model: 'LastName',
                placeholder: 'Please enter name',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Position',
                model: 'position',
                placeholder: 'Enter position',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-12',
              },
              {
                type: 'radios',
                label: 'Citizenship',
                model: 'AR_citizenship',
                values: () => {
                  return this.citizenship
                },
                styleClasses: 'col-md-3 display-inline',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'NRIC No',
                model: 'AR_icNo',
                placeholder: 'Enter NRIC No.',
                required: true,
                validator: ['string', this.validateIC],
                styleClasses: 'col-md-9',
                visible: (model, field, form) => {
                  return this.visibleIc
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Passport No.',
                model: 'AR_passport',
                placeholder: 'Enter Passport No.',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-5',
                visible: (model, field, form) => {
                  return this.visiblePassport
                },
              },
              {
                labels: 'Passport Expiry Date',
                type: 'vfg-functional-date',
                placeholder: 'Passport Expiry Date',
                model: 'passportExpiryDate',
                noLabel: true,
                noClearButton: true,
                formatted: 'DD/MM/YYYY',
                styleClasses: 'col-md-4',
                visible: (model, field, form) => {
                  return this.visiblePassport
                },
                required: true,
                validator: 'string',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Telephone Number',
                model: 'AR_telNo',
                placeholder: 'Enter telephone number',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'email',
                label: 'Email Address',
                model: 'AR_email',
                placeholder: 'Enter email address',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-6',
              },
            ],
          },
          {
            styleClasses: 'row',
            legend: 'B. Alternate Authorised Representative',
            fields: [
              {
                type: 'vueMultiSelect',
                model: 'AAR_salutation',
                label: 'Salutation',
                placeholder: 'Enter Your Salutation',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-12',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.salutations
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'First Name',
                model: 'AAR_firstName',
                placeholder: 'Please enter name',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Middle Name',
                model: 'AAR_middleName',
                placeholder: 'Please enter name',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Last Name',
                model: 'AAR_LastName',
                placeholder: 'Please enter name',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Position',
                model: 'AAR_position',
                placeholder: 'Enter position',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-12',
              },
              {
                type: 'radios',
                label: 'Citizenship',
                model: 'AAR_citizenship',
                values: () => {
                  return this.citizenship
                },
                styleClasses: 'col-md-3 display-inline',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'NRIC No',
                model: 'AAR_icNo',
                placeholder: 'Enter NRIC No.',
                required: true,
                validator: ['string', this.validateIC],
                styleClasses: 'col-md-9',
                visible: (model, field, form) => {
                  return this.visibleIcAAR
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Passport No.',
                model: 'AAR_passport',
                placeholder: 'Enter Passport No.',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-5',
                visible: (model, field, form) => {
                  return this.visiblePassportAAR
                },
              },
              {
                labels: 'Passport Expiry Date',
                type: 'vfg-functional-date',
                placeholder: 'Passport Expiry Date',
                model: 'AAR_passportExpiryDate',
                noLabel: true,
                noClearButton: true,
                formatted: 'DD/MM/YYYY',
                styleClasses: 'col-md-4',
                visible: (model, field, form) => {
                  return this.visiblePassportAAR
                },
                required: true,
                validator: 'string',
              },
              {
                type: 'input',
                inputType: 'number',
                label: 'Telephone Number',
                model: 'AAR_telNo',
                placeholder: 'Enter telephone number',
                required: true,
                validator: 'number',
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'email',
                label: 'Email Address',
                model: 'AAR_email',
                placeholder: 'Enter email address',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-6',
              },
            ],
          },
        ],
      },
      thirdTabSchemaDIR: {
        groups: [
          {
            styleClasses: 'row mt-2',
            legend: 'Director Details',
            fields: [
              {
                type: 'vueMultiSelect',
                model: 'DIR_salutation',
                label: 'Salutation',
                placeholder: 'Enter Your Salutation',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-12',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.salutations
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'First Name',
                model: 'DIR_firstName',
                placeholder: 'Please enter name',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Middle Name',
                model: 'DIR_middleName',
                placeholder: 'Please enter name',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Last Name',
                model: 'DIR_LastName',
                placeholder: 'Please enter name',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'NRIC No',
                model: 'DIR_icNo',
                placeholder: 'Enter NRIC No.',
                required: true,
                validator: ['string', this.validateIC],
                styleClasses: 'col-md-12',
                max: 12,
              },
              {
                labels: 'Effective Date',
                type: 'vfg-functional-date',
                placeholder: 'Select effective date',
                model: 'DIR_effectiveDate',
                noLabel: true,
                noClearButton: true,
                formatted: 'DD/MM/YYYY',
                styleClasses: 'col-md-6',
                required: true,
                validator: 'string',
              },
              {
                labels: 'End Date',
                type: 'vfg-functional-date',
                placeholder: 'Select End Date',
                model: 'DIR_endDate',
                noLabel: true,
                noClearButton: true,
                formatted: 'DD/MM/YYYY',
                styleClasses: 'col-md-6',
                required: true,
                validator: 'string',
              },
            ],
          },
        ],
      },
      thirdTabSchemaCEO: {
        groups: [
          {
            styleClasses: 'row',
            legend: 'CEO Profile',
            fields: [
              {
                type: 'vueMultiSelect',
                model: 'CEO_salutation',
                label: 'Salutation',
                placeholder: 'Enter Your Salutation',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-12',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.salutations
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'First Name',
                model: 'CEO_firstName',
                placeholder: 'Please enter name',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Middle Name',
                model: 'CEO_middleName',
                placeholder: 'Please enter name',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Last Name',
                model: 'CEO_LastName',
                placeholder: 'Please enter name',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Position',
                model: 'CEO_position',
                placeholder: 'Enter position',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-12',
              },
              {
                type: 'radios',
                label: 'Citizenship',
                model: 'CEO_citizenship',
                values: () => {
                  return this.citizenship
                },
                styleClasses: 'col-md-3 display-inline',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'NRIC No',
                model: 'CEO_icNo',
                placeholder: 'Enter NRIC No.',
                required: true,
                validator: ['string', this.validateIC],
                styleClasses: 'col-md-9',
                visible: (model, field, form) => {
                  return this.visibleIcCEO
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Passport No.',
                model: 'CEO_passport',
                placeholder: 'Enter Passport No.',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-5',
                visible: (model, field, form) => {
                  return this.visiblePassportCEO
                },
              },
              {
                labels: 'Passport Expiry Date',
                type: 'vfg-functional-date',
                placeholder: 'Passport Expiry Date',
                model: 'CEO_passportExpiryDate',
                noLabel: true,
                noClearButton: true,
                formatted: 'DD/MM/YYYY',
                styleClasses: 'col-md-4',
                visible: (model, field, form) => {
                  return this.visiblePassportCEO
                },
                required: true,
                validator: 'string',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Telephone Number',
                model: 'CEO_telNo',
                placeholder: 'Enter telephone number',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'email',
                label: 'Email Address',
                model: 'CEO_email',
                placeholder: 'Enter email address',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-6',
              },
            ],
          },
        ],
      },
      fourthTabSchema: {
        groups: [
          {
            styleClasses: 'row',
            fields: [
              {
                type: 'vueMultiSelect',
                model: 'AI_contactPerson',
                label: 'Contact Person',
                placeholder: 'Choose Contact Person',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-6',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: false,
                },
                values: (model, schema) => {
                  return this.contactPerson
                },
                // eslint-disable-next-line no-dupe-keys
                styleClasses: 'col-md-6',
              },
            ],
          },
        ],
      },

      ARSchema: {
        groups: [
          {
            styleClasses: 'row',
            legend: 'Authorised Representative',
            fields: [
              {
                type: 'vueMultiSelect',
                model: 'salutation',
                label: 'Salutation',
                placeholder: 'Enter Your Salutation',
                disabled: true,
                styleClasses: 'col-md-12',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.salutations
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'First Name',
                model: 'firstName',
                placeholder: 'Please enter name',
                disabled: true,
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Middle Name',
                model: 'middleName',
                placeholder: 'Please enter name',
                disabled: true,
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Last Name',
                model: 'LastName',
                placeholder: 'Please enter name',
                disabled: true,
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Position',
                model: 'position',
                placeholder: 'Enter position',
                disabled: true,
                styleClasses: 'col-md-12',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'NRIC No',
                model: 'AR_icNo',
                placeholder: 'Enter NRIC No.',
                disabled: true,
                styleClasses: 'col-md-9',
                visible: (model, field, form) => {
                  return this.visibleIc
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Passport No.',
                model: 'AR_passport',
                placeholder: 'Enter Passport No.',
                disabled: true,
                styleClasses: 'col-md-6',
                visible: (model, field, form) => {
                  return this.visiblePassport
                },
              },
              {
                labels: 'Passport Expiry Date',
                type: 'vfg-functional-date',
                placeholder: 'Passport Expiry Date',
                model: 'passportExpiryDate',
                noLabel: true,
                noClearButton: true,
                formatted: 'DD/MM/YYYY',
                styleClasses: 'col-md-6',
                visible: (model, field, form) => {
                  return this.visiblePassport
                },
                required: true,
                validator: 'string',
                disabled: true,
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Telephone Number',
                model: 'AR_telNo',
                placeholder: 'Enter telephone number',
                disabled: true,
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'email',
                label: 'Email Address',
                model: 'AR_email',
                placeholder: 'Enter email address',
                disabled: true,
                styleClasses: 'col-md-6',
              },
            ],
          },
        ],
      },

      AARSchema: {
        groups: [
          {
            styleClasses: 'row',
            legend: 'Alternate Authorised Representative',
            fields: [
              {
                type: 'vueMultiSelect',
                model: 'AAR_salutation',
                label: 'Salutation',
                placeholder: 'Enter Your Salutation',
                disabled: true,
                styleClasses: 'col-md-12',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.salutations
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'First Name',
                model: 'AAR_firstName',
                placeholder: 'Please enter name',
                disabled: true,
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Middle Name',
                model: 'AAR_middleName',
                placeholder: 'Please enter name',
                disabled: true,
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Last Name',
                model: 'AAR_LastName',
                placeholder: 'Please enter name',
                disabled: true,
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Position',
                model: 'AAR_position',
                placeholder: 'Enter position',
                disabled: true,
                styleClasses: 'col-md-12',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'NRIC No',
                model: 'AAR_icNo',
                placeholder: 'Enter NRIC No.',
                disabled: true,
                styleClasses: 'col-md-9',
                visible: (model, field, form) => {
                  return this.visibleIcAAR
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Passport No.',
                model: 'AAR_passport',
                placeholder: 'Enter Passport No.',
                disabled: true,
                styleClasses: 'col-md-5',
                visible: (model, field, form) => {
                  return this.visiblePassportAAR
                },
              },
              {
                labels: 'Passport Expiry Date',
                type: 'vfg-functional-date',
                placeholder: 'Passport Expiry Date',
                model: 'AAR_passportExpiryDate',
                noLabel: true,
                noClearButton: true,
                formatted: 'DD/MM/YYYY',
                styleClasses: 'col-md-4',
                visible: (model, field, form) => {
                  return this.visiblePassportAAR
                },
                required: true,
                disabled: true,
                validator: 'string',
              },
              {
                type: 'input',
                inputType: 'number',
                label: 'Telephone Number',
                model: 'AAR_telNo',
                placeholder: 'Enter telephone number',
                disabled: true,
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'email',
                label: 'Email Address',
                model: 'AAR_email',
                placeholder: 'Enter email address',
                disabled: true,
                styleClasses: 'col-md-6',
              },
            ],
          },
        ],
      },

      CEOSchema: {
        groups: [
          {
            styleClasses: 'row',
            legend: 'CEO Profile',
            fields: [
              {
                type: 'vueMultiSelect',
                model: 'CEO_salutation',
                label: 'Salutation',
                placeholder: 'Enter Your Salutation',
                disabled: true,
                styleClasses: 'col-md-12',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.salutations
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'First Name',
                model: 'CEO_firstName',
                placeholder: 'Please enter name',
                disabled: true,
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Middle Name',
                model: 'CEO_middleName',
                placeholder: 'Please enter name',
                disabled: true,
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Last Name',
                model: 'CEO_LastName',
                placeholder: 'Please enter name',
                disabled: true,
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Position',
                model: 'CEO_position',
                placeholder: 'Enter position',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-12',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'NRIC No',
                model: 'CEO_icNo',
                placeholder: 'Enter NRIC No.',
                disabled: true,
                styleClasses: 'col-md-9',
                visible: (model, field, form) => {
                  return this.visibleIcCEO
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Passport No.',
                model: 'CEO_passport',
                placeholder: 'Enter Passport No.',
                disabled: true,
                styleClasses: 'col-md-6',
                visible: (model, field, form) => {
                  return this.visiblePassportCEO
                },
              },
              {
                labels: 'Passport Expiry Date',
                type: 'vfg-functional-date',
                placeholder: 'Passport Expiry Date',
                model: 'CEO_passportExpiryDate',
                noLabel: true,
                noClearButton: true,
                formatted: 'DD/MM/YYYY',
                styleClasses: 'col-md-4',
                visible: (model, field, form) => {
                  return this.visiblePassportCEO
                },
                required: true,
                disabled: true,
                validator: 'string',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Address',
                model: 'CEO_address',
                placeholder: 'Enter street address',
                hint: 'Street Address',
                disabled: true,
                styleClasses: 'col-md-12',
              },
              {
                type: 'input',
                inputType: 'text',
                model: 'CEO_address2',
                placeholder: 'Enter street address',
                hint: 'Street Address line 2',
                styleClasses: 'col-md-12',
              },
              {
                type: 'vueMultiSelect',
                model: 'CEO_country',
                label: 'Country',
                placeholder: 'Enter Your Country',
                disabled: true,
                styleClasses: 'col-md-6',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.country
                },
                // eslint-disable-next-line no-dupe-keys
                styleClasses: 'col-md-6',
              },
              {
                type: 'vueMultiSelect',
                model: 'CEO_postcode',
                label: 'Postcode',
                placeholder: 'Enter Your Postcode',
                disabled: true,
                styleClasses: 'col-md-6',
                selectOptions: {
                  multiple: false,
                  // key: "name",
                  // label: "name",
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.postcode
                },
                // eslint-disable-next-line no-dupe-keys
                styleClasses: 'col-md-6',
              },
              {
                type: 'vueMultiSelect',
                model: 'CEO_city',
                label: 'City',
                placeholder: 'Enter Your City',
                disabled: true,
                styleClasses: 'col-md-6',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.city
                },
              },
              {
                type: 'vueMultiSelect',
                model: 'CEO_state',
                label: 'State',
                placeholder: 'Enter Your State',
                disabled: true,
                styleClasses: 'col-md-6',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.states
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Telephone Number',
                model: 'CEO_telNo',
                placeholder: 'Enter telephone number',
                disabled: true,
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Fax Number',
                model: 'CEO_faxNo',
                placeholder: 'Enter fax number',
                disabled: true,
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'email',
                label: 'Email Address',
                model: 'CEO_email',
                placeholder: 'Enter email address',
                styleClasses: 'col-md-6',
                disabled: true,
              },
            ],
          },
        ],
      },

      OtherSchema: {
        groups: [
          {
            styleClasses: 'row',
            legend: 'Other',
            fields: [
              {
                type: 'vueMultiSelect',
                model: 'Other_salutation',
                label: 'Salutation',
                placeholder: 'Enter Your Salutation',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-12',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.salutations
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'First Name',
                model: 'Other_firstName',
                placeholder: 'Please enter name',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Middle Name',
                model: 'Other_middleName',
                placeholder: 'Please enter name',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Last Name',
                model: 'Other_LastName',
                placeholder: 'Please enter name',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-4',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Position',
                model: 'Other_position',
                placeholder: 'Enter position',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-12',
              },
              {
                type: 'radios',
                label: 'Citizenship',
                model: 'Other_citizenship',
                values: () => {
                  return this.citizenship
                },
                styleClasses: 'col-md-3 display-inline',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'NRIC No',
                model: 'Other_icNo',
                placeholder: 'Enter NRIC No.',
                required: true,
                validator: ['string', this.validateIC],
                styleClasses: 'col-md-9',
                visible: (model, field, form) => {
                  return this.visibleIcOther
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Passport No.',
                model: 'Other_passport',
                placeholder: 'Enter Passport No.',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-5',
                visible: (model, field, form) => {
                  return this.visiblePassportOther
                },
              },
              {
                labels: 'Passport Expiry Date',
                type: 'vfg-functional-date',
                placeholder: 'Passport Expiry Date',
                model: 'Other_passportExpiryDate',
                noLabel: true,
                noClearButton: true,
                formatted: 'DD/MM/YYYY',
                styleClasses: 'col-md-4',
                visible: (model, field, form) => {
                  return this.visiblePassportOther
                },
                required: true,
                validator: 'string',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Telephone Number',
                model: 'Other_telNo',
                placeholder: 'Enter telephone number',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Fax Number',
                model: 'Other_faxNo',
                placeholder: 'Enter fax number',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'email',
                label: 'Email Address',
                model: 'Other_email',
                placeholder: 'Enter email address',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-6',
              },
            ],
          },
        ],
      },

      fifthTabSchema: {
        groups: [
          {
            styleClasses: 'row',
            fields: [
              {
                type: 'input',
                inputType: 'text',
                label: 'Reference No',
                model: 'refNo',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'date',
                label: 'Transaction Date',
                model: 'transDate',
                format: 'YYYY-MM-DD HH:mm:ss',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-6',
              },
              {
                type: 'vueMultiSelect',
                model: 'transType',
                label: 'Transaction Type',
                placeholder: 'Choose transaction type',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-12',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.transType
                },
              },

              {
                type: 'input',
                inputType: 'text',
                label: 'Account Type',
                model: 'accType',
                placeholder: 'Enter account type',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-12',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Beneficiary Name',
                model: 'beneficiaryName',
                placeholder: 'Please enter beneficiary name',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-12',
              },
              {
                type: 'vueMultiSelect',
                model: 'beneficiaryBank',
                label: 'Beneficiary Bank',
                placeholder: 'Enter Your beneficiary bank',
                required: true,
                validator: 'required',
                styleClasses: 'col-md-6',
                selectOptions: {
                  multiple: false,
                  key: 'name',
                  label: 'name',
                  searchable: true,
                },
                values: (model, schema) => {
                  return this.bank
                },
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Beneficiary Account No.',
                model: 'beneficiaryAccNo',
                placeholder: 'Please enter beneficiary account no.',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Receipent Reference',
                model: 'receipientRef',
                placeholder: 'Please enter Receipent Reference',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Other Payment Details',
                model: 'otherPaymentDetails',
                placeholder: 'Please enter Other Payment Details',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-6',
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Amount',
                model: 'amount',
                placeholder: 'RM',
                required: true,
                validator: 'string',
                styleClasses: 'col-md-6',
              },
            ],
          },
        ],
      },

      declarationSchema: {
        groups: [
          {
            styleClasses: ['row col'],
            legend: '',
            fields: [
              {
                type: 'checkbox',
                model: 'AI_term1',
                default: false,
                // required: true,
                // validator: "required",
                styleClasses: 'col-sm-1 mt-1',
              },
              {
                type: 'label',
                label:
                  'We agree to abide by the applicable Terms and Conditions  of use for this system and relevant laws and rules issued by FIMM.',
                // validator: "required",
                styleClasses: 'col-sm-11',
              },
            ],
          },
          {
            styleClasses: ['row col'],
            legend: '',
            fields: [
              {
                type: 'checkbox',
                model: 'AI_term2',
                default: false,
                // required: true,
                // validator: "required",
                styleClasses: 'col-sm-1 mt-1',
              },
              {
                type: 'label',
                label:
                  'We hereby confirm that the information given herein and in any other document provided by us for purposes of our application and registration with FIMM is true and accurate.',
                // validator: "required",
                styleClasses: 'col-sm-11',
              },
            ],
          },
          {
            styleClasses: ['row col'],
            legend: '',
            fields: [
              {
                type: 'checkbox',
                model: 'AI_term3',
                default: false,
                required: true,
                // validator: "required",
                styleClasses: 'col-sm-1 mt-1',
              },
              {
                type: 'label',
                label:
                  'Further, we hereby confirm and under take to ensure that, pursuant to the Personal Data Protection Act 2010, we have the consent of our officers, employees and unit trust consultants for the disclosure to and use by FIMM of their personal data.',
                // validator: "required",
                styleClasses: 'col-sm-11',
              },
            ],
          },
        ],
      },
    }
  },
  methods: {
    showmodal () {
      this.$modals.simpleModal.$show()
    },
    uploadImage (item) {
      item.selected = true
      if (item.type === 'photo') {
        console.log(this.$refs.applicantPhoto.files[0])
        this.applicantPhoto = this.$refs.applicantPhoto.files[0]
        const reader = new FileReader()
        reader.addEventListener(
          'load',
          function () {
            this.$refs.applicantPhotoDisplay.src = reader.result
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
    uploadFile () {
      // console.log(this.$refs.file.files[0]);
      if (this.$refs.file.files[0] !== undefined) {
        this.showView = true
      } else {
        this.showView = false
      }
    },

    addDirector () {
      if (this.$refs.thirdTabFormDIR.validate()) {
        var directorInfo = {
          DIR_firstName: this.model.DIR_firstName,
          DIR_middleName: this.model.DIR_middleName,
          DIR_LastName: this.model.DIR_LastName,
          DIR_icNo: this.model.DIR_icNo,
          DIR_effectiveDate: this.model.DIR_effectiveDate,
          DIR_endDate: this.model.DIR_endDate,
        }
        this.directorList.unshift(directorInfo)
        console.log(JSON.stringify(this.directorList))
        // this.model.DIR_firstName = '',
        // this.model.DIR_middleName = '',
        // this.model.DIR_LastName = '',
        // this.model.DIR_icNo = '',
        // this.model.DIR_effectiveDate = '',
        // this.model.DIR_endDate = ''
      }
    },
    validateIC (value) {
      //* * must contain letter only (lowercase and uppercase) */
      const expression1 = /^[0-9]+$/
      // let expression2 = /^[a-zA-Z]*[A-Z]+[a-zA-Z]*$/;
      // //** must contain at least one uppercase letter, one lower case letter and one number */
      // let expression4 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]+)$/;
      // //** must contain at least one uppercase letter, one lower case letter, one number and one character */
      // let expression5 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])([a-zA-Z0-9#?!@$%^&*-]+)$/;
      // //** must contain at least one uppercase letter, one lower case letter, one number and one character with minimum length*/
      // let expression6 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])([a-zA-Z0-9#?!@$%^&*-]+).{8}$/;

      console.log(expression1.test(value))
      if (!expression1.test(value)) {
        // this.passwordStrength = "";
        return ['Ic must contain number only']
      }
    },
    onModelUpdated (newVal, schema) {
      console.log(newVal)
      if (schema === 'AR_citizenship') {
        if (newVal === 1) {
          this.visiblePassport = false
          this.visibleIc = true
        } else {
          this.visiblePassport = true
          this.visibleIc = false
        }
      } else if (schema === 'AAR_citizenship') {
        if (newVal === 1) {
          this.visiblePassportAAR = false
          this.visibleIcAAR = true
        } else {
          this.visiblePassportAAR = true
          this.visibleIcAAR = false
        }
      } else if (schema === 'AI_contactPerson') {
        console.log('valuee :' + newVal)
        if (newVal != null) {
          this.contactPersonValue = newVal.value
        } else {
          this.contactPersonValue = null
        }
      } else if (schema === 'CEO_citizenship') {
        if (newVal === 1) {
          this.visiblePassportCEO = false
          this.visibleIcCEO = true
        } else {
          this.visiblePassportCEO = true
          this.visibleIcCEO = false
        }
      } else if (schema === 'Other_citizenship') {
        if (newVal === 1) {
          this.visiblePassportOther = false
          this.visibleIcOther = true
        } else {
          this.visiblePassportOther = true
          this.visibleIcOther = false
        }
      }
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
      alert(JSON.stringify(this.model))
      // this.$router.push("/admin/director-details");
    },
    validatePassword (value) {
      //* * must contain letter only (lowercase and uppercase) */
      const expression1 = /^[a-zA-Z]+$/
      // eslint-disable-next-line no-unused-vars
      const expression2 = /^[a-zA-Z]*[A-Z]+[a-zA-Z]*$/
      //* * must contain at least one uppercase letter, one lower case letter and one number */
      // eslint-disable-next-line no-unused-vars
      const expression4 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]+)$/
      //* * must contain at least one uppercase letter, one lower case letter, one number and one character */
      // eslint-disable-next-line no-unused-vars
      const expression5 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])([a-zA-Z0-9#?!@$%^&*-]+)$/
      //* * must contain at least one uppercase letter, one lower case letter, one number and one character with minimum length*/
      // eslint-disable-next-line no-unused-vars
      const expression6 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])([a-zA-Z0-9#?!@$%^&*-]+).{8}$/

      console.log(expression1.test(value))
      if (!expression1.test(value)) {
        this.passwordStrength = ''
        return ['Password must contain letter only']
      }
    },
    isEqualTo (value, field, model) {
      // eslint-disable-next-line no-undef
      if (!_.has(field, 'equals')) return ['Confirm password is required']
      // eslint-disable-next-line no-undef
      const a = _.get(model, _.get(field, 'equals'))
      const b = value
      // eslint-disable-next-line no-undef
      if (_.isEqual(a, b)) return []
      return ['Password do not match']
    },
    // validateFirstTab() {
    //     return this.$refs.firstTabForm.validate();
    // },
    //  validateFirstAddTab() {
    //     return this.$refs.firstAddTabForm.validate();
    // },
    // validateSecondTab: function () {
    //     return this.$refs.secondTabForm.validate();
    // },
    // validateThirdTab: function () {
    //     if (this.$refs.thirdTabFormCEO.validate()) {
    //         if (this.directorList.length == 0) {
    //             console.log("no director");
    //             return false;
    //         } else {
    //             return true;
    //         }
    //     } else {
    //         return false;
    //     }
    //     // return this.$refs.thirdTabFormCEO.validate();
    // },
    // validateFourthTab() {
    //     return this.$refs.fourthTabForm.validate();
    // },
    // validateFifthTab() {
    //     return this.$refs.fifthTabForm.validate();
    // }
  },
}
</script>
<!-- New step!
     Add Multiselect CSS. Can be added as a static asset or inside a component. -->
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">
.app-layout__main {
  background: #e8e8e8;
}
</style>
<style scoped>
.widthModal {
  width: 80%;
}
</style>
