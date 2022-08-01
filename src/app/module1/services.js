//
import axios from 'axios'

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

//* ***************Calendar Management ***********************/
export async function getAllExceptionList () {
  await this.header()
  return axios.get('/api/module0/calendar_settings').then(response => {
    console.log('exception list :' + JSON.stringify(response.data))
    return response.data
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message.includes('Expired token')) {
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
//* **********************end calendar management************************/

//* *********************Document & Form Template ***********************/
export async function createExcelTemplate (data) {
  await this.header()
  return axios.post('/api/module0/template', data).then(response => {
    console.log(response.data)
    return response.data
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message.includes('Expired token')) {
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

export async function getAllExcelTemplate () {
  await this.header()
  return axios.get('/api/module0/templates')
    .then(response => {
      console.log(response.statusText)
      console.log('list template: ' + response.data)
      return response.data
    // this.templateList = response.data;
    })
    .catch(function (error) {
      if (error.response) {
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

export async function downloadTemplate (data) {
  await this.header()
  return axios
    .get('/api/module0/template_file', {
      responseType: 'arraybuffer',
      params: {
        template_id: data,
      },
    })
    .then(response => {
      console.log('data :' + JSON.stringify(response))
      return response
    }).catch(function (error) {
      if (error.response) {
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

export async function deleteTemplate (data) {
  return axios
    .delete('/api/module0/template_file', {
      data: { id: data },
    })
    .then(response => {
      console.log('data :' + JSON.stringify(response.data))
      return response.data
    }).catch(function (error) {
      if (error.response) {
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

//* *****************module*******************/
export async function getAllModule () {
  await this.header()
  return axios.get('/api/module0/modules').then(response => {
    console.log('list : ' + JSON.stringify(response.data))
    return response.data
  })
}
