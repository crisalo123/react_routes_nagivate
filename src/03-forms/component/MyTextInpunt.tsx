import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password" | "number" | "checkbox";
  placeholder?: string;
  //todo: esto es un comodin que puede añadir cualquier cantidad de parametros adiciolaes cosa
  [x: string]: any;
}
export const MyTextInpunt = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>

      <input type="text" className="text-input" {...field} {...props} />

      <ErrorMessage name={props.name} component="span" />

      {/* {
        //errores que se puede trabajar de otra manera
        meta.touched && meta.error && (
          <span className="error">{meta.error}</span>
        )
      } */}
    </>
  );
};

export default MyTextInpunt;
