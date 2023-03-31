import React, { useState } from "react";

const types = {
    email: {
        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Preencha um e-mail válido'
    }
}; types['email']

const useForm = (type) => {
  const [value, setValue] = useState("");
  function onChange({target}) {
    setValue(target.value)
  }
  function validation(value) {
    if(type === false) return true
    if(value.length === 0) {
        setErro('Preencha um valor.')
        return false
    } else if(types[type] && [types].regex.test(value)) {
        setErro(types[type].message)
    }

  }
  return {
    value,
    setValue,
    onChange,
  };
};

export default useForm;
