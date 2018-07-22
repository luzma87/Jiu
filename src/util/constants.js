import moment from "moment/moment";

const bffUrl = 'https://jitsube.herokuapp.com/api/';

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

const months = [
  { id: "1", description: "Enero" },
  { id: "2", description: "Febrero" },
  { id: "3", description: "Marzo" },
  { id: "4", description: "Abríl" },
  { id: "5", description: "Mayo" },
  { id: "6", description: "Junio" },
  { id: "7", description: "Julio" },
  { id: "8", description: "Agosto" },
  { id: "9", description: "Septiembre" },
  { id: "10", description: "Octubre" },
  { id: "11", description: "Noviembre" },
  { id: "12", description: "Diciembre" },
  ];
const currentYear = moment().year()
const years = [
  { id: currentYear - 1, description: currentYear - 1 },
  { id: currentYear, description: currentYear },
  { id: currentYear + 1, description: currentYear + 1},
];

const constants = {
  bffUrl,
  dateFormat: 'DD-MM-YYYY',
  serverDateFormat: 'YYYY-MM-DD',
  formatDate,
  formatDateForServer,
  toDate,
  months,
  years
};

export default constants;
