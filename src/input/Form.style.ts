import styled from "styled-components";
import { Field, Form} from "formik";
import { commonColor } from "../common/comonColor";

export const FormContainer=styled(Form)`
display:flex;
flex-direction:column;
gap:1rem;
max-width:400px;
margin: auto;
margin-top:80px;

`;
export const Heading=styled.h2`
font-weight:bold;
`;

export const FormGroup=styled.div`
display :flex;
flex-direction:column

`;

export const Label=styled.label`
font-weight:bold;
margin-bottom:0.5rem;

`;

export const Input=styled(Field)`
padding:0.5rem;
border:1px solid ${commonColor.black};
border-radius:4px;

`;

export const ErrorText=styled.div`
color:red;
font-size:0.875;
margin-top:0.25rem;
`;
export const SubmitButton=styled.button`
margin-top:1rem;
padding:0.75rem;
background-color: ${commonColor.backGroundColor};
color:white;
border:none;
border-radius:4px
cursor:pointer;
  &:disabled {
    background-color: ${commonColor.backGroundColorDisable};
    cursor: not-allowed;
  }
`;


export default Form;



 