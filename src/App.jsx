import "./css/App.css";
import "./css/reset.css";
import Header from "./components/layout/Header";
import AboutSection from "./components/sections/AboutSection";
import FeaturedSection from "./components/sections/FeaturedSection";
import PersonalSection from "./components/sections/PersonalSection";
import FooterSection from "./components/sections/FooterSection";

function App() {
  return (
    <div className="main-app">
      <Header />
      <AboutSection />
      <FeaturedSection />
      <PersonalSection />
      <FooterSection />
    </div>
  );
}

export default App;
