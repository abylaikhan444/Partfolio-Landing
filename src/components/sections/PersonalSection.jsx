import "react";
import Button from "../ui/Button";

export default function PersonalSection() {
  return (
    <div className="personal-section">
      <h3 className="personal-section__h3">ABOUT ME</h3>
      <div className="personal-section__text">
        <h4 className="personal-section__text-title">
          I am a front-end developer based in Almaty. Has an Information Systems background.
        </h4>
        <p className="personal-section__text-paragrah">
          I am a front-end developer based in Almaty looking for exciting opportunities. Has an Information Systems
          background. Likes to focus on clean, pixel-accurate layouts when developing. Passionate and curious about
          solving problems. Currently, I'm exploring Reactjs and modern deployment workflows. Learning more to improve
          skill. While I am not programming, I like going to the gym, and playing PC games. Learning more to improve
          skill.
        </p>
        <Button />
      </div>
    </div>
  );
}
