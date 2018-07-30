import axios from 'axios';
import constants from '../util/constants';

const bffUrl = constants.bffUrl;
const paymentsUrl = bffUrl + '/payments';

const createForMonth = (params) => {
  return axios.post(paymentsUrl + '/createForMonth', params)
    .catch(function(error) {
      console.log(error);
    });
};

export default {
  createForMonth,
};
