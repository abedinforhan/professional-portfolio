import './App.css';
import MyCarousel from './Components/MyCarousel/MyCarousel';
import MyCarouselTitle from './Components/MyCarouselTitle/MyCarouselTitle';
import MyNavbar from './Components/Navbar/MyNavbar';
import AboutMe from './pages/AboutMe/AboutMe';
import ContactMe from './pages/Contact/ContactMe';
import Projects from './pages/Projects/Projects';
import Skilss from './pages/Skilss/Skilss';

function App() {
  return (
    <div className="app">
      <MyNavbar/>
      <MyCarousel/>
      <MyCarouselTitle/>
      <AboutMe/>
      <Skilss/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}

export default App;
