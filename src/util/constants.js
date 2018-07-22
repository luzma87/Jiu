import moment from "moment/moment";

const bffUrl = 'http://192.168.100.4:3000/api/';


const formatDate = (date) => {
  if (date === null) {
    return '';
  }
  return moment(date, constants.serverDateFormat).format(constants.dateFormat);
};

const formatDateForServer = (date) => {
  if (date === null || date === undefined || date === '') {
    return null;
  }
  let s = moment(date, constants.dateFormat).format(constants.serverDateFormat);
  console.log(s);
  return s;
};

const toDate = (dateString) => {
  return moment(dateString, constants.serverDateFormat)
};

const constants = {
  bffUrl,
  dateFormat: 'DD-MM-YYYY',
  serverDateFormat: 'YYYY-MM-DD',
  formatDate,
  formatDateForServer,
  toDate
};

export default constants;
