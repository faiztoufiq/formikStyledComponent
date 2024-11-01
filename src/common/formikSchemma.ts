import * as Yup from'yup';
import { comonText } from './constant';

let regexSpecialCharacter=/[!@#$%^&*(),.?":{}|<>]/
let regexCapitalAlphabates=/[A-Z]/
let regexNumber = /\d/; 

export const formikschema = Yup.object().shape({
    firstName: Yup.string().required(comonText.first_name_formik),
    lastName: Yup.string().required(comonText.last_name_formik),
    email: Yup.string().email(comonText.invalid_email).required(comonText.email_required),
    password: Yup.string()
      .min(6, comonText.password_characters)
      .matches(regexCapitalAlphabates, comonText.password_letter)
      .matches(regexSpecialCharacter, comonText.password_must_character)
      .matches(regexNumber,comonText.must_add_digit)
      .required(comonText.password_is_required),
  });