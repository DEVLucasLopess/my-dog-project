import React from "react";
import { Link } from "react-router-dom";

import useForm from "../../Hooks/useForm";
import Input from "../Forms/Input";
import { UserContext } from "../../UserContext";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const context = React.useContext(UserContext);

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <button disabled>carregando ...</button>
        ) : (
          <button>Entrar</button>
        )}
      </form>
      <Link to="/login/criar">Cadastro</Link>
      {error && <p>{error}</p>}
    </section>
  );
};

export default LoginForm;
