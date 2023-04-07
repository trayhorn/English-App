import words from "../words.json";
import Form from "./Input";
import './Set.css';

export default function Set() {


	return (
		<div className="container">
			<h1>Success</h1>
			<ul className="wordsContainer" style={{listStyle: 'none', padding: 0}}>
        {words.success.map(({ id, english, ukrainian }) => {
          return (
						<li key={id}>
							<div className="wordCard">
								<p>{english}</p>
								<Form ukrainian={ukrainian} />
							</div>
						</li>
					);
        })}
			</ul>
		</div>
	);
}
