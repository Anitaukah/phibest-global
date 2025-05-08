/** @format **/
import "./App.css";
import Navheader from "./components/Navheader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MetricsSection from "./components/MetricsSection";
import About from "./components/About";
import Policy from "./components/Policy";
import Services from "./components/Services";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navheader />
      <Navbar />
      <Hero />
      <MetricsSection />
      <About />
      <Policy />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
