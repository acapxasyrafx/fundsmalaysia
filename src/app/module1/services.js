//
import axios from 'axios'

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
