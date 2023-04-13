import { useState } from "react";
import Form from "./Form";

export default function Card({ english, ukrainian }) {
  const [flip, setFlip] = useState(false);
  
  return (
    <div
      onClick={() => setFlip(prev => !prev)}
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
