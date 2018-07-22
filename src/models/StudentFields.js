import constants from '../util/constants';

const setFromServer = (field, serverValue) => {
  field.value = serverValue === null ? "" : serverValue;
};

const dateFromServer = (field, serverValue) => {
  if ( serverValue === null || serverValue === "" || serverValue === undefined ) {
    field.value = "";
    return;
  }
  field.value = constants.toDate(serverValue);
};

let fields = {
  id: {
    value: null,
    error: '',
    validation: () => {},
    setFromServer,
  },
  documentId: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar la cédula';
        return;
      }
      if (field.value.length !== 10) {
        field.error = 'La cédula debe tener 10 dígitos';
      }
    },
    setFromServer,
  },
  firstName: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar el nombre';
      }
    },
    setFromServer,
  },
  lastName: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar el apellido';
      }
    },
    setFromServer,
  },
  dateOfBirth: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar la fecha de nacimiento ';
      }
    },
    transform: (field) => {
      return constants.formatDateForServer(field.value);
    },
    setFromServer: dateFromServer,
  },
  gender: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar el género ';
      }
    },
    setFromServer,
  },
  maritalStatusId: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar el estado civíl';
      }
    },
    setFromServer,
  },
  height: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar la estatura ';
      }
    },
    setFromServer,
  },
  weight: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar el peso';
      }
    },
    setFromServer,
  },
  medicalConditions: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar las condiciones médicas ';
      }
    },
    setFromServer,
  },
  address: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar la dirección';
      }
    },
    setFromServer,
  },
  countryOfBirth: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar el paìs de nacimiento';
      }
    },
    setFromServer,
  },
  cityOfBirth: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar la ciudad de nacimiento';
      }
    },
    setFromServer,
  },
  email: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar el email';
      }
    },
    setFromServer,
  },
  phone: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar el teléfono';
      }
    },
    setFromServer,
  },
  mobilePhone: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar el teléfono mobil';
      }
    },
    setFromServer,
  },
  giSize: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar el tamaño de Gi ';
      }
    },
    setFromServer,
  },
  foundOut: {
    value: '',
    error: '',
    validation: (field) => {},
    setFromServer,
  },
  planId: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar el plan';
      }
    },
    setFromServer,
  },
  methodOfPaymentId: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar la forma de pago';
      }
    },
    setFromServer,
  },
  rankId: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar el rango';
      }
    },
    setFromServer,
  },
  registrationDate: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar la fecha de registro';
      }
    },
    transform: (field) => {
      return constants.formatDateForServer(field.value);
    },
    setFromServer: dateFromServer,
  },
  enrollmentDate: {
    value: '',
    error: '',
    validation: (field) => {},
    transform: (field) => {
      return constants.formatDateForServer(field.value);
    },
    setFromServer: dateFromServer,
  },
  emergencyContactName: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar el contacto de emergencia';
      }
    },
    setFromServer,
  },
  emergencyContactPhone: {
    value: '',
    error: '',
    validation: (field) => {
      if (field.value === '') {
        field.error = 'Es necesario ingresar el teléfono';
      }
    },
    setFromServer,
  },
  legalGuardianName: {
    value: '',
    error: '',
    validation: (field) => {},
    setFromServer,
  },
  legalGuardianPhone: {
    value: '',
    error: '',
    validation: (field) => {},
    setFromServer,
  },
  isActive: {
    value: '',
    error: '',
    validation: (field) => {},
    setFromServer,
  },
};

export default { new : () => {
    let copy = JSON.parse(JSON.stringify(fields));
    Object.keys(copy).map((key) => {
      copy[key].validation = fields[key].validation;
      copy[key].setFromServer = fields[key].setFromServer;
      copy[key].transform = fields[key].transform;
    });
    return copy;
  }};
