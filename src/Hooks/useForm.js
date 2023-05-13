import React, { useState } from "react";

const types = {
  email: {
    regex: /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
    message: "Preencha um e-mail válido",
  },
  password: {
    regex: /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{3,}$/,
    message: 'A senha precisa 1 caracter maíusculo, 1 caracter minúsculo e 3 digitos',
  },
  number: {
    regex: /^\d+$/,
    message: 'Apenas números'
  }
};

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState();

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
      //types[type] eu estou tendo acesso diretamente ao type que veio via parâmetro e dentro dele eu pego o "type"
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }
  return {
    value,
    setValue,
    onChange,
    error,
    //Aqui no retorno eu estou passando novamente o "validate" já passando o value.
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
