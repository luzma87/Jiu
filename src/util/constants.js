import moment from 'moment/moment';
import React from 'react';
import gif from '../assets/loader.svg';

const bffUrl = 'http://192.168.100.4:3000/api';

const formatDate = (date) => {
  if (date === null) {
    return '';
  }
  return moment(date, constants.serverDateFormat).format(constants.dateFormat);
};

const formatMoney = (amount) => {
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
  return formatter.format(amount);
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
  return moment(dateString, constants.serverDateFormat);
};

const months = [
  { id: '1', description: 'Enero' },
  { id: '2', description: 'Febrero' },
  { id: '3', description: 'Marzo' },
  { id: '4', description: 'Abril' },
  { id: '5', description: 'Mayo' },
  { id: '6', description: 'Junio' },
  { id: '7', description: 'Julio' },
  { id: '8', description: 'Agosto' },
  { id: '9', description: 'Septiembre' },
  { id: '10', description: 'Octubre' },
  { id: '11', description: 'Noviembre' },
  { id: '12', description: 'Diciembre' },
];
let now = moment();
const currentYear = now.year();
const years = [
  { id: `${currentYear - 1}`, description: currentYear - 1 },
  { id: `${currentYear}`, description: currentYear },
  { id: `${currentYear + 1}`, description: currentYear + 1 },
];

const currentDate = {
  moment: now,
  year: currentYear,
  month: now.month(),
};

const loadingGif = (width = '100%', height = '100%') => (
  <img
    src={gif}
    width={width}
    height={height}
  />
);

const constants = {
  bffUrl,
  dateFormat: 'DD-MM-YYYY',
  serverDateFormat: 'YYYY-MM-DD',
  formatMoney,
  formatDate,
  formatDateForServer,
  toDate,
  months,
  years,
  currentDate,
  loadingGif,
};

export default constants;
