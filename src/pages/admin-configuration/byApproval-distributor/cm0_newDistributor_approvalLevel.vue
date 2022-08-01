<template>
  <div class="card-body">
    <div class="row justify-content-center">
        <div class="col-lg-10">
        <h4 slot="header">Approval Level</h4>
        </div>
         <va-card class=" ml-4 col-lg-10 my-1 px-1">
            <div class="col-lg-10">
            <h4 slot="header">
              <i class="fa fa-sitemap"></i>&nbsp;&nbsp;
              New Member/Distributor - A(1)(a)
            </h4>
            </div>
            <br>
           <div class="ml-5">
              <div v-for="(item, index) in approvalLevelList" :key="index">
                    <div class="row">
                    <div class="col-md-1">
                         <span>{{index + 1}}</span>
                    </div>
                    <div class="col-md-6">
                         <span>{{item.name}}</span>
                    </div>
                    <div class="col">
                        <toggle-button v-model='item.toggleStatus'  @change="onToggleChange(item, $event)" :labels="{checked: 'ON', uncheked: 'OFF'}"/>
                    </div>
                   <div class="col">
                    <button v-b-toggle="item.id" type="button" class="float-right btn-fill btn-md"><i class="fa fa-edit"></i></button>
                    </div>
                    </div>
                   
                <hr>
                </div>
            </div>
            <br />
            <button @click="back" type="button" class="btn btn-primary btn-fill btn-md"><i class="fa fa-step-backward" /> &nbsp; Back </button>  
         </va-card>
    </div>
 </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import Vue from "vue";
import "vue-form-generator/dist/vfg.css";

export default {

   data() {
        return {
          visibleLogin: false,

          approvalLevelList: [
        { 
          id: "1", name: "1st Level RD Review",toggleStatus:false, compType: [
                {id: "1", name: "UTMC", selected: false},
                {id: "2", name: "IUTA", selected: false},
                {id: "3", name: "CUTA", selected: false},
                {id: "5", name: "CPRA", selected: false},
                {id: "6", name: "PRP", selected: false},
                {id: "9", name: "3rd Party", selected: false},
                {id: "10",name: "Training Provider", selected: false},
          ], 
        },
        { id: "2", name: "2nd Level RD Review",toggleStatus:false, compType: [
                  {id: "1", name: "UTMC", selected: false},
                  {id: "2", name: "IUTA", selected: false},
                  {id: "3", name: "CUTA", selected: false},
                  {id: "5", name: "CPRA", selected: false},
                  {id: "6", name: "PRP", selected: false},
                  {id: "9", name: "3rd Party", selected: false},
                  {id: "10", name: "Training Provider", selected: false},
            ], 
        },
        { id: "3", name: "LRA Review",toggleStatus:false, compType: [
                 {id: "1", name: "UTMC", selected: false},
                 {id: "2", name: "IUTA", selected: false},
                 {id: "3", name: "CUTA", selected: false},
                 {id: "5", name: "CPRA", selected: false},
                 {id: "6", name: "PRP", selected: false},
                 {id: "9", name: "3rd Party", selected: false},
                 {id: "10", name: "Training Provider", selected: false},
            ], 
        },
        { id: "4", name: "Supervision",toggleStatus:false, compType: [
                 {id: "1", name: "UTMC", selected: false},
                 {id: "2", name: "IUTA", selected: false},
                 {id: "3", name: "CUTA", selected: false},
                 {id: "5", name: "CPRA", selected: false},
                 {id: "6", name: "PRP", selected: false},
                 {id: "9", name: "3rd Party", selected: false},
                 {id: "10", name: "Training Provider", selected: false},
            ], 
        },
        { id: "5", name: "GM Recommendation",toggleStatus:false, compType: [
                 {id: "1", name: "UTMC", selected: false},
                 {id: "2", name: "IUTA", selected: false},
                 {id: "3", name: "CUTA", selected: false},
                 {id: "5", name: "CPRA", selected: false},
                 {id: "6", name: "PRP", selected: false},
                 {id: "9", name: "3rd Party", selected: false},
                 {id: "10", name: "Training Provider", selected: false},
            ], 
        },
        { id: "6", name: "CEO Approval",toggleStatus:false, compType: [
                 {id: "1", name: "UTMC", selected: false},
                 {id: "2", name: "IUTA", selected: false},
                 {id: "3", name: "CUTA", selected: false},
                 {id: "5", name: "CPRA", selected: false},
                 {id: "6", name: "PRP", selected: false},
                 {id: "9", name: "3rd Party", selected: false},
                 {id: "10", name: "Training Provider", selected: false},
            ], 
        },
        { id: "7", name: "BOD Approval",toggleStatus:false, compType: [
                {id: "1", name: "UTMC", selected: false},
                {id: "2", name: "IUTA", selected: false},
                {id: "3", name: "CUTA", selected: false},
                {id: "5", name: "CPRA", selected: false},
                {id: "6", name: "PRP", selected: false},
                {id: "9", name: "3rd Party", selected: false},
                {id: "10", name: "Training Provider", selected: false},
            ], },
      ],
        };
    },

     methods: {
        back() { this.$router.go(-1);}, // back button
        onToggleChange(item, event){
            let value = event.value;       
            console.log(value);
            console.log(item.id);
          },
     },
}

</script>

<style lang="scss">
.app-layout__main {
  background: #e8e8e8;
}
</style>