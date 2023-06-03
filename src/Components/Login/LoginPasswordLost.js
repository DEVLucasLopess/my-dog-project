import React from "react";
import Input from "../Forms/Input";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import Error from "../Helper/Error";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();
  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: "http://localhost:3000/login/perdeu",
      });
      request(url, options);
    }
  }

  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{color: '#4c1'}}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <button>Enviando...</button>
          ) : (
            <button>Enviar Email</button>
          )}
        </form>
      )}
      <Error error={error} />
      <Link className={styles.perdeu} to="/login">
        Voltar para tela de login
      </Link>
    </section>
  );
};

export default LoginPasswordLost;
