import axios from 'axios'

//{
 // method:'get',
//    url:'http://bit.ly/2mTM3nY',
//  responseType:'stream'
//
export default {
  getMaritalStatus: () => {
    return axios.get('http://192.168.100.4:3000/api/maritalStatus')
      .catch(function (error) {
        console.log(error);
      });
  }
}
