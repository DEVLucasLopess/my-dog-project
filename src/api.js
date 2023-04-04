export const API_URL = "https://dogsapi.origamid.dev/json";

export function TOKEN_POST(body) {
  
  // dentro do "body" você recebe o corpo da API pra envias o dados  (password: "dog", username: "dog")
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token) {
    console.log("MEU TOKEN:",token)
  return {
    url: API_URL + "/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}