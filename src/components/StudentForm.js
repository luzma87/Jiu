import * as React from 'react';
import Select from './fields/Select';
import TextField from './fields/TextField';
import DatePicker from './fields/DatePicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Student from './../models/Student';
import { withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button/Button';
import { withContext } from './../context/WithContext';
import FormTitle from './fields/FormTitle';

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { student: new Student() };
    let id = props.match.params.id;
    if(id !== null && id !== undefined) this.loadStudent(id);
    this.handleChange = this.handleChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  loadStudent(id) {
    let student = this.state.student;
    student.load(id, () => {
      this.setState({ student })
    }, (error) => {
      this.props.context.toggleModal(true, false, 'Error cargando al estudiante', error + '');
    })
  }

  handleAnyChange(fieldId, newValue) {
    this.withState(student => {
      student.setField(fieldId, newValue);
    });
  }

  handleChange(event) {
    let fieldId = event.target.id || event.target.name;
    this.handleAnyChange(fieldId, event.target.value);
  }

  onSaveButtonClick() {
    this.withState(student => {
      const { context } = this.props;
      if (student.isValid()) {
        context.toggleModal(true);
        student.save(() => {
          context.toggleModal(false);
          context.redirectTo('/students');
        }, error => {
          context.toggleModal(true, false, 'Error registrando al estudiante', error + '');
        });
      }
    });
  }

  withState(operation) {
    let student = this.state.student;
    operation(student);
    this.setState({ student });
  }

  render() {
    const { context } = this.props;
    const { student } = this.state;
    return (
      <div className="container gridContainer">
        <FormTitle label="Estudiante" />
        <TextField
          id="documentId"
          label="Cédula"
          domainObject={student}
          onChange={(id, value) => this.handleAnyChange(id, value)}
        />
        <TextField
          id="firstName"
          label="Nombre"
          domainObject={student}
          onChange={(id, value) => this.handleAnyChange(id, value)}
        />
        <TextField
          id="lastName"
          label="Apellido"
          domainObject={student}
          onChange={(id, value) => this.handleAnyChange(id, value)}
        />
        <DatePicker
          id="dateOfBirth"
          label="Fecha de nacimiento"
          domainObject={student}
          noMaxDate={false}
          openToYearSelection
          onChange={(id, date) => this.handleAnyChange(id, date)}
        />
        <Select
          label="Género"
          id="gender"
          value={student.getValue('gender')}
          onChange={this.handleChange}
          options={context.gender}
        />
        <Select
          label="Estado civíl"
          id="maritalStatusId"
          value={student.getValue('maritalStatusId')}
          onChange={this.handleChange}
          options={context.maritalStatus}
        />
        <TextField
          id="height"
          label="Estatura"
          domainObject={student}
          adornment="cm"
          onChange={(id, value) => this.handleAnyChange(id, value)}
        />
        <TextField
          id="weight"
          label="Peso"
          domainObject={student}
          adornment="lb"
          onChange={(id, value) => this.handleAnyChange(id, value)}
        />
        <TextField
          id="medicalConditions"
          label="Condiciones médicas"
          domainObject={student}
          onChange={(id, value) => this.handleAnyChange(id, value)}
        />
        <TextField
          id="address"
          label="Dirección"
          domainObject={student}
          onChange={(id, value) => this.handleAnyChange(id, value)}
        />
        <TextField
          id="countryOfBirth"
          label="País de nacimiento"
          domainObject={student}
          onChange={(id, value) => this.handleAnyChange(id, value)}
        />
        <TextField
          id="cityOfBirth"
          label="Ciudad de nacimiento"
          domainObject={student}
          onChange={(id, value) => this.handleAnyChange(id, value)}
        />
        <TextField
          id="email"
          label="Email"
          domainObject={student}
          onChange={(id, value) => this.handleAnyChange(id, value)}
        />
        <TextField
          id="phone"
          label="Teléfono fijo"
          domainObject={student}
          onChange={(id, value) => this.handleAnyChange(id, value)}
        />
        <TextField
          id="mobilePhone"
          label="Celular"
          domainObject={student}
          onChange={(id, value) => this.handleAnyChange(id, value)}
        />
        <FormTitle label="Academia" />
        <TextField
          id="giSize"
          label="Tamaño de GI"
          domainObject={student}
          onChange={(id, value) => this.handleAnyChange(id, value)}
        />
        <TextField
          id="foundOut"
          label="Como nos encontró?"
          domainObject={student}
          onChange={(id, value) => this.handleAnyChange(id, value)}
        />
        <div />
        <Select
          label="Plan"
          id="planId"
          value={student.getValue('planId')}
          onChange={this.handleChange}
          options={context.plans}
        />
        <Select
          label="Forma de pago"
          id="methodOfPaymentId"
          value={student.getValue('methodOfPaymentId')}
          onChange={this.handleChange}
          options={context.paymentMethods}
        />
        <Select
          label="Rango"
          id="rankId"
          value={student.getValue('rankId')}
          onChange={this.handleChange}
          options={context.ranks}
        />
        <DatePicker
          id="registrationDate"
          label="Fecha de registro"
          openToYearSelection={false}
          domainObject={student}
          noMaxDate={false}
          onChange={(id, date) => this.handleAnyChange(id, date)}
        />
        <DatePicker
          id="enrollmentDate"
          label="Fecha de enrolamiento"
          openToYearSelection={false}
          domainObject={student}
          noMaxDate
          onChange={(id, date) => this.handleAnyChange(id, date)}
        />
        <FormTitle label="Contacto" />
        <TextField
          id="emergencyContactName"
          label="Contacto de emergencia"
          domainObject={student}
          onChange={(id, value) => this.handleAnyChange(id, value)}
        />
        <TextField
          id="emergencyContactPhone"
          label="Teléfono"
          domainObject={student}
          onChange={(id, value) => this.handleAnyChange(id, value)}
        />
        <div />
        <TextField
          id="legalGuardianName"
          label="Representante"
          domainObject={student}
          onChange={(id, value) => this.handleAnyChange(id, value)}
        />
        <TextField
          id="legalGuardianPhone"
          label="Teléfono"
          domainObject={student}
          onChange={(id, value) => this.handleAnyChange(id, value)}
        />
        <Button
          onClick={this.onSaveButtonClick}
          variant="contained"
          color="primary"
        >
          <FontAwesomeIcon
            icon={['far', 'save']}
            size="lg"
            style={{ marginRight: 15 }}
          />
          Guardar
        </Button>
      </div>
    );
  }
}

export default withContext(withTheme()(StudentForm));
