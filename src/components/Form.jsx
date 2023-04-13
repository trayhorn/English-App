import { useState } from "react";
import TextField from "@mui/material/TextField";
import './Form.css';

export default function Form({ ukrainian }) {
  const [inputResult, setInputResult] = useState('');
  const [isWrong, setIsWrong] = useState(false);
	const [showCorrect, setShowCorrect] = useState(false);

  const handleChange = e => {
    setInputResult(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputResult.toLowerCase() === ukrainian) {
      setIsWrong(false);
      setShowCorrect(prev => !prev);
    } else {
      setIsWrong(true);
    }
    setInputResult('');
  };

  return (
    <>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          error={isWrong}
          className="error"
          id="outlined-basic"
          variant="outlined"
          size="small"
          value={inputResult}
          onChange={handleChange}
        />
        <p className={`correctText ${showCorrect ? 'isShown' : ' '}`}>
          Correct!
        </p>
      </form>
    </>
  );
}
