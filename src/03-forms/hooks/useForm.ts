import { useState } from "react";

export const useForm = <T>(initialData: T) => {
  const [formData, setFormData] = useState(initialData);

  const onChangue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((valorAnterior) => ({
      ...valorAnterior,
      [event.target.name]: event.target.value,
    }));
  };

  const reset = () => {
    setFormData({ ...initialData });
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return {
    ...formData,
    onChangue,
    formData,
    reset,
    isValidEmail,
  };
};
