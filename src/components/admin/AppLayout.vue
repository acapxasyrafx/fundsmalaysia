<template>
  <app-page-layout
    class="app-layout"
    :is-top-bar.sync="isTopBar"
    :minimized.sync="minimized"
    :mobile-width="mobileWidth"
  >
    <div class="container-xxl position-relative p-0">
      <nav
        class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0"
      >
        <a href="" class="navbar-brand p-0">
          <h1 class="m-0">
            <i class="fa fa-search me-2"></i
            ><span class="fs-5">FMS Website</span>
          </h1>
          <!-- <img src="img/logo.png" alt="Logo"> -->
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto py-0">
            <a href="index.html" class="nav-item nav-link active">Home</a>
            <a href="about.html" class="nav-item nav-link">About</a>
            <a href="service.html" class="nav-item nav-link">Service</a>
            <a href="project.html" class="nav-item nav-link">Project</a>
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                >Pages</a
              >
              <div class="dropdown-menu m-0">
                <a href="team.html" class="dropdown-item">Our Team</a>
                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                <a href="404.html" class="dropdown-item">404 Page</a>
              </div>
            </div>
            <a href="contact.html" class="nav-item nav-link">Contact</a>
          </div>
          <butaton
            type="button"
            class="btn text-secondary ms-3"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
            ><i class="fa fa-search"></i
          ></butaton>
        </div>
      </nav>
    </div>
    <div class="app-layout__container">
      <div
        class="app-layout__main"
        :class="{ 'app-layout__main--top': isTopBar }"
      >
        <main
          class="app-layout__main-layout layout fluid gutter--xl"
          slot="content"
          role="main"
        >
          <router-view />
        </main>
      </div>
    </div>
  </app-page-layout>
</template>

<script>
import AppPageLayout from "./AppPageLayout";
import AppNavbar from "./app-navbar/AppNavbar";
import AppTopbar from "./app-topbar/AppTopbar";
import AppSidebar from "./app-sidebar/AppSidebar";
import { originalTheme, corporateTheme } from "vuestic-ui/src/services/themes";
import {
  ColorThemeActionsMixin,
  ColorThemeMixin
} from "../../services/vuestic-ui";

export default {
  props: {},
  name: "app-layout",
  components: {
    AppPageLayout,
    AppNavbar,
    AppTopbar,
    AppSidebar
  },
  data() {
    return {
      isTopBar: false,
      minimized: false,
      mobileWidth: 767
    };
  },
  inject: ["contextConfig"],
  mixins: [ColorThemeActionsMixin, ColorThemeMixin],
  created() {
    if (this.$route.query && this.$route.query.theme === "corporate") {
      this.setTheme("corporate");
    }
    this.$root.$on("change-theme", this.setTheme);
  },
  beforeDestroy() {
    this.$root.$off("change-theme", this.setTheme);
  },
  methods: {
    setTheme(themeName) {
      const theme = themeName === "corporate" ? corporateTheme : originalTheme;
      this.setColors(theme.colors);
      Object.keys(theme.context).forEach(key => {
        this.contextConfig[key] = theme.context[key];
      });
    }
  }
};
</script>

<style lang="scss">
.app-layout {
  display: flex;
  flex-direction: column;

  &__container {
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    // TODO Probably there is a better way to achieve this.
    height: calc(100% - 65px);

    @include media-breakpoint-down(sm) {
      height: calc(100% - 110px);
    }
  }

  &__main {
    box-sizing: border-box;
    width: 100%;
    position: relative;
    max-height: 100%;
    min-height: 100%;

    &--top {
    }

    &-layout {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      overflow: auto;
      box-sizing: border-box;
      min-height: 100%;
      margin: 0;
    }
  }
}
</style>
