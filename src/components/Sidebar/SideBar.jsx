import React from "react";
import imageOne from "../../assets/logo.png";
import "./SideBar.css";
import MenuItem from "./MenuItem";

const SideBar = () => {
  return (
    <div className="borderStyle SideBar position-relative">
      <div className="p-4 ">
        <img src={imageOne} height=" 20px" alt="" className="me-3 " />

        <span className="fw-medium">NeeedCrypto</span>
      </div>
      <div className="p-4 ">
        <p className="mb-3 titleStyle">Menu</p>
        <MenuItem menuName="Dashboard" url="/" fontAws="fa-solid fa-house" />
        <MenuItem menuName="Swap" url="/Wallet" fontAws="fas fa-wallet" />

        <MenuItem
          menuName="Exchange"
          url="/Exchange"
          fontAws="fa-solid fa-arrow-right-arrow-left"
        />
      </div>
      <hr />
      <div className="p-4 text-decoration-none">
        <p className="mb-3 titleStyle">Other</p>
        <MenuItem menuName="Help" fontAws="fa-solid fa-circle-info" />
        <MenuItem menuName="Setting" fontAws="fa-solid fa-gear" />
      </div>
      <div className="p-4 position-absolute logOutStyle  text-danger">
        <MenuItem
          menuName="logout "
          fontAws="fa-solid fa-arrow-right-from-bracket text-danger"
          menuTextClass="text-danger"
        />
      </div>
    </div>
  );
};
export default SideBar;
