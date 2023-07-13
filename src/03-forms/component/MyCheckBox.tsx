import { ErrorMessage, useField } from "formik";

interface Props {
  label?: string;
  name: string;
  //todo: esto es un comodin que puede añadir cualquier cantidad de parametros adiciolaes cosa
  [x: string]: any;
}
export const MyCheckBox = ({ label, ...props }: Props) => {
  //todo: aqui desestructuramos las props, y le enviamos el parametro type
  const [field] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label htmlFor={props.id || props.name}>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>

      <ErrorMessage name={props.name} component="span" />

      {/* {
        //errores
        meta.touched && meta.error && (
          <span className="error">{meta.error}</span>
        )
      } */}
    </>
  );
};
