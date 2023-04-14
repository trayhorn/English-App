import words from "../../words.json";
import Card from "../Card";
import './Set.css';

export default function Set() {
	return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Success</h1>
      <div className="wordsContainer" style={{ listStyle: 'none', padding: 0 }}>
        {words.success.map(({ id, english, ukrainian }) => {
          return (
            <Card
              key={id}
              english={english}
              ukrainian={ukrainian}
            />
          );
        })}
      </div>
    </div>
  );
}
