import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TOKEN_POST, USER_GET } from "../../api";
import useForm from "../../Hooks/useForm";
import Input from "../Forms/Input";
import { UserContext } from "../../UserContext";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const context = React.useContext(UserContext); 

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if(token) {
      getUser(token);
    }
  }, [])

  async function getUser(token) {
    const {url, option} = USER_GET(token);
    const response = await fetch(url, option)
    const json = await response.json()
    console.log(json)
  }

  //Aqui eu estou pegando os dados da API
  const { url, options } = TOKEN_POST({
    username: username.value,
    password: password.value,
  });

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      //Aqui eu faço a requisição do tolken
      //Aqui eu estou passando a url: ("https://dogsapi.origamid.dev/json") que é o corpo da minha requisição
      //Aqui estou passando o options: ("method: POST, headers: 'Content-Type': 'application/json'" que são as opções pra is pra API)
      const response = await fetch(url, options)
      const json = await response.json();
      window.localStorage.setItem('token', json.token)
      getUser(json.token)
      console.log(json.token)
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <button>Entrar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
