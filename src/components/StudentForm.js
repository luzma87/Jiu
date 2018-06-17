import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from './fields/Select';
import Student from './../models/Student';
import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button/Button';

class StudentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { student: new Student() };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let fieldId = event.target.id || event.target.name
    let student = this.state.student;
    student.setField(fieldId, event.target.value);
    this.setState({ student });
  }

  render() {
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
          value={this.state.student.getValue('documentId')}
          error={this.state.student.hasError('documentId')}
          helperText={this.state.student.getError('documentId')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="name"
          name="name"
          label="Nombre"
          value={this.state.student.getValue('name')}
          error={this.state.student.hasError('name')}
          helperText={this.state.student.getError('name')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="lastName"
          label="Apellido"
          value={this.state.student.getValue('lastName')}
          error={this.state.student.hasError('lastName')}
          helperText={this.state.student.getError('lastName')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="dateOfBirth"
          label="Fecha de nacimiento"
          value={this.state.student.getValue('dateOfBirth')}
          error={this.state.student.hasError('dateOfBirth')}
          helperText={this.state.student.getError('dateOfBirth')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <Select
          label="Género"
          id="gender"
          value={this.state.student.getValue('gender')}
          onChange={this.handleChange}
          options = {{ "M": "Masculino", "F": "Femenino" }}
        />
        <Select
          label="Estado civíl"
          id="maritalStatusId"
          value={this.state.student.getValue('maritalStatusId')}
          onChange={this.handleChange}
          options = {{ "S": "Soltero", "C": "Casado", "O": "Otro" }}
        />
        <TextField
          id="height"
          label="Estatura"
          value={this.state.student.getValue('height')}
          error={this.state.student.hasError('height')}
          helperText={this.state.student.getError('height')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="weight"
          label="Peso"
          value={this.state.student.getValue('weight')}
          error={this.state.student.hasError('weight')}
          helperText={this.state.student.getError('weight')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="medicalConditions"
          label="Condiciones médicas"
          value={this.state.student.getValue('medicalConditions')}
          error={this.state.student.hasError('medicalConditions')}
          helperText={this.state.student.getError('medicalConditions')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="address"
          label="Dirección"
          value={this.state.student.getValue('address')}
          error={this.state.student.hasError('address')}
          helperText={this.state.student.getError('address')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="countryOfBirth"
          label="País de nacimiento"
          value={this.state.student.getValue('countryOfBirth')}
          error={this.state.student.hasError('countryOfBirth')}
          helperText={this.state.student.getError('countryOfBirth')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="cityOfBirth"
          label="Ciudad de nacimiento"
          value={this.state.student.getValue('cityOfBirth')}
          error={this.state.student.hasError('cityOfBirth')}
          helperText={this.state.student.getError('cityOfBirth')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="email"
          label="Email"
          value={this.state.student.getValue('email')}
          error={this.state.student.hasError('email')}
          helperText={this.state.student.getError('email')}
          type="email"
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="phone"
          label="Teléfono fijo"
          value={this.state.student.getValue('phone')}
          error={this.state.student.hasError('phone')}
          helperText={this.state.student.getError('phone')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="mobilePhone"
          label="Celular"
          value={this.state.student.getValue('mobilePhone')}
          error={this.state.student.hasError('mobilePhone')}
          helperText={this.state.student.getError('mobilePhone')}
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
          value={this.state.student.getValue('giSize')}
          error={this.state.student.hasError('giSize')}
          helperText={this.state.student.getError('giSize')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="foundOut"
          label="Como nos encontró?"
          value={this.state.student.getValue('foundOut')}
          error={this.state.student.hasError('foundOut')}
          helperText={this.state.student.getError('foundOut')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <div></div>
        <TextField
          id="planId"
          label="Plan"
          value={this.state.student.getValue('planId')}
          error={this.state.student.hasError('planId')}
          helperText={this.state.student.getError('planId')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="methodOfPaymentId"
          label="Forma de pago"
          value={this.state.student.getValue('methodOfPaymentId')}
          error={this.state.student.hasError('methodOfPaymentId')}
          helperText={this.state.student.getError('methodOfPaymentId')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="rankId"
          label="Rango"
          value={this.state.student.getValue('rankId')}
          error={this.state.student.hasError('rankId')}
          helperText={this.state.student.getError('rankId')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="registrationDate"
          label="Fecha de registro"
          value={this.state.student.getValue('registrationDate')}
          error={this.state.student.hasError('registrationDate')}
          helperText={this.state.student.getError('registrationDate')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="enrollmentDate"
          label="Fecha de enrolamiento"
          value={this.state.student.getValue('enrollmentDate')}
          error={this.state.student.hasError('enrollmentDate')}
          helperText={this.state.student.getError('enrollmentDate')}
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
          value={this.state.student.getValue('emergencyContactName')}
          error={this.state.student.hasError('emergencyContactName')}
          helperText={this.state.student.getError('emergencyContactName')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="emergencyContactPhone"
          label="Teléfono"
          value={this.state.student.getValue('emergencyContactPhone')}
          error={this.state.student.hasError('emergencyContactPhone')}
          helperText={this.state.student.getError('emergencyContactPhone')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <div></div>
        <TextField
          id="legalGuardianName"
          label="Representante"
          value={this.state.student.getValue('legalGuardianName')}
          error={this.state.student.hasError('legalGuardianName')}
          helperText={this.state.student.getError('legalGuardianName')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <TextField
          id="legalGuardianPhone"
          label="Teléfono"
          value={this.state.student.getValue('legalGuardianPhone')}
          error={this.state.student.hasError('legalGuardianPhone')}
          helperText={this.state.student.getError('legalGuardianPhone')}
          margin="normal"
          className="full"
          onChange={this.handleChange}
        />
        <input
          type="hidden"
          id="isActive"
          value="true"
        />
        <Button
          variant="contained"
          color="primary"
        >Guardar</Button>
      </div>
    );
  }
}

export default withTheme()(StudentForm);
