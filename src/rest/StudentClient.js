import axios from 'axios';
import constants from '../util/constants';

const bffUrl = constants.bffUrl;
const studentsUrl = bffUrl + '/students';

const save = (userData) => {
  return axios.put(studentsUrl, userData, { timeout: 2000 });
};

const getAllStudents = () => {
  return axios.get(studentsUrl + '?filter={"include":["rank","methodOfPayment"]}')
    .catch(function(error) {
      console.log(error);
    });
};

const load = (id) => {
  return axios.get(studentsUrl + `/${id}`);
};

const deactivate = (ids) => {
  return axios.post(studentsUrl + '/deactivate', ids)
    .catch(function(error) {
      console.log(error);
    });
};

const activate = (ids) => {
  return axios.post(studentsUrl + '/activate', ids)
    .catch(function(error) {
      console.log(error);
    });
};

export default {
  save,
  getAllStudents,
  load,
  activate,
  deactivate,
};
