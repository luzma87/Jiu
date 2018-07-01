import axios from 'axios';

const bffUrl = 'http://192.168.100.4:3000/api/';

export default {
  save: ( userData ) => {
    return axios.post(bffUrl + 'Students', userData, {timeout: 2000});
  }
}
