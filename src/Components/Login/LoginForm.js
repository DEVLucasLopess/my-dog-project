import React from "react";
import { Link } from "react-router-dom";

import useForm from "../../Hooks/useForm";
import Input from "../Forms/Input";
import { UserContext } from "../../UserContext";
import Error from "../../Components/Helper/Error";
import styles from "./LoginForm.module.css";
import Head from "../Helper/Head";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head tutle="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <button disabled>carregando ...</button>
        ) : (
          <button>Entrar</button>
        )}
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Recuperar senha
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>
          Ainda não possu conta? cadastre-se
          <Link className={styles.button} to="/login/criar">
            {" "}
            aqui!
          </Link>
        </p>
      </div>
      <Error error={error && 'Dados incorretos.'} />
    </section>
  );
};

export default LoginForm;