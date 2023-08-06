import { useState } from 'react';
import logoImage from "../../images/HeaderLogo.svg";
import "./PopupTooltip.css";

export const PopupTooltip = ({ isOpen, tooltipMessage, onClick }) => {

  function handleClick() {
    onClick();
  }

  return (
    <section
      className={`${isOpen ? "tooltip__overlay tooltip_opened" : "tooltip__overlay"}`}
      onClick={handleClick}
    >
      <div className="tooltip">
        <img
          src={`${logoImage}`}
          alt="Логотип сайта"
          className="tooltip__logo"
        />
        <h2 className={"tooltip__title"}>
          {tooltipMessage}
        </h2>
        <button
          className='tooltip__button'
          onClick={handleClick}
        >OK</button>

      </div>
    </section>
  );
}

export default PopupTooltip;
