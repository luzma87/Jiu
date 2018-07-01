import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from './fields/Select';
import Student from './../models/Student';
import {withTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button/Button';
import {withContext} from './../context/WithContext';

class StudentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {student: new Student()};
    this.handleChange = this.handleChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  handleChange(event) {
    let fieldId = event.target.id || event.target.name;
    this.withState(student => {
      student.setField(fieldId, event.target.value);
    });
  }

  onSaveButtonClick() {
    this.withState(student => {
      if (student.isValid()) {
        this.props.context.toggleModal(true);
        student.save(() => {
          this.props.context.toggleModal(false);
          this.props.context.redirectTo("/students");
        }, error => {
          this.props.context.toggleModal(true, false, "Error resgistrando al estudiante", error + "");
        });
      }
    });
  }

  withState(operation) {
    let student = this.state.student;
    operation(student);
    this.setState({student});
  }

  render() {
    const {context} = this.props;
    const {student} = this.state;
    return (
      <div className="container gridContainer">
        <Typography
          variant="title"
          className="title"
          color="primary"
        >
          Estudiante
        </Typography>
        <TextField
          id="documentId"
          name="documentId"
          label="Cédula"
          value={student.getValue('documentId')}
          error={student.hasError('documentId')}
          helperText={student.getError('documentId')}
          margin="normal"
          className="full"
          inputProps={{maxLength: 10}}
          onChange={this.handleChange}
        />
        <TextField
          id="name"
          name="name"
          label="Nombre"
          value={student.getValue('name')}
          error={student.hasError('name')}
          helperText={student.getError('name')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="lastName"
          label="Apellido"
          value={student.getValue('lastName')}
          error={student.hasError('lastName')}
          helperText={student.getError('lastName')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="dateOfBirth"
          label="Fecha de nacimiento"
          value={student.getValue('dateOfBirth')}
          error={student.hasError('dateOfBirth')}
          helperText={student.getError('dateOfBirth')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
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
          value={student.getValue('height')}
          error={student.hasError('height')}
          helperText={student.getError('height')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="weight"
          label="Peso"
          value={student.getValue('weight')}
          error={student.hasError('weight')}
          helperText={student.getError('weight')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="medicalConditions"
          label="Condiciones médicas"
          value={student.getValue('medicalConditions')}
          error={student.hasError('medicalConditions')}
          helperText={student.getError('medicalConditions')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="address"
          label="Dirección"
          value={student.getValue('address')}
          error={student.hasError('address')}
          helperText={student.getError('address')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="countryOfBirth"
          label="País de nacimiento"
          value={student.getValue('countryOfBirth')}
          error={student.hasError('countryOfBirth')}
          helperText={student.getError('countryOfBirth')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="cityOfBirth"
          label="Ciudad de nacimiento"
          value={student.getValue('cityOfBirth')}
          error={student.hasError('cityOfBirth')}
          helperText={student.getError('cityOfBirth')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="email"
          label="Email"
          value={student.getValue('email')}
          error={student.hasError('email')}
          helperText={student.getError('email')}
          type="email"
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="phone"
          label="Teléfono fijo"
          value={student.getValue('phone')}
          error={student.hasError('phone')}
          helperText={student.getError('phone')}
          inputProps={{type: "number", maxLength: 12}}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="mobilePhone"
          label="Celular"
          value={student.getValue('mobilePhone')}
          error={student.hasError('mobilePhone')}
          helperText={student.getError('mobilePhone')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <Typography
          variant="title"
          className="title"
          color="primary"
        >
          Academia
        </Typography>
        <TextField
          id="giSize"
          label="Tamaño de GI"
          value={student.getValue('giSize')}
          error={student.hasError('giSize')}
          helperText={student.getError('giSize')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="foundOut"
          label="Como nos encontró?"
          value={student.getValue('foundOut')}
          error={student.hasError('foundOut')}
          helperText={student.getError('foundOut')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <div/>
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
        <TextField
          id="registrationDate"
          label="Fecha de registro"
          value={student.getValue('registrationDate')}
          error={student.hasError('registrationDate')}
          helperText={student.getError('registrationDate')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="enrollmentDate"
          label="Fecha de enrolamiento"
          value={student.getValue('enrollmentDate')}
          error={student.hasError('enrollmentDate')}
          helperText={student.getError('enrollmentDate')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <Typography
          variant="title"
          className="title"
          color="primary"
        >
          Contacto
        </Typography>
        <TextField
          id="emergencyContactName"
          label="Contacto de emergencia"
          value={student.getValue('emergencyContactName')}
          error={student.hasError('emergencyContactName')}
          helperText={student.getError('emergencyContactName')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="emergencyContactPhone"
          label="Teléfono"
          value={student.getValue('emergencyContactPhone')}
          error={student.hasError('emergencyContactPhone')}
          helperText={student.getError('emergencyContactPhone')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <div/>
        <TextField
          id="legalGuardianName"
          label="Representante"
          value={student.getValue('legalGuardianName')}
          error={student.hasError('legalGuardianName')}
          helperText={student.getError('legalGuardianName')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="legalGuardianPhone"
          label="Teléfono"
          value={student.getValue('legalGuardianPhone')}
          error={student.hasError('legalGuardianPhone')}
          helperText={student.getError('legalGuardianPhone')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <Button
          onClick={this.onSaveButtonClick}
          variant="contained"
          color="primary"
        >Guardar</Button>
      </div>
    );
  }
}

export default withContext(withTheme()(StudentForm));
