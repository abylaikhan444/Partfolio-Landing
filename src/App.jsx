import "./css/App.css";
import "./css/reset.css";
import Header from "./components/layout/Header";
import AboutSection from "./components/sections/AboutSection";
import FeaturedSection from "./components/sections/FeaturedSection";

function App() {
  return (
    <div className="main-app">
      <Header />
      <AboutSection />
      <FeaturedSection />
    </div>
  );
}

export default App;
