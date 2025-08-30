import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Susp from "./components/SuspenModel";
// import Example from "./components/HorizontalScroll";
// import About2 from "./components/About2";
import Banner from "./components/slider/Banner";
import Branding from "./components/branding_slider/Branding";
import VideoSlider from "./components/web_slider/Web";
// import AppSlider from "./components/app_slider/App";



function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* <NavBar /> */}
      {/* <Hero /> */}
      <About />
      {/* <About2/> */}
      {/* <Example /> */}
      <Features />
      {/* <Banner/> */}

      {/* <Branding/> */}
      <VideoSlider/>
      {/* <AppSlider/> */}
      <Story />
      {/* <Susp /> */}

      <Contact />
      <Footer />
    </main>
  );
}

export default App;
