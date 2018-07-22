import axios from 'axios';
import constants from '../util/constants';

const bffUrl = constants.bffUrl;

let getAllStudents = () => {
    return axios.get(bffUrl + 'students?filter={"include":["rank","methodOfPayment"]}')
    .catch(function(error) {
      console.log(error);
    });
};

let load = (id) => {
  return axios.get(bffUrl + `students/${id}`)
    .catch(function(error) {
      console.log(error);
    });
};

export default {
  save: (userData) => {
    return axios.put(bffUrl + 'Students', userData, { timeout: 2000 });
  },
  getAllStudents,
  load,
};
