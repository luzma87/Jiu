export default {
  documentId: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar la cédula";
        return
      }
      if(field.value.length !== 10) {
        field.error = "La cédula debe tener 10 dígitos";
      }
    }
  },
  firstName: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el nombre";
      }
    }
  },
  lastName: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el apellido";
      }
    }
  },
  dateOfBirth: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar la fecha de nacimiento ";
      }
    }
  },
  gender: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el género ";
      }
    }
  },
  maritalStatusId: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el estado civíl";
      }
    }
  },
  height: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar la estatura ";
      }
    }
  },
  weight: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el peso";
      }
    }
  },
  medicalConditions: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar las condiciones médicas ";
      }
    }
  },
  address: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar la dirección";
      }
    }
  },
  countryOfBirth: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el paìs de nacimiento";
      }
    }
  },
  cityOfBirth: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar la ciudad de nacimiento";
      }
    }
  },
  email: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el email";
      }
    }
  },
  phone: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el teléfono";
      }
    }
  },
  mobilePhone: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el teléfono mobil";
      }
    }
  },
  giSize: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el tamaño de Gi ";
      }
    }
  },
  foundOut: {
    value: "",
    error: "",
    validation: (field) => {}
  },
  planId: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el plan";
      }
    }
  },
  methodOfPaymentId: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar la forma de pago";
      }
    }
  },
  rankId: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el rango";
      }
    }
  },
  registrationDate: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar la fecha de registro";
      }
    }
  },
  enrollmentDate: {
    value: "",
    error: "",
    validation: (field) => {}
  },
  emergencyContactName: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el contacto de emergencia";
      }
    }
  },
  emergencyContactPhone: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el teléfono";
      }
    }
  },
  legalGuardianName: {
    value: "",
    error: "",
    validation: (field) => {}
  },
  legalGuardianPhone: {
    value: "",
    error: "",
    validation: (field) => {}
  }
}
