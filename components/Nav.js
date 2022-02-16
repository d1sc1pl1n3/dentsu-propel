import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const Nav = () => {
  return (
    <div className={styles.navstyle}>
      <Image src="/Brandmark.svg" alt="Propel Logo" width="25" height="25" />
      <div>propel</div>
      <div className={styles.hamburger}></div>
    </div>
  );
};

export default Nav;
