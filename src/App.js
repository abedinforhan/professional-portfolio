import './App.css';
import MyCarousel from './Components/MyCarousel/MyCarousel';
import MyCarouselTitle from './Components/MyCarouselTitle/MyCarouselTitle';
import MyNavbar from './Components/Navbar/MyNavbar';

function App() {
  return (
    <div className="app">
      <MyNavbar/>
      <MyCarousel/>
      <MyCarouselTitle/>
    </div>
  );
}

export default App;
