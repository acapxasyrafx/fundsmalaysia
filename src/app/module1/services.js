//
import axios from 'axios'
import Vue from 'vue'

var urlHost = 'https://lfcs-dev.fimm.com.my'
//* ******************* Authorization ********************/
export function header () {
  return axios.defaults.headers.common.Authorization =
       'Bearer ' + getToken()
}

export function getUser () {
  const user = localStorage.getItem('user')
  // this.$store.commit("change", user);
  // console.log("user store :" + this.$store.getters.userDetail);
  return user
}

function getToken () {
  const user = localStorage.getItem('user')
  console.log('access token :' + JSON.parse(user).access_token)
  return JSON.parse(user).access_token
}

export function isLoggedIn () {
  const user = localStorage.getItem('user')
  return user != null
}

export function setUser (user) {
  localStorage.setItem('user', user)
}

export async function checkTokenValidation () {
  await this.header()
  return axios.get('/api/module0/checkTokenValidation').then(response => {
    console.log('response :' + JSON.stringify(response.data))
    return response.data
  }).catch(function (error) {
    console.log('error response :' + JSON.stringify(error.response))
    if (error.response) {
      if (error.response.status == 500) {
        if (error.response.data.message.includes('Expired token')) {
          // logout();
        } else {
          console.log(error.response.data.message)
        }
      } else if (error.response.status == 401) {
        // logout();
      }
      return 'not valid'
    }
  })
}

export function logout () {
  localStorage.removeItem('user')
  localStorage.removeItem('realmName')
}

export async function userDetail () {
  await this.header()
  return axios.get('/api/module0/user').then(response => {
    console.log('user detail :' + JSON.stringify(response.data))
    return response.data
  }).catch(function (error) {
    if (error.response) {
      console.log('error response :' + error.response)
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message.includes('Expired token')) {
          services.logout()
        } else {
          console.log(error.response.data.message)
        }
      } else if (error.response.status == 401) {
        services.logout()
      }
    }
  })
}
//* ***************end authorization**************************/

//* *****************Without Middleware*******************/
export async function getDistributorMedia () {
  return axios.get(urlHost + '/api/module1/getDistributorMedia').then(response => {
    console.log('data : ' + JSON.stringify(response.data.data))
    return response.data.data
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status === 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message.includes('Expired token')) {
          // eslint-disable-next-line no-undef
          services.logout()
        } else {
          console.log(error.response.data.message)
        }
      } else if (error.response.status === 401) {
        // eslint-disable-next-line no-undef
        services.logout()
      }
    }
  })
}
export async function getAllFundTypeList (data) {
  return axios.get(urlHost + '/api/module0/fund_types', {
    params: {

    },
  }).then(response => {
    console.log(' list :' + JSON.stringify(response.data.data))
    return response.data.data
  }).catch(function (error) {
    if (error.response) {
      if (error.response.status === 500) {
        if (error.response.data.message === 'Token expired.') {
          logout()
        } else {
          console.log(error.response.data.message)
        }
      } else if (error.response.status === 401) {
        logout()
      }
    }
  })
}

export async function getAllFundGroupList (data) {
  return axios.get(urlHost + '/api/module0/fund_groups', {
    params: {

    },
  }).then(response => {
    console.log(' list :' + JSON.stringify(response.data.data))
    return response.data.data
  }).catch(function (error) {
    if (error.response) {
      if (error.response.status === 500) {
        if (error.response.data.message === 'Token expired.') {
          logout()
        } else {
          console.log(error.response.data.message)
        }
      } else if (error.response.status === 401) {
        logout()
      }
    }
  })
}

export async function getAllSchemeList (data) {
  return axios.get(urlHost + '/api/module0/fund_schemes', {
    params: {

    },
  }).then(response => {
    console.log(' list :' + JSON.stringify(response.data.data))
    return response.data.data
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status === 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message === 'Token expired.') {
          logout()
        } else {
          console.log(error.response.data.message)
        }
      } else if (error.response.status === 401) {
        logout()
      }
    }
  })
}

export async function getNAVlistMedia () {
  return axios.get(urlHost + '/api/module5/navlistMedia').then(response => {
    console.log('data : ' + JSON.stringify(response.data.data))
    return response.data.data
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message.includes('Expired token')) {
          // eslint-disable-next-line no-undef
          services.logout()
        } else {
          console.log(error.response.data.message)
        }
      } else if (error.response.status == 401) {
        // eslint-disable-next-line no-undef
        services.logout()
      }
    }
  })
}

export async function getFundProfileFilter (data) {
  return axios
    .get(urlHost + '/api/module5/fundlistMedia', {
      params: {
        DISTRIBUTOR_ID: data,
      },
    })
    .then((response) => {
      console.log('data :' + JSON.stringify(response.data.data))
      return response.data.data
    })
    .catch(function (error) {
      if (error.response) {
        // eslint-disable-next-line no-undef
        Vue.$toast.open({
          message: error.response.data.message,
          type: 'error',
        })
        if (error.response.status === 401) {
          logout()
        } else {
          return 'error'
        }
      }
    })
}

export async function fundDetailsMedia (data, data2) {
  return axios
    .get(urlHost + '/api/module5/fundDetailsMedia', {
      params: {
        DISTRIBUTOR_ID: data,
        FUND_PROFILE_ID: data2,
      },
    })
    .then((response) => {
      console.log('data :' + JSON.stringify(response.data.data))
      return response.data.data
    })
    .catch(function (error) {
      if (error.response) {
        // eslint-disable-next-line no-undef
        Vue.$toast.open({
          message: error.response.data.message,
          type: 'error',
        })
        if (error.response.status === 401) {
          logout()
        } else {
          return 'error'
        }
      }
    })
}

export async function fundDetailsMediaAdvanced (data, data2, data3, data4, data5, data6, data7, data8, data9) {
  return axios
    .get(urlHost + '/api/module5/fundDetailsMediaAdvanced', {
      params: {
        DISTRIBUTOR_ID: data,
        FUND_NAME: data2,
        FUND_DATE_LAUNCH: data3,
        FUND_TYPE: data4,
        FUND_CATEGORY: data5,
        FUND_SYARIAH_COMP: data6,
        FUND_STATUS_SRI_ESG: data7,
        FUND_EPFMIS: data8,
        FUND_SCHEME: data9,
      },
    })
    .then((response) => {
      console.log('data :' + JSON.stringify(response.data.data))
      return response.data.data
    })
    .catch(function (error) {
      if (error.response) {
        // eslint-disable-next-line no-undef
        Vue.$toast.open({
          message: error.response.data.message,
          type: 'error',
        })
        if (error.response.status === 401) {
          logout()
        } else {
          return 'error'
        }
      }
    })
}

export async function verifyTACESC (tac, phone) {
  // console.log('tac : ' + tac);
  console.log('phone : ' + phone)
  // isLogin == 1 ? await servicesModule0.header() : '';
  return axios.get(urlHost + '/api/module0/verify_TAC', {
    params: {
      SMS_TAC_NUMBER: tac,
      SMS_TAC_RECIPIENT: phone,
    },
  }).then(response => {
    // console.log("aaaaaaaaaaaa=",response);
    return response.data.message
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout')
          // logout();
        } else {
          console.log(error.response.data.message)
        }
      } else if (error.response.status == 401) {
        // logout();
      }
      return error.response.data.message
    }
  })
}

export async function getPasswordSetting (isLogin) {
  return axios.get(urlHost + '/api/module0/setting_password').then(response => {
    console.log(response.data)
    return response.data.data
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout')
          // logout();
        } else {
          console.log(error.response.data.message)
        }
      } else if (error.response.status == 401) {
        // logout();
      }
      return 'error'
    }
  })
}
export async function getSecurityQuestionAll (isLogin) {
  return axios.get(urlHost + '/api/module0/security_question_all').then(response => {
    console.log(response.data)
    return response.data.data
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout')
          // logout();
        } else {
          console.log(error.response.data.message)
        }
      } else if (error.response.status == 401) {
        // logout();
      }
      return 'error'
    }
  })
}

export async function securityQuestion () {
  return axios.get(urlHost + '/api/module1/user_security_quest').then(response => {
    console.log(response.data.data)
    return response.data.data
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout')
          logout()
        } else {
          console.log(error.response.data.message)
        }
      } else if (error.response.status == 401) {
        logout()
      }
      return 'error'
    }
  })
}
export async function updatePassword (data) {
  return axios.post(urlHost + '/api/module5/others_reg_update', data).then(response => {
    console.log(response.data)
    return response.data
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout')
          logout()
        } else {
          console.log(error.response.data.message)
        }
      } else if (error.response.status == 401) {
        logout()
      }
      return 'error'
    }
  })
}
