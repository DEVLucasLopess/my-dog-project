import React, { useState } from "react";

const TokenPost = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json;
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="usename"
          value={username}
          onChange={({ target }) => setUserName(target.value)}
        />

        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Enviar</button>
      </div>
    </form>
  );
};

export default TokenPost;
