import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className="container">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Header;
