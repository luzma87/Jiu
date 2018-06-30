import studentFields from './StudentFields';
import studentClient from './../rest/StudentClient';

export default class Student {

  constructor() {
    this.fields = studentFields;
    this.setDefaultValues()
  }

  setDefaultValues() {
    this.setField("name", "pepe");
    this.setField("lastName", "rodriguez");
    this.setField("documentId", "1718058827");
    this.setField("dateOfBirth", "01-12-2018");
    this.setField("height", "167");
    this.setField("weight", "130");
    this.setField("medicalConditions", "ninguna");
    this.setField("address", "test test 1235");
    this.setField("countryOfBirth", "Ecuador");
    this.setField("cityOfBirth", "quito");
    this.setField("email", "pepe@test.com");
    this.setField("phone", "12311111");
    this.setField("mobilePhone", "444424444");
    this.setField("giSize", "10");
    this.setField("foundOut", "tweeter");
    this.setField("planId", 1);
    this.setField("methodOfPaymentId", 1);
    this.setField("rankId", 1);
    this.setField("registrationDate", "01-12-2018");
    this.setField("enrollmentDate", "01-12-2018");
    this.setField("emergencyContactName", "test");
    this.setField("emergencyContactPhone", "1232222");
    this.setField("legalGuardianName", "name");
    this.setField("legalGuardianPhone", "1232222");
    this.setField("gender", "M");
    this.setField("maritalStatusId", 2);
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
      json[key] = field.transform != null ? field.transform(field) : field.value
    });
    return json;
  }

  save(callback) {
     studentClient.save(this.toJson()).then(response => callback(response));
  }
}
