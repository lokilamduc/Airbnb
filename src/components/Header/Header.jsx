import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <Link to="/">
          <img
            style={{ width: "30%" }}
            src="img/Airbnb_Logo_Bélo.svg.png"
            alt=""
          />
        </Link>
      </div>
      <div className={styles.header__menu}>
        <a href="#">
          <h4>Khu Vực</h4>
        </a>
        <a href="#">
          <h4>Khách Sạn</h4>
        </a>
        <a href="#">
          <h4>Hoạt Động</h4>
        </a>
        <a href="#">
          <h4>Ưu Đãi</h4>
        </a>
      </div>
      <div className={styles.header__right}>
        <button className={styles.button1}>Đăng xuất</button>

        <button className={styles.button2}>Đăng Nhập </button>
      </div>
    </div>
  );
}

export default Header;
