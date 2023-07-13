import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  //todo: esto es un comodin que puede añadir cualquier cantidad de parametros adiciolaes cosa
  [x: string]: any;
}
export const MySelect = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>

      <select {...field} {...props} />

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
