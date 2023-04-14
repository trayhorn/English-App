import { useState } from "react";
import Form from "./Form/Form";

export default function Card({ english, ukrainian }) {
  const [flip, setFlip] = useState(false);

  const handleFlip = e => {
    if (!e.target.className.includes('input')) {
      setFlip(prev => !prev);
    } else {
      return;
    }
  }

  return (
    <div
      onClick={(e) => handleFlip(e)}
      className={`wordCard ${flip ? 'flip' : ''}`}
    >
      <div className="front">
        <p style={{ textAlign: 'center' }}>{english}</p>
        <Form ukrainian={ukrainian} />
      </div>
      <div className="back">{ukrainian}</div>
    </div>
  );
}
