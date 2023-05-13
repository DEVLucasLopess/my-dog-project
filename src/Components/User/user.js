import React from "react";
import UserHeader from "./UserHeader";
import { Routes, Route } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserPhotoPost from "../User/UserPhotoPost";
import UserStats from "./UserStats";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed /> }/>
        <Route path="/conta/postar" element={<UserPhotoPost /> } />
        <Route path="/conta/estatisticas" element={<UserStats /> }/>
      </Routes>
    </section>
  );
};

export default User;
