import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1> RegisterFormikPage</h1>
      <Formik
        initialValues={{
          // onChangue: "",
          // formData: "",
          email: "",
          name: "",
          password1: "",
          password2: "",
          // reset: "",
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(10, "Debe tener max 10 caracteres")
            .min(2, "Debe tener minimo  2 caracteres")
            .required("Campo requerido"),

          email: Yup.string()
            .email("El correo no tiene el formato valido")
            .required("Campo requerido"),

          password1: Yup.string()
            .min(8, "Password es muy corto - debe tener minimo 8 caracteres")
            .required("Campo requerido")
            .matches(/[a-zA-Z]/, "El password solo debe contener letras"),

          password2: Yup.string()
            //todo: el metodo oneOf uno de los valores que se encuentran en el arreglo
            .oneOf([Yup.ref("password1")], "Las contraseñas no Coinciden")
            .required("Campo requerido"),
        })}
      >
        {/*           
          tiene   que tener pendiente que los inputs  deben llevar la propiedad name y dentro los 
          del objecto que en este caso son name, emai. password */}

        {/* con el handleRest podemos darle reset al codigo es muy facil de esta manera y se lo pasamos en el onclick de boton */}
        {({ handleReset }) => (
          <Form noValidate>
            <label htmlFor="name">Nombre</label>
            <Field name="name" type="text" placeholder="Nombre" />
            <ErrorMessage name="name" component="span" />

            <label htmlFor="name">Email</label>
            <Field name="email" type="text" placeholder="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="password1">Password</label>
            <Field name="password1" type="password" placeholder="******" />
            <ErrorMessage name="password1" component="span" />

            <label htmlFor="password2">Confirmar password</label>
            <Field name="password2" type="password" placeholder="******" />
            <ErrorMessage name="password2" component="span" />

            <button type="submit"> Create </button>
            <button type="button" onClick={handleReset}>
              {" "}
              Restet{" "}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
