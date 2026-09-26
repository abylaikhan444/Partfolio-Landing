import "react";

export default function Header() {
  return (
    <div className="header">
      <p className="header__logo">Tursyngazin Abylaikhan</p>
      <ul className="header__list">
        <a href="#">
          <li className="header__list-text">Work</li>
        </a>
        <a href="#">
          <li className="header__list-text">About</li>
        </a>
        <a href="#">
          <li className="header__list-text">Contact</li>
        </a>
      </ul>
    </div>
  );
}
