import React, { useContext } from "react";
import Input from "../Forms/Input";
import useForm from "../../Hooks/useForm";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  const {userLogin} = useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options} = USER_POST({
      username: username.value, 
      email: email.value,
      password: password.value
    })
    const response = await fetch(url, options)

    if(response.ok) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastra-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <button style={{ color: "#666", marginBottom: "5px" }}>Cadastrar</button>
      </form>
      <Link className={styles.perdeu} to="/login">
        Voltar para tela de login
      </Link>
    </section>
  );
};

export default LoginCreate;
