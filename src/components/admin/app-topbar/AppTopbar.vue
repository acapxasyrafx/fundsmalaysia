<template>
  <aside class="app-topbar" :style="computedStyles">
    <div class="container-xxl position-relative p-0">
      <nav
        class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0"
      >
        <a href="" class="navbar-brand p-0">
          <h1 class="m-0">
            <i class="fa fa-search me-2"></i>SEO<span class="fs-5">Master</span>
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
          <a
            href="https://htmlcodex.com/startup-company-website-template"
            class="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3"
          >Pro Version</a
          >
        </div>
      </nav>

      <div class="container-xxl py-5 bg-primary hero-header mb-5">
        <div class="container my-5 py-5 px-lg-5">
          <div class="row g-5 py-5">
            <div class="col-lg-6 text-center text-lg-start">
              <h1 class="text-white mb-4 animate__animated animate__zoomIn">
                All in one SEO tool need to grow your business rapidly
              </h1>
              <p class="text-white pb-3 animate__animated animate__zoomIn">
                Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum
                stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam.
                Sit diam sit justo amet ipsum vero ipsum clita lorem
              </p>
              <a
                href=""
                class="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animate__animated animate__slideInLeft"
              >Free Quote</a
              >
              <a
                href=""
                class="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animate__animated animate__slideInRight"
              >Contact Us</a
              >
            </div>
            <div class="col-lg-6 text-center text-lg-start">
              <img class="img-fluid" src="img/hero.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { navigationRoutes } from '../app-sidebar/NavigationRoutes'
import { ColorThemeMixin } from '../../../services/vuestic-ui'

export default {
  name: 'app-topbar',
  mixins: [ColorThemeMixin],
  inject: ['contextConfig'],
  components: {
  },
  props: {},
  computed: {
    computedStyles () {
      if (this.contextConfig.invertedColor) {
        return {
          backgroundColor: 'white',
          boxShadow: '0 2px 3px 0 rgba(52, 56, 85, 0.25)',
        }
      }

      return {
        backgroundColor: this.$themes.secondary,
      }
    },
  },
  data () {
    return {
      items: navigationRoutes.routes,
    }
  },
  methods: {
    hasActiveByDefault (item) {
      return item.children.some(child => child.name === this.$route.name)
    },
  },
}
</script>

<style lang="scss">
.app-topbar {
  transition: all 0.3s ease;
  width: 100%;
  display: flex;

  &__menu {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    min-height: 4rem;
    margin: 0 auto;
    max-width: 90%;
    width: 100%;

    &-group {
      @include media-breakpoint-down(sm) {
        flex-grow: 1;
      }
    }

    &-group-item {
      display: inline-flex;
      flex-wrap: wrap;
      width: 100%;
      white-space: nowrap;
      color: inherit;

      &--multi-row {
        width: 33.33%;
      }
    }
  }

  & + .content-wrap {
    margin-left: 0;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  @include media-breakpoint-down(sm) {
    top: $sidebar-mobile-top;

    &__menu {
      max-width: 100%;
      padding: 0 1rem;
    }
  }

  &--minimized {
    left: 0;

    .va-topbar-link-group {
      .va-topbar-link__content {
        padding-right: 0;
      }
    }

    & + .content-wrap {
      margin-left: $sidebar-width--hidden !important;
    }
  }
}
</style>
