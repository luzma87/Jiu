import axios from 'axios';

const bffUrl = 'http://192.168.100.4:3000/api/';

let getMaritalStatus = () => {
  return axios.get(bffUrl + 'maritalStatus')
    .catch(function (error) {
      console.log(error);
    });
};
let getPlans = () => {
  return axios.get(bffUrl + 'plans')
    .catch(function (error) {
      console.log(error);
    });
};
let getPaymentMethods = () => {
  return axios.get(bffUrl + 'methodsOfPayment')
    .catch(function (error) {
      console.log(error);
    });
};
let getRanks = () => {
  return axios.get(bffUrl + 'ranks')
    .catch(function (error) {
      console.log(error);
    });
};
export default {
  getAll: () => {
    return axios.all([
      getMaritalStatus(),
      getPlans(),
      getPaymentMethods(),
      getRanks()
    ]);
  }
}
