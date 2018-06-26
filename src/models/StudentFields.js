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
  name: {
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
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  gender: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  maritalStatusId: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  height: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  weight: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  medicalConditions: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  address: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  countryOfBirth: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  cityOfBirth: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  email: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  phone: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  mobilePhone: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  giSize: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  foundOut: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  planId: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }, 
    transform: (field) => {
      return {id: field.value}
    }
  },
  methodOfPaymentId: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  rankId: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  registrationDate: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  enrollmentDate: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  emergencyContactName: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  emergencyContactPhone: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  legalGuardianName: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  },
  legalGuardianPhone: {
    value: "",
    error: "",
    validation: (field) => {
      if(field.value === "") {
        field.error = "Es necesario ingresar el ";
      }
    }
  }
}
