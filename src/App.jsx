/** @format **/
import './App.css'
import Navheader from "./components/Navheader";
import Navbar from "./components/Navbar";
import Hello from "./components/Hero"
import MetricsSection from './components/MetricsSection';
import About from './components/About';
function App() {
	return (
		<div>
			<Navheader />
			<Navbar />
			<Hello />
			<MetricsSection />
			<About />
		</div>
	);
}

export default App;
