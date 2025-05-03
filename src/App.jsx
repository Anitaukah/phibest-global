/** @format **/
import './App.css'
import Navheader from "./components/Navheader";
import Navbar from "./components/Navbar";
import Hello from "./components/Hero"
import MetricsSection from './components/MetricsSection';
import About from './components/About';
import Statement from './components/Statement';
function App() {
	return (
		<div>
			<Navheader />
			<Navbar />
			<Hello />
			<MetricsSection />
			<About />
			<Statement />
		</div>
	);
}

export default App;
