<template>
  <div>
    <form @submit.prevent="onsubmit">
      <va-input
        v-model="email"
        type="text"
        :label="$t('auth.email')"
        :error="!!emailErrors.length"
        :error-messages="emailErrors"
      />

      <va-input
        v-if="showPass == true"
        v-model="password"
        type="text"
        :label="$t('auth.password')"
        :error="!!passwordErrors.length"
        :error-messages="passwordErrors"
      >
        <va-icon
          slot="append"
          style="margin-right: 0;"
          color="gray"
          name="fa fa-eye"
          @click="showPassword"
        />
      </va-input>
      <va-input
        v-if="showPass == false"
        v-model="password"
        type="password"
        :label="$t('auth.password')"
        :error="!!passwordErrors.length"
        :error-messages="passwordErrors"
      >
        <va-icon
          slot="append"
          style="margin-right: 0;"
          color="gray"
          name="fa fa-eye-slash"
          @click="showPassword"
        />
      </va-input>

      <div class="float-left">
        <div class="row mb-2">
          <va-checkbox class="col-2" v-model="remember" />
          <span class="col mt-1 description">
            Remember me
          </span>
        </div>
      </div>

      <div
        class="auth-layout__options d-flex align--center justify--space-between"
      >
        <a class="mb-0"></a>
        <router-link :to="{ name: 'recover-password' }">{{
          $t("auth.recover_password")
        }}</router-link>
      </div>

      <div
        class="auth-layout__options d-flex align--center justify--space-between"
      >
        <a class="mb-0"></a>
        <router-link :to="{ name: 'recover-password' }"
          >First Time User</router-link
        >
      </div>

      <div class="d-flex justify--center mt-3">
        <va-button color="info" type="submit" class="my-0">{{
          $t("auth.login")
        }}</va-button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import * as servicesModule0 from "../../../app/module0/services";

export default {
  name: "login",
  data() {
    return {
      showPass: false,
      email: "dummy", //temporary for testing
      password: "@Bcd1234",
      keepLoggedIn: false,
      emailErrors: [],
      passwordErrors: [],
      remember: false
    };
  },
  computed: {
    formReady() {
      return !this.emailErrors.length && !this.passwordErrors.length;
    }
  },
  methods: {
    showPassword() {
      console.log(this.showPass);
      // this.showPass = !this.showPass;
    },
    onsubmit: async function() {
      console.log(this.email);
      console.log(this.password);
      servicesModule0.logout(); // logout first to clear cache
      console.log("test");
      console.log(this.email);
      console.log(this.password);

      this.emailErrors = this.email ? [] : ["Email is required"];
      this.passwordErrors = this.password ? [] : ["Password is required"];
      if (!this.formReady) {
        return;
      }

      // const data = new FormData()
      //   data.append('login_id', this.email)
      //   data.append('password', this.password)
      //   data.append('client_id', 'reg-client')
      const data = {
        login_id: this.email,
        password: this.password,
        client_id: "reg-client"
      };
      try {
        // console.log('dsss')
        // const response = await servicesModule0.login(data);
        // servicesModule0.setUser(JSON.stringify(response));
        // this.$store.commit("change", JSON.stringify(response));
        // console.log("user store :" + localStorage.getItem("user"));

        //if (JSON.parse(this.$store.getters.userDetail).name) {
        this.$router.push({ name: "dashboard" });
        // }
      } catch (error) {
        console.log(error);
        // alert(error);
      }

      // servicesModule0.login(data);

      // await axios
      //   .post('/api/module0/login', {
      //     login_id: this.email,
      //     password: this.password,
      //     client_id: 'reg-client',
      //   })
      //   .then(response => {
      //     // console.log("token :" + JSON.stringify(response.data.access_token));
      //     servicesModule0.setUser(JSON.stringify(response.data.data))
      //     this.$store.commit('change', JSON.stringify(response.data.data))
      //     console.log('user store :' + localStorage.getItem('user'))
      //     this.$router.push({ name: 'dashboard' })
      //   }).catch(function(error) {
      //       alert(error.response.data.message);
      //       // this.$toast.open({
      //       //     message: error.response.data.message,
      //       //     type: 'error',
      //       //     // all of other options may go here
      //       // });
      //   });
    }
  }
};
</script>

<style lang="scss">
.pa-3,
.py-3,
.pb-3 {
  padding-bottom: 4rem !important;
}
</style>
