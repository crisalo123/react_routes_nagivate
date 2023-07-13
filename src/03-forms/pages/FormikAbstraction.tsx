import { Form, Formik } from "formik";

import * as Yup from "yup";

import "../styles/styles.css";

import { MyTextInpunt, MyCheckBox, MySelect } from "../component";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction </h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          //todo: estos dos valores como lo son terms y jobType son valores creados  para seguir controlando el formulario
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(10, "Debe tener 15 caracteres o menos")
            .required("Campo Requerido"),

          lastName: Yup.string()
            .max(10, "Debe tener 15 caracteres o menos")
            .required("Campo Requerido"),

          email: Yup.string()
            .email("el correo no tiene el formato valido")
            .required("Campo Requerido"),

          terms: Yup.boolean().oneOf([true], "Debe aceptar las condiciones"),

          jobType: Yup.string()
            //todo: el  parametro notOneOf  es para que no sea  posible seleccionar la opcion que incluimos en las llaves []
            .notOneOf(["it-jr"], "Esta opcion no es permitida")
            .required("Por favor selecciona"),
        })}
      >
        {/* esa exprecion de formik es pasada como una funcion hija del Formik */}
        {(formik) => (
          <Form noValidate>
            <MyTextInpunt
              label="firstName"
              name="firstName"
              placeholder="Primer nombre"
              type="text"
            />

            <MyTextInpunt
              label="lastName"
              name="lastName"
              placeholder="Apellido"
              type="text"
            />

            <MyTextInpunt
              label="Email Adress"
              name="email"
              placeholder="Email Adres"
              type="email"
            />

            <MySelect label="jobType" name="jobType">
              <option value="">Seleccione</option>
              <option value="developer">Developer</option>
              <option value="desinger">desinger</option>
              <option value="it-senior">It-senior</option>
              <option value="it-jr">It-Jr.</option>
            </MySelect>
            <MyCheckBox label="Termns & Conditions" name="terms" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
