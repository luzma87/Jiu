import studentFields from './StudentFields';
import studentClient from './../rest/StudentClient';
import moment from 'moment';
import constants from '../util/constants';

export default class Student {

  constructor() {
    this.fields = studentFields;
    this.setDefaultValues()
  }

  setDefaultValues() {
    this.setField("gender", "M");
    this.setField("maritalStatusId", 2);
    this.setField("registrationDate", new Date());
    this.setField("isActive", true);
  }

  setField(name, value) {
    let field = this.fields[name];
    field.value = value;
    field.error = "";
    field.validation(field);
  }

  getValue(name) {
    return this.fields[name].value;
  }

  getError(name) {
    return this.fields[name].error;
  }

  hasError(name) {
    return this.fields[name].error !== ""
  }

  isValid() {
    var isValid = true;
    Object.keys(this.fields).map((key) => {
      let field = this.fields[key];
      field.validation(field);
      if(isValid) isValid = !this.hasError(key);
    });
    return isValid;
  }

  toJson() {
    let json = {};
    Object.keys(this.fields).map((key) => {
      let field = this.fields[key];
      let value = field.value === "" ? null : field.value;
      json[key] = field.transform != null ? field.transform(field) : value;
    });
    return json;
  }

  fromJson(data) {
    Object.keys(data).map((key) => {
      let field = this.fields[key];
      field.setFromServer(field, data[key]);
    })
  }

  save(success, failure) {
     studentClient.save(this.toJson())
       .then(response => success(response))
       .catch(error => failure(error));
  }

  load(id, success, failure) {
    studentClient.load(id)
      .then(response => {
        this.fromJson(response.data);
        success()
      })
      .catch(error => failure(error));
  }
}
