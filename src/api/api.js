import React from "react";
import TokenPost from "./endpoints/TokenPost";
import UserPost from "./endpoints/UserPost";

const api = () => {
  return (
    <div>
      <h2>User post</h2>
      <UserPost />
      <h2>Token Post</h2>
      <TokenPost />
    </div>
  );
};

export default api;
