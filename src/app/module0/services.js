/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eqeqeq */
/* eslint-disable dot-notation */
//
import axios from 'axios';

export function header () {
  // eslint-disable-next-line no-return-assign
  return axios.defaults.headers.common['Authorization'] =
     'Bearer ' + getToken();
}

//* ***************HAIZAD*******************/
//* *********Authorization******************/
export async function checkTokenValidation () {
  await this.header();
  return axios.get('/api/module0/checkTokenValidation').then(response => {
    console.log('response :' + JSON.stringify(response.data));
    return response.data;
  }).catch(function (error) {
    console.log('error response :' + JSON.stringify(error.response));
    if (error.response) {
      if (error.response.status == 401) {
        logout();
        return 'not valid'
      } else {
        return 'not valid'
      }
    }
  })
}

export function getUser () {
  const user = localStorage.getItem('user');
  return user;
}
export function getTokenss () {
  const user = localStorage.getItem('user');
  console.log('access token :' + JSON.parse(user).access_token);
  return JSON.parse(user).access_token;
}

function getToken () {
  const user = localStorage.getItem('user');
  console.log('access token :' + JSON.parse(user).access_token);
  return JSON.parse(user).access_token;
}

export function isLoggedIn () {
  const user = localStorage.getItem('user');
  return user != null;
}

export function setUser (user) {
  localStorage.setItem('user', user);

  // setTokenCookie();
}

export async function login (data) {
  delete axios.defaults.headers.common['Authorization'];

  return axios.post('/api/module0/login', data).then(response => {
    //
    // this.setUser(response.data.data);

    // this.$store.commit('change', JSON.stringify(response.data.data))
    // console.log('user store :' + localStorage.getItem('user'))
    console.log(response.data.data)
    return response.data.data;
  }).catch(function (error) {
    // console.log(error)
    return error.response.data.message;
  });
}

export function logout () {
  localStorage.removeItem('user');
}

export async function userDetail () {
  await this.header();
  return axios.get('/api/module0/user').then(response => {
    console.log('user detail :' + JSON.stringify(response.data));
    return response.data;
  }).catch(function (error) {
    if (error.response) {
      console.log('error response :' + error.response);
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
      } else if (error.response.status == 401) {
        logout();
      }
    }
  });
}

//* ********** Audit Trail ****************/

export async function audit_trail (data) {
  await this.header();
  return axios.post('/api/module0/audit_trail', data).then(response => {
    return response.data;
  }).catch(function (error) {
    if (error.response) {
      console.log('error : ' + error.response);
      if (error.response.status == 500) {
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}
//* ********** User management ************/

export async function getFiMMUser () {
  await this.header();
  return axios.get('/api/module0/fimm_user').then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      if (error.response.status == 500) {
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

//* ********** Screen Access management ************/
// export async function getScreen(moduleSelection,submoduleSelection){
//   await this.header();
//       return axios.get("/api/module0/screen", {params: {
//         MANAGE_MODULE_ID: moduleSelection,
//         MANAGE_SUBMODULE_ID: submoduleSelection
//       }}).then(response => {
//       console.log("data :" + JSON.stringify(response.data.data));
//       return response.data.data;
//   }).catch(function(error) {
//       if (error.response) {
//         if (error.response.status == 500) {
//           if (error.response.data.message == "Token expired.") {
//               console.log("logout");
//             logout();
//           } else {
//             console.log(error.response.data.message);
//           }
//         } else if (error.response.status == 401) {
//           logout();
//         }
//         return "error";
//       }
//     });
//   }

export async function getAllScreens () {
  await this.header();
  return axios.get('/api/module0/fimm_users').then(response => {
    console.log('user detail :' + JSON.stringify(response.data));
    return response.data;
  }).catch(function (error) {
    if (error.response) {
      console.log('error response :' + error.response);
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
      } else if (error.response.status == 401) {
        logout();
      }
    }
  });
}

export async function getScreenAccess (id) {
  await this.header();
  return axios.get('/api/module0/screen_access', {
    params: {
      MANAGE_SCREEN_ACCESS_ID: id,
    },
  }).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      if (error.response.status == 500) {
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function getScreenAccesses () {
  await this.header();
  return axios.get('/api/module0/screen_accesses').then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      if (error.response.status == 500) {
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function createScreenAccess (data) {
  await this.header();
  return axios.post('/api/module0/screen_access', data).then(response => {
    return response.data;
  }).catch(function (error) {
    if (error.response) {
      console.log('error : ' + error.response);
      if (error.response.status == 500) {
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

//* ********** Sub module management ***************/
export async function getSubmodule (data) {
  await this.header();
  return axios.get('/api/module0/submodule', {
    params: {
      MANAGE_MODULE_ID: data,
    },
  }).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      if (error.response.status == 500) {
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function getAllSubmoduleList () {
  return axios.get('/api/module0/submodules')
    .then(response => {
      console.log('data :' + JSON.stringify(response.data.data));
      return response.data.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 401) {
          logout();
        } else {
          return 'error'
        }
      }
    });
}
//* *****************************************/

//* ***************DAYAT*********************/
//* ******Calendar Management ***************/
export async function getAllExceptionList () {
  await this.header();
  return axios.get('/api/module0/calendar_settings').then(response => {
    console.log('exception list :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function getExceptionById (data) {
  await this.header();
  return axios.get('/api/module0/calendar_setting', {
    params: {
      SETTING_CALENDAR_ID: data,
    },
  }).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function createException (data) {
  await this.header();
  return axios.post('/api/module0/calendar_setting', data).then(response => {
    // console.log("exception create :" + JSON.stringify(response.data));
    return response.data;
  }).catch(function (error) {
    if (error.response) {
      console.log('error : ' + error.response);
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function deleteException (data) {
  return axios
    .delete('/api/module0/calendar_setting', {
      data: { SETTING_CALENDAR_ID: data },
    })
    .then(response => {
      console.log('data :' + JSON.stringify(response.data));
      return response.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 500) {
          // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message == 'Token expired.') {
            logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
          logout();
        }
      }
    });
}

export async function updateException (data) {
  return axios.post('/api/module0/calendar_setting', data).then(response => {
    console.log('data :' + JSON.stringify(response.data));
    return response.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
    }
  });
}

export async function filterException (data) {
  await this.header();
  return axios.get('/api/module0/filter_calendar_setting', { params: data }).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}
//* ***end calendar management**********/

//* ******Manage Template Form *********/
export async function createExcelTemplate (data) {
  await this.header();
  return axios.post('/api/module0/template', data).then(response => {
    console.log(response.data);
    return response.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Expired token.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function getAllExcelTemplate () {
  await this.header();
  return axios.get('/api/module0/templates')
    .then(response => {
    // console.log(response.statusText);
      console.log('list template: ' + JSON.stringify(response.data.data));
      return response.data.data;
    })
    .catch(function (error) {
      if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
        if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message == 'Expired token.') {
            logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
          logout();
        }
      }
    });
}

export async function getExcelTemplateById (data) {
  await this.header();
  return axios.get('/api/module0/template', {
    params: {
      MANAGE_FORM_TEMPLATE_ID: data,
    },
  })
    .then(response => {
      console.log('data : ' + JSON.stringify(response.data.data));
      return response.data.data;
    })
    .catch(function (error) {
      if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
        if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message == 'Expired token.') {
            logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
          logout();
        }
      }
    });
}

export async function downloadTemplate (data) {
  await this.header();
  return axios
    .get('/api/module0/template_file', {
      responseType: 'arraybuffer',
      params: {
        MANAGE_FORM_TEMPLATE_ID: data,
      },
    })
    .then(response => {
      console.log('data :' + JSON.stringify(response.data));
      return response;
    }).catch(function (error) {
      if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
        if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message.includes('Expired token')) {
            logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
          logout();
        }
      }
    });
}

export async function deleteTemplate (data) {
  return axios
    .delete('/api/module0/template_file', {
      data: { MANAGE_FORM_TEMPLATE_ID: data },
    })
    .then(response => {
      console.log('data :' + JSON.stringify(response.data));
      return response.data;
    }).catch(function (error) {
      if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
        if (error.response.status == 401) {
          logout();
        } else {
          return 'error'
        }
      }
    });
}

export async function updateExcelTemplate (data) {
  return axios.post('/api/module0/template_file', data).then(response => {
    console.log('data :' + JSON.stringify(response.data));
    return response.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 401) {
        logout();
      } else {
        return 'error'
      }
    }
  });
}
//* **********end manage template***********/

//* **********Manage required document******/
export async function createDocument (data) {
  return axios.post('/api/module0/required_document', data).then(response => {
    console.log('data :' + JSON.stringify(response.data));
    return response.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 401) {
        logout();
      } else {
        return 'error'
      }
    }
  });
}

export async function getDocument (data) {
  await this.header();
  return axios.get('/api/module0/required_document', { params: data }).then(response => {
    console.log('data document :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function getSubmoduleByRequiredDocument (data) {
  await this.header();
  return axios.get('/api/module0/sub_modules', { params: data }).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function getDocType (data) {
  await this.header();
  return axios.get('/api/module0/doc_type', { params: data }).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function deleteRequiredDocument (data) {
  await this.header();
  return axios.delete('/api/module0/required_document', { data: { MANAGE_REQUIRED_DOCUMENT_ID: data } }).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function getRequiredDocumentById (data) {
  await this.header();
  return axios.get('/api/module0/required_document_byId', {
    params: {
      MANAGE_REQUIRED_DOCUMENT_ID: data,
    },
  }).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function updateRequiredDocument (data) {
  return axios.post('/api/module0/required_document', data).then(response => {
    console.log('data :' + JSON.stringify(response.data));
    return response.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
    }
  });
}

export async function filterRequiredDocument (data) {
  await this.header();
  return axios.get('/api/module0/filter_required_document', { params: data }).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}
//* *******end Manage required document*********/

//* ********Manage module***********************/
export async function getAllModule () {
  await this.header();
  return axios.get('/api/module0/modules').then(response => {
    console.log('list : ' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 401) {
        logout();
      } else {
        return 'error'
      }
    }
  });
}

//* **********Event Management***************/
export async function createEvent (data) {
  return axios.post('/api/module0/event_management', data).then(response => {
    console.log('data :' + JSON.stringify(response.data));
    return response.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 401) {
        logout();
      } else {
        return 'error';
      }
    }
  });
}

export async function updateEvent (data) {
  return axios.post('/api/module0/event_management', data).then(response => {
    console.log(response.data);
    return response.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 401) {
        logout();
      } else {
        return 'error';
      }
    }
  });
}

export async function getAllEvent () {
  await this.header();
  return axios.get('/api/module0/event_managements').then(response => {
    console.log('data document :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
    }
  },
  );
}

export async function getEventById (data) {
  await this.header();
  return axios.get('/api/module0/event_managementttt', {
    params: {
      MANAGE_EVENT_ID: data,
    },
  }).then(response => {
    console.log(response.data);
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 401) {
        logout();
      } else {
        return 'error';
      }
    }
  });
}
//* **********end Event Management***********/
//* **********Distributor Type***************/
export async function getDistributorType () {
  await this.header();
  return axios.get('/api/module0/distributor_type').then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 401) {
        logout();
      } else {
        return 'error';
      }
    }
  });
}
//* **********Consultant Type***************/
export async function getConsultantType () {
  await this.header();
  return axios.get('/api/module0/consultant_type').then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 401) {
        logout();
      } else {
        return 'error';
      }
    }
  });
}
//* ************other type ***************/
export async function getOtherType () {
  await this.header();
  return axios.get('/api/module0/other_type', {
    params: {
      SET_TYPE: 'USERCATEGORY',
      SET_CODE: 'other',
    },
  }).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 401) {
        logout();
      } else {
        return 'error';
      }
    }
  });
}
//* ***********view document ****************/
export async function viewDocument (data) {
  await this.header();
  return axios.get('/api/module0/document/' + data).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}
//* ***********setting postal ****************/
export async function getAllPostal () {
  await this.header();
  return axios.get('/api/module0/setting_postal').then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function getCityByPostal (data) {
  await this.header();
  return axios.get('/api/module0/setting_city', {
    params: {
      SETTING_CITY_ID: data,
    },
  }).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function getStateByCity (data) {
  await this.header();
  return axios.get('/api/module0/setting_general', {
    params: {
      SETTING_GENERAL_ID: data,
    },
  }).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function deleteDivision (data) {
  return axios
    .delete('/api/module0/division_management', {
      data: { MANAGE_DIVISION_ID: data },
    })
    .then(response => {
      console.log('data :' + JSON.stringify(response.data));
      return response.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 401) {
          logout();
        } else {
          return 'error';
        }
      }
    });
}

export async function updateDivision (data) {
  const jsonObject = {};

  for (const [key, value] of data) {
    jsonObject[key] = value;
  }
  return axios
    .put('/api/module0/division_management', jsonObject)
    .then(response => {
      console.log('data :' + JSON.stringify(response.data));
      return response.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 401) {
          logout();
        } else {
          return 'error';
        }
      }
    });
}

//* *****************Department*******************/
export async function getAllDepartmentList () {
  await this.header();
  return axios.get('/api/module0/department_managements').then(response => {
    console.log('department list :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

//* ***************NURUL*********************/
//* **Division Management***/

/** HAIZAD START DIVISION */
export async function getDepartmentByDivisionId (data) {
  await this.header();
  return axios.get('/api/module0/department_management_by_division', {
    params: {
      SETTING_CITY_ID: data,
    },
  }).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

//* *****************************************/

//* ***************NURUL*********************/
//* **Division Management***/

/** HAIZAD START DIVISION */

/** HAIZAD END DIVISION */

export async function deleteDepartment (data) {
  return axios
    .delete('/api/module0/department_management', {
      data: { MANAGE_DEPARTMENT_ID: data },
    })
    .then(response => {
      console.log('data :' + JSON.stringify(response.data));
      return response.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 500) {
          // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message == 'Token expired.') {
            logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
          logout();
        }
      }
    });
}

export async function updateDepartment (data) {
  const jsonObject = {};

  for (const [key, value] of data) {
    jsonObject[key] = value;
  }
  return axios
    .put('/api/module0/department_management', jsonObject)
    .then(response => {
      console.log('data :' + JSON.stringify(response.data));
      return response.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 500) {
          // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message == 'Token expired.') {
            logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
          logout();
        }
      }
    });
}
export async function getFilteredDepartment (data) {
  await this.header();
  return axios.get('/api/module0/filter_department_management', { params: data }).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}
//* *****************Group*******************/
export async function getAllGroupList () {
  await this.header();
  return axios.get('/api/module0/group_managements').then(response => {
    console.log('group list :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
    }
  });
}

export async function getGroupByDepartmentId (data) {
  await this.header();
  return axios.get('/api/module0/group_management_by_department', {
    params: {
      MANAGE_DEPARTMENT_ID: data,
    },
  }).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      if (error.response.status == 500) {
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function getGroupById (data) {
}

//* ********** Screen Access management ************/
export async function getScreen (moduleSelection, submoduleSelection) {
  await this.header();
  return axios.get('/api/module0/screen', {
    params: {
      MANAGE_MODULE_ID: moduleSelection,
      MANAGE_SUBMODULE_ID: submoduleSelection,
    },
  }).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      if (error.response.status == 500) {
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function getSettingGeneralById (data) {
  await this.header();
  return axios.get('/api/module0/setting_general', {
    params: {
      SETTING_GENERAL_ID: data,
    },
  }).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}
export async function deleteSettingGeneral (data) {
  return axios
    .delete('/api/module0/setting_general', {
      data: { SETTING_GENERAL_ID: data },
    })
    .then(response => {
      console.log('data :' + JSON.stringify(response.data));
      return response.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 500) {
          // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message == 'Token expired.') {
            logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
          logout();
        }
      }
    });
}

export async function getFilteredGroup (data) {
  await this.header();
  return axios.get('/api/module0/filter_group_management', { params: data }).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}
//* ********** Setting General ***************/
export async function getAllSettingGeneralList (data) {
  await this.header();
  return axios.get('/api/module0/setting_generals', {
    params: {
      SET_TYPE: data,
    },
  }).then(response => {
    console.log('setting general list :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
    }
  });
}
export async function createSettingGeneral (data) {
  await this.header();
  return axios.post('/api/module0/setting_general', data).then(response => {
    // console.log("exception create :" + JSON.stringify(response.data));
    return response.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}
export async function updateSettingGeneral (data) {
  const jsonObject = {};

  for (const [key, value] of data) {
    jsonObject[key] = value;
  }
  return axios
    .put('/api/module0/setting_general', jsonObject)
    .then(response => {
      console.log('data :' + JSON.stringify(response.data));
      return response.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 500) {
          // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message == 'Token expired.') {
            logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
          logout();
        }
      }
    });
}
//* *****************************************/

//* ***************ROS***********************/
//* *****************************************/
//* ***************ASHRAF********************/
//* *****************************************/
//* ***************SYASYA********************/
//* *****************************************/

//* ***Email Setting *************/
export async function getEmailSettingList () {
  await this.header();
  return axios.get('/api/module0/email_setting').then(response => {
    console.log('email list :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function createEmailSetting (data) {
  console.log('data : ' + data);
  await this.header();
  return axios.post('/api/module0/email_setting', data).then(response => {
    console.log(response.data);
    return response.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message.includes('Expired token')) {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}
//* *** end Email Setting *****/

//* *** LDAP Setting *****/
export async function getLDAPSettingList () {
  await this.header();
  return axios.get('/api/module0/ldap_setting').then(response => {
    console.log('LDAP data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function createLDAPSetting (data) {
  console.log('data : ' + data);
  await this.header();
  return axios.post('/api/module0/ldap_setting', data).then(response => {
    console.log(response.data);
    return response.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message.includes('Expired token')) {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}
//* *** END LDAP Setting *****/

//* ***SMS Setting *************/

export async function getSmsSettingList () {
  await this.header();
  return axios.get('/api/module0/sms_setting').then(response => {
    console.log('sms list :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function createSmsSetting () {
  console.log('data : ' + data);
  await this.header();
  return axios.post('/api/module0/sms_setting', data).then(response => {
    console.log(response.data);
    return response.data;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}
