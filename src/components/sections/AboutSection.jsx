import Button from "../../components/ui/Button";
import githubIcon from "../../assets/icons/bxl-github.svg";
import telegaIcon from "../../assets/icons/bxl-telega.png";
import avatarImg from "../../assets/img/avatar.jpg";

export default function AboutSection() {
  return (
    <div className="about-section">
      <div className="about-section__info">
        <h1 className="about-section__info-name">HI, I AM</h1>
        <span className="about-section__info-name">TURSYNGAZIN ABYLAIKHAN</span>
        <p className="about-section__info-text">
          A frontend developer from Almaty, focused on creating modern, responsive and intuitive web experiences.
        </p>
        <div className="about-section__info__buttons">
          <Button></Button>
          <div className="about-section__info__icons">
            <div className="about-section__info__icons__github">
              <a href="https://github.com/abylaikhan444" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="github-icon" />
              </a>
            </div>
            <div className="about-section__info__icons__telega" target="_blank" rel="noopener noreferrer">
              <a href="https://t.me/abylai404">
                <img src={telegaIcon} alt="github-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section__avatar">
        <img src={avatarImg} alt="avatar-image" />
      </div>
    </div>
  );
}
