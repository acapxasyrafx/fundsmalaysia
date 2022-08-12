import Vue from 'vue'
import Router from 'vue-router'
import AuthLayout from '../components/auth/AuthLayout'
import AppLayout from '../components/admin/AppLayout'
import AppAuthLayout from '../components/admin/AppAuthLayout'
import AuthLayoutOthersRecoverPass from '../components/auth/AuthLayoutRecoverPassword'
import * as services from '../app/module0/services'

Vue.use(Router)

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

const demoRoutes = []

export default new Router({
  // mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
  mode: 'history',
  routes: [
    ...demoRoutes,
    {
      path: '*',
      redirect: { name: 'dashboard' },
      meta: {
        progress: {
          func: [
            { call: 'color', modifier: 'temp', argument: '#ffb000' },
            { call: 'fail', modifier: 'temp', argument: '#6e0000' },
            { call: 'location', modifier: 'temp', argument: 'top' },
            {
              call: 'transition',
              modifier: 'temp',
              argument: { speed: '1.5s', opacity: '0.6s', termination: 400 },
            },
          ],
        },
      },
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [{
        name: 'login',
        path: 'login',
        component: () =>
          import('../components/auth/login/Login.vue'),
        default: true,
        beforeEnter (to, from, next) {
          if (!services.isLoggedIn()) {
            next()
          } else {
            next('/fimm/dashboard')
          }
        },
      },
      {
        name: 'signup',
        path: 'signup',
        component: () =>
          import('../components/auth/signup/Signup.vue'),
      },
      {
        name: 'recover-password',
        path: 'recover-password',
        component: () =>
          import('../components/auth/recover-password/RecoverPassword.vue'),
      },
        // {
        //   path: '',
        //   redirect: { name: 'login' },
        // },
      ],
    },
    {
      path: '/404',
      component: EmptyParentComponent,
      children: [{
        name: 'not-found-advanced',
        path: 'not-found-advanced',
        component: () =>
          import('../components/pages/404-pages/VaPageNotFoundSearch.vue'),
      },
      {
        name: 'not-found-simple',
        path: 'not-found-simple',
        component: () =>
          import('../components/pages/404-pages/VaPageNotFoundSimple.vue'),
      },
      {
        name: 'not-found-custom',
        path: 'not-found-custom',
        component: () =>
          import('../components/pages/404-pages/VaPageNotFoundCustom.vue'),
      },
      {
        name: 'not-found-large-text',
        path: '/pages/not-found-large-text',
        component: () =>
          import('../components/pages/404-pages/VaPageNotFoundLargeText.vue'),
      },
      ],
    },
    /* ---------------ADMIN PAGES--------------------- */
    {
      name: 'Admin',
      path: '/',
      component: AppLayout,
      //   beforeEnter(to, from, next) {
      //     if (!services.isLoggedIn()) {
      //        console.log("not login");
      //        next("dashboard");
      //     } else {
      //        next("login");
      //     }
      // },
      children: [{
        name: 'dashboard',
        path: 'dashboard',
        component: () =>
          import('../components/dashboard/Dashboard.vue'),
        default: true,
      },
      {
        name: 'fundStatusCheck',
        path: 'fundStatusCheck',
        component: () =>
          import('../components/fund-status-check/fundStatusCheck.vue'),
      },
      {
        name: 'newFundLaunch',
        path: 'newFundLaunch',
        component: () =>
          import('../components/new-fund-launch/newFundLaunch.vue'),
      },
      {
        name: 'aboutUs',
        path: 'aboutUs',
        component: () =>
          import('../components/about-us/aboutUs.vue'),
      },
      {
        name: 'ui',
        path: 'ui',
        component: EmptyParentComponent,
        children: [{
          name: 'colors',
          path: 'colors',
          component: () =>
            import('../components/ui/colors/Colors'),
        },

        ],
      },
      ],

      beforeEnter (to, from, next) {
        // if (!services.isLoggedIn()) { tadi
        //   next('/auth/login')
        // } else {
        next()
        // }
      },
    },
    /* ---------------ADMIN PAGES--------------------- */
    {
      name: 'Admin',
      path: '/auth-verify',
      component: AppAuthLayout,
      //   beforeEnter(to, from, next) {
      //     if (!services.isLoggedIn()) {
      //        console.log("not login");
      //        next("dashboard");
      //     } else {
      //        next("login");
      //     }
      // },
      children: [{
        name: 'dashboard-auth',
        path: 'dashboard-auth',
        component: () =>
          import('../components/dashboard/Dashboard.vue'),
        default: true,
      },
      {
        name: 'fundStatusCheck-auth',
        path: 'fundStatusCheck-auth',
        component: () =>
          import('../components/fund-status-check/fundStatusCheck.vue'),
      },
      {
        name: 'management-company-dir-auth',
        path: 'management-company-dir-auth',
        component: () =>
          import('../components/management-company-directory/Media_Management_Company_Directory.vue'),
      },
      {
        name: 'nav-auth',
        path: 'nav-auth',
        component: () =>
          import('../components/nav-page/Media_Nav_Page.vue'),
      },
      {
        name: 'myProfile-auth',
        path: 'myProfile-auth',
        component: () =>
          import('../components/profile/Media_User_Profile.vue'),
      },
      {
        name: 'newFundLaunch-auth',
        path: 'newFundLaunch-auth',
        component: () =>
          import('../components/new-fund-launch/newFundLaunch.vue'),
      },
      {
        name: 'aboutUs-auth',
        path: 'aboutUs-auth',
        component: () =>
          import('../components/about-us/aboutUs.vue'),
      },
      {
        name: 'ui',
        path: 'ui',
        component: EmptyParentComponent,
        children: [{
          name: 'colors',
          path: 'colors',
          component: () =>
            import('../components/ui/colors/Colors'),
        },

        ],
      },
      ],
    },
    {
      path: '/auth-media-recover',
      component: AuthLayoutOthersRecoverPass,
      children: [
        {
          name: 'media-recover-password',
          path: 'media-recover-password',
          component: () =>
            import(
              '../components/auth/first-time-user/OthersFirstTimeUserResetPassword.vue'
            ),
          props: true,
        },
        {
          name: 'reset-password-media',
          path: 'reset-password-media',
          component: () =>
            import(
              '../components/auth/reset-password/RecoverPasswordOthers.vue'
            ),
          props: true,
        },
      ],
    },
  ],
})
