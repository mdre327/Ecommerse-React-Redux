import React from "react";
import { NavLink } from "react-router-dom";

const NavlinkItems = ({ items, cName, itemCName, labelCName }) => {
  return (
    <div className={cName}>
      {items.map((item) => (
        <NavLink to={item.link} key={item.id} className={itemCName}>
          <i className={item.iconClass}></i>
          <span className={labelCName}>{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default NavlinkItems;
