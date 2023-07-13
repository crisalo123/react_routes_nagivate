import "../styles/styles.css";

import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const {
    onChangue,
    formData,
    email,
    name,
    password1,
    password2,
    reset,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSbmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1> RegisterPage</h1>
      {/*           
          tiene   que tener pendiente que los inputs  deben llevar la propiedad name y dentro los 
          del objecto que en este caso son name, emai. password */}

      <form noValidate onSubmit={onSbmit}>
        <input
          type="text"
          value={name}
          name="name"
          onChange={onChangue}
          placeholder="Name"
          className={`${name.trim().length <= 0 && "has-error"} `}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="text"
          value={email}
          name="email"
          onChange={onChangue}
          placeholder="Email"
          className={`${!isValidEmail(email) && "has-error"} `}
        />
        {!isValidEmail(email) && <span>Este email no es valido</span>}
        <input
          type="password"
          value={password1}
          onChange={onChangue}
          name="password1"
          placeholder="Password"
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>debe tener minimo 6 digitos</span>
        )}
        <input
          type="password"
          value={password2}
          name="password2"
          onChange={onChangue}
          placeholder="Repeat Password"
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>Las contraseñas deben ser iguales</span>
        )}
        <button type="submit"> Create </button>
        <button type="button" onClick={reset}>
          {" "}
          Restet{" "}
        </button>
      </form>
    </div>
  );
};
