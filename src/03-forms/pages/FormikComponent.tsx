import { Field, Form, Formik, ErrorMessage } from "formik";

import * as Yup from "yup";

import "../styles/styles.css";

export const FormikComponent = () => {
  return (
    <div>
      <h1>Formik Component </h1>

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
            <label htmlFor="firsName">Firs Name</label>

            {/* este componente field se maneja como un input */}

            <Field name="firstName" type="text" placeholder="Primer Nombre" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">LastName Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email Adress</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />
            {/* la propiedad component identifica si quieremos que sea un parrafo, un div o en este caso un span */}

            <label htmlFor="jobType"> Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Seleccione</option>
              <option value="developer">Developer</option>
              <option value="desinger">desinger</option>
              <option value="it-senior">It-senior</option>
              <option value="it-jr">It-Jr.</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field name="terms" type="checkbox" />
              Terminos y condiciones
            </label>

            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
