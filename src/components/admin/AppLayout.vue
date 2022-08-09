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
          <h1 class="m-0"><span class="fs-5"><router-link to="dashboard">Funds Malaysia</router-link></span>
          </h1>
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
            <router-link to="dashboard"><a href="" class="nav-item nav-link active">Home</a></router-link>
            <router-link to="fundStatusCheck"><a href="" class="nav-item nav-link">Fund Status Check</a></router-link>
            <router-link to="newFundLaunch"><a href="" class="nav-item nav-link">New Fund Launch</a></router-link>
            <router-link to="aboutUs"><a href="" class="nav-item nav-link">About</a></router-link>
          </div>
          <router-link to="/auth/login"><a href="" class="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3">Sign-In or Sign-Up</a></router-link>
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
          <div class="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <AppFooter></AppFooter>
          </div>
        </main>
      </div>
    </div>
  </app-page-layout>
</template>

<script>
import AppPageLayout from './AppPageLayout'
import AppNavbar from './app-navbar/AppNavbar'
import AppTopbar from './app-topbar/AppTopbar'
import AppSidebar from './app-sidebar/AppSidebar'
import AppFooter from './app-footer/AppFooter'
import { originalTheme, corporateTheme } from 'vuestic-ui/src/services/themes'
import {
  ColorThemeActionsMixin,
  ColorThemeMixin,
} from '../../services/vuestic-ui'

export default {
  props: {},
  name: 'app-layout',
  components: {
    AppPageLayout,
    AppFooter,
  },
  data () {
    return {
      isTopBar: false,
      minimized: false,
      mobileWidth: 767,
    }
  },
  inject: ['contextConfig'],
  mixins: [ColorThemeActionsMixin, ColorThemeMixin],
  created () {
    if (this.$route.query && this.$route.query.theme === 'corporate') {
      this.setTheme('corporate')
    }
    this.$root.$on('change-theme', this.setTheme)
  },
  beforeDestroy () {
    this.$root.$off('change-theme', this.setTheme)
  },
  methods: {
    setTheme (themeName) {
      const theme = themeName === 'corporate' ? corporateTheme : originalTheme
      this.setColors(theme.colors)
      Object.keys(theme.context).forEach(key => {
        this.contextConfig[key] = theme.context[key]
      })
    },
  },
}
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
