import { useFormik } from "formik";

import * as Yup from "yup";

import "../styles/styles.css";

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    //todo: el initialValues recoje todos los valores que van el el formulario
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    //todo: con esta validationShema, podemos tambien ajustar los parametros de validacion pero con menos codigo
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(10, "Debe tener 15 caracteres o menos")
        .required("Campo Requerido"),
      lastName: Yup.string()
        .max(10, "Debe tener 15 caracteres o menos")
        .required("Campo Requerido"),

      email: Yup.string()
        .email("el correo no tiene el formato valido")
        .required("Campo Requerido"),
    }),
  });

  return (
    <div>
      <h1>Formik Yup </h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firsName">Firs Name</label>

        {/* el getFieldProps remplaza los valores como name, onChange, value, onBlur */}

        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">LastName Name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email Adress</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
