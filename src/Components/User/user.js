import React from "react";
import UserHeader from "./UserHeader";
import { Routes, Route } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserPhotoPost from "../User/UserPhotoPost";
import UserStats from "./UserStats";
import { UserContext } from "../../UserContext";
import NotFound from "../NotFound";

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/conta/postar" element={<UserPhotoPost />} />
        <Route path="/conta/estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
