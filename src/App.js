import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Set from "./components/Set/Set";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/learn" element={<Set />} />
			</Routes>
		</div>
	);
}

export default App;
