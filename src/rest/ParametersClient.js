import axios from 'axios'

const bffUrl = 'http://192.168.100.4:3000/api/';

export default {
  getMaritalStatus: () => {
    return axios.get(bffUrl + 'maritalStatus')
      .catch(function (error) {
        console.log(error);
      });
  },
  getPlans: () => {
    return axios.get(bffUrl + 'plans')
      .catch(function (error) {
        console.log(error);
      });
  },
  getPaymentMethods: () => {
    return axios.get(bffUrl + 'methodsOfPayment')
      .catch(function (error) {
        console.log(error);
      });
  },
  getRanks: () => {
    return axios.get(bffUrl + 'ranks')
      .catch(function (error) {
        console.log(error);
      });
  }
}
