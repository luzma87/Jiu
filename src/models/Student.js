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
}
