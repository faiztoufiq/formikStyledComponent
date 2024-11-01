import { Formik, ErrorMessage } from "formik";
import { formikschema } from "../common/formikSchemma";
import {
  ErrorText,
  FormContainer,
  FormGroup,
  SubmitButton,
  Heading,
  Input,
  Label,
} from "./Form.style";
import { comonText } from "../common/constant";

export default function FormikPage() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validationSchema={formikschema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("==>", values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <FormContainer>
          <Heading>{comonText.formik_styled_components}</Heading>
          <FormGroup>
            <Label htmlFor="firstName">{comonText.first_name}</Label>
            <Input type="text" name="firstName" />
            <ErrorMessage
              name="firstName"
              component={ErrorText}
              className="error"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="lastName">{comonText.last_name}</Label>
            <Input type="text" name="lastName" />
            <ErrorMessage
              name="lastName"
              component={ErrorText}
              className="error"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">{comonText.email}</Label>
            <Input type="email" name="email" />
            <ErrorMessage
              name="email"
              component={ErrorText}
              className="error"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">{comonText.password}</Label>
            <Input type="password" name="password" />
            <ErrorMessage
              name="password"
              component={ErrorText}
              className="error"
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {comonText.submit}
          </SubmitButton>
        </FormContainer>
      )}
    </Formik>
  );
}
