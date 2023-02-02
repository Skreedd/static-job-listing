import React from "react";
import close from "../assets/icon-remove.svg";

const Header = ({ keywords, deleteKeywords, clearAll }) => {
  return (
    <div className="header__container">
      <ul>
        {keywords.map((key, id) => {
          return (
            <li key={id}>
              {key}
              <button className="close" onClick={() => deleteKeywords(key)}>
                <img src={close} alt="" />
              </button>
            </li>
          );
        })}
        <a href="#" onClick={() => clearAll()}>
          Clear
        </a>
      </ul>
    </div>
  );
};

export default Header;
