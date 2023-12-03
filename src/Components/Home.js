import Navbar from "./Navbar";
import Information from "./Information";
import SkillsSection from "./SkillsSection";
import WeatherSection from "./WeatherSection";
import ContactSection from "./ContactSection";
import Experience from "./Experience";
import Footer from "./Footer";

const Home = () => {
return (

    <div className="home">
      <Information /> 
      <SkillsSection/>
      <Experience/>
      <WeatherSection />
      <ContactSection/>

    </div>

  );
}
export default Home;