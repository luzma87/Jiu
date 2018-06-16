import studentFields from './StudentFields'

export default class Student {

  constructor() {
    this.fields = studentFields
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
