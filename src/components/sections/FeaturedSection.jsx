import "react";
import Card from "../layout/Card";
import workOne from "../../assets/img/work1.jpg";
import workTwo from "../../assets/img/work2.jpg";
import workThree from "../../assets/img/work3.jpg";

const projects = [
  {
    image: workOne,
    title: "Flight booking platform landing page",
    description:
      "A landing page for a flight-booking platform, covering the product's value proposition, airline integrations and API-focused developer section.",
    year: 2026,
    role: "Front-end Developer",
    liveLink: "https://dev-path-school.vercel.app/",
    gitLink: "https://github.com/abylaikhan444/DevPathSchool",
  },
  {
    image: workTwo,
    title: "Premium car dealership landing page",
    description:
      "A clean layout for a premium car dealership, focused on showcasing vehicles with a minimal, image-driven design and clear calls to action.",
    year: 2026,
    role: "Front-end Developer",
    liveLink: "https://premiumcars-layout-html.vercel.app/",
    gitLink: "https://github.com/abylaikhan444/PremiumCars-Layout",
  },
  {
    image: workThree,
    title: "Startup framework landing page",
    description:
      "A multi-section SaaS landing page with a features overview, pricing plans, team and testimonials, built as a pixel-accurate layout from a design template.",
    year: 2026,
    role: "Front-end Developer",
    liveLink: "https://startupweblayout.vercel.app/",
    gitLink: "https://github.com/abylaikhan444/StartupWeb-Layout",
  },
];

export default function FeaturedSection() {
  return (
    <div className="featured-section">
      <div className="featured-section__text">
        <h2 className="featured-section__text-h2">Featured Projects</h2>
        <p className="featured-section__text-p">
          Here are some of the selected projects that showcase my passion for front-end development.
        </p>
      </div>
      <div className="featured-section__card">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
