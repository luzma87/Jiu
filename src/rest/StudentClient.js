import axios from 'axios';
import constants from '../util/constants';

const bffUrl = constants.bffUrl;

const save = (userData) => {
  return axios.put(bffUrl + 'Students', userData, { timeout: 2000 });
};

const getAllStudents = () => {
  return axios.get(bffUrl + 'students?filter={"include":["rank","methodOfPayment"]}')
    .catch(function(error) {
      console.log(error);
    });
};

const load = (id) => {
  return axios.get(bffUrl + `students/${id}`);
};

const deactivate = (ids) => {
  return axios.post(bffUrl + 'students/deactivate', ids)
    .catch(function(error) {
      console.log(error);
    });
};

const activate = (ids) => {
  return axios.post(bffUrl + 'students/activate', ids)
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
