// Polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { ColorThemePlugin } from '../services/vuestic-ui'
import store from '../store/index'
import router from '../router/index'

import { VuesticPlugin } from '../services/vuestic-ui/components'
import '../i18n/index'
import YmapPlugin from 'vue-yandex-maps'
import VueClipboard from 'vue-clipboard2'
import { VudalPlugin } from 'vudal'
import $ from 'jquery'

import '../metrics'
import '../registerServiceWorker'

import { consoleBuildInfo } from 'vue-cli-plugin-build-info/plugin'

import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'
import Tabs from 'vue-tabs-with-active-line'
import VueFileAgent from 'vue-file-agent'
import Count from '../components/count/count'
import koolreport from '../components/koolreport'
import topPDF from '../components/pdf-viewer/topPDF'
import bottomPDF from '../components/pdf-viewer/bottomPDF'
import Pdf from '../components/pdf-viewer/pdf'
import ExcelToCsv from '../components/excel/index'
import chart from '../components/chart/chart'
import barChart from '../components/chart/barChart'
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'

import pdf from 'vue-pdf'
import { VueEditor, Quill } from 'vue2-editor'
import Datepicker from 'vuejs-datepicker'
import { ToggleButton } from 'vue-js-toggle-button'
import VfgSearch from '../pages/component/VfgSearch'
import VfgTheMask from '../pages/component/VfgTheMask.vue'
import VfgFunctionalDate from '../pages/component/VfgFunctionalCalendar.vue'

import VueTheMask from 'vue-the-mask'
import VfgCustomInput from '../pages/component/VfgCustomInput.vue'

// import toast from '../components/alert/toast'

import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

import VueApexCharts from 'vue-apexcharts'
import VfgCustomTacInput from '../pages/component/VfgCustomTacInput.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'


import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.component('field-vfg-custom-input', VfgCustomInput)
Vue.component('field-vfg-custom-Tacinput', VfgCustomTacInput)
Vue.use(VueTheMask)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.use(PerfectScrollbar)
Vue.component('field-vfg-the-mask', VfgTheMask)
Vue.component('field-vfg-search', VfgSearch)
Vue.component('Count', Count)
Vue.component('koolreport', koolreport)
Vue.component('chart', chart)
Vue.component('barChart', barChart)
Vue.component('Pdf', Pdf)
Vue.component('topPDF', topPDF)
Vue.component('bottomPDF', bottomPDF)
Vue.component('field-vfg-functional-date', VfgFunctionalDate)

consoleBuildInfo()
Vue.component('ToggleButton', ToggleButton)
Vue.component('pdf', pdf)
Vue.component('datepicker', Datepicker)
Vue.component('vue-editor', VueEditor)
Vue.use(VueEditor, Quill)
Vue.use(Multiselect)
Vue.component('multiselect', Multiselect)
Vue.component('VueFileAgent', VueFileAgent)
Vue.use(VueFileAgent)
Vue.use(VueFileAgentStyles)
Vue.use(VudalPlugin)
Vue.component('vudal', VudalPlugin)
Vue.use(VuesticPlugin)
Vue.use(YmapPlugin)
Vue.use(VueClipboard)
Vue.use($)

Vue.component(Tabs)

Vue.use(VueFormGenerator)

Vue.use(ColorThemePlugin, {
  // override colors here.
})

router.beforeEach((to, from, next) => {
  store.commit('setLoading', false)
  next()
})

router.afterEach((to, from) => {
  store.commit('setLoading', false)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
