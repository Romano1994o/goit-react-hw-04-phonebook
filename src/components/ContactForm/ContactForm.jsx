import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledErrorMessage,
  StyledSubmitButton,

} from './ContactForm.styled';

const initialValues = { name: '', number: '' };

const ContactsValidation = Yup.object().shape({
  name: Yup.string().required('* Name is required'),
  number: Yup.string().min(6, 'Number must be at least 6 characters').max(10, 'Number must be at most 10 characters').required('* Number is required'),
});

export class ContactForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={ContactsValidation}
        onSubmit={this.handleSubmit}
      >
        {({ handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <StyledLabel>
              Name
              <StyledInput
                type="text"
                name="name"
              />
              <StyledErrorMessage name="name" component="div" />
            </StyledLabel>
            <StyledLabel>
              Number
              <StyledInput
                type="tel"
                name="number"
              />
              <StyledErrorMessage name="number" component="div" />
            </StyledLabel>

            <StyledSubmitButton type="submit">Add contact</StyledSubmitButton>
          </StyledForm>
        )}
      </Formik>
    );
  }
}
