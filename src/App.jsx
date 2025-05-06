/** @format **/
import "./App.css";
import Navheader from "./components/Navheader";
import Navbar from "./components/Navbar";
import Hello from "./components/Hero";
import MetricsSection from "./components/MetricsSection";
import About from "./components/About";
import Policy from "./components/Policy";
import Services from "./components/Services";
import Footer from "./components/footer";
function App() {
	return (
		<div>
			<Navheader />
			<Navbar />
			<Hello />
			<MetricsSection />
			<About />
			<Policy />
			<Services />
			<Footer />
		</div>
	);
}

export default App;
