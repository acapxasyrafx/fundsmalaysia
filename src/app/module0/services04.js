/* eslint-disable semi */
/* eslint-disable eqeqeq */
/* eslint-disable dot-notation */
//
import axios from 'axios';
import * as servicesModule0 from "./services";

export function setUser (user) {
  localStorage.setItem('user', user);

  // setTokenCookie();
}

/** HAIZAD START DIVISION */
export async function getDepartmentByDivisionId (data) {
  await servicesModule0.header();
  return axios.get('/api/module0/department_management_by_division', {
    params: {
      MANAGE_DIVISION_ID: data,
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

export async function getSubmodule (data) {
  await servicesModule0.header();
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

export async function getGroupByDepartmentId (data) {
  await servicesModule0.header();
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

export async function getAllModule () {
  await servicesModule0.header();
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

export async function getAllScreens () {
  await servicesModule0.header();
  return axios.get('/api/module0/screens').then(response => {
    return response.data.data;
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

export async function getScreen (moduleSelection, submoduleSelection) {
  await servicesModule0.header();
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

export async function createDistributorType () {
  console.log('data : ' + data);
  await servicesModule0.header();
  return axios.post('/api/module0/sbm_distributor ', data).then(response => {
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

export async function getScreenAccesses () {
  await servicesModule0.header();
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

export async function getAllDivisionList () {
  await servicesModule0.header();
  return axios.get('/api/module0/division_managements').then(response => {
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

export async function getAllSettingGeneralList (data) {
  await servicesModule0.header();
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