<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<script>
import * as servicesModule0 from "../../src/app/module0/services";
import * as servicesModule1 from "../../src/app/module1/services";
import NProgress from "nprogress";

export default {
  name: "app",
  beforeCreate: async function() {
    try {
      // eslint-disable-next-line no-undef
      NProgress.start();
      const response = await servicesModule0.checkTokenValidation();
      if (response == "not valid") {
        await servicesModule0.logout();
        this.$router.push("login");
        NProgress.end();
      } else {
        const user = await servicesModule0.getUser();
        console.log("user info app vue :" + user);
        this.$store.commit("change", user);
        NProgress.end();
      }
    } catch (error) {
      console.log("error :" + JSON.stringify(error));
      NProgress.end();
      await servicesModule0.logout();
      this.$router.push("login");
      // services.logout();
    }
  },
  data() {
    return {
      // Temporary config for 2.1.
      contextConfig: {
        gradient: true,
        shadow: "lg", // 3 states: 'sm', 'lg', undefined (no shadow).
        invertedColor: false
      }
    };
  },
  provide() {
    return {
      contextConfig: this.contextConfig
    };
  },
  watch: {
    // Temporary colors fix for 2.1.
    "contextConfig.invertedColor"(val) {
      const invertedColorClass = "va-inverted-color";
      if (val) {
        document.body.classList.add(invertedColorClass);
      } else {
        document.body.classList.remove(invertedColorClass);
      }
    }
  }
};
</script>

<style lang="scss">
@import "../sass/main.scss";

body {
  height: 100%;

  #app {
    height: 100%;
  }
}
</style>
