import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { validateEmail, validatePhone, validateCep, validateDate } from '../../utils/validators.js'
import { PhoneInput, CepInput, DateInput } from '../../components/CustomInputs'

class PaginaUm extends Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{
            email: '',
            phone: '',
            cep: '',
            date: '',
          }}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ errors, touched, dirty, isValidating, isSubmitting, isValid}) => (
            <Form>
              <Field 
                name="email" 
                validate={validateEmail} 
                className={errors.email && touched.email ? "text-input error" : "text-input"}
              />
              {errors.email && touched.email && <div>{errors.email}</div>}

              <Field 
                name="phone" 
                as={PhoneInput}
                validate={validatePhone}
                className={errors.phone && touched.phone ? "text-input error" : "text-input"}
                placeholder="Insira seu telefone"
              />
              {errors.phone && touched.phone && <div>{errors.phone}</div>}

              <Field 
                name="cep" 
                as={CepInput}
                validate={validateCep}
                className={errors.cep && touched.cep ? "text-input error" : "text-input"}
                placeholder="Insira seu CEP"
              />
              {errors.cep && touched.cep && <div>{errors.cep}</div>}

              <Field 
                name="date" 
                as={DateInput}
                validate={validateDate}
                className={errors.date && touched.date ? "text-input error" : "text-input"}
                placeholder="Insira a data"
              />
              {errors.date && touched.date && <div>{errors.date}</div>}

              <button type="submit" disabled={!isValid || !dirty }>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
export default PaginaUm;