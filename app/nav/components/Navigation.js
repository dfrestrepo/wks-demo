import React, { useState } from "react";

const NavigationItem = ({ item, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    if (item.subnavigation) {
      setIsOpen(!isOpen);
    }
    onClick(e, item);
  };

  return (
    <li className={`cds-navigation__item ${isOpen ? "is-opened" : ""}`}>

{item.subnavigation && item.sobnavigationDirection === "top" && (
        <ul className="cds-subnavigation">
          {item.subnavigation.map((subItem, index) => (
            <li key={index} className="cds-subnavigation__item">
              <button className="cds-subnavigation__button">
                <span className="cds-subnavigation__button__text">
                  {subItem.text}
                </span>
                {subItem.badge && (
                  <span className={`cds-badge ${subItem.badgeClass}`}>
                    {subItem.badge}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
      <button className="cds-navigation__button" onClick={handleClick}>
        {item.avatarText && (
          <span className="cds-avatar cds-avatar--accent cds-avatar--small">
            {item.avatarText}
          </span>
        )}
        {item.icon && (
          <span
            className={`cds-navigation__button__icon ${item.icon} ${
              item.notification ? "has-badge" : ""
            }`}
          ></span>
        )}

        <span className="cds-navigation__button__text">{item.text}</span>
        {item.badge && (
          <span className={`cds-badge ${item.badgeClass}`}> {item.badge} </span>
        )}
        {item.subnavigation && (
          <span className="cds-navigation__button__chevron cds-ico-mini-arrow-down"></span>
        )}
      </button>

      
      {item.subnavigation && item.sobnavigationDirection === "bottom" && (
        <ul className="cds-subnavigation">
          {item.subnavigation.map((subItem, index) => (
            <li key={index} className="cds-subnavigation__item">
              <button className="cds-subnavigation__button">
                <span className="cds-subnavigation__button__text">
                  {subItem.text}
                </span>
                {subItem.badge && (
                  <span className={`cds-badge ${subItem.badgeClass}`}>
                    {subItem.badge}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Navigation = ({ items }) => {
  const handleClick = (e) => {
    const navItems = document.querySelectorAll(
      ".cds-navigation__item.is-opened"
    );
    navItems.forEach((item) => {
      if (!item.contains(e.target)) {
        item.classList.remove("is-opened");
      }
    });
  };

  return (
      <ul className="cds-navigation">
        {items.map((item, index) => (
          <NavigationItem key={index} item={item} onClick={handleClick} />
        ))}
      </ul>
  );
};

export default Navigation;
