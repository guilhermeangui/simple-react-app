export const validateEmail = (value) => {
  let error;

  if (!value) {
    error = 'Campo obrigatório'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'E-mail inválido'
  }

  return error;
}

export const validatePhone = (value) => {
  let error;

  if (!value) {
    error = 'Campo obrigatório'
  } else if ((value.replace(/\D/g,'')).length !== 11) {
    error = 'Telefone inválido'
  }

  return error;
}

export const validateCep = (value) => {
  let error;

  if (!value) {
    error = 'Campo obrigatório'
  } else if ((value.replace(/\D/g,'')).length !== 8) {
    error = 'CEP inválido'
  }

  return error;
}

export const validateDate = (value) => {
  let error
  let date = new Date(value.substr(3,2) + "-" + value.substr(0,2) + "-" + value.substr(6,4))

  if (!value) {
    error = 'Campo obrigatório';
  } else if (value.length !== 10) {
    error = 'Data inválida'
  } else if (!(date instanceof Date && !isNaN(date))) {
    error = 'Data inválida'
  }

  return error;
}