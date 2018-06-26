import studentFields from './StudentFields'

export default class Student {

  constructor() {
    this.fields = studentFields;
    this.setDefaultValues()
  }

  setDefaultValues() {
    this.setField("gender", "M");
    this.setField("maritalStatusId", "S");
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
      isValid = !this.hasError(key);     
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
}
