import "react";
import "../../css/card.css";
import arrowSvg from "../../assets/icons/bxl-arrow.svg";
import githubSvg from "../../assets/icons/bxl-github.svg";

export default function Card({ image, title, description, year, role, liveLink, gitLink }) {
  return (
    <div className="card">
      <div className="card__left-side">
        <img src={image} alt="Превью проекта" />
      </div>
      <div className="card__right-side">
        <div className="card__right-side__project-name">
          <h3 className="card__rigth-side__title">{title}</h3>
          <p className="card__rigth-side__paragraph">{description}</p>
        </div>
        <div className="card__right-side__project-info">
          <div className="card__right-side__project-info__name">
            <p className="card__right-side__project-info__name-text">PROJECT INFO</p>
          </div>
          <div className="card__right-side__project-info__year">
            <p className="card__right-side__project-info__year-string">Year</p>
            <p className="card__right-side__project-info__year-number">{year}</p>
          </div>
          <div className="card__right-side__project-info__role">
            <p className="card__right-side__project-info__role-text">Role</p>
            <p className="card__right-side__project-info__role-name">{role}</p>
          </div>
          <div className="card__right-side__project-info__links">
            <div className="card__right-side__project-info__links-demo">
              <a className="card__right-side__project-info__links-demo-text" href={liveLink} target="_blank">
                LIVE DEMO
              </a>
              <img className="card__right-side__project-info__links-demo-icon" src={arrowSvg} alt="arrow icon" />
            </div>
            <div className="card__right-side__project-info__links-git">
              <a className="card__right-side__project-info__links-git-text" href={gitLink} target="_blank">
                SEE ON GITHUB
              </a>
              <img src={githubSvg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
