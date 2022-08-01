import Vue from 'vue'
import Router from 'vue-router'
import AuthLayout from '../components/auth/AuthLayout'
import AppLayout from '../components/admin/AppLayout'
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
            redirect: { name: 'login' },
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
                        import ('../components/auth/login/Login.vue'),
                    default: true,
                    beforeEnter(to, from, next) {
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
                        import ('../components/auth/signup/Signup.vue'),
                },
                {
                    name: 'recover-password',
                    path: 'recover-password',
                    component: () =>
                        import ('../components/auth/recover-password/RecoverPassword.vue'),
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
                        import ('../components/pages/404-pages/VaPageNotFoundSearch.vue'),
                },
                {
                    name: 'not-found-simple',
                    path: 'not-found-simple',
                    component: () =>
                        import ('../components/pages/404-pages/VaPageNotFoundSimple.vue'),
                },
                {
                    name: 'not-found-custom',
                    path: 'not-found-custom',
                    component: () =>
                        import ('../components/pages/404-pages/VaPageNotFoundCustom.vue'),
                },
                {
                    name: 'not-found-large-text',
                    path: '/pages/not-found-large-text',
                    component: () =>
                        import ('../components/pages/404-pages/VaPageNotFoundLargeText.vue'),
                },
            ],
        },
        /* ---------------ADMIN PAGES--------------------- */
        {
            name: 'Admin',
            path: '/fimm',
            component: AppLayout,
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
                        import ('../components/dashboard/Dashboard.vue'),
                    default: true,
                },
                {
                    name: 'event-list',
                    path: 'event-list',
                    component: () =>
                        import ('../pages/admin-configuration/announcement-management/cm0_eventList.vue'),
                },
                {
                    name: 'new-event',
                    path: 'new-event',
                    component: () =>
                        import ('../pages/admin-configuration/announcement-management/cm0_newEvent.vue'),
                },
                {
                    name: 'update-event',
                    path: 'update-event/:MANAGE_EVENT_ID',
                    component: () =>
                        import ('../pages/admin-configuration/announcement-management/cm0_eventUpdate.vue'),
                },
                {
                    name: 'eventList-approval',
                    path: 'eventList-approval',
                    component: () =>
                        import ('../pages/admin-configuration/announcement-management/cm0_eventApprovalList.vue'),
                },
                {
                    name: 'event-hod-approval',
                    path: 'event-hod-approval',
                    component: () =>
                        import ('../pages/admin-configuration/announcement-management/cm0_eventHodApproval.vue'),
                },
                {
                    name: 'event-approval-details',
                    path: 'event-approval-details',
                    component: () =>
                        import ('../pages/admin-configuration/announcement-management/cm0_eventApprovalDetails.vue'),
                },
                {
                    name: 'circular-list',
                    path: 'circular-list',
                    component: () =>
                        import ('../pages/admin-configuration/circular-management/cm0_circularList.vue'),
                },
                {
                    name: 'new-circular',
                    path: 'new-circular',
                    component: () =>
                        import ('../pages/admin-configuration/circular-management/cm0_newCircular.vue'),
                },
                {
                    name: 'circular-details',
                    path: 'circular-details',
                    component: () =>
                        import ('../pages/admin-configuration/circular-management/cm0_circularDetails.vue'),
                },
                {
                    name: 'circular-update',
                    path: 'circular-update/:id',
                    component: () =>
                        import ('../pages/admin-configuration/circular-management/cm0_circularUpdate.vue'),
                },
                {
                    name: 'circular-hod-approvalList',
                    path: 'circular-hod-approvalList',
                    component: () =>
                        import ('../pages/admin-configuration/circular-management/cm0_circularHodApprovalList.vue'),
                },
                {
                    name: 'circular-hod-approvalDetails',
                    path: 'circular-hod-approvalDetails',
                    component: () =>
                        import ('../pages/admin-configuration/circular-management/cm0_circularHodApprovalDetails.vue'),
                },
                {
                    name: 'excel-template',
                    path: 'excel-template',
                    component: () =>
                        import ('../pages/admin-configuration/document-management/cm0_excelTemplate.vue'),
                },
                {
                    name: 'document-checkList',
                    path: 'document-checkList',
                    component: () =>
                        import ('../pages/admin-configuration/document-management/cm0_documentChecklist.vue'),
                },
                {
                    name: 'calendar-management',
                    path: 'calendar-management',
                    component: () =>
                        import ('../pages/admin-configuration/calendar-management/cm0_calendarManagement.vue'),
                },
                {
                    name: 'address-management',
                    path: 'address-management',
                    component: () =>
                        import ('../pages/admin-configuration/address-management/cm0_addressManagement.vue'),
                },
                {

                    name: 'sms-notification',
                    path: 'sms-notification',
                    component: () =>
                        import ('../pages/admin-configuration/sms-notification/cm0_smsNotifcation.vue'),
                },
                {
                    name: 'finance-main-setting',
                    path: 'finance-main-setting',
                    component: () =>
                        import ('../pages/admin-configuration/byModule-finance/cm0_finance_mainSetting.vue'),
                },
                {
                    name: 'finance-account-setting',
                    path: 'finance-account-setting',
                    component: () =>
                        import ('../pages/admin-configuration/byModule-finance/cm0_finance_account_setting.vue'),
                },
                {
                    name: 'email-notification',
                    path: 'email-notification',
                    component: () =>
                        import ('../pages/admin-configuration/Email-Management/email-notification.vue'),
                },
                {
                    name: 'ldap-configuration',
                    path: 'ldap-configuration',
                    component: () =>
                        import ('../pages/admin-configuration/LDAP-Management/cm0_ldapConfiguration.vue'),

                },
                {
                    name: 'finance-configuration',
                    path: 'finance-configuration',
                    component: () =>
                        import ('../pages/admin-configuration/byModule-finance/cm0_finance_mainSetting.vue'),
                },
                {
                    name: 'distributor-configuration',
                    path: 'distributor-configuration',
                    component: () =>
                        import ('../pages/admin-configuration/byModule-distributor/cm0_distributor_mainSetting.vue'),
                },
                {
                    name: 'consultant-configuration',
                    path: 'consultant-configuration',
                    component: () =>
                        import ('../pages/admin-configuration/byModule-consultant/cm0_consultant_mainSetting.vue'),
                },
                {
                    name: 'cpd-configuration',
                    path: 'cpd-configuration',
                    component: () =>
                        import ('../pages/admin-configuration/byModule-CPD/cm0_cpd_mainSetting.vue'),
                },
                {
                    name: 'annualFee-configuration',
                    path: 'annualFee-configuration',
                    component: () =>
                        import ('../pages/admin-configuration/byModule-annualFee/cm0_annualFee_mainSetting.vue'),
                },
                {
                    name: 'fundMalaysia-configuration',
                    path: 'fundMalaysia-configuration',
                    component: () =>
                        import ('../pages/admin-configuration/byModule-fundMalaysia/cm0_fundMalaysia_mainSetting.vue'),
                },
                {
                    name: 'distributor-configuration',
                    path: 'distributor-configuration',
                    component: () =>
                        import ('../pages/admin-configuration/byModule-distributor/cm0_distributor_mainSetting.vue'),
                },
                {
                    name: 'maintenance-list',
                    path: 'maintenance-list',
                    component: () =>
                        import ('../pages/admin-configuration/page-maintenance-management/cm0_maintenanceList.vue'),
                },
                {
                    name: 'screen-access',
                    path: 'screen-access',
                    component: () =>
                        import ('../pages/admin-configuration/screen-access/cm0_screenAccess.vue'),
                },
                {
                    name: 'demo-pdfviewer',
                    path: 'demo-pdfviewer',
                    component: () =>
                        import ('../pages/demo/pdf-viewer'),
                },
                {
                    name: 'demo-excelviewer',
                    path: 'demo-excelviewer',
                    component: () =>
                        import ('../pages/demo/excel-viewer'),
                },
                {
                    name: 'demo-koolreport',
                    path: 'demo-koolreport',
                    component: () =>
                        import ('../pages/demo/koolreport'),
                },
                {
                    name: 'consultant-profile',
                    path: 'consultant-profile',
                    component: () =>
                        import ('../pages/consultant_profile.vue'),
                },
                {
                    name: 'registered-case',
                    path: 'registered-case',
                    component: () =>
                        import ('../pages/registered_case.vue'),
                },
                {
                    name: 'ui',
                    path: 'ui',
                    component: EmptyParentComponent,
                    children: [{
                            name: 'colors',
                            path: 'colors',
                            component: () =>
                                import ('../components/ui/colors/Colors'),
                        },

                    ],
                },

                {
                    name: 'system-setting',
                    path: 'system-setting',
                    component: () =>
                        import ('../pages/admin-configuration/cm0_systemSetting.vue'),
                },
                {
                    name: 'group-management',
                    path: 'group-management',
                    component: () =>
                        import ('../pages/admin-configuration/group-management/cm0_groupManagement.vue'),
                },
                {
                    name: 'approval-mainList',
                    path: 'approval-mainList',
                    component: () =>
                        import ('../pages/admin-configuration/cm0_approval_mainList.vue'),
                },
                {
                    name: 'newDistributor-approval-level',
                    path: 'newDistributor-approval-level',
                    component: () =>
                        import ('../pages/admin-configuration/byApproval-distributor/cm0_newDistributor_approvalLevel.vue'),
                },

            ],

            beforeEnter(to, from, next) {
                // if (!services.isLoggedIn()) { tadi
                //   next('/auth/login')
                // } else {
                next()
                    // }
            },
        },
    ],
})