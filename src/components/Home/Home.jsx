import { NavLink } from "react-router-dom";
import "./Home.css";

export default function Home() {
	return (
		<div className="container">
			<h1 className="title" style={{ textAlign: "center" }}>
				Choose the topic
			</h1>
			<NavLink className="vocabularyLink" to={"/learn"}>
				<div className="card">Success</div>
			</NavLink>
		</div>
	);
}
