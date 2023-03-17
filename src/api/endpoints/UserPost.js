import React, { useState } from "react";

const UserPost = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://dogsapi.origamid.dev/json/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
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

        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <button>Enviar</button>
      </div>
    </form>
  );
};

export default UserPost;
