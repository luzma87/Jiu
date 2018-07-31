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

const getAllForMonth = (params) => {
  const filter = {
    where: params,
    include: ['student', 'plan', 'methodOfPayment'],
  };
  return axios.get(paymentsUrl + `?filter=${JSON.stringify(filter)}`)
    .catch(function(error) {
      console.log(error);
    });
};

export default {
  createForMonth,
  getAllForMonth,
};
